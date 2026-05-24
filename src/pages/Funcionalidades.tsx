'use client';

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Features } from '@/components/sections/Features';
import { CTA } from '@/components/sections/CTA';

import { motion } from 'motion/react';
import {
    Pen
} from '@phosphor-icons/react/dist/ssr';
import { TabsSection } from '@/components/sections/TabsSection';
import { FluxoSection } from '@/components/sections/FluxoSection';

export default function FuncionalidadesPage() {
    return (
        <div className="min-h-screen bg-jobb-dark text-jobb-text font-sans flex flex-col bg-[#232323]">
            <Header />

            <main className="flex-grow">
                <div className="container-custom py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Funcionalidades</h1>
                    <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
                        Do cadastro ao financeiro, <span className="text-jobb-orange font-medium">conheça todas as funcionalidades</span> do sistema Jobb.
                    </p>
                </div>

                {/* Accordion / Tabs Section */}
                <TabsSection />

                {/* Fluxo Section */}
                <FluxoSection />

                {/* Assinatura Digital Section */}
                <section className="bg-primary section-padding">
                    <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-8 mb-4 items-center">

                            <motion.div
                                initial={{ opacity: 0, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                            >
                                <div className="">
                                    <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange mb-6 text-sm">
                                        <Pen size={18} className="text-white" /> Assinatura digital
                                    </p>
                                    <h2 className="text-4xl text-secondary mb-6 leading-tight">
                                        Escolha entre a<br /><span className="text-white font-bold">D4Sign e a DocuSign.</span>
                                    </h2>
                                    <p className="text-[#a3a3a3] leading-relaxed text-lg">
                                        Além de você gerar os contratos em PDF de uma maneira prática e automatizada, agora você já pode enviar os contratos para seus clientes e fornecedores assinarem online.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                                className=""
                            >
                                <div className="flex gap-6 justify-end">
                                    <div className="bg-white rounded-3xl w-full max-w-[240px] aspect-square flex flex-col items-center justify-center p-6 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                                        <img src="/images/docusign.webp" alt="DocuSign" width={170} height={170} />
                                    </div>

                                    <div className="bg-black border border-white/10 rounded-3xl w-full max-w-[240px] aspect-square flex flex-col items-center justify-center p-6 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                                        <div className="flex items-center text-white">
                                            <img src="/images/logo-d4sign.webp" alt="D4Sign" width={170} height={170} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Novidades Section */}
                <div className="">
                    <Features />
                </div>
                {/* CTA Section */}
                <div className="">
                    <CTA />
                </div>

            </main>
            <Footer />
        </div>
    );
}
