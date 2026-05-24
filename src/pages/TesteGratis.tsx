import { FormEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TesteGratisAlertDialog from '@/components/teste-gratis/TesteGratisAlertDialog';
import TesteGratisProvisioning from '@/components/teste-gratis/TesteGratisProvisioning';
import { Button } from '@/components/ui/button';
import {
  LOGIN_MAX_LENGTH,
  SUBDOMINIO_MAX_LENGTH,
  validateLogin,
  validateSubdominio,
} from '@/utils/testeGratisAccessValidation';
import { criarContaTeste, submitTesteGratis, verificarDominio } from '@/services/testeGratisApi';
import {
  INTERESSE_OPTIONS,
  TESTE_GRATIS_STORAGE_KEYS,
  UF_OPTIONS,
  type TesteGratisForm,
} from '@/types/testeGratis';

type Step = 1 | 2 | 'creating';

const initialState: TesteGratisForm = {
  nome: '',
  email: '',
  contato: '',
  telefone: '',
  qtd_funcionarios: '1a2',
  tipo_empresa: 'MEI',
  modulos_interesse: 'Vazio',
  qtde_usuarios: 1,
  codigo_promocao: '0',
  uf_nfe: 'AC',
};

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-jobb-orange focus:ring-1 focus:ring-jobb-orange';

const labelClass = 'mb-1 text-sm font-medium text-gray-700';

export default function TesteGratis() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<TesteGratisForm>(initialState);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [idCliente, setIdCliente] = useState<number | null>(null);
  const [leadEmail, setLeadEmail] = useState('');

  const [subdominio, setSubdominio] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
  const [dominioMessage, setDominioMessage] = useState('');
  const [dominioAvailable, setDominioAvailable] = useState<boolean | null>(null);
  const [checkingDominio, setCheckingDominio] = useState(false);
  const [provisioningMessage, setProvisioningMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const closeAlert = () => {
    setAlertOpen(false);
    setAlertMessage('');
  };

  const clearLeadSession = () => {
    sessionStorage.removeItem(TESTE_GRATIS_STORAGE_KEYS.idCliente);
    sessionStorage.removeItem(TESTE_GRATIS_STORAGE_KEYS.email);
    setIdCliente(null);
    setLeadEmail('');
  };

  useEffect(() => {
    const codigoPromo = searchParams.get('codigo_promo');
    if (codigoPromo) {
      setForm((prev) => ({ ...prev, codigo_promocao: codigoPromo }));
    }

    if (searchParams.get('continuar') === '1') {
      const storedId = sessionStorage.getItem(TESTE_GRATIS_STORAGE_KEYS.idCliente);
      const storedEmail = sessionStorage.getItem(TESTE_GRATIS_STORAGE_KEYS.email);
      const parsedId = storedId ? Number(storedId) : 0;
      if (parsedId > 0 && storedEmail) {
        setIdCliente(parsedId);
        setLeadEmail(storedEmail);
        setStep(2);
      }
      return;
    }

    clearLeadSession();
    setStep(1);
  }, [searchParams]);

  const goToStep1 = () => {
    clearLeadSession();
    setStep(1);
    setError('');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    const newSelected = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];

    setSelectedOptions(newSelected);
    setForm((prev) => ({
      ...prev,
      modulos_interesse: newSelected.join(',') || 'Vazio',
    }));
  };

  const handleStep1Submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await submitTesteGratis(form);

      const clienteId = response.id_cliente ?? response.data?.id_cliente;
      const email = (response.email ?? response.data?.email ?? form.email).trim();

      if (response.status && clienteId) {
        sessionStorage.setItem(TESTE_GRATIS_STORAGE_KEYS.idCliente, String(clienteId));
        sessionStorage.setItem(TESTE_GRATIS_STORAGE_KEYS.email, email);
        setIdCliente(clienteId);
        setLeadEmail(email);
        setStep(2);
        return;
      }

      setError('Ocorreu um erro ao enviar o cadastro. Tente novamente.');
    } catch {
      setError('Ocorreu um erro ao enviar o cadastro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubdominioChange = (raw: string) => {
    const value = raw.toLowerCase();

    if (value.length > SUBDOMINIO_MAX_LENGTH) {
      showAlert(`O domínio pode ter no máximo ${SUBDOMINIO_MAX_LENGTH} caracteres.`);
      return;
    }

    const validationError = validateSubdominio(value);
    if (validationError && value.trim() !== '') {
      showAlert(validationError);
      return;
    }

    setSubdominio(value);
    setDominioAvailable(null);
    setDominioMessage('');
  };

  const handleLoginChange = (raw: string) => {
    const value = raw.toLowerCase();

    if (value.length > LOGIN_MAX_LENGTH) {
      showAlert(`O login pode ter no máximo ${LOGIN_MAX_LENGTH} caracteres.`);
      return;
    }

    const validationError = validateLogin(value);
    if (validationError && value.trim() !== '') {
      showAlert(validationError);
      return;
    }

    setLogin(value);
  };

  const handleDominioBlur = async () => {
    const value = subdominio.trim().toLowerCase();
    setSubdominio(value);

    const validationError = validateSubdominio(value);
    if (validationError) {
      showAlert(validationError);
      setDominioAvailable(null);
      setDominioMessage('');
      return;
    }

    if (!value) {
      setDominioMessage('');
      setDominioAvailable(null);
      return;
    }

    setCheckingDominio(true);
    try {
      const result = await verificarDominio(value);
      setDominioAvailable(result.available ?? false);
      setDominioMessage(result.message ?? '');
    } catch {
      setDominioAvailable(false);
      setDominioMessage('Não foi possível verificar o domínio.');
    } finally {
      setCheckingDominio(false);
    }
  };

  const handleStep2Submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!idCliente || !leadEmail) {
      setError('Cadastro inicial não encontrado. Preencha o formulário novamente.');
      goToStep1();
      return;
    }

    const subdominioValue = subdominio.trim().toLowerCase();
    const loginValue = login.trim().toLowerCase();

    const subdominioError = validateSubdominio(subdominioValue);
    if (subdominioError) {
      showAlert(subdominioError);
      return;
    }

    const loginError = validateLogin(loginValue);
    if (loginError) {
      showAlert(loginError);
      return;
    }

    if (dominioAvailable === false) {
      setError('Escolha um domínio disponível.');
      return;
    }

    setStep('creating');
    setProvisioningMessage('Iniciando criação da sua conta...');

    try {
      const result = await criarContaTeste(
        {
          id_cliente: idCliente,
          email: leadEmail,
          subdominio: subdominioValue,
          login: loginValue,
          senha,
          senha_confirmacao: senhaConfirmacao,
        },
        (message) => setProvisioningMessage(message)
      );

      sessionStorage.removeItem(TESTE_GRATIS_STORAGE_KEYS.idCliente);
      sessionStorage.removeItem(TESTE_GRATIS_STORAGE_KEYS.email);

      if (!result.link || !result.subdominio) {
        throw new Error('Conta criada, mas o link de acesso não foi retornado.');
      }

      navigate('/teste-gratis/sucesso', {
        state: {
          link: result.link,
          subdominio: result.subdominio,
          login: result.login ?? login.trim(),
        },
      });
    } catch (err) {
      setStep(2);
      setProvisioningMessage('');
      setError(err instanceof Error ? err.message : 'Erro ao criar conta. Tente novamente.');
    }
  };

  const sidebarTitle =
    step === 1
      ? 'Vamos começar seu período de testes!'
      : step === 2
        ? 'Crie o acesso da sua conta teste'
        : 'Quase lá!';

  const sidebarSubtitle =
    step === 1 ? 'Aproveite!' : step === 2 ? 'Escolha domínio, login e senha' : 'Aguarde um instante';

  return (
    <>
      <TesteGratisAlertDialog open={alertOpen} message={alertMessage} onClose={closeAlert} />
      <Helmet>
        <title>Teste Grátis | Sistema Jobb</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F93F06] via-[#ED6D05] to-[#FF6A00] px-4 py-8">
        <section className="w-full max-w-4xl">
          <div
            id="box-teste"
            className="flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="flex flex-col justify-end bg-gradient-to-br from-[#171717] to-[#232323] p-8 text-right text-white md:w-2/5 md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none">
              <img
                src="/images/logo-jobb-light.svg"
                alt="Jobb"
                className="mb-6 ml-auto w-24"
              />
              <h2 className="text-2xl font-bold text-white">{sidebarTitle}</h2>
              <p className="mt-2 text-lg text-white/80">{sidebarSubtitle}</p>
              {step === 2 && (
                <p className="mt-4 text-sm text-white/60">
                  Passo 2 de 2 — dados de acesso
                </p>
              )}
            </div>

            <div className="bg-white p-6 md:w-3/5 md:rounded-r-2xl rounded-b-2xl md:rounded-bl-none">
              {step === 'creating' && (
                <TesteGratisProvisioning apiMessage={provisioningMessage} />
              )}

              {step === 1 && (
                <form onSubmit={handleStep1Submit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contato" className={labelClass}>
                        Nome pessoal
                      </label>
                      <input
                        id="contato"
                        name="contato"
                        required
                        type="text"
                        placeholder="Nome pessoal"
                        className={inputClass}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="nome" className={labelClass}>
                        Empresa
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        required
                        type="text"
                        placeholder="Nome da empresa"
                        className={inputClass}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        E-mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="E-mail"
                        className={inputClass}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className={labelClass}>
                        Telefone
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        required
                        type="text"
                        placeholder="Telefone"
                        className={inputClass}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="tipo_empresa" className={labelClass}>
                        Regime tributário
                      </label>
                      <select
                        id="tipo_empresa"
                        name="tipo_empresa"
                        className={inputClass}
                        onChange={handleInputChange}
                        defaultValue="MEI"
                      >
                        <option value="MEI">MEI</option>
                        <option value="SIMPLES">Simples</option>
                        <option value="LUCRO">Lucro real/Presumido</option>
                        <option value="NENHUMCNPJ">Sem CNPJ</option>
                        <option value="OUTRO">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="qtd_funcionarios" className={labelClass}>
                        Funcionários
                      </label>
                      <select
                        id="qtd_funcionarios"
                        name="qtd_funcionarios"
                        className={inputClass}
                        onChange={handleInputChange}
                        defaultValue="1a2"
                      >
                        <option value="1a2">1 a 2</option>
                        <option value="3a5">3 a 5</option>
                        <option value="6a10">6 a 10</option>
                        <option value="acima10">Acima de 10</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="uf_nfe" className={labelClass}>
                        Estado
                      </label>
                      <select
                        id="uf_nfe"
                        name="uf_nfe"
                        className={inputClass}
                        onChange={handleInputChange}
                        defaultValue="AC"
                      >
                        {UF_OPTIONS.map((uf) => (
                          <option key={uf.value} value={uf.value}>
                            {uf.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="codigo_promocao" className={labelClass}>
                      CÓDIGO PROMOCIONAL (opcional)
                    </label>
                    <input
                      id="codigo_promocao"
                      name="codigo_promocao"
                      type="text"
                      value={form.codigo_promocao}
                      className={inputClass}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900">
                      Qual o seu maior interesse em usar o Jobb?
                    </h6>
                    <p className="mb-3 text-sm text-gray-500">
                      (Marque mais de uma opção se quiser)
                    </p>
                    <div className="space-y-2">
                      {INTERESSE_OPTIONS.map((option) => (
                        <label
                          key={option.value}
                          className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                        >
                          <input
                            type="checkbox"
                            name="interest"
                            value={option.value}
                            checked={selectedOptions.includes(option.value)}
                            onChange={() => handleCheckboxChange(option.value)}
                            className="rounded border-gray-300 text-jobb-orange focus:ring-jobb-orange"
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <div className="flex items-center gap-4 pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="btn gradient px-8 py-3 text-base"
                    >
                      Continuar
                    </Button>
                    {loading && (
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-jobb-orange border-t-transparent" />
                    )}
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleStep2Submit} className="space-y-4">
                  <div>
                    <label htmlFor="subdominio" className={labelClass}>
                      Endereço (domínio)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        id="subdominio"
                        name="subdominio"
                        required
                        type="text"
                        placeholder="minhaempresa"
                        maxLength={SUBDOMINIO_MAX_LENGTH}
                        value={subdominio}
                        className={inputClass}
                        onChange={(e) => handleSubdominioChange(e.target.value)}
                        onBlur={handleDominioBlur}
                      />
                      <span className="shrink-0 text-sm font-semibold text-gray-600">
                        .sistemajobb.com.br
                      </span>
                    </div>
                    {checkingDominio && (
                      <p className="mt-1 text-xs text-gray-500">Verificando...</p>
                    )}
                    {dominioMessage && (
                      <p
                        className={`mt-1 text-xs ${dominioAvailable ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {dominioMessage}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Até {SUBDOMINIO_MAX_LENGTH} caracteres, sem espaços ou acentos.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="login" className={labelClass}>
                        Login
                      </label>
                      <input
                        id="login"
                        name="login"
                        required
                        type="text"
                        placeholder="admin"
                        maxLength={LOGIN_MAX_LENGTH}
                        autoComplete="username"
                        value={login}
                        className={inputClass}
                        onChange={(e) => handleLoginChange(e.target.value)}
                        onBlur={() => {
                          const validationError = validateLogin(login.trim());
                          if (validationError) {
                            showAlert(validationError);
                          }
                        }}
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Até {LOGIN_MAX_LENGTH} caracteres. Não use e-mail, espaços ou acentos.
                      </p>
                    </div>
                    <div>
                      <label htmlFor="senha" className={labelClass}>
                        Senha
                      </label>
                      <input
                        id="senha"
                        name="senha"
                        required
                        type="password"
                        minLength={6}
                        value={senha}
                        className={inputClass}
                        onChange={(e) => setSenha(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="senha_confirmacao" className={labelClass}>
                      Confirmar senha
                    </label>
                    <input
                      id="senha_confirmacao"
                      name="senha_confirmacao"
                      required
                      type="password"
                      minLength={6}
                      value={senhaConfirmacao}
                      className={inputClass}
                      onChange={(e) => setSenhaConfirmacao(e.target.value)}
                    />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="px-6 py-3"
                      onClick={goToStep1}
                    >
                      Voltar
                    </Button>
                    <Button type="submit" className="btn gradient px-8 py-3 text-base">
                      Criar minha conta teste
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
