import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { IAHero } from '@/components/ia/IAHero';
import { IAMarquee } from '@/components/ia/IAMarquee';
import { IAControleHumano } from '@/components/ia/IAControleHumano';
import { IAStickyFeatures } from '@/components/ia/IAStickyFeatures';
import { IAMCPIntegration } from '@/components/ia/IAMCPIntegration';
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
        {/* Hero Section e Marquee com a cor do site */}
        <section className="bg-[#232323] pt-8 pb-6 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
          <IAHero />
          <IAMarquee />
        </section>

        {/* Seção: Controle Humano em Cada Etapa */}
        <IAControleHumano />

        {/* Seção Stacking: Conciliação, Crie orçamentos, Importe orçamentos com IA */}
        <IAStickyFeatures />

        {/* Seção: Model Context Protocol (MCP) */}
        <IAMCPIntegration />

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

        {/* Features Grid alinhado ao padrão do site */}
        <section id="recursos" className="section-padding bg-jobb-dark">
          <div className="container-custom max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[16px]">
                <CheckCircle size={20} className="text-jobb-orange" /> Recursos com IA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Como a IA transforma <span className="font-normal text-jobb-text-secondary">o dia a dia da sua produtora</span>
              </h2>
              <h3 className="text-jobb-text-secondary max-w-2xl text-[16px] md:text-[18px]">
                Funcionalidades pensadas exclusivamente para a <span className="text-jobb-orange">rotina audiovisual</span>.
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-card p-8 rounded-3xl transition-colors duration-300 hover:bg-jobb-bg-secondary group cursor-default shadow-none flex flex-col justify-start"
                >
                  <div className="text-jobb-orange mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-white font-bold mb-3">{feature.title}</h3>
                  <p className="text-jobb-text-secondary leading-relaxed text-[16px]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferencial / Comparativo no padrão do site */}
        <section className="section-padding bg-gradient-to-b from-jobb-dark to-jobb-bg-secondary/40">
          <div className="container-custom max-w-6xl mx-auto">
            <div className="bg-card p-8 sm:p-12 rounded-3xl shadow-none border border-white/5">
              <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
                <div className="space-y-4 max-w-xl">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-2 text-[15px]">
                    <ClockAfternoon size={18} className="text-jobb-orange" /> Velocidade Operacional
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Menos planilhas soltas. <span className="font-normal text-jobb-text-secondary">Mais inteligência na tomada de decisão.</span>
                  </h2>
                  <p className="text-jobb-text-secondary leading-relaxed text-[16px]">
                    Com o Jobb, a IA não é apenas um chatbot genérico: ela está profundamente integrada ao seu catálogo de itens, banco de profissionais, tabelas de custos e fluxo de aprovações.
                  </p>
                  <ul className="space-y-3 pt-3">
                    <li className="flex items-center gap-3 text-jobb-text-secondary text-[16px]">
                      <CheckCircle size={20} className="text-jobb-orange shrink-0" weight="regular" />
                      <span><strong className="text-white font-semibold">Total aderência</strong> aos padrões e tabelas do audiovisual</span>
                    </li>
                    <li className="flex items-center gap-3 text-jobb-text-secondary text-[16px]">
                      <CheckCircle size={20} className="text-jobb-orange shrink-0" weight="regular" />
                      <span><strong className="text-white font-semibold">Segurança de dados</strong> e confidencialidade total para seus projetos</span>
                    </li>
                    <li className="flex items-center gap-3 text-jobb-text-secondary text-[16px]">
                      <CheckCircle size={20} className="text-jobb-orange shrink-0" weight="regular" />
                      <span><strong className="text-white font-semibold">Configuração imediata</strong> e sem atritos na transição</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full lg:w-auto flex flex-col gap-3 min-w-[240px]">
                  <Link
                    to="/teste-gratis"
                    className="w-full py-3.5 px-6 rounded-2xl gradient hover:gradient text-center font-bold text-white shadow-lg transition-all duration-300"
                  >
                    Começar Teste Grátis
                  </Link>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-6 rounded-2xl bg-card hover:bg-jobb-bg-secondary text-center font-semibold text-sm text-white transition-all duration-300"
                  >
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final no padrão do site */}
        <section className="section-padding text-center bg-jobb-dark">
          <div className="container-custom max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[15px]">
              <CheckCircle size={18} className="text-jobb-orange" /> Comece Hoje
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              O futuro da sua produtora <span className="font-normal text-jobb-text-secondary">começa agora.</span>
            </h2>
            <p className="text-jobb-text-secondary text-[16px] md:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
              Experimente todas as funcionalidades do Jobb 4.0 gratuitamente durante 15 dias e sinta o poder da gestão com inteligência artificial.
            </p>
            <Link
              to="/teste-gratis"
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-2xl gradient hover:gradient font-semibold text-white text-[16px] shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300"
            >
              <span>Testar Grátis por 15 dias</span>
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
