'use client';

import { ArrowUp } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

export function ScrollToTop() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-jobb-orange hover:bg-jobb-orange-hover text-white p-3 rounded-full shadow-lg z-50 transition-[background-color,background-image,opacity,transform] duration-300 ${showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} weight="bold" />
        </button>
    );
}
