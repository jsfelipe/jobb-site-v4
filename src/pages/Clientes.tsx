import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ClientesTabs } from '@/components/sections/ClientesTabs';

export const metadata = {
    title: 'Clientes | Jobb',
    description: 'Produtoras que já utilizam e confiam no Jobb 4.0.',
};

export default function ClientesPage() {
    return (
        <div className="min-h-screen bg-jobb-dark text-jobb-text font-sans flex flex-col bg-[#232323]">
            <Header />
            <main className="flex-grow">

                <div className="container-custom py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossos Clientes</h1>
                    <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
                        Conheça as produtoras audiovisuais que já transformaram seus processos internos com a tecnologia do Jobb 4.0.
                    </p>
                </div>

                <ClientesTabs />


            </main>
            <Footer />
        </div>
    );
}
