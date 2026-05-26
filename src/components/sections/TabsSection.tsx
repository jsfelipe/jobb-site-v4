'use client';

import { useState, useEffect, useCallback } from 'react';
import {
    BuildingsIcon,
    IdentificationCardIcon,
    UserPlusIcon,
    CoinsIcon,
    CurrencyDollarIcon,
    WalletIcon,
    ChartLineUpIcon,
    BankIcon,
    ReceiptIcon,
    ListChecksIcon,
    ChartBarIcon,
    CalendarIcon,
    TimerIcon,
    CalculatorIcon,
    HandshakeIcon,
    LinkIcon,
    FilePdfIcon,
    EnvelopeSimpleIcon,
    CopyIcon,
    MegaphoneIcon,
    CloudSunIcon,
    PrinterIcon,
    BarcodeIcon,
    CheckSquareOffsetIcon,
    CaretLeft,
    CaretRight,
    X,
} from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

// ─── Carousel images per tab ───
const tabImages: Record<string, string[]> = {
    orcamentos: [
        '/images/funcionalidades/orcamentos/audiovisual.webp',
        '/images/funcionalidades/orcamentos/publicitario.webp',
        '/images/funcionalidades/orcamentos/editar-orcamento.jpg',
    ],
    /* campanhas: [
        '/images/funcionalidades/tela2.jpg.webp',
        '/images/funcionalidades/tela3.jpg.webp',
        '/images/funcionalidades/tela5.jpg.webp',
    ], */
    financeiro: [
        '/images/funcionalidades/financeiro/contas-pagar.webp',
        '/images/funcionalidades/financeiro/faturas.webp',
        '/images/funcionalidades/financeiro/plano-contas.webp',
        '/images/funcionalidades/financeiro/relacao-pagamentos.webp',
    ],
    tarefas: [
        '/images/funcionalidades/tarefas/kanban.jpg',
        '/images/funcionalidades/tarefas/calendario.jpg',
        '/images/funcionalidades/tarefas/gantt.webp',
        '/images/funcionalidades/tarefas/gestao-tarefas.webp',
        '/images/funcionalidades/tarefas/cadastro-projeto.webp',
    ],
    relatorios: [
        '/images/funcionalidades/relatorios/orcamento-periodo.webp',
        '/images/funcionalidades/relatorios/visao-orcamento.webp',
        '/images/funcionalidades/relatorios/conta-pagar.webp',
    ],
    seguranca: [
        '/images/funcionalidades/seguranca/cadastro-permissoes.webp',
        '/images/funcionalidades/seguranca/permissoes.jpg',
    ],
};

// ─── Bento grid items per tab ───
interface BentoItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    /** Optional: 'large' spans 2 columns on desktop */
    size?: 'large' | 'normal';
}

