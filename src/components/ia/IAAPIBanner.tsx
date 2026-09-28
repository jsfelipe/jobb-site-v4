import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { IAAPIWorkflow } from './IAAPIWorkflow';

export function IAAPIBanner() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#151515] relative overflow-hidden">
      <div className="container-custom max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] md:rounded-[40px] gradient p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-orange-950/40"
        >

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Lado Esquerdo: Conteúdo Principal */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-medium tracking-widest text-white/80 uppercase mb-4 inline-block">
                API JOBB
              </span>

              {/* Título Principal */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight leading-[1.15] mb-6">
                Integre, automatize e leve<br />o contexto do ERP para sua IA.
              </h2>

              {/* Textos explicativos */}
              <div className="space-y-3 text-white/95 text-[15px] sm:text-[16px] leading-relaxed max-w-xl mb-8">
                <p>
                  Consulte a documentação da API para conectar sua plataforma, criar automações e desenvolver novos fluxos com os dados e permissões da sua operação.
                </p>
                <p className="text-white/80 text-[14px] sm:text-[15px]">
                  Conecte com segurança. Automatize com contexto. Mantenha o controle.
                </p>
              </div>

              {/* Botão Acessar Documentação */}
              <a
                href="https://apiv2.sistemajobb.com.br/api/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-secondary hover:bg-secondary/80 text-white text-[15px] font-medium transition-all group"
              >
                <span>Acessar documentação da API</span>
                <ArrowRight size={16} className="text-white/60 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Lado Direito: Workflow em Nós Monocromático (Estilo Amperos) */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <IAAPIWorkflow />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
