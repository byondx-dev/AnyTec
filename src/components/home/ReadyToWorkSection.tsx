import React, { useState } from 'react';
import ShinyText from '@/components/ui/ShinyText';
import { motion, useReducedMotion, useMotionValue, useAnimationFrame } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Utensils,
  ShoppingBag,
  Flower2,
  Briefcase,
  Clapperboard,
  Scissors,
  Globe,
  Car,
  Building2,
  Tent
} from 'lucide-react';
import TiltedCard from '@/components/ui/TiltedCard';
import { useNavigate, Link } from 'react-router-dom';
import ColorBends from '@/components/visuals/ColorBends';
import { Button } from '@/components/ui/Button';
import { useSetupSelection } from '@/context/SetupSelectionContext';
import { useTheme } from '@/context/ThemeContext';
import gastroImg from '@/assets/gastro_setup.png';
import wellnessImg from '@/assets/wellness_setup.png';
import retailImg from '@/assets/retail_setup.png';
import workspaceImg from '@/assets/workspace_setup.png';
import salonImg from '@/assets/salon_setup.png';
import entertainmentImg from '@/assets/entertainment_setup.png';
import onlineStoreImg from '@/assets/onlinestore_setup.png';

type GalleryItem = string | { type: 'image'; src: string };

type ReadyCard = {
  title: string;
  subtitle: string;
  bullets: string[];
  backBullets: string[];
  images: GalleryItem[];
  icon: React.ElementType;
};

const setups: ReadyCard[] = [
  {
    title: 'Gastro Setup',
    subtitle: 'Restaurant + Café',
    bullets: ['POS + Payment VLAN', 'Gast-WLAN & Kamera-Ready'],
    backBullets: ['Rollout in 72h', 'HACCP konform', '24/7 Monitoring'],
    images: [{ type: 'image', src: gastroImg }, 'Gast-Netzwerk'],
    icon: Utensils,
  },
  {
    title: 'Retail Setup',
    subtitle: 'Kleidung & Supermarkt',
    bullets: ['Scanner + Kassen', 'Zentrale Updates'],
    backBullets: ['Inventur-Ready', 'Kassen-Segmentierung', 'Bondrucker angebunden'],
    images: [{ type: 'image', src: retailImg }, 'Lager & Logistik'],
    icon: ShoppingBag,
  },
  {
    title: 'Wellness Setup',
    subtitle: 'Sport & Yoga',
    bullets: ['Wearables-Ready WLAN', 'Privacy-Zonen'],
    backBullets: ['Self-Check-in', 'Kameras sicher getrennt', 'App-Integration'],
    images: [{ type: 'image', src: wellnessImg }, 'Trainingsfläche'],
    icon: Flower2,
  },
  {
    title: 'Workspace Setup',
    subtitle: 'Open Workspace',
    bullets: ['Zero Trust light', 'Sichere Gästennetze'],
    backBullets: ['Hotdesk-Management', 'Drucker isoliert', 'Onboarding Journeys'],
    images: [{ type: 'image', src: workspaceImg }, 'Meeting Rooms'],
    icon: Briefcase,
  },
  {
    title: 'Entertainment Setup',
    subtitle: 'Cinema',
    bullets: ['Ticketing + POS getrennt', 'Public WiFi stabil'],
    backBullets: ['Fallback LTE', 'Content Filter', 'Operator Dashboard'],
    images: [{ type: 'image', src: entertainmentImg }, 'Foyer & Ticket'],
    icon: Clapperboard,
  },
  {
    title: 'Salon Setup',
    subtitle: 'Friseur',
    bullets: ['Kalender + Kassensystem', 'Zonen für Gäste'],
    backBullets: ['Schneller Support', 'Geräteverwaltung', 'Termin-App Connect'],
    images: [{ type: 'image', src: salonImg }, 'Waschplätze', 'Rezeption'],
    icon: Scissors,
  },
  {
    title: 'Online Store Setup',
    subtitle: 'Dropshipper/Shop',
    bullets: ['Headless-ready', 'Monitoring & Alerts'],
    backBullets: ['CDN Tuning', 'Payment Routing', 'Backup & Restore'],
    images: [{ type: 'image', src: onlineStoreImg }, 'Analytics'],
    icon: Globe,
  },
  {
    title: 'Parkhaus & Mobility',
    subtitle: 'Parkhaus',
    bullets: ['Schranken-Anbindung', 'Kennzeichenerkennung'],
    backBullets: ['Payment Terminals', 'Videoüberwachung', 'VoIP Intercom'],
    images: ['Parkleitsystem', 'Einfahrt'],
    icon: Car,
  },
  {
    title: 'Building IT',
    subtitle: 'Bürogebäude',
    bullets: ['Zutrittskontrolle', 'Kamera (CCTV)'],
    backBullets: ['Sensorik & IoT', 'Meeting Room Displays', 'Visitor Management'],
    images: ['Empfang', 'Serverraum'],
    icon: Building2,
  },
  {
    title: 'Event IT',
    subtitle: 'Messe & Setbau',
    bullets: ['High-Density WLAN', 'Richtfunk-Strecken'],
    backBullets: ['Streaming Upload', 'Robustes Equipment', 'Mobile Cases'],
    images: ['Stage', 'Backstage'],
    icon: Tent,
  },
];

