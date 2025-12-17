import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Clock, Flame, Sparkles, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { cn } from '@/utils/cn';

type Article = {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  badge?: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: 'Cloud-Blueprint für Franchise-Rollouts',
    description: 'Wie du neue Standorte in Stunden statt Wochen an Microsoft 365 und deine Netzwerke anschließt.',
    category: 'Cloud',
    readTime: '7 Min',
    date: '01. Okt 2024',
    badge: 'Neu',
  },
  {
    id: 2,
    title: 'POS-Sicherheit: VLAN, Firewall & Payment',
    description: 'Best Practices für getrennte Kassen-Netze und warum PCI-DSS nicht wehtun muss.',
    category: 'Security',
    readTime: '6 Min',
    date: '18. Sep 2024',
  },
  {
    id: 3,
    title: 'WLAN in Retail-Flächen, das wirklich skaliert',
    description: 'Von Heatmaps bis Band Steering: ein praxisnaher Guide für stores mit hoher Dichte.',
    category: 'Retail',
    readTime: '9 Min',
    date: '05. Sep 2024',
    badge: 'Guide',
  },
  {
    id: 4,
    title: 'Zero Trust light für KMU',
    description: 'So startest du mit Conditional Access, MFA und Device Compliance ohne Overhead.',
    category: 'Security',
    readTime: '5 Min',
    date: '22. Aug 2024',
  },
  {
    id: 5,
    title: 'Hybrid-Setup: Cloud gesteuert, lokal resilient',
    description: 'Ein Architektur-Muster, das Cloud-Komfort mit lokaler Ausfallsicherheit kombiniert.',
    category: 'Cloud',
    readTime: '8 Min',
    date: '10. Aug 2024',
  },
  {
    id: 6,
    title: 'Schnellstart: Neues Office in 48h live',
    description: 'Checkliste und Toolkit für Netzwerk, Devices und Identitäten in Rekordzeit.',
    category: 'How-To',
    readTime: '4 Min',
    date: '28. Jul 2024',
  },
];

const categories = ['Alle', 'Cloud', 'Security', 'Retail', 'How-To'];

const ArticleCard = ({ item, highlight }: { item: Article; highlight?: boolean }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={cn(
      'border border-border rounded-2xl p-6 bg-card/80 backdrop-blur-md transition-all duration-300',
      highlight && 'lg:row-span-2 lg:col-span-2 relative overflow-hidden'
    )}
  >
    {highlight && (
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-500/10 pointer-events-none" />
    )}
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted mb-3">
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted2 text-fg/80">
        <Tag size={14} /> {item.category}
      </span>
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent">
        <Clock size={14} /> {item.readTime}
      </span>
      {item.badge && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fg text-bg">
          <Sparkles size={14} /> {item.badge}
        </span>
      )}
    </div>
    <h3 className={cn('text-2xl font-bold mb-3', highlight && 'text-3xl leading-tight')}>
      {item.title}
    </h3>
    <p className="text-muted mb-6 leading-relaxed">{item.description}</p>
    <div className="flex items-center gap-3 text-sm text-muted">
      <span className="flex items-center gap-2">
        <Bookmark size={16} className="text-accent" /> {item.date}
      </span>
      <span className="flex items-center gap-2">
        <Flame size={16} className="text-orange-500" /> {item.readTime} Lesezeit
      </span>
    </div>
  </motion.div>
);

const Articles: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filtered = useMemo(() => {
    if (activeCategory === 'Alle') return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-bg to-blue-500/5" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #38bdf8 0, transparent 20%), radial-gradient(circle at 80% 0%, #2563eb 0, transparent 18%), radial-gradient(circle at 40% 80%, #6366f1 0, transparent 22%)' }} />
        <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
              Wissenshub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
              Artikel, Playbooks & Updates <span className="text-muted/40">für moderne IT.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed mb-8">
              Kuratierte Beiträge zu Cloud-Setups, Sicherheit und Rollouts. Direkt aus unseren Projekten, damit dein Team schneller entscheidet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => setActiveCategory('Alle')}>
                Alle Artikel ansehen
              </Button>
              <Button size="lg" variant="secondary">
                Neueste Beiträge
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10 -mt-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="bg-card border border-border shadow-soft rounded-3xl p-5 flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-muted2 text-muted hover:text-fg'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {filtered.map((item, idx) => (
              <ArticleCard key={item.id} item={item} highlight={idx === 0} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
