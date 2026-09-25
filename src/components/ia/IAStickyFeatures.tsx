import { CurrencyDollar, FileText, UploadSimple, CheckCircle, WarningCircle, Clock } from '@phosphor-icons/react';

export function IAStickyFeatures() {
  return (
    <div className="relative w-full bg-[#181818]">
      {/* CARD 1: Conciliação bancária com IA */}
      <section className="sticky top-0 min-h-screen w-full bg-[#1e1e1e] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Texto */}
          <div className="flex flex-col items-start">
            {/* Badge no padrão do site */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[15px]">
              <CurrencyDollar size={18} className="text-jobb-orange" /> Financeiro
            </span>

            {/* Título com contraste bold/normal */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Conciliação bancária <span className="font-normal text-jobb-text-secondary">com IA</span>
            </h2>

            {/* Descrição */}
            <p className="text-jobb-text-secondary leading-relaxed text-[16px] max-w-xl mb-6">
              Informe a conta, o período ou importe o OFX e deixe a análise começar. O Jobb compara o extrato com os lançamentos, indica o que pode ser conciliado, o que parece taxa bancária e o que precisa de atenção. Itens com alta confiança já vêm destacados para você revisar o lote e confirmar.
            </p>

            {/* Destaque / Fechamento */}
            <div className="text-white text-[17px] leading-snug border-l-2 border-jobb-orange pl-4 mt-2">
              <p>Menos conferência linha a linha.</p>
              <p><span className="text-jobb-orange font-semibold">Mais fechamento</span> no prazo.</p>
            </div>
          </div>

          {/* Lado Direito: Mockup */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-card border border-white/5 rounded-3xl p-7 shadow-none flex flex-col space-y-5">
              {/* Header do Mockup */}
              <div>
                <h3 className="text-xl font-bold text-white">Conciliação assistida</h3>
                <p className="text-xs text-jobb-text-secondary mt-0.5">Conta principal • 01–31 ago</p>
              </div>

              {/* Banner informativo */}
              <div className="bg-[#3a2018] border border-orange-900/40 rounded-2xl px-4 py-2.5 text-xs text-[#fca5a5]">
                24 sugestões encontradas • 18 com alta confiança
              </div>

              {/* Tabela de Lançamentos */}
              <div className="bg-jobb-bg-secondary border border-white/5 rounded-2xl p-4 space-y-3.5 text-xs">
                <div className="flex justify-between text-jobb-text-secondary uppercase text-[10px] font-bold tracking-wider border-b border-white/5 pb-2">
                  <span>LANÇAMENTO</span>
                  <span>STATUS</span>
                </div>

                {/* Item 1 */}
                <div className="flex justify-between items-center py-1">
                  <div>
                    <div className="text-white font-medium text-[13px]">Pix recebido — Projeto Atlas</div>
                    <div className="text-jobb-text-secondary text-[11px]">R$ 8.400,00</div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 justify-end">
                      <CheckCircle size={13} weight="fill" /> Conciliar
                    </span>
                    <span className="text-jobb-text-secondary text-[11px]">98%</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex justify-between items-center py-1">
                  <div>
                    <div className="text-white font-medium text-[13px]">Tarifa bancária</div>
                    <div className="text-jobb-text-secondary text-[11px]">R$ 49,90</div>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-400 font-semibold flex items-center gap-1 justify-end">
                      <Clock size={13} weight="fill" /> Revisar
                    </span>
                    <span className="text-jobb-text-secondary text-[11px]">76%</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex justify-between items-center py-1">
                  <div>
                    <div className="text-white font-medium text-[13px]">Pagamento fornecedor — Luz</div>
                    <div className="text-jobb-text-secondary text-[11px]">R$ 2.180,00</div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 justify-end">
                      <CheckCircle size={13} weight="fill" /> Conciliar
                    </span>
                    <span className="text-jobb-text-secondary text-[11px]">94%</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex justify-between items-center py-1">
                  <div>
                    <div className="text-white font-medium text-[13px]">Transferência sem referência</div>
                    <div className="text-jobb-text-secondary text-[11px]">R$ 1.250,00</div>
                  </div>
                  <div className="text-right">
                    <span className="text-rose-400 font-semibold flex items-center gap-1 justify-end">
                      <WarningCircle size={13} weight="fill" /> Atenção
                    </span>
                    <span className="text-jobb-text-secondary text-[11px]">41%</span>
                  </div>
                </div>
              </div>

              {/* Botão no padrão do site */}
              <button
                type="button"
                className="w-full py-3.5 rounded-2xl gradient hover:gradient text-white font-semibold text-sm cursor-pointer"
              >
                Revisar lote e confirmar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CARD 2: Crie orçamentos com IA */}
      <section className="sticky top-0 min-h-screen w-full bg-[#1b1b1b] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 shadow-[0_-50px_120px_40px_rgba(0,0,0,0.85)]">
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Mockup */}
          <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-md bg-card border border-white/5 rounded-3xl p-7 shadow-none flex flex-col space-y-4">
              {/* Header do Mockup */}
              <div>
                <h3 className="text-xl font-bold text-white">Novo orçamento com IA</h3>
                <p className="text-xs text-jobb-text-secondary mt-0.5">Cole o pedido comercial ou selecione um modelo.</p>
              </div>

              {/* Input de Briefing simulado */}
              <div className="bg-jobb-bg-secondary border border-white/5 rounded-2xl p-4 text-xs text-[#ccc] space-y-1">
                <p className="font-medium text-white">Campanha digital para lançamento de produto Atlas.</p>
                <p className="text-jobb-text-secondary">Cliente: Norte Filmes • Prazo: 30 dias</p>
              </div>

              {/* Rascunho Gerado */}
              <div className="bg-jobb-bg-secondary border border-white/5 rounded-2xl p-4 space-y-3 text-xs">
                <div className="text-[10px] uppercase font-bold tracking-wider text-jobb-text-secondary border-b border-white/5 pb-2">
                  RASCUNHO GERADO
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-medium">Pré-produção</div>
                      <div className="text-jobb-text-secondary text-[11px]">Planejamento • roteiro • casting</div>
                    </div>
                    <span className="text-white font-semibold">R$ 6.800</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-medium">Produção</div>
                      <div className="text-jobb-text-secondary text-[11px]">Equipe • equipamento • locação</div>
                    </div>
                    <span className="text-white font-semibold">R$ 18.500</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-medium">Pós-produção</div>
                      <div className="text-jobb-text-secondary text-[11px]">Edição • motion • finalização</div>
                    </div>
                    <span className="text-white font-semibold">R$ 7.200</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-sm font-bold">
                  <span className="text-jobb-text-secondary uppercase text-[11px]">TOTAL SUGERIDO</span>
                  <span className="text-jobb-orange">R$ 32.500</span>
                </div>
              </div>

              {/* Botão no padrão do site */}
              <button
                type="button"
                className="w-full py-3.5 rounded-2xl gradient hover:gradient text-white font-semibold text-sm cursor-pointer"
              >
                Revisar rascunho
              </button>
            </div>
          </div>

          {/* Lado Direito: Texto */}
          <div className="flex flex-col items-start order-1 lg:order-2">
            {/* Badge no padrão do site */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[15px]">
              <FileText size={18} className="text-jobb-orange" /> Orçamentos
            </span>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Crie orçamentos <span className="font-normal text-jobb-text-secondary">com IA</span>
            </h2>

            {/* Descrição */}
            <p className="text-jobb-text-secondary leading-relaxed text-[16px] max-w-xl mb-6">
              Cole o briefing, o e-mail da agência ou peça uma cópia de um orçamento existente. A IA interpreta o pedido, identifica cliente, serviço e modelo, e monta grupos e itens a partir do catálogo da empresa. Você revisa o rascunho, ajusta o que for preciso e grava a proposta no fluxo que o time já conhece.
            </p>

            {/* Destaque / Fechamento */}
            <div className="text-white text-[17px] leading-snug border-l-2 border-jobb-orange pl-4 mt-2">
              <p>Da conversa comercial</p>
              <p><span className="text-jobb-orange font-semibold">ao orçamento</span> estruturado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CARD 3: Importe orçamentos com ajuda da IA */}
      <section className="sticky top-0 min-h-screen w-full bg-[#181818] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 shadow-[0_-60px_140px_50px_rgba(0,0,0,0.9)]">
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Texto */}
          <div className="flex flex-col items-start">
            {/* Badge no padrão do site */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[15px]">
              <UploadSimple size={18} className="text-jobb-orange" /> Orçamentos
            </span>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Importe orçamentos <span className="font-normal text-jobb-text-secondary">com ajuda da IA</span>
            </h2>

            {/* Descrição */}
            <p className="text-jobb-text-secondary leading-relaxed text-[16px] max-w-xl mb-6">
              Trouxe a planilha de outro sistema ou de um modelo da agência? Na importação, a IA relaciona automaticamente grupo, subgrupo, item, valor, descrição e dados de cabeçalho — cliente, agência e serviço. Você valida o mapeamento e grava.
            </p>

            {/* Destaque / Fechamento */}
            <div className="text-white text-[17px] leading-snug border-l-2 border-jobb-orange pl-4 mt-2">
              <p>A planilha deixa de ser um quebra-cabeça</p>
              <p>e vira orçamento <span className="text-jobb-orange font-semibold">pronto para revisão e envio</span>.</p>
            </div>
          </div>

          {/* Lado Direito: Mockup */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-card border border-white/5 rounded-3xl p-7 shadow-none flex flex-col space-y-4">
              {/* Header do Mockup */}
              <div>
                <h3 className="text-xl font-bold text-white">Mapeamento da planilha</h3>
                <p className="text-xs text-jobb-text-secondary mt-0.5">orcamento_agencia_v4.xlsx • 126 linhas</p>
              </div>

              {/* Banner informativo */}
              <div className="bg-[#3a2018] border border-orange-900/40 rounded-2xl px-4 py-2.5 text-xs text-[#fca5a5]">
                92% dos campos relacionados automaticamente
              </div>

              {/* Tabela de Mapeamento */}
              <div className="bg-jobb-bg-secondary border border-white/5 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex justify-between text-jobb-text-secondary uppercase text-[10px] font-bold tracking-wider border-b border-white/5 pb-2">
                  <span>COLUNA DA PLANILHA</span>
                  <span>CAMPO NO JOBB</span>
                </div>

                <div className="space-y-1.5 text-[12px]">
                  <div className="flex justify-between py-0.5">
                    <span className="text-jobb-text-secondary">Categoria</span>
                    <span className="text-white font-medium">Grupo</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-jobb-text-secondary">Subcategoria</span>
                    <span className="text-white font-medium">Subgrupo</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-jobb-text-secondary">Descrição</span>
                    <span className="text-white font-medium">Item</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-jobb-text-secondary">Preço total</span>
                    <span className="text-white font-medium">Valor</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-jobb-text-secondary">Observação</span>
                    <span className="text-white font-medium">Descrição</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-jobb-text-secondary">Empresa</span>
                    <span className="text-white font-medium">Cliente</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-jobb-text-secondary">Parceiro</span>
                    <span className="text-white font-medium">Agência</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="text-jobb-text-secondary">Tipo de produção</span>
                    <span className="text-white font-medium">Serviço</span>
                  </div>
                </div>
              </div>

              {/* Botão no padrão do site */}
              <button
                type="button"
                className="w-full py-3.5 rounded-2xl gradient hover:gradient text-white font-semibold text-sm cursor-pointer"
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
