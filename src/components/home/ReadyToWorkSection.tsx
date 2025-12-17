import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ColorBends from '@/components/visuals/ColorBends';
import { Button } from '@/components/ui/Button';
import { useSetupSelection } from '@/context/SetupSelectionContext';

type ReadyCard = {
  title: string;
  subtitle: string;
  bullets: string[];
  backBullets: string[];
};

const setups: ReadyCard[] = [
  {
    title: 'Gastro Setup',
    subtitle: 'Restaurant + Café',
    bullets: ['POS + Payment VLAN', 'Gast-WLAN & Kamera-Ready'],
    backBullets: ['Rollout in 72h', 'HACCP konform', '24/7 Monitoring'],
  },
  {
    title: 'Retail Setup',
    subtitle: 'Kleidung & Supermarkt',
    bullets: ['Scanner + Kassen', 'Zentrale Updates'],
    backBullets: ['Inventur-Ready', 'Kassen-Segmentierung', 'Bondrucker angebunden'],
  },
  {
    title: 'Wellness Setup',
    subtitle: 'Sport & Yoga',
    bullets: ['Wearables-Ready WLAN', 'Privacy-Zonen'],
    backBullets: ['Self-Check-in', 'Kameras sicher getrennt', 'App-Integration'],
  },
  {
    title: 'Workspace Setup',
    subtitle: 'Open Workspace',
    bullets: ['Zero Trust light', 'Sichere Gästennetze'],
    backBullets: ['Hotdesk-Management', 'Drucker isoliert', 'Onboarding Journeys'],
  },
  {
    title: 'Entertainment Setup',
    subtitle: 'Cinema',
    bullets: ['Ticketing + POS getrennt', 'Public WiFi stabil'],
    backBullets: ['Fallback LTE', 'Content Filter', 'Operator Dashboard'],
  },
  {
    title: 'Salon Setup',
    subtitle: 'Friseur',
    bullets: ['Kalender + Kassensystem', 'Zonen für Gäste'],
    backBullets: ['Schneller Support', 'Geräteverwaltung', 'Termin-App Connect'],
  },
  {
    title: 'Online Store Setup',
    subtitle: 'Dropshipper/Shop',
    bullets: ['Headless-ready', 'Monitoring & Alerts'],
    backBullets: ['CDN Tuning', 'Payment Routing', 'Backup & Restore'],
  },
];

const ReadyCardItem = ({
  item,
  onToggle,
  flipped,
}: {
  item: ReadyCard;
  onToggle: () => void;
  flipped: boolean;
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-[380px] mx-auto snap-center">
      <div
        className="relative"
        style={{ perspective: '1200px' }}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <motion.div
          className="relative h-full"
          animate={flipped && !reduceMotion ? { rotateY: 180 } : { rotateY: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.68, 0, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 rounded-2xl border border-white/5 bg-white/[0.04] dark:bg-white/[0.02] backdrop-blur-md" />
          <div
            className="relative p-6 rounded-2xl border border-border/60 bg-card/80 shadow-soft overflow-hidden min-h-[320px] sm:min-h-[360px]"
            style={{
              backfaceVisibility: 'hidden',
              display: reduceMotion && flipped ? 'none' : 'block',
            }}
          >
            <div className="absolute right-4 top-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
              <span className="relative flex items-center">
                <span className="absolute inset-0 rounded-full animate-ping bg-accent/50" aria-hidden />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-accent" />
              </span>
              Klick mich
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted font-semibold">{item.subtitle}</p>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute inset-0 p-6 rounded-2xl border border-border/60 bg-card/90 shadow-soft min-h-[320px] sm:min-h-[360px] overflow-hidden"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              display: reduceMotion && !flipped ? 'none' : 'block',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold">Details</h4>
              <div className="px-3 py-1 rounded-full bg-muted2 text-xs font-semibold text-muted">
                Inklusive
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted">
              {item.backBullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted mt-4">Enter oder Space drücken, um wieder umzudrehen.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const ReadyToWorkSection: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const { toggleSetup, selectedSetups } = useSetupSelection();

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Static fallback if WebGL fails */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,92,122,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(138,92,255,0.22),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(0,255,209,0.22),transparent_40%)]" />
        <div className="absolute inset-0">
          <ColorBends
            colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
            rotation={30}
            speed={0.3}
            scale={1.2}
            frequency={1.4}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.08}
            transparent={false}
            className="opacity-100"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/20 to-bg/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-4">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold uppercase tracking-[0.2em]">
              Ready to Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Work IT Setups</h2>
            <p className="text-muted text-lg">
              Betriebsfertige Setups – optimiert je Raumtyp. Schnell live. Einfach supportbar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {setups.map((item, idx) => (
            <ReadyCardItem
              key={item.title}
              item={item}
              flipped={flippedIndex === idx}
              onToggle={() => {
                setFlippedIndex((prev) => (prev === idx ? null : idx));
                toggleSetup(item.title);
              }}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button size="lg" onClick={() => navigate('/setups')}>
            Zu den Setups {'->'}
          </Button>
        </div>
      </div>
    </section>
  );
};
