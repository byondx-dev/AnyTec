import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChangingTextProps {
    prefix?: string;
    words: string[];
    className?: string;
}

export const ChangingText: React.FC<ChangingTextProps> = ({ prefix = "Ich brauche", words, className = "" }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className={`flex flex-col md:flex-row md:items-baseline gap-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 ${className}`}>
            <span className="text-muted-foreground whitespace-nowrap">{prefix}</span>
            <div className="relative w-full overflow-hidden pb-4">
                <span className="opacity-0 w-auto inline-block">Ag</span> {/* Ghost element for baseline/height */}
                <AnimatePresence mode="wait">
                    <motion.span
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute left-0 bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500 whitespace-nowrap"
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
};
