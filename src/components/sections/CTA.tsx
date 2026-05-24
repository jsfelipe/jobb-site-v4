import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MotionDiv, MotionP, MotionHeader, MotionSpan, MotionSection } from '@/components/ui/motion';

export function CTA() {
    return (
        <section className="py-24 gradient text-center">
            <div className="container-custom">
                <MotionDiv
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl text-white mb-2">
                        Profissionalize a
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-white italic mb-4">
                        gestão da sua produtora!
                    </h2>
                    <h3 className="text-white/90 mb-8">Teste grátis ou fale com um dos nossos consultores!</h3>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                        <Link className="btn px-8 py-4 bg-black hover:bg-black/80 text-white border-none" to="/teste-gratis">Teste grátis por 15 dias</Link>
                        <Link className="btn px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-black" to="https://api.whatsapp.com/send?phone=5581998504107&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Sistema%20Jobb!" target="_blank">Falar com um consultor</Link>
                    </div>

                    <p className="text-white/80 text-[16px]">
                        Faça como mais de <span className="font-bold text-[16px]">400 produtoras</span> que já profissionalizaram a gestão com o Jobb.
                    </p>
                </MotionDiv>
            </div>
        </section>
    );
}
