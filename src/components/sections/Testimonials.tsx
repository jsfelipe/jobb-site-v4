'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

import { motion, AnimatePresence } from 'motion/react';

const clientLogos = [
    // Centro-Oeste
    { src: '/images/clientes/centro-oeste/asacine.webp', alt: 'Asacine' },
    { src: '/images/clientes/centro-oeste/backstage.webp', alt: 'Backstage' },
    { src: '/images/clientes/centro-oeste/lembra-filmes.webp', alt: 'Lembra Filmes' },
    { src: '/images/clientes/centro-oeste/ls-regulacoes.webp', alt: 'LS Regulações' },
    // Norte
    { src: '/images/clientes/norte/602.webp', alt: '602' },
    { src: '/images/clientes/norte/amora-filmes.webp', alt: 'Amora Filmes' },
    { src: '/images/clientes/norte/estudio-nove.webp', alt: 'Estúdio Nove' },
    { src: '/images/clientes/norte/fx-filmes.webp', alt: 'FX Filmes' },
    // Nordeste
    { src: '/images/clientes/nordeste/242-filmes.webp', alt: '242 Filmes' },
    { src: '/images/clientes/nordeste/42-polegadas.webp', alt: '42 Polegadas' },
    { src: '/images/clientes/nordeste/atelie.webp', alt: 'Ateliê' },
    { src: '/images/clientes/nordeste/barong.webp', alt: 'Barong' },
    // Sudeste
    { src: '/images/clientes/sudeste/808.webp', alt: '808' },
    { src: '/images/clientes/sudeste/abdala.webp', alt: 'Abdala' },
    { src: '/images/clientes/sudeste/affari.webp', alt: 'Affari' },
    { src: '/images/clientes/sudeste/ALTRN.webp', alt: 'ALTRN' },
    // Sul
    { src: '/images/clientes/sul/2say.webp', alt: '2say' },
    { src: '/images/clientes/sul/adverse-rec.webp', alt: 'Adverse Rec' },
    { src: '/images/clientes/sul/al-studio-midia.webp', alt: 'AL Studio Mídia' },
    { src: '/images/clientes/sul/art-films.webp', alt: 'Art Films' }
];

const testimonialsData = [

    {
        quote: "A implementação do Sistema Jobb trouxe mais eficiência e organização. A integração entre os processos de produção executiva e financeiro trouxe mais eficiência e reduziu enormemente retrabalhos, enquanto a centralização de documentos em um repositório único garante mais controle e segurança. Além disso, o sistema facilita muito a prestação de contas Ancine, com pré-preenchimento de relatórios como Relação de Pagamentos, Demonstrativo de Extrato e Orçamentário, economizando tempo e evitando inconsistências. Hoje é essencial na nossa operação.",
        name: "Vinícius",
        empresa: "Felistoque Cinema",
        image: "/images/depoimentos/vinicius.webp"
    },
    {
        quote: "O sistema está alinhado com as prioridades de planejamento e organização da produtora e permite manter a produção organizada, contemplando todos os detalhes do início ao fim. Seu principal diferencial é a capacidade de customização, a equipe consegue atender prontamente e adaptar funcionalidades específicas ao nosso dia a dia. Essa flexibilidade faz toda a diferença.",
        name: "Andre Alves",
        empresa: "Fish Produtora",
        image: "/images/depoimentos/andre-alves.webp"
    },
    {
        quote: "O Jobb é vital para a Sanfona. Temos total controle de orçamentos, custos, lucratividade, pagamentos e os relatórios mais específicos de forma rápida e muito intuitiva. Recomendo até pros meus concorrentes.",
        name: "Alfredo Valtier",
        empresa: "Sanfona Filmes",
        image: "/images/depoimentos/alfredo-valtier.webp"
    },
    {
        quote: "Otimizamos todas as fases dos nossos projetos. Conseguimos concentrar as informações para depois analisá-las.",
        name: "Ofir Figueiredo",
        empresa: "Rec Produtores",
        image: "/images/depoimentos/ofir-figueiredo.webp"
    },
    {
        quote: "A implementação do Sistema Jobb aqui na produtora foi transformadora. É um software completo e, ao mesmo tempo, prático e fácil de usar. Integrou os setores da empresa e tornou-se essencial. Hoje não sabemos viver sem.",
        name: "Bárbara Varela",
        empresa: "Paralelo 15 Filmes",
        image: "/images/depoimentos/barbara-varela.webp"
    },
    {
        quote: "O Jobb nos permitiu um salto da profissionalização do setor de contas. Nos dá total segurança na gestão financeira dos projetos e prestação de contas além de termos um suporte muito ágil para qualquer necessidade.",
        name: "Juliana Villas",
        empresa: "Terravista Filmes",
        image: "/images/depoimentos/juliana-villas.webp"
    },
    {
        quote: "Conseguimos dar maior agilidade em nossos projetos e processos, aumentando assim nosso crescimento e retorno de respostas aos clientes.",
        name: "Elisangela",
        empresa: "Guerrilha Filmes",
        image: "/images/depoimentos/elisangela.webp"
    },
    {
        quote: "Somos clientes há alguns anos e a ferramenta está totalmente incorporada ao dia a dia da produtora. Hoje não vejo a Chá sem o Sistema Jobb!",
        name: "Philip Moss",
        empresa: "Sócio diretor, Chá das 5",
        image: "/images/depoimentos/philip.webp"
    }
];


