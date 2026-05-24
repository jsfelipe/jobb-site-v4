import { Button } from '@/components/ui/button';

import { Link } from 'react-router-dom';
import { MotionDiv, MotionP, MotionHeader, MotionSpan, MotionSection } from '@/components/ui/motion';

export function Pricing() {
    return (
        <section className="pb-24">
            <div className="container-custom">
                <MotionDiv
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl text-white mb-4">Planos e preços</h2>
                    <h3 className="text-jobb-text-secondary">Profissionalize a gestão da sua empresa</h3>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                    className="bg-card rounded-[2rem] max-w-4xl mx-auto shadow-none overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end w-full">

                        {/* Imagem (1/3 no desktop) */}
                        <div className="md:col-span-1 relative flex justify-center w-full px-4 md:px-0 md:pl-8 order-2 md:order-1">
                            <img
                                src="/images/menina-preco.webp"
                                alt="menina apontando para o preço"
                                width={470}
                                height={670}
                                className="object-contain max-h-[400px] md:max-h-none w-auto"
                            />
                        </div>

                        {/* Conteudo (2/3 no desktop) */}
                        <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left py-8 md:py-16 px-8 md:px-12 md:pl-0 h-full order-1 md:order-2">
                            <h3 className="text-white font-medium mb-3 text-2xl lg:text-[28px]">
                                a partir de <span className="text-jobb-orange font-bold">R$ 199,00</span>
                                <span className='text-sm text-jobb-text-secondary ml-2 font-normal'>mês</span>
                            </h3>

                            <p className="text-jobb-text-secondary leading-relaxed text-[16px] mb-6 max-w-lg">
                                <span className='text-white font-medium block mb-1'>Temos planos e preços para todos os tipos de empresas.</span>
                                Entre em contato com nossos consultores para mais informações sobre os planos e treinamento.
                            </p>

                            <Link
                                to="https://api.whatsapp.com/send?phone=5581998504107&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Sistema%20Jobb!"
                                target="_blank"
                                className="w-fit px-8 py-3 gradient rounded-[1rem] transition-all"
                            >
                                Quero saber mais
                            </Link>
                        </div>

                    </div>
                </MotionDiv>
            </div>
        </section>
    );
}