const ReadyCardItem = ({
  item,
  onToggle,
  flipped,
  isMobile, // Added here
}: {
  item: ReadyCard;
  onToggle: () => void;
  flipped: boolean;
  isMobile?: boolean;
}) => {
  const reduceMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const currentItem = item.images[currentImageIndex];

  const cardContent = (
    <div
      onClick={onToggle}
      className="w-full h-full outline-none"
      role="button"
      tabIndex={0}
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
        {/* Front Side */}
        <div
          className="relative h-[480px] rounded-3xl overflow-hidden bg-black/95 dark:bg-white text-white dark:text-black shadow-xl border border-white/5 dark:border-black/5 group-hover/card:shadow-2xl group-hover/card:shadow-accent/20 group-hover/card:border-accent/20 transition-all duration-500"
          style={{
            backfaceVisibility: 'hidden',
            display: reduceMotion && flipped ? 'none' : 'block',
          }}
        >
          {/* 1. Background Content (Slider) */}
          <div className="absolute inset-0 z-0 h-full group/slider">
            {typeof currentItem === 'string' ? (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-100 dark:via-gray-50 dark:to-white flex items-center justify-center">
                <span className="text-white/20 dark:text-black/10 text-4xl font-bold uppercase tracking-widest absolute top-1/3 transform -translate-y-1/2">
                  {currentItem}
                </span>
              </div>
            ) : (
              <img
                src={currentItem.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            )}

            {/* Slider Controls */}
            {item.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/80 transition-all backdrop-blur-md opacity-0 group-hover/slider:opacity-100 shadow-md"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/80 transition-all backdrop-blur-md opacity-0 group-hover/slider:opacity-100 shadow-md"
                >
                  <ChevronRight size={20} />
                </button>
                {/* Dots */}
                <div className="absolute top-1/2 mt-8 left-0 right-0 flex justify-center gap-1.5 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity">
                  {item.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* 2. Gradient Overlay */}
          <div
            className="absolute inset-x-0 bottom-0 h-[70%] z-10 pointer-events-none bg-gradient-to-t from-black via-black/80 to-transparent dark:from-[#F2F0E9] dark:via-[#F2F0E9]/90 dark:to-transparent backdrop-blur-md"
            style={{
              maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)'
            }}
          />

          {/* 3. Top Content */}
          <div className="absolute top-4 left-4 z-20">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <item.icon size={20} className="text-black dark:text-white" />
            </div>
          </div>

          <div className="absolute top-4 right-4 z-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-black text-black dark:text-white text-xs font-bold shadow-lg hover:scale-105 transition-transform">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Klick mich
            </div>
          </div>

          {/* 4. Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white dark:bg-black shadow-lg">
              <ShinyText text={item.subtitle} speed={3} className="text-xs font-bold tracking-wide uppercase" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white dark:text-black">{item.title}</h3>

            <Link
              to="/setups"
              onClick={(e) => e.stopPropagation()}
              className="group/btn relative inline-block px-8 py-3 rounded-full bg-white text-black dark:bg-black dark:text-white text-sm font-bold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10 dark:shadow-black/10"
            >
              Zu dem Angebot
            </Link>
          </div>


          {/* Mobile Silver Shine */}
          <div className="absolute inset-0 z-[25] pointer-events-none md:hidden overflow-hidden rounded-3xl">
            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 animate-shine-silver" />
          </div>
        </div>

        {/* Back Side (Details) */}
        <div
          className="absolute inset-0 h-[480px] rounded-3xl overflow-hidden bg-black/95 dark:bg-white text-white dark:text-black p-8 shadow-xl border border-white/5 dark:border-black/5 group-hover/card:shadow-2xl group-hover/card:shadow-accent/20 group-hover/card:border-accent/20 transition-all duration-500"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            display: reduceMotion && !flipped ? 'none' : 'block',
          }}
        >
          {/* Backplate for texture consistency */}
          <div className="absolute inset-0 border border-white/10 dark:border-black/10 rounded-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-bold">Details</h4>
            <div className="px-3 py-1 rounded-full bg-white/10 dark:bg-black/10 text-xs font-bold text-white/80 dark:text-black/80 uppercase tracking-wider">
              Inklusive
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-white/40 dark:text-black/40 mb-2">Features</h5>
              <ul className="space-y-3 text-sm font-medium text-white/90 dark:text-black/80">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-white/40 dark:text-black/40 mb-2">Service</h5>
              <ul className="space-y-3 text-sm font-medium text-white/90 dark:text-black/80">
                {item.backBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="absolute bottom-8 left-0 right-0 text-center text-xs text-white/30 dark:text-black/30 font-medium">
            Klicken zum Umdrehen
          </p>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="w-full h-full max-w-[380px] mx-auto snap-center group/card">
      {isMobile ? (
        <div className="relative w-full h-full cursor-pointer z-10">
          {cardContent}
        </div>
      ) : (
        <TiltedCard
          rotateAmplitude={12}
          scaleOnHover={1.05}
          containerHeight="480px"
          containerWidth="100%"
          showMobileWarning={false}
          showTooltip={false}
          className="cursor-pointer z-10"
        >
          {cardContent}
        </TiltedCard>
      )}
    </div>
  );
};

