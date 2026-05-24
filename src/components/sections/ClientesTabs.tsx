'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import clientsData from '@/data/clientsData.json';

const tabsData = [
    { id: 'todos', title: 'Todos' },
    { id: 'centro-oeste', title: 'Centro-oeste' },
    { id: 'norte', title: 'Norte' },
    { id: 'nordeste', title: 'Nordeste' },
    { id: 'sudeste', title: 'Sudeste' },
    { id: 'sul', title: 'Sul' }
];

// Combine all clients for the "Todos" tab
const allClients = Object.entries(clientsData).flatMap(([region, files]) =>
    files.map(file => ({ file, region }))
);

export function ClientesTabs() {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const getImages = () => {
        if (activeTab === 'todos') {
            return allClients;
        }
        const regionFiles = (clientsData as Record<string, string[]>)[activeTab] || [];
        return regionFiles.map(file => ({ file, region: activeTab }));
    };

    const imagesToDisplay = getImages();

    return (
        <section className="bg-secondary py-16">
            <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 lg:gap-12">
                    {/* Top Menu */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full justify-center border-b border-white/10 flex overflow-x-auto hide-scrollbar mb-4"
                    >
                        <ul className="flex flex-row">
                            {tabsData.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <li
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`group flex items-center justify-center gap-3 font-medium py-4 px-6 cursor-pointer transition-colors hover:bg-white/5 border-b-2 ${isActive
                                            ? 'bg-white/5 text-jobb-orange border-jobb-orange'
                                            : 'text-[#a3a3a3] hover:text-white border-transparent'
                                            }`}
                                    >
                                        <span className="text-center whitespace-nowrap">{tab.title}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Content Area */}
                    <div className="w-full">
                        <div className="">
                            <motion.div
                                layout
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center"
                            >
                                <AnimatePresence mode="popLayout">
                                    {imagesToDisplay.map((client, index) => (
                                        <motion.div
                                            key={`${client.region}-${client.file}`}
                                            layout
                                            initial={{ opacity: 0, scale: 0.4 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.4 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="relative w-full aspect-square flex items-center justify-center origin-center"
                                        >
                                            <img
                                                src={`/images/clientes/${client.region}/${client.file}`}
                                                alt={`Cliente ${client.file.replace('.webp', '').replace('.webp', '')}`}
                                                className="object-contain transition-[filter] duration-300 hover:grayscale rounded-3xl"
                                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                            {imagesToDisplay.length === 0 && (
                                <p className="text-[#a3a3a3] text-center py-12">Nenhum cliente encontrado nesta região.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