export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const variants = {
        initial: (direction: number) => {
            return {
                x: direction > 0 ? 30 : -30,
                opacity: 0
            };
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
            }
        },
        exit: (direction: number) => {
            return {
                x: direction > 0 ? -30 : 30,
                opacity: 0,
                transition: {
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                }
            };
        }
    };

    return (
        <section className="bg-secondary section-padding">
            <div className="container-custom text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Nossos clientes <span className="font-normal text-jobb-text-secondary">recomendam!</span>
                    </h2>
                    <h3 className="text-jobb-text-secondary mb-12">
                        Já são mais de <span className="text-jobb-orange font-bold italic">400 produtoras</span> parceiras
                    </h3>
                </motion.div>

                {/* Client Logos Strip */}
                <div className="relative w-full overflow-hidden mb-16 flex items-center">
                    {/* Gradient Overlays */}
                    <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#171717] to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#171717] to-transparent z-10 pointer-events-none" />

                    {/* Marquee Container */}
                    <div className="flex w-max animate-marquee-infinite items-center gap-4 md:gap-6 hover:grayscale transition-[filter,opacity] duration-800">
                        {/* Double the array for infinite effect */}
                        {[...clientLogos, ...clientLogos].map((logo, i) => (
                            <div key={i} className="relative w-[100px] h-[100px] md:w-[100px] md:h-[100px] shrink-0">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="object-contain rounded-3xl"
                                    sizes="(max-width: 768px) 100px, 140px"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="text-jobb-text-secondary mb-8 text-[16px]"
                >
                    O que eles dizem sobre o Jobb
                </motion.p>

                {/* Testimonial Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    className="bg-card md:px-20 py-12 md:py-16 rounded-[2rem] max-w-5xl mx-auto relative shadow-none min-h-[300px] flex flex-col justify-center overflow-hidden"
                >
                    <div className="absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 z-20">
                        <button
                            onClick={prevTestimonial}
                            className="bg-secondary hover:bg-secondary/50 p-3 md:p-4 rounded-xl transition-colors relative flex items-center justify-center">
                            <ArrowLeft size={24} className="text-jobb-orange" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 z-20">
                        <button
                            onClick={nextTestimonial}
                            className="bg-secondary hover:bg-secondary/50 p-3 md:p-4 rounded-xl transition-colors relative flex items-center justify-center">
                            <ArrowRight size={24} className="text-jobb-orange" />
                        </button>
                    </div>

                    <div className="px-16 md:px-24 w-full relative">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={{
                                    initial: (direction: number) => {
                                        return {
                                            x: direction > 0 ? 30 : -30,
                                            opacity: 0
                                        };
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.3 }
                                        }
                                    },
                                    exit: (direction: number) => {
                                        return {
                                            x: direction > 0 ? -30 : 30,
                                            opacity: 0,
                                            transition: {
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.3 }
                                            }
                                        };
                                    }
                                }}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="w-full flex flex-col items-center justify-center"
                            >
                                <p className="text-[#E1E1E6] text-lg md:text-xl leading-relaxed mb-10 text-center font-normal">
                                    {testimonialsData[currentIndex].quote}
                                </p>

                                <div className="flex items-center justify-center gap-5">
                                    <div className="w-[60px] h-[60px] rounded-[1.25rem] overflow-hidden relative shrink-0">
                                        <img
                                            src={testimonialsData[currentIndex].image}
                                            alt={testimonialsData[currentIndex].name}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-left flex flex-col justify-center">
                                        <div className="flex text-[#FFBC05] text-sm mb-1">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <div className="text-base font-bold text-white leading-tight">{testimonialsData[currentIndex].name}</div>
                                        <div className="text-sm font-normal text-jobb-orange leading-tight mt-1">{testimonialsData[currentIndex].empresa}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
