import { CaretRightIcon } from '@/components/ui/phosphor-icons';

import { MotionDiv, MotionP, MotionHeader, MotionSpan, MotionSection } from '@/components/ui/motion';

export function TargetAudience() {
    return (
        <section id="target-audience" className="section-padding bg-[url('/images/bg-indicado.webp')] md:bg-contain bg-bottom bg-center bg-no-repeat bg-fixed relative flex flex-col justify-center">
            <div className="absolute inset-0 bg-jobb-dark/80"></div>
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                    {/* Logos Grid */}
                    <MotionDiv
                        initial={{ opacity: 0, scale: 0.50, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                        className="grid grid-cols-3 gap-4 md:gap-6 w-fit mx-auto lg:ml-auto lg:mr-0"
                    >
                        {[
                            { src: "/images/canais/globoplay.webp", alt: "Globo play" },
                            { src: "/images/canais/videos-publicitarios 1.webp", alt: "Vídeos Publicitários" },
                            { src: "/images/canais/hbo.webp", alt: "HBO Max" },
                            { src: "/images/canais/twitch.webp", alt: "Twitch" },
                            { src: "/images/canais/youtube.webp", alt: "YouTube" },
                            { src: "/images/canais/prime-video.webp", alt: "Prime Video" },
                            { src: "/images/canais/disney.webp", alt: "Disney+" },
                            { src: "/images/canais/netflix 1.webp", alt: "Netflix" },
                            { src: "/images/canais/paramount.webp", alt: "Paramount+" },
                        ].map((logo, i) => (
                            <div key={i} className="flex items-center justify-center transition-transform hover:-translate-y-1 hover:scale-105 duration-300 shadow-xl rounded-2xl md:rounded-3xl">
                                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                                    <img src={logo.src} alt={logo.alt} sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px" className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </MotionDiv>

                    {/* Text Content */}
                    <MotionDiv
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl text-jobb-text-secondary mb-6">
                            Pra quem é indicado o <br />
                            <span className="font-bold text-white">Sistema Jobb?</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Produtoras de vídeos publicitários/institucionais",
                                "Produtores de Filmes/Documentários - Ancine",
                                "Produtoras de Filmes/Séries nos grandes Streamers (Netflix/Amazon/Globo/Hbo)…",
                                "Produtores de conteúdo para Youtube, Twitch Tv, entre outros."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-jobb-text-secondary">
                                    <CaretRightIcon size={16} className="text-jobb-orange mt-1 shrink-0" weight="bold" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
