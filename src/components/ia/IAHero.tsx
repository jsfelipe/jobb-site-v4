import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IAHero() {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col select-none">
      {/* Underlying layer for background video */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        />
      </div>

      {/* Hero Text Content */}
      <div className="relative z-20 flex-1 px-8 md:px-16 pt-10 md:pt-14 flex flex-col items-start max-w-3xl pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-start"
        >
          {/* Tag de destaque do Anexo 2 */}
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.16em] text-[#f93f06] uppercase mb-3">
            Inteligência Artificial no Jobb
          </span>

          {/* Headline do Anexo 2 */}
          <h1 className="font-display text-[32px] sm:text-[40px] md:text-[50px] font-medium tracking-tight text-[#0a1b33] leading-[1.12] mb-4">
            Jobb com IA:<br />
            mais agilidade no<br />
            financeiro e no comercial
          </h1>

          {/* Subheadline do Anexo 2 */}
          <p className="font-sans text-[13px] sm:text-[14px] md:text-[15px] text-[#64748b] leading-relaxed max-w-xl mb-4">
            A inteligência artificial entra no Jobb para acelerar o que mais consome tempo no dia a dia: conferir extrato, montar proposta e trazer planilha de orçamento para dentro do sistema.
          </p>

          {/* Badge informativo do Anexo 2 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#2b1f1d]/90 border border-orange-950/40 text-[#fca5a5] text-[11px] sm:text-[12px] md:text-[13px] shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-[#f93f06] shrink-0 animate-pulse" />
            <span>A IA sugere e organiza. Sua equipe revisa, confirma e mantém o controle.</span>
          </div>

          {/* Contact / CTA Button */}
          <Link to="/teste-gratis">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0a152d] hover:bg-[#112347] text-white font-medium text-[13px] md:text-[14px] px-7 py-3 rounded-full transition-colors shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Começar Teste Grátis</span>
              <ChevronRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
