import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint } from 'lucide-react';
import { cn } from '@/utils/cn';

const FingerprintButton = ({ onPressChange }: { onPressChange?: (pressed: boolean) => void }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressStart = () => {
        setIsPressed(true);
        onPressChange?.(true);
    };

    const handlePressEnd = () => {
        setIsPressed(false);
        onPressChange?.(false);
    };

    return (
        <motion.button
            className="relative group flex flex-col items-center justify-center gap-3 outline-none"
            onTapStart={handlePressStart}
            onTap={handlePressEnd}
            onTapCancel={handlePressEnd}
            whileTap={{ scale: 1.1 }}
            animate={{ scale: isPressed ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            {/* Fingerprint Icon Container */}
            <div className="relative">
                <motion.div
                    className={cn(
                        "w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center bg-accent/10 text-accent transition-colors duration-300",
                        isPressed ? "bg-accent text-black border-transparent shadow-[0_0_30px_rgba(34,211,238,0.6)]" : "group-hover:bg-accent/20 group-hover:border-accent/50"
                    )}
                    animate={!isPressed ? {
                        boxShadow: [
                            "0 0 0px rgba(34,211,238,0)",
                            "0 0 15px rgba(34,211,238,0.3)",
                            "0 0 0px rgba(34,211,238,0)"
                        ]
                    } : {}}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Fingerprint size={32} strokeWidth={1.5} />
                </motion.div>

                {/* Ripple Effect Ring (behind) */}
                {!isPressed && (
                    <motion.div
                        className="absolute inset-0 rounded-full border border-accent/20"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                )}
            </div>

            {/* Text */}
            <div className="h-6 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    {isPressed ? (
                        <motion.span
                            key="active"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="text-sm font-bold text-accent tracking-widest uppercase"
                        >
                            Woaoaoaw
                        </motion.span>
                    ) : (
                        <motion.span
                            key="idle"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="text-xs font-medium text-muted/70 tracking-widest uppercase group-hover:text-accent transition-colors"
                        >
                            Press me
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </motion.button>
    );
};

export default FingerprintButton;