const tabsData: { id: string; title: string; tags: string[]; items: BentoItem[] }[] = [
    {
        id: 'orcamentos',
        title: 'Orçamentos',
        tags: ['Publicitários', 'Audiovisual'],
        items: [
            {
                icon: <CalculatorIcon size={36} weight="light" />,
                title: 'Orçamentos do início ao fechamento',
                description: 'Crie, revise e acompanhe propostas com status claro até a aprovação.',
            },
            {
                icon: <EnvelopeSimpleIcon size={36} weight="light" />,
                title: 'Proposta enviada, decisão acelerada',
                description: 'Organize envio de orçamento e contrato em um fluxo mais rápido e profissional.',
            },
            {
                icon: <ChartLineUpIcon size={36} weight="light" />,
                title: 'Menos retrabalho na rotina comercial',
                description: 'Centralize versões, valores e detalhes do orçamento com mais agilidade.',
            },
            {
                icon: <LinkIcon size={36} weight="light" />,
                title: 'Da negociação à execução com rastreio',
                description: 'Conecte orçamento, ordem do dia e relação de pagamento com visão completa.',
            },
        ],
    },
    /* {
        id: 'campanhas',
        title: 'Campanhas',
        tags: [],
        items: [
            {
                icon: <MegaphoneIcon size={36} weight="light" />,
                title: 'Campanhas centralizadas em um só lugar',
                description: 'Reúna briefing, metas e investimento previsto para coordenar cada entrega com clareza.',
            },
            {
                icon: <ChartBarIcon size={36} weight="light" />,
                title: 'Estratégia e operação na mesma tela',
                description: 'Acompanhe detalhes da campanha com visão consolidada dos orçamentos vinculados.',
            },
            {
                icon: <HandshakeIcon size={36} weight="light" />,
                title: 'Menos ruído entre atendimento e produção',
                description: 'Organize informações-chave da campanha para alinhar times e prazos.',
            },
            {
                icon: <ListChecksIcon size={36} weight="light" />,
                title: 'Decisões de campanha com base real',
                description: 'Visualize evolução e investimento para priorizar ações com mais segurança.',
            },
        ],
    }, */
    {
        id: 'financeiro',
        title: 'Financeiro',
        tags: ['Extrato de Lançamentos', 'Contas a pagar', 'Contas a receber', 'Relação de pagamentos', 'Faturamento', 'Fluxo de caixa', 'Verba de produção', 'Plano de contas', 'Contas bancárias', 'Centro de custos'],
        items: [
            {
                icon: <CurrencyDollarIcon size={36} weight="light" />,
                title: 'Financeiro integrado à operação',
                description: 'Controle lançamentos, contas a pagar e contas a receber com fluxo padronizado.',
            },
            {
                icon: <BankIcon size={36} weight="light" />,
                title: 'Conciliação bancária com mais confiança',
                description: 'Compare movimentos e ajuste divergências sem perder tempo em planilhas paralelas.',
            },
            {
                icon: <WalletIcon size={36} weight="light" />,
                title: 'Caixa previsível, gestão mais segura',
                description: 'Monitore fluxo de caixa e antecipe decisões com dados atualizados.',
            },
            {
                icon: <ReceiptIcon size={36} weight="light" />,
                title: 'Faturamento e cobrança sem gargalos',
                description: 'Acelere faturamento, acompanhe títulos e reduza atrasos no ciclo financeiro.',
            },
        ],
    },
    {
        id: 'tarefas',
        title: 'Tarefas',
        tags: ['Gestão do tempo', 'Gráfico de Gantt', 'Kanban'],
        items: [
            {
                icon: <ListChecksIcon size={36} weight="light" />,
                title: 'Tarefas que andam com o time',
                description: 'Organize atividades em kanban, lista, calendário e gantt conforme o ritmo do projeto.',
            },
            {
                icon: <TimerIcon size={36} weight="light" />,
                title: 'Prazos sob controle, entregas em dia',
                description: 'Defina dependências, acompanhe progresso e elimine bloqueios antes de virar atraso.',
            },
            {
                icon: <UserPlusIcon size={36} weight="light" />,
                title: 'Colaboração prática no dia a dia',
                description: 'Centralize comentários, anexos e atualizações para reduzir ruído na execução.',
            },
            {
                icon: <CalendarIcon size={36} weight="light" />,
                title: 'Backlog claro, sprint mais produtiva',
                description: 'Priorize tarefas com visibilidade total do que está pendente, em andamento e concluído.',
            },
        ],
    },
    {
        id: 'relatorios',
        title: 'Relatórios',
        tags: ['Orcamento por Período', 'Visão do Orçamento', 'Lançamentos por Dia', 'Contas a Pagar', 'Contas a Receber', 'Demonstrativo DRE'],
        items: [
            {
                icon: <ChartBarIcon size={36} weight="light" />,
                title: 'Relatórios que viram decisão',
                description: 'Acompanhe indicadores por período e transforme dados em ação com rapidez.',
            },
            {
                icon: <ChartLineUpIcon size={36} weight="light" />,
                title: 'Visão financeira em profundidade',
                description: 'Analise receitas, despesas, conciliação e DRE com recortes que fazem sentido para o negócio.',
            },
            {
                icon: <CalculatorIcon size={36} weight="light" />,
                title: 'Menos planilha, mais inteligência',
                description: 'Consolide informações operacionais e financeiras em relatórios prontos para gestão.',
            },
            {
                icon: <ListChecksIcon size={36} weight="light" />,
                title: 'Gestão orientada por evidência',
                description: 'Compare cenários, identifique gargalos e aumente previsibilidade dos resultados.',
            },
        ],
    },
    {
        id: 'seguranca',
        title: 'Segurança e Perfis',
        tags: [],
        items: [
            {
                icon: <IdentificationCardIcon size={36} weight="light" />,
                title: 'Controle de acesso sem brechas',
                description: 'Defina permissões por módulo e ação para cada perfil e mantenha sua operação protegida.',
            },
            {
                icon: <UserPlusIcon size={36} weight="light" />,
                title: 'Usuários certos, acessos certos',
                description: 'Gerencie usuários, papéis e visibilidade com governança clara em um único painel.',
            },
            {
                icon: <BuildingsIcon size={36} weight="light" />,
                title: 'Segurança que acompanha o crescimento',
                description: 'Estruture regras de acesso por equipe sem travar a produtividade do dia a dia.',
            },
            {
                icon: <CheckSquareOffsetIcon size={36} weight="light" />,
                title: 'Menos risco, mais controle operacional',
                description: 'Padronize permissões e reduza erros de acesso em processos críticos.',
            },
        ],
    },
];

