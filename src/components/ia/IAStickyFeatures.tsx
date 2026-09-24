import { motion } from 'motion/react';
import { CurrencyDollar, FileText, UploadSimple, CheckCircle, WarningCircle, Clock } from '@phosphor-icons/react';

export function IAStickyFeatures() {
  return (
    <div className="relative w-full bg-[#181818]">
      {/* CARD 1: Conciliação bancária com IA */}
      <section className="sticky top-0 min-h-screen w-full bg-[#1e1e1e] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Texto */}
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <CurrencyDollar size={16} weight="bold" />
              <span>Financeiro</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Conciliação bancária<br />
              com IA
            </h2>

            <p className="text-[#a3a3a3] text-base md:text-lg leading-relaxed max-w-xl">
              Informe a conta, o período ou importe o OFX e deixe a análise começar. O Jobb compara o extrato com os lançamentos, indica o que pode ser conciliado, o que parece taxa bancária e o que precisa de atenção. Itens com alta confiança já vêm destacados para você revisar o lote e confirmar.
            </p>

            <div className="pt-2 text-white font-semibold text-lg leading-snug">
              <p>Menos conferência linha a linha.</p>
              <p>Mais fechamento no prazo.</p>
            </div>
          </div>

          {/* Lado Direito: Mockup Interativo */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#242424] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl flex flex-col space-y-5">
              {/* Header do Mockup */}
              <div>
                <h3 className="text-lg font-bold text-white">Conciliação assistida</h3>
                <p className="text-xs text-[#888] mt-0.5">Conta principal • 01–31 ago</p>
              </div>

              {/* Banner informativo */}
              <div className="bg-[#331e17] border border-orange-900/40 rounded-xl px-4 py-2.5 text-xs text-[#fca5a5] flex items-center justify-between">
                <span>24 sugestões encontradas • 18 com alta confiança</span>
              </div>

              {/* Tabela de Lançamentos */}
              <div className="bg-[#1c1c1c] border border-white/5 rounded-2xl p-4 space-y-3.5 text-xs">
                <div className="flex justify-between text-[#777] uppercase text-[10px] font-bold tracking-wider border-b border-white/5 pb-2">
                  <span>LANÇAMENTO</span>
                  <span>STATUS</span>
                </div>

                {/* Item 1 */}
                <div className="flex justify-between items-center py-1">
                  <div>
                    <div className="text-white font-medium text-[13px]">Pix recebido — Projeto Atlas</div>
                    <div className="text-[#888] text-[11px]">R$ 8.400,00</div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 justify-end">
                      <CheckCircle size={13} weight="fill" /> Conciliar
                    </span>
                    <span className="text-[#777] text-[11px]">98%</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex justify-between items-center py-1">
                  <div>
                    <div className="text-white font-medium text-[13px]">Tarifa bancária</div>
                    <div className="text-[#888] text-[11px]">R$ 49,90</div>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-400 font-semibold flex items-center gap-1 justify-end">
                      <Clock size={13} weight="fill" /> Revisar
                    </span>
                    <span className="text-[#777] text-[11px]">76%</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex justify-between items-center py-1">
                  <div>
                    <div className="text-white font-medium text-[13px]">Pagamento fornecedor — Luz</div>
                    <div className="text-[#888] text-[11px]">R$ 2.180,00</div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 justify-end">
                      <CheckCircle size={13} weight="fill" /> Conciliar
                    </span>
                    <span className="text-[#777] text-[11px]">94%</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex justify-between items-center py-1">
                  <div>
                    <div className="text-white font-medium text-[13px]">Transferência sem referência</div>
                    <div className="text-[#888] text-[11px]">R$ 1.250,00</div>
                  </div>
                  <div className="text-right">
                    <span className="text-rose-400 font-semibold flex items-center gap-1 justify-end">
                      <WarningCircle size={13} weight="fill" /> Atenção
                    </span>
                    <span className="text-[#777] text-[11px]">41%</span>
                  </div>
                </div>
              </div>

              {/* Botão de Ação */}
              <button
                type="button"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff4d00] to-[#f93f06] text-white font-semibold text-sm hover:opacity-95 transition-opacity shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                Revisar lote e confirmar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CARD 2: Crie orçamentos com IA */}
      <section className="sticky top-0 min-h-screen w-full bg-[#1b1b1b] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 rounded-t-[36px] border-t border-white/10 shadow-[0_-25px_50px_rgba(0,0,0,0.6)]">
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Mockup Interativo */}
          <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-md bg-[#242424] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl flex flex-col space-y-4">
              {/* Header do Mockup */}
              <div>
                <h3 className="text-lg font-bold text-white">Novo orçamento com IA</h3>
                <p className="text-xs text-[#888] mt-0.5">Cole o pedido comercial ou selecione um modelo.</p>
              </div>

              {/* Input de Briefing simulado */}
              <div className="bg-[#1c1c1c] border border-white/5 rounded-xl p-3.5 text-xs text-[#ccc] space-y-1">
                <p className="font-medium text-white">Campanha digital para lançamento de produto Atlas.</p>
                <p className="text-[#888]">Cliente: Norte Filmes • Prazo: 30 dias</p>
              </div>

              {/* Rascunho Gerado */}
              <div className="bg-[#1c1c1c] border border-white/5 rounded-2xl p-4 space-y-3 text-xs">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#777] border-b border-white/5 pb-2">
                  RASCUNHO GERADO
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-medium">Pré-produção</div>
                      <div className="text-[#777] text-[11px]">Planejamento • roteiro • casting</div>
                    </div>
                    <span className="text-white font-semibold">R$ 6.800</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-medium">Produção</div>
                      <div className="text-[#777] text-[11px]">Equipe • equipamento • locação</div>
                    </div>
                    <span className="text-white font-semibold">R$ 18.500</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-medium">Pós-produção</div>
                      <div className="text-[#777] text-[11px]">Edição • motion • finalização</div>
                    </div>
                    <span className="text-white font-semibold">R$ 7.200</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-sm font-bold">
                  <span className="text-[#888] uppercase text-[11px]">TOTAL SUGERIDO</span>
                  <span className="text-orange-400">R$ 32.500</span>
                </div>
              </div>

              {/* Botão de Ação */}
              <button
                type="button"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff4d00] to-[#f93f06] text-white font-semibold text-sm hover:opacity-95 transition-opacity shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                Revisar rascunho
              </button>
            </div>
          </div>

          {/* Lado Direito: Texto */}
          <div className="flex flex-col items-start space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <FileText size={16} weight="bold" />
              <span>Orçamentos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Crie orçamentos<br />
              com IA
            </h2>

            <p className="text-[#a3a3a3] text-base md:text-lg leading-relaxed max-w-xl">
              Cole o briefing, o e-mail da agência ou peça uma cópia de um orçamento existente. A IA interpreta o pedido, identifica cliente, serviço e modelo, e monta grupos e itens a partir do catálogo da empresa. Você revisa o rascunho, ajusta o que for preciso e grava a proposta no fluxo que o time já conhece.
            </p>

            <div className="pt-2 text-white font-semibold text-lg leading-snug">
              <p>Da conversa comercial</p>
              <p>ao orçamento estruturado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CARD 3: Importe orçamentos com ajuda da IA */}
      <section className="sticky top-0 min-h-screen w-full bg-[#181818] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 rounded-t-[36px] border-t border-white/10 shadow-[0_-25px_50px_rgba(0,0,0,0.7)]">
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Texto */}
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <UploadSimple size={16} weight="bold" />
              <span>Orçamentos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Importe orçamentos<br />
              com ajuda da IA
            </h2>

            <p className="text-[#a3a3a3] text-base md:text-lg leading-relaxed max-w-xl">
              Trouxe a planilha de outro sistema ou de um modelo da agência? Na importação, a IA relaciona automaticamente grupo, subgrupo, item, valor, descrição e dados de cabeçalho — cliente, agência e serviço. Você valida o mapeamento e grava.
            </p>

            <div className="pt-2 text-white font-semibold text-lg leading-snug">
              <p>A planilha deixa de ser um quebra-cabeça</p>
              <p>e vira orçamento pronto para revisão e envio.</p>
            </div>
          </div>

          {/* Lado Direito: Mockup Interativo */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#242424] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl flex flex-col space-y-4">
              {/* Header do Mockup */}
              <div>
                <h3 className="text-lg font-bold text-white">Mapeamento da planilha</h3>
                <p className="text-xs text-[#888] mt-0.5">orcamento_agencia_v4.xlsx • 126 linhas</p>
              </div>

              {/* Banner informativo */}
              <div className="bg-[#331e17] border border-orange-900/40 rounded-xl px-4 py-2 text-xs text-[#fca5a5]">
                92% dos campos relacionados automaticamente
              </div>

              {/* Tabela de Mapeamento */}
              <div className="bg-[#1c1c1c] border border-white/5 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex justify-between text-[#777] uppercase text-[10px] font-bold tracking-wider border-b border-white/5 pb-2">
                  <span>COLUNA DA PLANILHA</span>
                  <span>CAMPO NO JOBB</span>
                </div>

                <div className="space-y-1.5 text-[12px]">
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#aaa]">Categoria</span>
                    <span className="text-white font-medium">Grupo</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#aaa]">Subcategoria</span>
                    <span className="text-white font-medium">Subgrupo</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#aaa]">Descrição</span>
                    <span className="text-white font-medium">Item</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#aaa]">Preço total</span>
                    <span className="text-white font-medium">Valor</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#aaa]">Observação</span>
                    <span className="text-white font-medium">Descrição</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#aaa]">Empresa</span>
                    <span className="text-white font-medium">Cliente</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#aaa]">Parceiro</span>
                    <span className="text-white font-medium">Agência</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#aaa]">Tipo de produção</span>
                    <span className="text-white font-medium">Serviço</span>
                  </div>
                </div>
              </div>

              {/* Botão de Ação */}
              <button
                type="button"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff4d00] to-[#f93f06] text-white font-semibold text-sm hover:opacity-95 transition-opacity shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                Validar mapeamento e gravar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
