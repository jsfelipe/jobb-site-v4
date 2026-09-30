import { motion } from 'motion/react';
import { CheckCircle } from '@phosphor-icons/react';

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
    <section className="section-padding bg-gradient-to-b from-jobb-dark to-jobb-bg-secondary/40">
      <div className="container-custom max-w-6xl mx-auto text-center">
        {/* Bullet / Badge no padrão exato do site */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[16px]">
            <CheckCircle size={20} className="text-jobb-orange" /> Controle humano em cada etapa
          </span>
        </motion.div>

        {/* Título Principal com destaque em negrito e secundário em tom suave */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl text-white mb-4"
        >
          A IA acelera. <span className="font-normal text-jobb-text-secondary">Sua equipe decide.</span>
        </motion.h2>

        {/* Subtítulo com destaque em laranja */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-jobb-text-secondary text-[16px] md:text-[18px] max-w-2xl mx-auto mb-16"
        >
          Sem substituir o controle da equipe, a IA sugere, organiza e{' '}
          <span className="text-jobb-orange">aponta o caminho</span>.
        </motion.h3>

        {/* Grade de 3 Passos no estilo de cards do site */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card p-8 rounded-3xl transition-colors duration-300 hover:bg-jobb-bg-secondary group cursor-default shadow-none"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-jobb-orange text-base font-medium">{item.step}</span>
                <h3 className="text-xl text-white tracking-tight">{item.title}</h3>
              </div>
              <p className="text-jobb-text-secondary leading-relaxed text-[16px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
