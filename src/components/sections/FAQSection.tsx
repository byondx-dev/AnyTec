import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { cn } from '@/utils/cn';

const AnimateHeight = ({ isVisible, children }: { isVisible: boolean, children?: React.ReactNode }) => (
    <motion.div
        initial={false}
        animate={{ height: isVisible ? 'auto' : 0, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
    >
        {children}
    </motion.div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left group outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={cn("text-lg font-medium transition-colors duration-300 pr-8", isOpen ? "text-gradient-accent" : "text-fg group-hover:text-muted")}>{question}</span>
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0",
                    isOpen ? "bg-gradient-accent text-white rotate-180" : "bg-muted2 text-muted group-hover:bg-muted"
                )}>
                    <ChevronDown size={16} />
                </div>
            </button>
            <AnimateHeight isVisible={isOpen}>
                <div className="pb-8 text-muted leading-relaxed max-w-2xl">
                    {answer}
                </div>
            </AnimateHeight>
        </div>
    );
};

export const FAQSection = () => {
    const { t } = useTranslation();
    const [showAll, setShowAll] = useState(false);

    const allItems = t('home.faq.items', { returnObjects: true }) as Array<{ q: string, a: string }>;

    return (
        <section className="py-32 container mx-auto px-6" id="faq">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Left: Sticky Title */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                    <Reveal>
                        <span className="text-accent font-bold tracking-wider uppercase mb-4 block">{t('home.faq.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-fg dark:text-white">
                            {t('home.faq.title')} <br />
                            <span className="text-muted">{t('home.faq.titleSuffix')}</span>
                        </h2>
                        <p className="text-lg text-muted mb-8 leading-relaxed">
                            {t('home.faq.desc')}
                        </p>
                        <Button onClick={() => window.location.href = 'mailto:hello@anytec.biz'}>
                            {t('home.faq.button')}
                        </Button>
                    </Reveal>
                </div>

                {/* Right: Accordion */}
                <div className="lg:col-span-8">
                    <Reveal delay={0.2}>
                        <motion.div
                            layout
                            className={cn(
                                "space-y-4 relative transition-all duration-500",
                                !showAll && "max-h-[600px] overflow-hidden"
                            )}
                        >
                            {allItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    question={item.q}
                                    answer={item.a}
                                />
                            ))}

                            {/* Gradient Overlay */}
                            {!showAll && (
                                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg dark:from-bg to-transparent z-10 pointer-events-none" />
                            )}
                        </motion.div>

                        <div className="mt-8 flex justify-center lg:justify-start">
                            <Button
                                variant="ghost"
                                onClick={() => setShowAll(!showAll)}
                                className="mt-4 z-20 relative"
                            >
                                {showAll ? (
                                    <>{t('home.faq.showLess')} <ArrowUp className="ml-2 w-4 h-4" /></>
                                ) : (
                                    <>{t('home.faq.showMore')} <ArrowDown className="ml-2 w-4 h-4" /></>
                                )}
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
