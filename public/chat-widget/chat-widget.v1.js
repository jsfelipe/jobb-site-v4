(function (window, document) {
  'use strict';

  var CHAT_EVENT = 'chat_conv_event';
  var ABLY_CDN = 'https://cdn.ably.com/lib/ably.min-1.js';

  function normalizeBaseUrl(url) {
    var value = String(url || '').replace(/\/$/, '');
    if (!value) {
      return '';
    }
    if (!/\/api$/i.test(value)) {
      value += '/api';
    }
    return value;
  }

  function request(method, url, token, body, isFormData, attempt) {
    var headers = { Accept: 'application/json' };
    var tryCount = typeof attempt === 'number' ? attempt : 0;
    if (token) {
      headers.Authorization = 'Bearer ' + token;
    }
    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }
    return fetch(url, {
      method: method,
      headers: headers,
      body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
    })
      .then(function (res) {
        return res.text().then(function (text) {
          var data = {};
          try {
            data = text ? JSON.parse(text) : {};
          } catch (e) {
            data = {};
          }
          if (!res.ok) {
            var error = new Error((data && (data.error || data.message)) || 'HTTP ' + res.status);
            error.status = res.status;
            error.payload = data;
            throw error;
          }
          return data;
        });
      })
      .catch(function (err) {
        var isHttp = err && typeof err.status === 'number';
        if (!isHttp && tryCount < 2) {
          return new Promise(function (resolve) {
            setTimeout(resolve, 300 * (tryCount + 1));
          }).then(function () {
            return request(method, url, token, body, isFormData, tryCount + 1);
          });
        }
        throw err;
      });
  }

  function ensureStylesheet(href) {
    if (!href) {
      return;
    }
    var existing = document.querySelector('link[data-jobb-chat-widget]');
    if (existing) {
      return;
    }
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute('data-jobb-chat-widget', '1');
    document.head.appendChild(link);
  }

  function ensureAbly() {
    if (window.Ably && window.Ably.Realtime) {
      return Promise.resolve(window.Ably);
    }
    var existing = document.querySelector('script[data-jobb-chat-ably]');
    if (existing) {
      return new Promise(function (resolve, reject) {
        existing.addEventListener('load', function () {
          resolve(window.Ably);
        });
        existing.addEventListener('error', function () {
          reject(new Error('Falha ao carregar Ably.'));
        });
      });
    }
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = ABLY_CDN;
      script.async = true;
      script.setAttribute('data-jobb-chat-ably', '1');
      script.onload = function () {
        resolve(window.Ably);
      };
      script.onerror = function () {
        reject(new Error('Falha ao carregar Ably.'));
      };
      document.head.appendChild(script);
    });
  }

  function createWidgetDom() {
    var root = document.createElement('div');
    root.className = 'jobb-chat-widget';
    root.innerHTML =
      '<button type="button" class="jobb-chat-widget__fab" aria-label="Abrir chat">💬</button>' +
      '<div class="jobb-chat-widget__panel" style="display:none">' +
      '  <div class="jobb-chat-widget__hero">' +
      '    <div class="jobb-chat-widget__hero-wave"></div>' +
      '    <div class="jobb-chat-widget__avatars"></div>' +
      '    <div class="jobb-chat-widget__hero-title">Olá! Como podemos te ajudar hoje?</div>' +
      '    <button type="button" class="jobb-chat-widget__close" aria-label="Fechar">✕</button>' +
      '  </div>' +
      '  <div class="jobb-chat-widget__body">' +
      '    <div class="jobb-chat-widget__status"></div>' +
      '    <form class="jobb-chat-widget__perfil-form" style="display:none" novalidate>' +
      '      <p class="jobb-chat-widget__perfil-intro">Para começar o atendimento, preencha seus dados:</p>' +
      '      <label class="jobb-chat-widget__field">Nome<input type="text" name="nome" required autocomplete="name" maxlength="160" /></label>' +
      '      <label class="jobb-chat-widget__field">E-mail<input type="email" name="email" required autocomplete="email" maxlength="160" /></label>' +
      '      <label class="jobb-chat-widget__field">Telefone<input type="tel" name="celular" required autocomplete="tel" maxlength="20" placeholder="(00) 00000-0000" /></label>' +
      '      <button type="submit" class="jobb-chat-widget__perfil-submit">Iniciar conversa</button>' +
      '    </form>' +
      '    <div class="jobb-chat-widget__msgs"></div>' +
      '    <textarea class="jobb-chat-widget__textarea" rows="2" placeholder="Mensagem..."></textarea>' +
      '    <div class="jobb-chat-widget__actions">' +
      '      <a class="jobb-chat-widget__ticket-link" href="#" hidden>+ Criar ticket</a>' +
      '      <label class="jobb-chat-widget__file-label">Anexo<input type="file" class="jobb-chat-widget__file" accept="image/*,.pdf" /></label>' +
      '      <button type="button" class="jobb-chat-widget__send">Enviar</button>' +
      '    </div>' +
      '  </div>' +
      '</div>';
    return root;
  }

  function serializeMessage(msg) {
    var tipo = msg && msg.remetente_tipo ? String(msg.remetente_tipo) : '';
    var sender = tipo === 'atendente' || tipo === 'ia' || tipo === 'sistema' ? 'attendant' : 'client';
    return {
      id: Number(msg && msg.id ? msg.id : 0),
      tipo: tipo,
      sender: sender,
      senderName: String((msg && msg.nome_remetente) || ''),
      text: String((msg && msg.mensagem) || ''),
      attachments: Array.isArray(msg && msg.anexos) ? msg.anexos : [],
      hasAttachment: !!(msg && msg.tem_anexo),
      createdAt: msg && msg.created_at ? String(msg.created_at) : '',
    };
  }

  function mount(options) {
    if (!options || typeof options.tokenProvider !== 'function') {
      throw new Error('tokenProvider é obrigatório.');
    }
    var apiBase = normalizeBaseUrl(options.apiBase);
    if (!apiBase) {
      throw new Error('apiBase inválido.');
    }

    ensureStylesheet(options.cssUrl);

    var container = options.container;
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    if (!container) {
      container = document.body;
    }

    var root = createWidgetDom();
    container.appendChild(root);
    var hideFab = !!options.hideFab;
    var widgetMode = options.mode === 'site' ? 'site' : 'logged';
    var ticketsPortalUrl = options.ticketsPortalUrl ? String(options.ticketsPortalUrl) : '';
    if (hideFab) {
      root.classList.add('jobb-chat-widget--external-launcher');
    }

    var state = {
      expanded: false,
      loading: false,
      booted: false,
      bootPromise: null,
      pendingInitialMessage: null,
      token: null,
      conversaId: null,
      mensagens: [],
      atendentesLoaded: false,
      destroyed: false,
      ablyClient: null,
      ablyChannel: null,
      fila: null,
      iaAtiva: false,
      mode: widgetMode,
      uiPhase: 'ready',
      onboardingStep: null,
      onboardingDraft: { nome: '', email: '', celular: '' },
      perfilColetado: false,
      requiresPerfil: false,
      iaTyping: false,
      iaTypingTimer: null,
    };

    var fab = root.querySelector('.jobb-chat-widget__fab');
    var panel = root.querySelector('.jobb-chat-widget__panel');
    var closeBtn = root.querySelector('.jobb-chat-widget__close');
    var statusEl = root.querySelector('.jobb-chat-widget__status');
    var perfilFormEl = root.querySelector('.jobb-chat-widget__perfil-form');
    var msgsEl = root.querySelector('.jobb-chat-widget__msgs');
    var textareaEl = root.querySelector('.jobb-chat-widget__textarea');
    var sendBtn = root.querySelector('.jobb-chat-widget__send');
    var fileEl = root.querySelector('.jobb-chat-widget__file');
    var actionsEl = root.querySelector('.jobb-chat-widget__actions');
    var ticketLinkEl = root.querySelector('.jobb-chat-widget__ticket-link');
    var avatarsEl = root.querySelector('.jobb-chat-widget__avatars');
    var msgsClickHandler = null;
    var pasteHandler = null;
    var perfilSubmitHandler = null;

    function usesPerfilForm() {
      return state.mode === 'site';
    }

    function showStatus(text, isError) {
      statusEl.textContent = text || '';
      statusEl.className = 'jobb-chat-widget__status' + (isError ? ' is-error' : '');
    }

    function clearIaTypingTimer() {
      if (state.iaTypingTimer) {
        clearTimeout(state.iaTypingTimer);
        state.iaTypingTimer = null;
      }
    }

    function setIaTyping(on) {
      clearIaTypingTimer();
      state.iaTyping = !!on;
      if (state.iaTyping) {
        state.iaTypingTimer = setTimeout(function () {
          state.iaTyping = false;
          state.iaTypingTimer = null;
          renderMessages();
        }, 120000);
      }
      renderMessages();
    }

    function buildTypingBubbleHtml() {
      return (
        '<div class="jobb-chat-widget__msg is-attendant is-ia jobb-chat-widget__typing">' +
        '<div class="jobb-chat-widget__bubble">' +
        '<div class="jobb-chat-widget__sender-row">' +
        '<span class="jobb-chat-widget__sender">Jobbi</span>' +
        '</div>' +
        '<div class="jobb-chat-widget__typing-dots" aria-label="Digitando">' +
        '<span></span><span></span><span></span>' +
        '</div>' +
        '</div></div>'
      );
    }

    function sortedMessages() {
      return state.mensagens.slice().sort(function (a, b) {
        return a.id - b.id;
      });
    }

    function renderMessages() {
      var html = '';
      var items = sortedMessages();
      for (var i = 0; i < items.length; i += 1) {
        var m = items[i];
        var sideClass = m.sender === 'attendant' ? 'is-attendant' : 'is-client';
        if (m.tipo === 'ia') {
          sideClass += ' is-ia';
        } else if (m.tipo === 'sistema') {
          sideClass += ' is-sistema';
        }
        var dateLabel = formatDateTime(m.createdAt);
        html += '<div class="jobb-chat-widget__msg ' + sideClass + '">';
        html += '<div class="jobb-chat-widget__bubble">';
        html += '<div class="jobb-chat-widget__sender-row">';
        html += '<span class="jobb-chat-widget__sender">' + escapeHtml(m.senderName) + '</span>';
        if (dateLabel) {
          html += '<span class="jobb-chat-widget__sender-time">' + escapeHtml(dateLabel) + '</span>';
        }
        html += '</div>';
        html += '<div class="jobb-chat-widget__text">' + escapeHtml(m.text) + '</div>';
        if (m.hasAttachment && m.attachments.length) {
          for (var j = 0; j < m.attachments.length; j += 1) {
            var ax = m.attachments[j];
            html +=
              '<button type="button" class="jobb-chat-widget__attachment" data-attachment-id="' +
              String(ax.id) +
              '">' +
              escapeHtml(String(ax.nome_original || 'Anexo')) +
              '</button>';
          }
        }
        html += '</div></div>';
      }
      if (state.iaTyping) {
        html += buildTypingBubbleHtml();
      }
      msgsEl.innerHTML = html;
      renderUiPrompt();
      msgsEl.scrollTop = msgsEl.scrollHeight;
    }

    function renderUiPrompt() {
      var promptEl = msgsEl.querySelector('.jobb-chat-widget__ui-prompt');
      if (promptEl && promptEl.parentNode) {
        promptEl.parentNode.removeChild(promptEl);
      }
      if (state.uiPhase === 'ready' || usesPerfilForm()) {
        return;
      }
      var promptHtml = '<div class="jobb-chat-widget__msg is-attendant is-sistema jobb-chat-widget__ui-prompt">';
      promptHtml += '<div class="jobb-chat-widget__bubble">';
      if (state.uiPhase === 'onboarding') {
        if (state.onboardingStep === 'nome') {
          promptHtml += '<div class="jobb-chat-widget__text">Para começar, qual é o seu nome?</div>';
        } else if (state.onboardingStep === 'email') {
          promptHtml += '<div class="jobb-chat-widget__text">Qual é o seu e-mail?</div>';
        } else if (state.onboardingStep === 'celular') {
          promptHtml += '<div class="jobb-chat-widget__text">Qual é o seu celular?</div>';
        }
      }
      promptHtml += '</div></div>';
      msgsEl.insertAdjacentHTML('beforeend', promptHtml);
    }

    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
    }

    function isValidCelular(value) {
      var digits = String(value || '').replace(/\D/g, '');
      return digits.length >= 10;
    }

    function finishOnboardingPhase() {
      state.uiPhase = 'ready';
      state.onboardingStep = null;
      syncUiPhase();
      renderMessages();
    }

    function syncUiPhase() {
      if (state.requiresPerfil && !state.perfilColetado) {
        state.uiPhase = 'onboarding';
        if (!state.onboardingStep && !usesPerfilForm()) {
          state.onboardingStep = 'nome';
        }
      } else {
        state.uiPhase = 'ready';
        state.onboardingStep = null;
      }

      var showForm = state.uiPhase === 'onboarding' && usesPerfilForm();
      var showChat = state.uiPhase === 'ready';
      var showStepComposer = state.uiPhase === 'onboarding' && !usesPerfilForm();

      if (perfilFormEl) {
        perfilFormEl.style.display = showForm ? 'flex' : 'none';
      }
      if (msgsEl) {
        msgsEl.style.display = showForm ? 'none' : '';
      }
      if (textareaEl) {
        textareaEl.style.display = showChat || showStepComposer ? '' : 'none';
        if (showStepComposer) {
          if (state.onboardingStep === 'nome') {
            textareaEl.placeholder = 'Digite seu nome…';
          } else if (state.onboardingStep === 'email') {
            textareaEl.placeholder = 'Digite seu e-mail…';
          } else if (state.onboardingStep === 'celular') {
            textareaEl.placeholder = 'Digite seu celular…';
          }
        } else {
          textareaEl.placeholder = 'Mensagem...';
        }
      }
      if (actionsEl) {
        actionsEl.style.display = showChat || showStepComposer ? 'flex' : 'none';
      }
      if (ticketLinkEl) {
        if (ticketsPortalUrl && showChat) {
          ticketLinkEl.href = ticketsPortalUrl;
          ticketLinkEl.hidden = false;
        } else {
          ticketLinkEl.hidden = true;
        }
      }
    }

    function submitPerfilForm(event) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }
      if (!perfilFormEl || state.loading || state.uiPhase !== 'onboarding') {
        return;
      }
      var nomeInput = perfilFormEl.querySelector('input[name="nome"]');
      var emailInput = perfilFormEl.querySelector('input[name="email"]');
      var celularInput = perfilFormEl.querySelector('input[name="celular"]');
      var nome = nomeInput ? String(nomeInput.value || '').trim() : '';
      var email = emailInput ? String(emailInput.value || '').trim() : '';
      var celular = celularInput ? String(celularInput.value || '').trim() : '';

      if (!nome) {
        showStatus('Informe o nome.', true);
        return;
      }
      if (!isValidEmail(email)) {
        showStatus('E-mail inválido.', true);
        return;
      }
      if (!isValidCelular(celular)) {
        showStatus('Telefone inválido.', true);
        return;
      }

      state.loading = true;
      var submitBtn = perfilFormEl.querySelector('.jobb-chat-widget__perfil-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
      }
      showStatus('Salvando...', false);

      apiPost('/portal/chat/perfil', {
        nome: nome,
        email: email,
        celular: celular,
      })
        .then(function (res) {
          var conv = res && res.conversa ? res.conversa : null;
          if (conv) {
            state.perfilColetado = !!conv.perfil_coletado;
            state.requiresPerfil = !!conv.requires_perfil;
          } else {
            state.perfilColetado = true;
            state.requiresPerfil = false;
          }
          finishOnboardingPhase();
          showStatus('', false);
        })
        .catch(function (err) {
          showStatus((err && err.message) || 'Falha ao salvar dados.', true);
        })
        .finally(function () {
          state.loading = false;
          if (submitBtn) {
            submitBtn.disabled = false;
          }
        });
    }

    function formatDateTime(value) {
      if (!value) {
        return '';
      }
      var date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        return '';
      }
      return date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    function renderAttendants(atendentes) {
      if (!avatarsEl) {
        return;
      }
      var items = Array.isArray(atendentes) ? atendentes.slice(0, 3) : [];
      if (!items.length) {
        avatarsEl.innerHTML =
          '<span class="jobb-chat-widget__avatar is-placeholder"></span>' +
          '<span class="jobb-chat-widget__avatar is-placeholder"></span>' +
          '<span class="jobb-chat-widget__avatar is-placeholder"></span>';
        return;
      }
      var html = '';
      for (var i = 0; i < items.length; i += 1) {
        var at = items[i] || {};
        var nome = String(at.nome || 'Atendente');
        var avatarUrl = String(at.avatar_url || '');
        if (avatarUrl) {
          html +=
            '<img class="jobb-chat-widget__avatar" src="' +
            escapeHtml(avatarUrl) +
            '" alt="' +
            escapeHtml(nome) +
            '" title="' +
            escapeHtml(nome) +
            '" />';
        } else {
          html += '<span class="jobb-chat-widget__avatar is-placeholder" title="' + escapeHtml(nome) + '"></span>';
        }
      }
      while (items.length < 3) {
        html += '<span class="jobb-chat-widget__avatar is-placeholder"></span>';
        items.push({});
      }
      avatarsEl.innerHTML = html;
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function withAuthRetry(fn) {
      return fn().catch(function (err) {
        if (err && err.status === 401) {
          return Promise.resolve(options.tokenProvider(true)).then(function (nextToken) {
            state.token = nextToken;
            return fn();
          });
        }
        throw err;
      });
    }

    function apiGet(path, params) {
      var qs = '';
      if (params) {
        var pairs = [];
        Object.keys(params).forEach(function (k) {
          if (params[k] !== undefined && params[k] !== null) {
            pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(String(params[k])));
          }
        });
        if (pairs.length) {
          qs = '?' + pairs.join('&');
        }
      }
      return withAuthRetry(function () {
        return request('GET', apiBase + path + qs, state.token);
      });
    }

    function apiPost(path, body, isFormData) {
      return withAuthRetry(function () {
        return request('POST', apiBase + path, state.token, body, isFormData);
      });
    }

    function loadAttendants() {
      return apiGet('/portal/chat/atendentes')
        .then(function (res) {
          renderAttendants(res && res.data ? res.data : []);
        })
        .catch(function () {
          renderAttendants([]);
        });
    }

    function teardownRealtime() {
      if (state.ablyChannel) {
        try {
          state.ablyChannel.unsubscribe(CHAT_EVENT);
        } catch (e) {
          /* noop */
        }
        state.ablyChannel = null;
      }
      if (state.ablyClient) {
        try {
          state.ablyClient.close();
        } catch (e2) {
          /* noop */
        }
        state.ablyClient = null;
      }
    }

    function initRealtime() {
      return ensureAbly().then(function (AblyGlobal) {
        if (state.destroyed || !state.conversaId) {
          return;
        }
        teardownRealtime();
        state.ablyClient = new AblyGlobal.Realtime({
          authCallback: function (_params, callback) {
            apiGet('/portal/chat/ably-token')
              .then(function (data) {
                callback(null, data);
              })
              .catch(function (error) {
                callback(error.message || 'auth', null);
              });
          },
        });
        var channelName = 'chat:conv:' + String(state.conversaId);
        state.ablyChannel = state.ablyClient.channels.get(channelName);
        state.ablyChannel.subscribe(CHAT_EVENT, function (message) {
          if (!message || !message.data) {
            return;
          }
          var payload = message.data;
          if (typeof payload === 'string') {
            try {
              payload = JSON.parse(payload);
            } catch (e) {
              return;
            }
          }
          if (!payload || !payload.type) {
            return;
          }
          if (payload.type === 'chat_ia_state') {
            state.iaAtiva = !!payload.ia_ativa;
            if (!state.iaAtiva) {
              setIaTyping(false);
            }
            return;
          }
          if (payload.type !== 'chat_message' || !payload.mensagem) {
            return;
          }
          var msg = serializeMessage(payload.mensagem);
          var exists = state.mensagens.some(function (item) {
            return item.id === msg.id;
          });
          if (!exists) {
            state.mensagens.push(msg);
          }
          if (msg.tipo === 'ia' || msg.tipo === 'atendente') {
            setIaTyping(false);
            if (msg.tipo === 'ia') {
              state.iaAtiva = true;
            } else {
              state.iaAtiva = false;
            }
            if (!exists) {
              renderMessages();
            }
          } else if (msg.tipo === 'sistema') {
            setIaTyping(false);
            if (!exists) {
              renderMessages();
            }
          } else if (!exists) {
            renderMessages();
          }
        });
      });
    }

    function flushPendingInitialMessage() {
      var text = state.pendingInitialMessage;
      if (!text || !state.booted || state.uiPhase !== 'ready') {
        return Promise.resolve();
      }
      state.pendingInitialMessage = null;
      return sendMessage(text);
    }

    function boot() {
      if (state.booted) {
        return flushPendingInitialMessage();
      }
      if (state.bootPromise) {
        return state.bootPromise;
      }
      state.loading = true;
      showStatus('Conectando...', false);
      state.bootPromise = Promise.resolve(options.tokenProvider(false))
        .then(function (token) {
          state.token = token;
          // avatares não bloqueiam abertura do chat
          if (!state.atendentesLoaded) {
            loadAttendants().finally(function () {
              state.atendentesLoaded = true;
            });
          }
          return apiGet('/portal/chat/conversa');
        })
        .then(function (conv) {
          state.conversaId = conv.id;
          state.fila = conv && conv.fila ? String(conv.fila) : null;
          state.iaAtiva = !!(conv && conv.ia_ativa);
          state.perfilColetado = !!(conv && conv.perfil_coletado);
          state.requiresPerfil = !!(conv && conv.requires_perfil);
          syncUiPhase();
          return apiGet('/portal/chat/mensagens', { per_page: 50 });
        })
        .then(function (list) {
          var raw = list && list.data ? list.data : [];
          state.mensagens = raw.map(serializeMessage);
          renderMessages();
          showStatus('', false);
          state.booted = true;
          return apiPost('/portal/chat/ler', {});
        })
        .then(function () {
          return initRealtime();
        })
        .catch(function (err) {
          showStatus(err.message || 'Falha ao abrir o chat.', true);
        })
        .finally(function () {
          state.loading = false;
        })
        .then(function () {
          return flushPendingInitialMessage();
        });
      return state.bootPromise;
    }

    function updateFabVisibility() {
      if (hideFab) {
        fab.style.display = 'none';
        return;
      }
      fab.style.display = state.expanded ? 'none' : 'inline-flex';
    }

    function open(opts) {
      if (state.destroyed) {
        return;
      }
      var initialMessage =
        opts && opts.initialMessage ? String(opts.initialMessage).trim() : '';
      if (initialMessage) {
        state.pendingInitialMessage = initialMessage;
      }
      if (!state.expanded) {
        state.expanded = true;
        panel.style.display = 'flex';
        updateFabVisibility();
      }
      boot();
    }

    function close() {
      if (state.destroyed || !state.expanded) {
        return;
      }
      state.expanded = false;
      panel.style.display = 'none';
      updateFabVisibility();
    }

    function toggle() {
      if (state.expanded) {
        close();
      } else {
        open();
      }
    }

    updateFabVisibility();

    function sendMessage(forcedText) {
      var text = '';
      if (typeof forcedText === 'string') {
        text = forcedText.trim();
      } else if (forcedText == null) {
        text = String(textareaEl.value || '').trim();
      }
      if (!text || state.loading) {
        return Promise.resolve();
      }
      if (state.uiPhase === 'onboarding') {
        return handleOnboardingInput(text);
      }
      if (state.uiPhase !== 'ready') {
        return Promise.resolve();
      }
      state.loading = true;
      sendBtn.disabled = true;
      return apiPost('/portal/chat/mensagens', { mensagem: text })
        .then(function (res) {
          var payload = res && res.mensagem ? res : { mensagem: res };
          var item = serializeMessage(payload.mensagem);
          var exists = state.mensagens.some(function (m) {
            return m.id === item.id;
          });
          if (!exists) {
            state.mensagens.push(item);
          }
          state.fila = state.fila || (state.mode === 'site' ? 'comercial' : 'suporte');
          if (typeof payload.ia_ativa === 'boolean') {
            state.iaAtiva = payload.ia_ativa;
          }
          if (payload.ia_pending) {
            setIaTyping(true);
          } else {
            setIaTyping(false);
          }
          if (forcedText == null) {
            textareaEl.value = '';
          }
          renderMessages();
        })
        .catch(function (err) {
          setIaTyping(false);
          showStatus(err.message || 'Falha ao enviar mensagem.', true);
        })
        .finally(function () {
          state.loading = false;
          sendBtn.disabled = false;
        });
    }

    function handleOnboardingInput(text) {
      if (state.onboardingStep === 'nome') {
        state.onboardingDraft.nome = text;
        pushLocalClientMessage(text);
        state.onboardingStep = 'email';
        textareaEl.value = '';
        renderMessages();
        return Promise.resolve();
      }
      if (state.onboardingStep === 'email') {
        if (!isValidEmail(text)) {
          showStatus('E-mail inválido.', true);
          return Promise.resolve();
        }
        state.onboardingDraft.email = text;
        pushLocalClientMessage(text);
        state.onboardingStep = 'celular';
        textareaEl.value = '';
        renderMessages();
        return Promise.resolve();
      }
      if (state.onboardingStep === 'celular') {
        if (!isValidCelular(text)) {
          showStatus('Celular inválido.', true);
          return Promise.resolve();
        }
        state.onboardingDraft.celular = text;
        pushLocalClientMessage(text);
        textareaEl.value = '';
        state.loading = true;
        return apiPost('/portal/chat/perfil', {
          nome: state.onboardingDraft.nome,
          email: state.onboardingDraft.email,
          celular: text,
        })
          .then(function (res) {
            var conv = res && res.conversa ? res.conversa : null;
            if (conv) {
              state.perfilColetado = !!conv.perfil_coletado;
              state.requiresPerfil = !!conv.requires_perfil;
            } else {
              state.perfilColetado = true;
              state.requiresPerfil = false;
            }
            finishOnboardingPhase();
            showStatus('', false);
          })
          .catch(function (err) {
            showStatus((err && err.message) || 'Falha ao salvar dados.', true);
          })
          .finally(function () {
            state.loading = false;
          });
      }
      return Promise.resolve();
    }

    function pushLocalClientMessage(text) {
      state.mensagens.push({
        id: Date.now(),
        tipo: 'cliente',
        sender: 'client',
        senderName: 'Você',
        text: text,
        attachments: [],
        hasAttachment: false,
        createdAt: new Date().toISOString(),
        local: true,
      });
    }

    function sendFile(file) {
      if (!file || state.loading || state.uiPhase !== 'ready') {
        return;
      }
      state.loading = true;
      var fd = new FormData();
      fd.append('arquivo', file);
      apiPost('/portal/chat/anexos', fd, true)
        .then(function (res) {
          var item = serializeMessage(res.mensagem || {});
          var exists = state.mensagens.some(function (m) {
            return m.id === item.id;
          });
          if (!exists) {
            state.mensagens.push(item);
            renderMessages();
          }
        })
        .catch(function (err) {
          showStatus(err.message || 'Falha ao enviar anexo.', true);
        })
        .finally(function () {
          state.loading = false;
          fileEl.value = '';
        });
    }

    function handlePasteImage(event) {
      if (!event || !event.clipboardData || !event.clipboardData.items) {
        return;
      }
      var items = event.clipboardData.items;
      for (var i = 0; i < items.length; i += 1) {
        var item = items[i];
        if (item && item.type && item.type.indexOf('image/') === 0) {
          var imageFile = item.getAsFile();
          if (imageFile) {
            event.preventDefault();
            showStatus('Imagem colada. Enviando...', false);
            sendFile(imageFile);
          }
          return;
        }
      }
    }

    function downloadAttachment(anexoId) {
      if (!anexoId) {
        return;
      }
      apiGet('/portal/chat/anexos/' + String(anexoId) + '/download')
        .then(function (res) {
          if (res.url) {
            window.open(res.url, '_blank', 'noopener');
          }
        })
        .catch(function () {
          /* noop */
        });
    }

    function onMessagesClick(event) {
      var target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      if (target.classList.contains('jobb-chat-widget__attachment')) {
        downloadAttachment(target.getAttribute('data-attachment-id'));
      }
    }

    syncUiPhase();

    msgsClickHandler = onMessagesClick;
    var sendClickHandler = function () {
      sendMessage();
    };

    fab.addEventListener('click', toggle);
    closeBtn.addEventListener('click', toggle);
    sendBtn.addEventListener('click', sendClickHandler);
    pasteHandler = function (event) {
      handlePasteImage(event);
    };
    textareaEl.addEventListener('paste', pasteHandler);
    textareaEl.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    });
    fileEl.addEventListener('change', function () {
      var file = fileEl.files && fileEl.files[0];
      if (file) {
        sendFile(file);
      }
    });
    msgsEl.addEventListener('click', msgsClickHandler);
    perfilSubmitHandler = submitPerfilForm;
    if (perfilFormEl) {
      perfilFormEl.addEventListener('submit', perfilSubmitHandler);
    }

    return {
      open: open,
      close: close,
      destroy: function () {
        state.destroyed = true;
        clearIaTypingTimer();
        teardownRealtime();
        fab.removeEventListener('click', toggle);
        closeBtn.removeEventListener('click', toggle);
        sendBtn.removeEventListener('click', sendClickHandler);
        msgsEl.removeEventListener('click', msgsClickHandler);
        if (perfilFormEl && perfilSubmitHandler) {
          perfilFormEl.removeEventListener('submit', perfilSubmitHandler);
        }
        if (pasteHandler) {
          textareaEl.removeEventListener('paste', pasteHandler);
        }
        if (root.parentNode) {
          root.parentNode.removeChild(root);
        }
      },
    };
  }

  window.JobbChatWidget = window.JobbChatWidget || {};
  window.JobbChatWidget.mount = mount;
})(window, document);
