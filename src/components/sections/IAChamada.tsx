import { Link } from 'react-router-dom';
import { Sparkle } from '@/components/ui/phosphor-icons';
import { motion } from 'motion/react';

const AI_ICONS = [
  { src: '/images/icon/openIA.png', alt: 'OpenAI' },
  { src: '/images/icon/gemini.png', alt: 'Gemini' },
  { src: '/images/icon/claude.png', alt: 'Claude' },
  { src: '/images/icon/cursor.png', alt: 'Cursor' },
  { src: '/images/icon/mcp.png', alt: 'MCP' },
  { src: '/images/icon/api.png', alt: 'API' },
];

export function IAChamada() {
  return (
    <section className="py-20 md:py-28 bg-jobb-dark relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 text-jobb-orange text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkle size={14} weight="fill" />
            <span>Novidade no Jobb</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight tracking-tight mb-6">
            Acelere sua operação com a nova <br />
            <span className="text-jobb-orange">Inteligência Artificial.</span>
          </h2>

          <p className="text-base md:text-lg text-jobb-text-secondary max-w-3xl mx-auto leading-relaxed">
            Conheça o novo ambiente com IA nativa do Jobb: acelere a conciliação bancária, monte orçamentos e importe planilhas sem retrabalho, com sua equipe sempre no controle.
          </p>
        </motion.div>

        {/* 6 Ícones da Hero da página de IA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 my-8 md:my-10"
        >
          {AI_ICONS.map((icon) => (
            <div
              key={icon.alt}
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-transform hover:scale-105"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Banner com Chamada de Ação para a Página /ia */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="bg-[#171717] border border-white/5 rounded-2xl text-white p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-jobb-orange mb-2 font-semibold">
              Página de IA Disponível
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-3 leading-snug">
              Descubra em detalhes como funciona cada fluxo de IA
            </h3>
            <p className="text-jobb-text-secondary text-sm md:text-base leading-relaxed mb-6 lg:mb-0">
              Agora com a IA no Jobb ficou mais fácil de fazer conciliação bancária, elaborar orçamentos, conectar dados reais de fornecedores e importar planilhas, sem retrabalho e com sua equipe sempre no controle. Conecte com ChatGPT, Gemini e Claude.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto flex justify-center lg:justify-end">
            <Link
              to="/ia"
              className="btn px-8 py-3.5 bg-jobb-orange hover:bg-jobb-orange-hover text-white inline-flex items-center justify-center font-medium transition-colors w-full sm:w-auto text-center"
            >
              <span>Veja mais sobre</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
