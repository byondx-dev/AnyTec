import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FingerprintButtonProps {
    onPressChange?: (pressed: boolean) => void;
    idleText?: string;
    activeText?: string;
}

const FingerprintButton = ({
    onPressChange,
    idleText = "Press me",
    activeText = "Woaoaoaw"
}: FingerprintButtonProps) => {
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
                        "w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center bg-accent/10 text-accent transition-colors duration-300 relative overflow-hidden",
                        isPressed ? "border-transparent text-white" : "group-hover:bg-accent/20 group-hover:border-accent/50"
                    )}
                    animate={!isPressed ? {
                        boxShadow: [
                            "0 0 0px rgba(34,211,238,0)",
                            "0 0 15px rgba(34,211,238,0.3)",
                            "0 0 0px rgba(34,211,238,0)"
                        ]
                    } : {
                        boxShadow: "0 0 30px rgba(34,211,238,0.6)"
                    }}
                    transition={{
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    {/* Aurora Background Effect */}
                    <motion.div
                        className="absolute inset-0 opacity-0"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isPressed ? 1 : 0,
                            rotate: isPressed ? 360 : 0
                        }}
                        transition={{
                            opacity: { duration: 0.5, ease: "easeInOut" },
                            rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                        }}
                        style={{
                            background: "conic-gradient(from 0deg, transparent 0deg, #0ea5e9 180deg, transparent 360deg)",
                            filter: "blur(8px)"
                        }}
                    />

                    {/* Inner Aurora - more intense blue/cyan mix */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-500 opacity-0"
                        animate={{ opacity: isPressed ? 0.8 : 0 }}
                        transition={{ duration: 0.8 }}
                    />

                    <Fingerprint size={32} strokeWidth={1.5} className="relative z-10" />
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
                            {activeText}
                        </motion.span>
                    ) : (
                        <motion.span
                            key="idle"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="text-xs font-medium text-muted/70 tracking-widest uppercase group-hover:text-accent transition-colors"
                        >
                            {idleText}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </motion.button>
    );
};

export default FingerprintButton;
