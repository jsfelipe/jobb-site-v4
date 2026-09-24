import { motion } from 'motion/react';

interface StepCard {
  step: string;
  title: string;
  description: string;
}

const STEPS: StepCard[] = [
  {
    step: '01',
    title: 'SUGERE',
    description: 'Cruza dados, interpreta o contexto e prepara o próximo passo.',
  },
  {
    step: '02',
    title: 'VOCÊ REVISA',
    description: 'Itens importantes ficam visíveis para conferência e ajuste.',
  },
  {
    step: '03',
    title: 'O JOBB REGISTRA',
    description: 'Depois da confirmação, tudo segue no fluxo da operação.',
  },
];

export function IAControleHumano() {
  return (
    <section className="bg-[#1e1e1e] py-20 lg:py-24 border-b border-white/5">
      <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow / Tag Superior */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#f93f06] uppercase inline-block mb-3"
        >
          CONTROLE HUMANO EM CADA ETAPA
        </motion.span>

        {/* Título Principal */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
        >
          A IA acelera. Sua equipe decide.
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#a3a3a3] text-base sm:text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Sem substituir o controle da equipe, a IA sugere, organiza e aponta o caminho.
        </motion.p>

        {/* Grade de 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="bg-[#262626] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col justify-start"
            >
              <div className="text-sm font-bold tracking-wider text-[#e5e5e5] uppercase mb-5 flex items-center gap-2">
                <span className="text-[#a3a3a3]">{item.step}</span>
                <span>{item.title}</span>
              </div>
              <p className="text-[#9e9e9e] text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
