import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { CTA } from '@/components/sections/CTA';
import { EstudantesProfessoresContent } from '@/components/sections/EstudantesProfessoresContent';

export const metadata = {
    title: 'Estudantes e Professores | Jobb',
    description: 'Condições especiais do Jobb para a comunidade acadêmica audiovisual.',
};

export default function EstudantesProfessoresPage() {
    return (
        <div className="min-h-screen bg-jobb-dark text-jobb-text font-sans flex flex-col bg-[#232323]">
            <Header />
            <main className="flex-grow">

                <div className="container-custom py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Para estudantes e professores</h1>
                    <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
                        Apoiamos o mercado brasileiro com condições especiais para que os estudantes já aprendam na versão acadêmica com a base do Jobb.
                    </p>
                </div>


                <EstudantesProfessoresContent />

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
