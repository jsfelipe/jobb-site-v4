'use client';

import { useState } from 'react';
import { Desktop, CursorClick, StudentIcon, ChalkboardTeacherIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { motion } from 'motion/react';

export function EstudantesProfessoresContent() {
    const [activeTab, setActiveTab] = useState<'estudantes' | 'professores'>('estudantes');

    return (
        <section className="bg-secondary section-padding py-16">
            <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-12">
                    {/* Top Menu */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full border-b border-white/10 flex"
                    >
                        <ul className="flex flex-row">
                            <li
                                onClick={() => setActiveTab('estudantes')}
                                className={`group flex items-center justify-center gap-3 font-medium py-4 px-6 cursor-pointer transition-colors hover:bg-white/5 border-b-2 ${activeTab === 'estudantes'
                                    ? 'bg-white/5 text-jobb-orange border-jobb-orange'
                                    : 'text-[#a3a3a3] hover:text-white border-transparent'
                                    }`}
                            >
                                <span className="text-center whitespace-nowrap">Para estudantes</span>
                            </li>
                            <li
                                onClick={() => setActiveTab('professores')}
                                className={`group flex items-center justify-center gap-3 font-medium py-4 px-6 cursor-pointer transition-colors hover:bg-white/5 border-b-2 ${activeTab === 'professores'
                                    ? 'bg-white/5 text-jobb-orange border-jobb-orange'
                                    : 'text-[#a3a3a3] hover:text-white border-transparent'
                                    }`}
                            >
                                <span className="text-center whitespace-nowrap">Para professores e faculdades</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Content Area */}
                    <div className="w-full mx-auto flex flex-col gap-6 text-left">
                        {activeTab === 'estudantes' ? (
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                                {/* Left Text Area */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                    className="w-full lg:w-3/4 xl:w-4/5 flex flex-col"
                                >
                                    <h2 className="text-3xl font-bold text-white mb-4">Estudantes</h2>
                                    <p className="text-[#a3a3a3] mb-8 leading-relaxed">
                                        Se você é um estudante de cursos relacionados ao audiovisual, o Jobb oferece um plano gratuito que é uma verdadeira alavanca para você aprender sobre como gerenciar orçamentos, custos de produção e finanças de seus projetos audiovisuais, o Jobb é a ferramenta certa para você. Veja como o Jobb pode ajudá-lo:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 mb-8">
                                        <div>
                                            <h3 className="text-white mb-2">1. Orçamentos inteligentes e rápidos</h3>
                                            <p className="text-[#a3a3a3] leading-relaxed">
                                                Crie orçamentos de forma descomplicada, tanto para o mercado publicitário ou para projetos incentivados. Incorporando os cálculos detalhados de taxas, impostos e comissões.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-white mb-2">2. Controle financeiro abrangente</h3>
                                            <p className="text-[#a3a3a3] leading-relaxed">
                                                Gerencie despesas com fornecedores, aloque verbas de produção e simplifique a prestação de contas. Visualize e aprove pagamentos com facilidade, mantendo suas finanças impecáveis.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-white mb-2">3. Gerenciamento de tarefas simplificado</h3>
                                            <p className="text-[#a3a3a3] leading-relaxed">
                                                Utilize recursos como quadros Kanban, calendários, cards, prazos e comentários, para gerenciar suas tarefas de maneira eficiente.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-white mb-2">4. Relatórios perspicazes</h3>
                                            <p className="text-[#a3a3a3] leading-relaxed">
                                                Obtenha insights valiosos e informações detalhadas sobre o desempenho de seus projetos com nossos relatórios gerenciais. Tome decisões estratégicas com confiança.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right CTA Area */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                    className="w-full lg:w-1/3 xl:w-1/3"
                                >
                                    <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-2xl p-8 flex flex-col gap-6 items-start">

                                        <StudentIcon size={48} className="text-jobb-orange" weight="fill" />

                                        <div className="flex flex-wrap">
                                            <h3 className="font-bold text-white text-lg mt-4 my-2">Aprenda na prática</h3>
                                            <p className="text-[#a3a3a3] mb-6 leading-relaxed">
                                                Se você é estudante, solicite sua versão de estudante e comece a aprimorar suas habilidades de gerenciamento agora mesmo.
                                            </p>
                                            <Link to="/teste-gratis" className="justify-center gradient hover:bg-orange-600 transition-colors text-white px-6 py-2.5 rounded-2xl">
                                                Quero testar
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : (
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start min-h-[400px]">
                                {/* Left Text Area */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                    className="w-full lg:w-3/4 xl:w-4/5 flex flex-col"
                                >
                                    <h2 className="text-3xl font-bold text-white mb-4">Professores e Faculdades</h2>
                                    <p className="text-[#a3a3a3] mb-8 leading-relaxed">
                                        Se você é um professor ou gestor de cursos de audiovisual, o Jobb está pronto para estabelecer parcerias estratégicas com você. Veja como podemos colaborar juntos:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-y-12 gap-x-8 mb-8">
                                        <div>
                                            <h3 className="text-white mb-2">1. Parcerias educacionais</h3>
                                            <p className="text-[#a3a3a3] leading-relaxed">
                                                Entre em contato para explorar parcerias educacionais com o Jobb. Nós oferecemos planos especiais para estudantes e instituições de ensino que desejam enriquecer seus programas acadêmicos com um software de gestão audiovisual usado por diversas produtoras no mercado nacional.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-white mb-2">2. Demonstração do Jobb</h3>
                                            <p className="text-[#a3a3a3] leading-relaxed">
                                                Agende uma demonstração online personalizada do Jobb para seus alunos e professores.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-white mb-2">3. Planos personalizados para alunos</h3>
                                            <p className="text-[#a3a3a3] leading-relaxed">
                                                Saiba que podemos criar planos educacionais personalizados para seus alunos. Entre em contato para discutir como o Jobb pode ser integrado ao seu currículo.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right CTA Area */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                    className="w-full lg:w-1/3 xl:w-1/3"
                                >
                                    <div className="bg-card transition-colors duration-300 hover:bg-card/50 rounded-2xl p-8 flex flex-col gap-6 items-start">

                                        <ChalkboardTeacherIcon className="text-jobb-orange" size={48} />
                                        <div className="flex flex-wrap">
                                            <h3 className="font-bold text-white text-lg mt-4 my-2">Seja um Parceiro</h3>
                                            <p className="text-[#a3a3a3] mb-6 leading-relaxed">
                                                Entre em contato conosco para conhecer mais sobre as condições especiais para professores e instituições de ensino.
                                            </p>
                                            <Link to="https://api.whatsapp.com/send?phone=5581994384020&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Sistema%20Jobb!" target="_blank" className="justify-center gradient hover:bg-orange-600 transition-colors text-white px-6 py-2.5 rounded-2xl">
                                                Fale com um consultor
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
