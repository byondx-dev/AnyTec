import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`bg-clip-text inline-block text-transparent ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage:
                    'linear-gradient(120deg, #60a5fa 40%, #22d3ee 50%, #60a5fa 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration
            }}
        >
            {text}
        </div>
    );
};

export default ShinyText;
