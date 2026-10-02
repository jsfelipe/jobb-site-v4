import { useRef } from 'react';
import { Cpu } from 'lucide-react';
import { useScroll, useSpring } from 'motion/react';
import { IAMCPWorkflow } from './IAMCPWorkflow';

export function IAMCPIntegration() {
  const sectionMCPRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionMCPRef,
    offset: ['start start', '0.5 start']
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div ref={sectionMCPRef} className="relative w-full h-auto lg:h-[200vh] mt-0 lg:-mt-[100vh] z-40">
      <section className="relative lg:sticky top-0 min-h-screen lg:h-screen w-full bg-[#151515] flex items-center justify-center py-16 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-8 shadow-[0_-70px_160px_60px_rgba(0,0,0,0.95)]">
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo */}
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[15px]">
              <Cpu size={18} className="text-jobb-orange" /> Model Context Protocol
            </span>

            <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight font-normal">
              Conecte o Jobb <span className="text-jobb-text-secondary">à sua plataforma de IA</span>
            </h2>

            <p className="text-jobb-text-secondary leading-relaxed text-[16px] max-w-xl mb-6">
              Além das telas do sistema, o Jobb se conecta a assistentes de IA pelo Model Context Protocol (MCP). Em Cursor, Claude Desktop, VS Code e outros clientes compatíveis, você pede em linguagem natural: listar fornecedores, criar lançamento, consultar acompanhamento financeiro ou abrir projeto.
            </p>

            <div className="text-white text-[17px] leading-snug border-l-2 border-jobb-orange pl-4 mt-2">
              <p>A conexão usa a mesma API REST do Jobb,</p>
              <p><span className="text-jobb-orange font-semibold">com autenticação</span> da sua conta.</p>
            </div>
          </div>

          {/* Lado Direito: Workflow Interativo MCP (Animado com Scroll) */}
          <div className="w-full flex justify-center lg:justify-end">
            <IAMCPWorkflow progress={smoothProgress} />
          </div>
        </div>
      </section>
    </div>
  );
}
