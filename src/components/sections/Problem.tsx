import { WarningCircleIcon, XCircleIcon, CheckCircleIcon } from '@/components/ui/phosphor-icons';

import { MotionDiv, MotionP, MotionHeader, MotionSpan, MotionSection } from '@/components/ui/motion';

export function Problem() {
    return (
        <section className="">
            <div className=" container-custom ">

                <div className="bg-secondary rounded-2xl lg:gap-12 justify-between lg:px-16 px-4 flex lg:flex-row flex-col-reverse">
                    <MotionDiv
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className=" flex align-center justify-center"
                    >
                        <img
                            src="/images/produtora-baguncada.webp"
                            alt="Gestão bagunçada"
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                        className="py-16 px-4"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[16px]">
                            <WarningCircleIcon size={20} /> Produtora sem o Jobb
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Sua produtora <span className="text-jobb-text-secondary font-normal">está com a</span><br />
                            <span className="text-jobb-text-secondary font-normal">gestão toda bagunçada?</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Gestão com planilhas desorganizadas.",
                                "Vários sistemas separados que não interagem.",
                                "Horas perdidas na montagem do orçamento.",
                                "Pagamentos atrasados por esquecimento.",
                                "Conheça o sistema Jobb e dê um boost na sua produtora."
                            ].map((item, i, arr) => {
                                const isLast = i === arr.length - 1;
                                return (
                                    <li key={i} className={`flex items-start gap-3 ${isLast ? 'text-white' : 'text-jobb-text-secondary'}`}>
                                        <div className="min-w-[20px] pt-1 flex items-center justify-center">
                                            {isLast ? (
                                                <CheckCircleIcon size={20} className="text-green-500" />
                                            ) : (
                                                <XCircleIcon size={20} className="text-red-500" />
                                            )}
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
