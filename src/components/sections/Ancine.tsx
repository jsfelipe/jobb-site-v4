import { Check } from '@/components/ui/phosphor-icons';

import { MotionDiv, MotionP, MotionHeader, MotionSpan, MotionSection } from '@/components/ui/motion';

export function Ancine() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.55, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                    <div className="bg-green-600 md:bg-[url('/images/bg-Ancine.webp')] bg-cover bg-center rounded-3xl p-8 lg:p-16 relative md:min-h-[500px] flex items-center">

                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                            <MotionDiv
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                            >
                                <h2 className="text-3xl md:text-4xl text-white mb-6">
                                    Gestão financeira de <br />
                                    <span className='font-bold'>projetos incentivados Ancine</span>
                                </h2>
                                <h3 className="text-white/90 mb-8 max-w-md">
                                    Facilite a sua rotina e reduza o tempo de trabalho na gestão financeira dos projetos
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Relação de pagamentos - Padrão Ancine",
                                        "Demonstrativo de Extrato - Padrão Ancine",
                                        "Demonstrativo Orçamentário - Padrão Ancine",
                                        "Relatório de Grandes Itens - Ancine",
                                        "Fontes de financiamentos e Contas bancárias separadas por projeto"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-white md:text-base font-medium">
                                            <Check size={20} className="text-white shrink-0" weight="bold" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </MotionDiv>
                            {/* Animated Floating Ancine Logo */}
                            <div className="hidden md:block absolute right-4 -bottom-16 lg:right-16 lg:-bottom-24 z-20">
                                <MotionDiv
                                    className="bg-white p-4 md:p-4 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center justify-center min-w-[180px] min-h-[180px]"
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                >
                                    <img src="/images/logo-ancine.webp" alt="Ancine" width={160} height={160} className="object-contain" />
                                </MotionDiv>
                            </div>
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
}
