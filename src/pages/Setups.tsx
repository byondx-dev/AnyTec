import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Info } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';

import { Reveal } from '@/components/animations/Reveal';
import { useSetupSelection } from '@/context/SetupSelectionContext';
import { cn } from '@/utils/cn';
import { useTranslation } from 'react-i18next';

type Setup = {
  name: string;
  category: string;
  bullets: string[];
  details: string;
};

export const Setups: React.FC = () => {
  const { selectedSetups, toggleSetup } = useSetupSelection();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSetup, setExpandedSetup] = useState<string | null>(null);
  const { t } = useTranslation();

  const categoriesMap = {
    all: t('setups.categories.alle'),
    gastro: t('setups.categories.gastro'),
    retail: t('setups.categories.retail'),
    wellness: t('setups.categories.wellness'),
    workspace: t('setups.categories.workspace'),
    entertainment: t('setups.categories.entertainment'),
    salon: t('setups.categories.salon'),
    ecommerce: t('setups.categories.ecommerce'),
  };

  const setupList: Setup[] = [
    { name: t('setups.items.gastro.name'), category: 'gastro', bullets: t('setups.items.gastro.bullets', { returnObjects: true }) as string[], details: t('setups.items.gastro.details') },
    { name: t('setups.items.retail.name'), category: 'retail', bullets: t('setups.items.retail.bullets', { returnObjects: true }) as string[], details: t('setups.items.retail.details') },
    { name: t('setups.items.wellness.name'), category: 'wellness', bullets: t('setups.items.wellness.bullets', { returnObjects: true }) as string[], details: t('setups.items.wellness.details') },
    { name: t('setups.items.workspace.name'), category: 'workspace', bullets: t('setups.items.workspace.bullets', { returnObjects: true }) as string[], details: t('setups.items.workspace.details') },
    { name: t('setups.items.entertainment.name'), category: 'entertainment', bullets: t('setups.items.entertainment.bullets', { returnObjects: true }) as string[], details: t('setups.items.entertainment.details') },
    { name: t('setups.items.salon.name'), category: 'salon', bullets: t('setups.items.salon.bullets', { returnObjects: true }) as string[], details: t('setups.items.salon.details') },
    { name: t('setups.items.ecommerce.name'), category: 'ecommerce', bullets: t('setups.items.ecommerce.bullets', { returnObjects: true }) as string[], details: t('setups.items.ecommerce.details') },
  ];

  const categoryKeys = Object.keys(categoriesMap);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return setupList;
    return setupList.filter((item) => item.category === activeCategory);
  }, [activeCategory, setupList]);

  const handleToggleDetails = (e: React.MouseEvent, setupName: string) => {
    e.stopPropagation();
    setExpandedSetup(expandedSetup === setupName ? null : setupName);
  };

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-12 bg-bg border-b border-border">
        <div className="container mx-auto px-6">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('setups.title')}</h1>
            <p className="text-lg text-muted max-w-3xl">
              {t('setups.description')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-8">
            {categoryKeys.map((catKey) => (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeCategory === catKey
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-card border border-border text-muted hover:text-fg'
                )}
              >
                {categoriesMap[catKey as keyof typeof categoriesMap]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 align-start">
            {filtered.map((item) => {
              const isSelected = selectedSetups.includes(item.name);
              const isExpanded = expandedSetup === item.name;

              return (
                <motion.div
                  key={item.name}
                  layout="position"
                  className={cn(
                    'text-left p-6 rounded-2xl border transition-all relative bg-card overflow-hidden group',
                    isSelected ? 'border-accent shadow-[0_10px_40px_-20px_rgba(59,130,246,0.45)]' : 'border-border hover:border-accent/40'
                  )}
                >
                  {/* Selection Click Area - Covers purely the selection logic areas, but we'll make the whole card clickable except the details button */}
                  <div
                    onClick={() => toggleSetup(item.name)}
                    className="cursor-pointer"
                  >
                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-gradient-to-br from-accent via-transparent to-blue-500" />
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div>
                        <p className="text-xs font-semibold uppercase text-muted tracking-wide">
                          {categoriesMap[item.category as keyof typeof categoriesMap]}
                        </p>
                        <h3 className="text-xl font-bold">{item.name}</h3>
                      </div>
                      <div
                        className={cn(
                          'w-10 h-10 rounded-full flex items-center justify-center border transition-all',
                          isSelected ? 'bg-accent text-white border-accent' : 'bg-muted2 border-border text-muted'
                        )}
                        aria-hidden
                      >
                        <Check size={18} />
                      </div>
                    </div>
                    <div className="h-24 rounded-xl border border-dashed border-border bg-muted2/40 flex items-center justify-center text-sm text-muted mb-4 relative z-10">
                      [Placeholder Visual: {item.name}]
                    </div>
                    <ul className="space-y-2 text-sm text-muted relative z-10 mb-6">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                      <li className="flex items-center gap-2 text-muted/60 italic">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                        {t('setups.andMore')}
                      </li>
                    </ul>
                  </div>

                  {/* Details Toggle Section - Modern Dropdown */}
                  <div className="relative z-20 pt-4 border-t border-border/50">
                    <button
                      onClick={(e) => handleToggleDetails(e, item.name)}
                      className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-colors w-full justify-between group-hover:text-accent",
                        isExpanded ? "text-accent" : "text-muted"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <Info size={16} />
                        {isExpanded ? t('setups.hideDetails') : t('setups.showDetails')}
                      </span>
                      <ChevronDown size={16} className={cn("transition-transform duration-300", isExpanded && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 text-sm text-muted leading-relaxed">
                            <p className="mb-3">
                              {item.details}
                            </p>
                            <div className="p-2 rounded-lg bg-accent/5 border border-accent/10 text-xs font-medium text-accent inline-block">
                              {t('setups.customizable')}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase">
                {t('setups.contact.badge')}
              </div>
              <h2 className="text-3xl font-bold">{t('setups.contact.title')}</h2>
              <p className="text-muted" dangerouslySetInnerHTML={{ __html: t('setups.contact.description') }}></p>
              {selectedSetups.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedSetups.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-card border border-border text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ContactForm className="space-y-6 bg-card p-8 md:p-10 rounded-3xl border border-border shadow-soft" />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Setups;
