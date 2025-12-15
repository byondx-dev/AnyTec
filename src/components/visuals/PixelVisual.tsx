import React from 'react';
import { motion } from 'framer-motion';

export const PixelVisual: React.FC = () => {
  const blocks = Array.from({ length: 64 }); // 8x8 gridish

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] bg-gradient-to-tr from-accent/20 via-blue-500/10 to-purple-500/20 rounded-full blur-[80px] animate-pulse" />
      </div>

      {/* Ring */}
      <motion.div 
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/20 dark:border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.1)]"
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Secondary Ring offset */}
      <motion.div 
        className="absolute w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full border border-accent/10 dark:border-accent/5"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      />

      {/* Pixel Mask Overlay */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-8">
        {blocks.map((_, i) => {
          // Calculate if this block should be "empty" to create the cut-out effect
          const row = Math.floor(i / 8);
          const col = i % 8;
          // Create a "circle" cut out by keeping opacity 0 in center
          const dist = Math.sqrt(Math.pow(row - 3.5, 2) + Math.pow(col - 3.5, 2));
          const isMask = dist < 3; 

          return (
            <motion.div
              key={i}
              className={`w-full h-full bg-bg transition-colors duration-500 ${isMask ? 'opacity-0' : 'opacity-100'}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: isMask ? 0 : 1 }}
              transition={{ delay: i * 0.01 + 0.5, duration: 0.5 }}
            />
          );
        })}
      </div>
    </div>
  );
};