'use client';

import { motion } from 'motion/react';

export function FluxoSection() {
    return (
        <section id="fluxo" className="pt-24">
            <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl text-white mb-6">
                            Fluxo Jobb
                        </h2>
                        <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
                            O nosso sistema integra ponta a ponta todas as áreas de produção da sua empresa, desde a prospecção até o encerramento.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-secondary rounded-3xl"
                >
                    <video
                        src="/images/fluxo-jobb_6.mp4"
                        muted
                        autoPlay
                        className="w-full rounded-3xl"
                    >
                        Seu navegador não suporta a visualização deste vídeo.
                    </video>
                </motion.div>
            </div>
        </section>
    );
}