const MobileScrollLoop = ({
  items,
  flippedIndex,
  onToggleFlip
}: {
  items: ReadyCard[];
  flippedIndex: number | null;
  onToggleFlip: (index: number) => void;
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const animate = () => {
      // Logic for infinite wrapping (works for both auto and manual)
      // We assume content is Tripled: [A, B, C] where A=B=C.
      // We scroll within B. If we hit end of B (start of C), we jump to start of B.
      // If we hit start of B (end of A), we jump to end of B.

      const singleSetWidth = scrollContainer.scrollWidth / 3;

      // Forward Wrap
      if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
        scrollContainer.scrollLeft -= singleSetWidth;
      }
      // Backward Wrap (if user swipes left)
      else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft += singleSetWidth;
      }

      // Auto-Scroll
      if (!isPaused) {
        scrollContainer.scrollLeft += 0.5;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Initial center position (start of middle set)
  React.useLayoutEffect(() => {
    if (scrollRef.current) {
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  return (
    <div
      className="relative w-full h-[600px] flex items-center"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar w-full px-8 py-4 snap-x snap-mandatory touch-pan-x"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)} // longer pause
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Triple items for seamless bidirectional loop */}
        {[...items, ...items, ...items].map((item, rawIdx) => {
          const originalIdx = rawIdx % items.length;
          const uniqueKey = `loop-${item.title}-${rawIdx}`;

          return (
            <div
              key={uniqueKey}
              className="flex-shrink-0 w-[85vw] max-w-[320px] snap-center"
            >
              <div className="w-full h-full">
                <ReadyCardItem
                  item={item}
                  flipped={flippedIndex === originalIdx}
                  isMobile={true}
                  onToggle={() => onToggleFlip(originalIdx)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export const ReadyToWorkSection: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const { toggleSetup } = useSetupSelection();
  const { theme } = useTheme();

  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const config = {
    scale: isMobile ? 0.3 : 1, // Desktop: 1 (from screenshot)
    speed: isMobile ? 0.2 : 0.2, // Desktop: 0.2
    warpStrength: isMobile ? 1.0 : 1, // Desktop: 1
    parallax: isMobile ? 0.2 : 0.5, // Desktop: 0.5
    noise: isMobile ? 0.05 : 0.1 // Desktop: 0.1
  };

  return (
    <section className="relative py-24 isolate">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Static fallback if WebGL fails */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(92, 203, 255, 0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(7, 235, 235, 0.93),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(0, 183, 255, 0.89),transparent_40%)]" />

        {/* Theme-aware background - White in Light Mode */}
        <div className={`absolute inset-0 transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-transparent'}`} />

        <div
          className="absolute inset-0"
          style={{
            maskImage: isMobile
              ? 'radial-gradient(circle at center, black 60%, transparent 100%)' // Circle for mobile (narrow aspect)
              : 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
            WebkitMaskImage: isMobile
              ? 'radial-gradient(circle at center, black 60%, transparent 100%)'
              : 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
            mixBlendMode: theme === 'light' ? 'normal' : 'screen'
          }}
        >
          <ColorBends
            colors={['#37d7ff02', '#0062d1ff', '#0affd2']}
            rotation={0}
            speed={config.speed}
            scale={config.scale}
            frequency={1}
            warpStrength={config.warpStrength}
            mouseInfluence={1}
            parallax={config.parallax}
            noise={config.noise}
            transparent={theme === 'light'}
            className="opacity-50"
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

        {isMobile ? (
          <MobileScrollLoop
            items={setups}
            flippedIndex={flippedIndex}
            onToggleFlip={(idx) => {
              setFlippedIndex((prev) => (prev === idx ? null : idx));
              toggleSetup(setups[idx].title);
            }}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center justify-items-center">
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
        )}

        <div className="flex justify-center mt-8">
          <Button size="lg" onClick={() => navigate('/setups')}>
            Zu den Setups {'->'}
          </Button>
        </div>
      </div>
    </section>
  );
};