// ─── Carousel Component ───
function ImageCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Autoplay apenas quando não estiver com o lightbox ativado
    useEffect(() => {
        if (isZoomed) return;
        const interval = setInterval(next, 4000);
        return () => clearInterval(interval);
    }, [next, isZoomed]);

    // Atalhos de teclado quando o zoom estiver aberto
    useEffect(() => {
        if (!isZoomed) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsZoomed(false);
            } else if (e.key === 'ArrowRight') {
                next();
            } else if (e.key === 'ArrowLeft') {
                prev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isZoomed, next, prev]);

    return (
        <>
            {/* Carousel Container */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-card group select-none">
                {/* Imagem do carrossel */}
                <div 
                    onClick={() => setIsZoomed(true)}
                    className="absolute inset-0 cursor-zoom-in overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`Funcionalidade tela ${currentIndex + 1}`}
                                className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 900px"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Seta Prev */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        prev();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-jobb-orange hover:border-jobb-orange hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Imagem anterior"
                >
                    <CaretLeft size={24} weight="bold" />
                </button>

                {/* Seta Next */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        next();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-jobb-orange hover:border-jobb-orange hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Próxima imagem"
                >
                    <CaretRight size={24} weight="bold" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(i);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex
                                ? 'bg-jobb-orange w-6'
                                : 'bg-gray-400/80 hover:bg-gray-600/80'
                                }`}
                            aria-label={`Ir para imagem ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox / Zoom Modal */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsZoomed(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md select-none"
                    >
                        {/* Botão de Fechar */}
                        <button
                            onClick={() => setIsZoomed(false)}
                            className="absolute top-6 right-6 z-[60] flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-colors cursor-pointer"
                            aria-label="Fechar visualização"
                        >
                            <X size={24} weight="bold" />
                        </button>

                        {/* Seta Prev no Zoom */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prev();
                            }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white border border-white/10 hover:bg-jobb-orange hover:border-jobb-orange hover:scale-105 active:scale-95 transition-all cursor-pointer"
                            aria-label="Imagem anterior"
                        >
                            <CaretLeft size={28} weight="bold" />
                        </button>

                        {/* Seta Next no Zoom */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                next();
                            }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white border border-white/10 hover:bg-jobb-orange hover:border-jobb-orange hover:scale-105 active:scale-95 transition-all cursor-pointer"
                            aria-label="Próxima imagem"
                        >
                            <CaretRight size={28} weight="bold" />
                        </button>

                        {/* Container da imagem com zoom */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4"
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`Funcionalidade zoom tela ${currentIndex + 1}`}
                                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl cursor-zoom-out border border-white/10"
                                onClick={() => setIsZoomed(false)}
                            />

                            {/* Paginação Dots no Zoom */}
                            <div className="flex gap-2">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex
                                            ? 'bg-jobb-orange w-6'
                                            : 'bg-white/40 hover:bg-white/60'
                                            }`}
                                        aria-label={`Ir para imagem ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// ─── Main Component ───
export function TabsSection() {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const activeData = tabsData.find((t) => t.id === activeTab);
    const images = tabImages[activeTab] || [];

    return (
        <section className="bg-secondary pt-8 pb-24">
            <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 lg:gap-12">

                    {/* ── Horizontal Tabs ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full justify-center border-b border-white/10 flex overflow-x-auto hide-scrollbar"
                    >
                        <ul className="flex flex-row">
                            {tabsData.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <li
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`group flex items-center justify-center gap-3 font-medium py-4 px-6 cursor-pointer transition-colors hover:bg-white/5 border-b-2 ${isActive
                                            ? 'bg-white/5 text-jobb-orange border-jobb-orange'
                                            : 'text-[#a3a3a3] hover:text-white border-transparent'
                                            }`}
                                    >
                                        <span className="text-center whitespace-nowrap">{tab.title}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* ── Tab Content ── */}
                    <div className="w-full flex flex-col gap-12">

                        {/* Info Box & Carousel */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12  w-full mb-12">
                            {/* Text Info Box - 1/3 */}
                            <motion.div
                                key={`text-${activeTab}`}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-full lg:w-1/3 bg-card rounded-2xl p-8 flex flex-col justify-between"
                            >
                                <div className='flex flex-wrap'>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                        {activeData?.title}
                                    </h2>
                                    <p className="text-white/80 text-[17px] leading-relaxed mb-6">
                                        Conheça os recursos e funcionalidades do módulo de <span className="text-jobb-orange font-medium">{activeData?.title}</span>, projetados para trazer mais agilidade e controle para seu negócio.
                                    </p>
                                    <Link className="btn px-8 py-4 mt-2 gradient hover:bg-jobb-orange text-center" to="/teste-gratis">Teste grátis por 15 dias</Link>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {activeData?.tags?.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-[12px] border border-white/20 rounded-full text-white/50 bg-white/5 whitespace-nowrap"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Carousel - 2/3 */}
                            <motion.div
                                key={`carousel-${activeTab}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                className="w-full lg:w-2/3"
                            >
                                <ImageCarousel images={images} />
                            </motion.div>
                        </div>

                        {/* Bento Grid */}
                        <motion.div
                            key={`grid-${activeTab}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            {activeData?.items.map((item, i) => {
                                // Se a tab tiver 4 cards (ex: Cadastro, Tarefas), ou for especificada com layout 50%
                                // Ajusta larguras conforme a quantidade de itens na aba
                                const isFourItems = activeData.items.length === 4;
                                const widthClass = isFourItems
                                    ? 'md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]' // 4 colunas no lg
                                    : item.size === 'large'
                                        ? 'md:w-[calc(100%-24px)] lg:w-[calc(66.666%-16px)]'
                                        : 'md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'; // 3 colunas no lg

                                return (
                                    <div
                                        key={i}
                                        className={`w-full ${widthClass} bg-card rounded-2xl ${isFourItems ? 'p-6 lg:p-8' : 'p-8'} group transition-colors duration-300 hover:bg-card/60`}
                                    >
                                        <div className={`flex ${isFourItems ? 'flex-col items-start gap-4 lg:gap-6' : 'items-start gap-6'}`}>
                                            <div className="text-jobb-orange shrink-0 mt-1 group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className={`text-white font-medium mb-2 ${isFourItems ? 'text-base lg:text-lg' : 'text-lg'}`}>{item.title}</h3>
                                                <p className={`text-[#a3a3a3] leading-relaxed ${isFourItems ? 'text-[14px] lg:text-[15px]' : 'text-[15px]'}`}>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
