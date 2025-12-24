import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { useSetupSelection } from '@/context/SetupSelectionContext';
import { cn } from '@/utils/cn';

type Setup = {
  name: string;
  category: string;
  bullets: string[];
};

const setupList: Setup[] = [
  { name: 'Gastro Setup', category: 'Gastro', bullets: ['POS + VLAN', 'WLAN für Gäste', 'Kameras optional'] },
  { name: 'Retail Setup', category: 'Retail', bullets: ['Scanner & Kassen', 'Zentrale Updates', 'Filial-VPN'] },
  { name: 'Wellness Setup', category: 'Wellness', bullets: ['Buchungssystem', 'Wearables-Ready', 'Privacy-Zonen'] },
  { name: 'Workspace Setup', category: 'Workspace', bullets: ['Hotdesk WLAN', 'Zero Trust light', 'Gastzugänge'] },
  { name: 'Entertainment Setup', category: 'Entertainment', bullets: ['Ticketing-Integration', 'Public WiFi', 'Redundanz'] },
  { name: 'Salon Setup', category: 'Salon', bullets: ['Kassen & Kalender', 'WLAN Zonen', 'Support Remote'] },
  { name: 'Online Store Setup', category: 'E-Commerce', bullets: ['Headless-ready', 'Shipping Anbindung', 'Monitoring'] },
];

const categories = ['Alle', 'Gastro', 'Retail', 'Wellness', 'Workspace', 'Entertainment', 'Salon', 'E-Commerce'];

export const Setups: React.FC = () => {
  const { selectedSetups, toggleSetup } = useSetupSelection();
  const [activeCategory, setActiveCategory] = useState('Alle');
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (activeCategory === 'Alle') return setupList;
    return setupList.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-12 bg-bg border-b border-border">
        <div className="container mx-auto px-6">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Setups</h1>
            <p className="text-lg text-muted max-w-3xl">
              Wähle die Setups, die zu deinem Raum passen. Selektion erscheint automatisch im Kontaktformular.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-card border border-border text-muted hover:text-fg'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => {
              const isSelected = selectedSetups.includes(item.name);
              return (
                <motion.button
                  key={item.name}
                  onClick={() => toggleSetup(item.name)}
                  className={cn(
                    'text-left p-6 rounded-2xl border transition-all relative bg-card overflow-hidden focus-visible:ring-2 focus-visible:ring-accent/40',
                  isSelected ? 'border-accent shadow-[0_10px_40px_-20px_rgba(59,130,246,0.45)]' : 'border-border hover:border-accent/40'
                  )}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-gradient-to-br from-accent via-transparent to-blue-500" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted tracking-wide">{item.category}</p>
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
                  <ul className="space-y-2 text-sm text-muted relative z-10">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.button>
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
                Kontakt
              </div>
              <h2 className="text-3xl font-bold">Passt ein Setup für dich?</h2>
              <p className="text-muted">
                Deine Auswahl wird im Formular mitgeschickt. Ergänze gern Details, wir melden uns in <span className="font-semibold text-fg"> &lt; 24h</span>.
              </p>
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
