import { Link } from 'react-router-dom';

import { InstagramLogo, LinkedinLogo, WhatsappLogo, SkypeLogo, YoutubeLogo, WhatsappLogoIcon } from '@/components/ui/phosphor-icons';
import { MotionDiv, MotionP, MotionHeader, MotionSpan, MotionSection } from '@/components/ui/motion';

export function Footer() {
    return (
        <footer className="bg-jobb-gray pt-16">
            <div className="container-custom">
                <MotionDiv
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row justify-between items-center  gap-12 mb-16"
                >
                    <div className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left">
                        <img src="/images/logo-jobb-light.svg" alt="Jobb" width={80} height={80} />
                        <p className="text-jobb-text-secondary text-[14px] mt-4">
                            Sistema Jobb, desde 2013 ajudando as produtoras na gestão audiovisual.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <Link to="https://www.instagram.com/sistemajobb/" target="_blank" className="w-8 h-8 flex items-center justify-center text-jobb-text-secondary hover:text-white transition-colors" aria-label="Instagram">
                                <InstagramLogo size={32} />
                            </Link>
                            <Link to="https://www.linkedin.com/company/sistemajobb" target='_blank' className="w-8 h-8 flex items-center justify-center text-jobb-text-secondary hover:text-white transition-colors" aria-label="LinkedIn">
                                <LinkedinLogo size={32} />
                            </Link>
                            <Link to="https://www.youtube.com/sistemajobb" target="_blank" className="w-8 h-8 flex items-center justify-center text-jobb-text-secondary hover:text-white transition-colors" aria-label="YouTube">
                                <YoutubeLogo size={32} />
                            </Link>
                            <Link to="https://api.whatsapp.com/send?phone=5581994384020&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Sistema%20Jobb!" target="_blank" className="w-8 h-8 flex items-center justify-center text-jobb-text-secondary hover:text-white transition-colors" aria-label="YouTube">
                                <WhatsappLogoIcon size={32} />
                            </Link>

                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 w-full md:w-auto">
                        <div className="space-y-6">
                            <Link to="/funcionalidades" className="block text-sm text-jobb-text-secondary hover:text-white">Funcionalidades</Link>
                            <Link to="/estudantes-professores" className="block text-sm text-jobb-text-secondary hover:text-white">Estudantes/Professores</Link>
                            <Link to="/clientes" className="block text-sm text-jobb-text-secondary hover:text-white">Clientes</Link>
                        </div>
                        <div className="space-y-6">
                            <Link to="https://blog.sistemajobb.com.br/" target="_blank" className="block text-sm text-jobb-text-secondary hover:text-white">Blog</Link>
                            <Link to="/termos-de-uso" className="block text-sm text-jobb-text-secondary hover:text-white">Termos de uso</Link>
                            <Link to="/politica-de-privacidade" className="block text-sm text-jobb-text-secondary hover:text-white">Política de Privacidade</Link>
                        </div>
                        <div>
                            <div className="w-fit flex items-center gap-4 bg-card rounded-lg justify-center p-4">
                                <span className="text-[14px] text-jobb-text-secondary leading-5">Somos<br /> parceiros<br /> Amazon</span>
                                <img src="/images/aws.svg" alt="AWS" width={88} height={88} />
                            </div>
                        </div>
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="border-t border-white/5 py-8 text-center md:text-left"
                >
                    <p className="text-[13px] text-jobb-text-secondary">
                        © 2026 - Sistema Jobb. Todos os Direitos Reservados.
                    </p>
                </MotionDiv>
            </div>
        </footer>
    );
}
