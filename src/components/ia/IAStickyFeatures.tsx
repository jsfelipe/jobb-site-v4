import { useRef } from 'react';
import { CurrencyDollar, FileText, UploadSimple } from '@phosphor-icons/react';
import { useScroll, useSpring } from 'motion/react';
import { IAConciliacaoWorkflow } from './IAConciliacaoWorkflow';
import { IAOrcamentoWorkflow } from './IAOrcamentoWorkflow';
import { IAImportacaoWorkflow } from './IAImportacaoWorkflow';

export function IAStickyFeatures() {
  // Observador de rolagem Card 1 (Conciliação Bancária)
  // Anima nos primeiros 100vh (0.333 da trilha de 300vh). O Card 2 só começa a subir APÓS isso!
  const section1Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: section1Ref,
    offset: ['start start', '0.333 start']
  });
  const smoothProgress1 = useSpring(scrollYProgress1, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001
  });

  // Observador de rolagem Card 2 (Criação de Orçamentos)
  // Anima nos primeiros 100vh em que fixa no topo. O Card 3 só começa a subir APÓS isso!
  const section2Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section2Ref,
    offset: ['start start', '0.333 start']
  });
  const smoothProgress2 = useSpring(scrollYProgress2, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001
  });

  // Observador de rolagem Card 3 (Importação de Orçamentos)
  // Anima nos primeiros 100vh em que fixa no topo. A seção seguinte só sobe APÓS isso!
  const section3Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: section3Ref,
    offset: ['start start', '0.333 start']
  });
  const smoothProgress3 = useSpring(scrollYProgress3, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full bg-[#181818]">
      {/* ─── CARD 1: Conciliação bancária com IA ─── */}
      <div ref={section1Ref} className="relative w-full h-[300vh] z-10">
        <section className="sticky top-0 h-screen w-full bg-[#1e1e1e] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Lado Esquerdo: Texto */}
            <div className="flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[15px]">
                <CurrencyDollar size={18} className="text-jobb-orange" /> Financeiro
              </span>

              <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight font-normal">
                Conciliação bancária <span className="text-jobb-text-secondary">com IA</span>
              </h2>

              <p className="text-jobb-text-secondary leading-relaxed text-[16px] max-w-xl mb-6">
                Informe a conta, o período ou importe o OFX e deixe a análise começar. O Jobb compara o extrato com os lançamentos, indica o que pode ser conciliado, o que parece taxa bancária e o que precisa de atenção. Itens com alta confiança já vêm destacados para você revisar o lote e confirmar.
              </p>

              <div className="text-white text-[17px] leading-snug border-l-2 border-jobb-orange pl-4 mt-2">
                <p>Menos conferência linha a linha.</p>
                <p><span className="text-jobb-orange font-semibold">Mais fechamento</span> no prazo.</p>
              </div>
            </div>

            {/* Lado Direito: Workflow Animado via Scroll */}
            <div className="w-full flex justify-center lg:justify-end">
              <IAConciliacaoWorkflow progress={smoothProgress1} />
            </div>
          </div>
        </section>
      </div>

      {/* ─── CARD 2: Crie orçamentos com IA (Só sobe e cobre o Card 1 APÓS a animação do Card 1 terminar) ─── */}
      <div ref={section2Ref} className="relative w-full h-[300vh] -mt-[100vh] z-20">
        <section className="sticky top-0 h-screen w-full bg-[#1b1b1b] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 shadow-[0_-50px_120px_40px_rgba(0,0,0,0.85)]">
          <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Lado Esquerdo: Workflow Animado via Scroll */}
            <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
              <IAOrcamentoWorkflow progress={smoothProgress2} />
            </div>

            {/* Lado Direito: Texto */}
            <div className="flex flex-col items-start order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[15px]">
                <FileText size={18} className="text-jobb-orange" /> Orçamentos
              </span>

              <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight font-normal">
                Crie orçamentos <span className="text-jobb-text-secondary">com IA</span>
              </h2>

              <p className="text-jobb-text-secondary leading-relaxed text-[16px] max-w-xl mb-6">
                Cole o briefing, o e-mail da agência ou peça uma cópia de um orçamento existente. A IA interpreta o pedido, identifica cliente, serviço e modelo, e monta grupos e itens a partir do catálogo da empresa. Você revisa o rascunho, ajusta o que for preciso e grava a proposta no fluxo que o time já conhece.
              </p>

              <div className="text-white text-[17px] leading-snug border-l-2 border-jobb-orange pl-4 mt-2">
                <p>Da conversa comercial</p>
                <p><span className="text-jobb-orange font-semibold">ao orçamento</span> estruturado.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ─── CARD 3: Importe orçamentos com ajuda da IA (Só sobe e cobre o Card 2 APÓS a animação do Card 2 terminar) ─── */}
      <div ref={section3Ref} className="relative w-full h-[300vh] -mt-[100vh] z-30">
        <section className="sticky top-0 h-screen w-full bg-[#181818] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 shadow-[0_-60px_140px_50px_rgba(0,0,0,0.9)]">
          <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Lado Esquerdo: Texto */}
            <div className="flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[15px]">
                <UploadSimple size={18} className="text-jobb-orange" /> Orçamentos
              </span>

              <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight font-normal">
                Importe orçamentos <span className="text-jobb-text-secondary">com ajuda da IA</span>
              </h2>

              <p className="text-jobb-text-secondary leading-relaxed text-[16px] max-w-xl mb-6">
                Trouxe a planilha de outro sistema ou de um modelo da agência? Na importação, a IA relaciona automaticamente grupo, subgrupo, item, valor, descrição e dados de cabeçalho — cliente, agência e serviço. Você valida o mapeamento e grava.
              </p>

              <div className="text-white text-[17px] leading-snug border-l-2 border-jobb-orange pl-4 mt-2">
                <p>A planilha deixa de ser um quebra-cabeça</p>
                <p>e vira orçamento <span className="text-jobb-orange font-semibold">pronto para revisão e envio</span>.</p>
              </div>
            </div>

            {/* Lado Direito: Workflow Animado via Scroll */}
            <div className="w-full flex justify-center lg:justify-end">
              <IAImportacaoWorkflow progress={smoothProgress3} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
