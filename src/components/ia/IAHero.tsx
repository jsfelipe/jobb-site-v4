import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IAHero() {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] min-h-[520px] flex flex-col justify-center select-none py-12">
      {/* Hero Text Content */}
      <div className="relative z-20 flex-1 flex flex-col items-start justify-center max-w-3xl pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-start"
        >
          {/* Tag de destaque no padrão do site */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-4 text-[13px] bg-black/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-jobb-orange" /> Inteligência Artificial no Jobb
          </span>

          {/* Headline */}
          <h1 className="font-display text-[32px] sm:text-[40px] md:text-[50px] font-medium tracking-tight text-white leading-[1.12] mb-4">
            <span className="text-jobb-orange">Jobb com IA:</span><br />
            mais agilidade no<br />
            financeiro e no comercial
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-[13px] sm:text-[14px] md:text-[15px] text-jobb-text-secondary leading-relaxed max-w-xl mb-4">
            A inteligência artificial entra no Jobb para acelerar o que mais consome tempo no dia a dia: conferir extrato, montar proposta e trazer planilha de orçamento para dentro do sistema.
          </p>

          {/* Contact / CTA Button no padrão do site */}
          <Link to="/teste-gratis">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="py-3 px-8 rounded-2xl gradient hover:gradient text-white font-semibold text-[14px] shadow-lg cursor-pointer flex items-center gap-2"
            >
              <span>Veja como funciona</span>
              <ChevronRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
