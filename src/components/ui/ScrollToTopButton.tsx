import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] group"
                >
                    {/* Aurora Background Layer */}
                    <div className="absolute inset-[-4px] rounded-full aurora-bg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-[aurora-spin_4s_linear_infinite]" />

                    {/* Inner Button */}
                    <div className="relative bg-bg/90 border border-white/10 text-fg p-3 rounded-full shadow-lg backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                        <ChevronUp size={20} className="stroke-[3px]" />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};
