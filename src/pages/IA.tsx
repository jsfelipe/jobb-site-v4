import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkle,
  Brain,
  Robot,
  Lightning,
  ChartLineUp,
  ClockAfternoon,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from '@phosphor-icons/react';

export default function IAPage() {
  const features = [
    {
      icon: <Brain size={32} className="text-jobb-orange" weight="duotone" />,
      title: 'Orçamentos Preditivos Inteligentes',
      description:
        'Crie propostas comerciais com muito mais agilidade. A IA analisa seu histórico de produções, sugere valores de diárias, margens ideais e aponta riscos de estouro de verba antes da aprovação.',
      tag: 'Orçamentos',
    },
    {
      icon: <CalendarCheck size={32} className="text-jobb-orange" weight="duotone" />,
      title: 'Alocação Eficiente de Equipe & Equipamentos',
      description:
        'Elimine conflitos de agenda entre gravações, estúdios e câmeras. O assistente prevê gargalos de cronograma e sugere os melhores profissionais e kits disponíveis para cada diária.',
      tag: 'Operação',
    },
    {
      icon: <ChartLineUp size={32} className="text-jobb-orange" weight="duotone" />,
      title: 'Previsibilidade Financeira e DRE Automática',
      description:
        'Acompanhe custos em tempo real com alertas preventivos de rentabilidade. A inteligência do Jobb identifica variações orçamentárias e projeta o fluxo de caixa com precisão.',
      tag: 'Financeiro',
    },
    {
      icon: <Robot size={32} className="text-jobb-orange" weight="duotone" />,
      title: 'Jobb Copilot para Produtoras',
      description:
        'Consulte dados da sua produtora com facilidade: pergunte sobre faturas a vencer, status de projetos, entregas de pós-produção ou horas trabalhadas sem precisar navegar por dezenas de telas.',
      tag: 'Assistente',
    },
    {
      icon: <ShieldCheck size={32} className="text-jobb-orange" weight="duotone" />,
      title: 'Auditoria & Prestação de Contas (ANCINE)',
      description:
        'Validação inteligente de notas fiscais, faturas e relatórios para editais e prestação de contas, garantindo conformidade com normas regulatórias do setor audiovisual.',
      tag: 'Conformidade',
    },
    {
      icon: <Lightning size={32} className="text-jobb-orange" weight="duotone" />,
      title: 'Automação de Relatórios Executivos',
      description:
        'Transforme dados complexos de produção em resumos executivos claros para clientes, diretores e produtores executivos com apenas um clique.',
      tag: 'Produtividade',
    },
  ];

  const highlights = [
    {
      number: '70%',
      label: 'Menos tempo na montagem de orçamentos complexos',
    },
    {
      number: '+35%',
      label: 'Mais precisão na previsão de fluxo de caixa',
    },
    {
      number: '100%',
      label: 'Visibilidade em tempo real do custo de cada projeto',
    },
    {
      number: '0',
      label: 'Conflitos não detectados em agendas de gravação',
    },
  ];

  return (
    <div className="min-h-screen bg-jobb-dark text-jobb-text font-sans flex flex-col bg-[#232323]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-jobb-orange text-sm font-semibold mb-6"
            >
              <Sparkle size={18} weight="fill" />
              <span>Inovação Jobb 4.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
            >
              Inteligência Artificial aplicada à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Gestão Audiovisual
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#a3a3a3] text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Leve a inteligência preditiva para sua produtora. O Jobb combina mais de uma década de experiência no mercado audiovisual com recursos de IA para acelerar orçamentos, blindar seu financeiro e liberar sua equipe para criar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/teste-gratis"
                className="w-full sm:w-auto py-3.5 px-8 rounded-2xl gradient font-semibold text-white shadow-lg shadow-orange-500/20 hover:opacity-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Experimente Grátis por 15 dias</span>
                <ArrowRight size={18} weight="bold" />
              </Link>
              <a
                href="#recursos"
                className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 font-semibold text-white transition-all duration-300"
              >
                Conhecer Recursos
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights / Métricas */}
        <section className="py-12 bg-black/20 border-b border-white/5">
          <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {highlights.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                    {item.number}
                  </div>
                  <div className="text-xs sm:text-sm text-[#a3a3a3] font-medium max-w-xs mx-auto">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="recursos" className="py-20 lg:py-24">
          <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Como a IA transforma o dia a dia da sua produtora
              </h2>
              <p className="text-[#a3a3a3] text-base sm:text-lg">
                Funcionalidades pensadas exclusivamente para a rotina dinâmica de produtoras de vídeo, cinema, áudio e eventos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-8 rounded-2xl bg-[#1b1b1b]/80 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#999] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferencial / Comparativo */}
        <section className="py-16 bg-[#181818] border-y border-white/5">
          <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#242424] to-[#1a1a1a] border border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="space-y-4 max-w-xl">
                  <div className="inline-flex items-center gap-2 text-jobb-orange text-sm font-semibold">
                    <ClockAfternoon size={20} weight="fill" />
                    <span>Ganhe velocidade operacional</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Menos planilhas soltas. Mais inteligência na tomada de decisão.
                  </h3>
                  <p className="text-[#a3a3a3] text-sm sm:text-base leading-relaxed">
                    Com o Jobb, a IA não é apenas um chatbot genérico: ela está profundamente integrada ao seu catálogo de itens, banco de profissionais, tabelas de custos e fluxo de aprovações.
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-[#e2e2e2]">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-500" weight="fill" />
                      Total aderência aos padrões e tabelas do audiovisual
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-500" weight="fill" />
                      Segurança de dados e confidencialidade total para seus projetos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-500" weight="fill" />
                      Configuração imediata e sem atritos na transição
                    </li>
                  </ul>
                </div>

                <div className="w-full md:w-auto flex flex-col gap-3 min-w-[240px]">
                  <Link
                    to="/teste-gratis"
                    className="w-full py-4 px-6 rounded-2xl gradient text-center font-bold text-white shadow-lg hover:opacity-95 transition-all duration-300"
                  >
                    Começar Teste Grátis
                  </Link>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-center font-semibold text-sm text-white transition-all duration-300"
                  >
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 lg:py-24 text-center">
          <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              O futuro da sua produtora começa agora.
            </h2>
            <p className="text-[#a3a3a3] text-lg mb-10 max-w-2xl mx-auto">
              Experimente todas as funcionalidades do Jobb 4.0 gratuitamente durante 15 dias e sinta o poder da gestão com inteligência artificial.
            </p>
            <Link
              to="/teste-gratis"
              className="inline-flex items-center gap-2 py-4 px-10 rounded-2xl gradient font-bold text-white text-lg shadow-xl shadow-orange-500/20 hover:scale-105 transition-all duration-300"
            >
              <span>Testar Grátis por 15 dias</span>
              <ArrowRight size={20} weight="bold" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
