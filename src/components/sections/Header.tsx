'use client';

import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = useLocation().pathname;

    const isActive = (path: string) => pathname === path;

    return (
        <motion.header
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="z-50 relative"
        >
            <div className="container-custom h-20 flex items-center justify-between">

                <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                    <img src="/images/logo-jobb-light.svg" alt="Jobb" width={80} height={80} />
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    <Link to="/" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Home</Link>
                    <Link to="/funcionalidades" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/funcionalidades') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Funcionalidades</Link>
                    <Link to="/clientes" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/clientes') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Clientes</Link>
                    <Link to="/estudantes-professores" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/estudantes-professores') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Estudantes/Professores</Link>
                    <Link to="https://blog.sistemajobb.com.br/" target="_blank" className={`text-sm font-medium transition-colors hover:text-white ${isActive('/blog') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Blog</Link>
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <Link className="py-2 px-6 rounded-2xl bg-card hover:bg-jobb-bg-secondary" to="#">Login</Link>
                    <Link className="py-2 px-6 rounded-2xl gradient hover:gradient" to="/teste-gratis">Teste Grátis</Link>
                </div>

                <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <List size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-jobb-dark border-b border-white/10 p-4 flex flex-col gap-4">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Home</Link>
                    <Link to="/funcionalidades" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/funcionalidades') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Funcionalidades</Link>
                    <Link to="/clientes" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/clientes') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Clientes</Link>
                    <Link to="/estudantes-professores" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/estudantes-professores') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Estudantes/Professores</Link>
                    <Link to="https://blog.sistemajobb.com.br/" target="_blank" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-white ${isActive('/blog') ? 'text-jobb-orange' : 'text-jobb-text-secondary'}`}>Blog</Link>

                    <div className="flex flex-col gap-4 mt-4">
                        <Button variant="primary" className="btn w-full" asChild><Link to="/teste-gratis">Teste Grátis</Link></Button>
                        <Button variant="outline" className="btn w-full" asChild><Link to="#">Login</Link></Button>
                    </div>
                </div>
            )}
        </motion.header>
    );
}
