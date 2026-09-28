import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { IAHero } from '@/components/ia/IAHero';
import { IAMarquee } from '@/components/ia/IAMarquee';
import { IAControleHumano } from '@/components/ia/IAControleHumano';
import { IAStickyFeatures } from '@/components/ia/IAStickyFeatures';
import { IAMCPIntegration } from '@/components/ia/IAMCPIntegration';
import { IAAPIBanner } from '@/components/ia/IAAPIBanner';
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
    <div className="min-h-screen bg-jobb-dark text-jobb-text font-sans flex flex-col bg-secondary">
      <Header />

      <main className="flex-grow">
        {/* Hero Section e Marquee com a cor do site */}
        <section className="bg-secondary pt-8 pb-6 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
          <IAHero />
          <IAMarquee />
        </section>

        {/* Seção: Controle Humano em Cada Etapa */}
        <IAControleHumano />

        {/* Seção Stacking: Conciliação, Crie orçamentos, Importe orçamentos com IA */}
        <IAStickyFeatures />

        {/* Seção: Model Context Protocol (MCP) */}
        <IAMCPIntegration />

        {/* Última Seção: API Jobb CTA Banner */}
        <IAAPIBanner />

      </main>

      <Footer />
    </div>
  );
}
