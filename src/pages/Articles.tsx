import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bookmark, Clock, Flame, Sparkles, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { cn } from '@/utils/cn';
import { FAQSection } from '@/components/sections/FAQSection';

import { articles } from '@/data/articles';
import { Article } from '@/data/articles';

const categories = ['Alle', 'Cloud', 'Security', 'Retail', 'How-To'];

const ArticleCard = ({ item, highlight }: { item: Article; highlight?: boolean }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').startsWith('de') ? 'de' : 'en';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={() => navigate(`/artikel/${item.slug}`)}
      className={cn(
        'border border-border rounded-2xl p-6 bg-card/80 backdrop-blur-md transition-all duration-300 cursor-pointer group hover:border-accent/50',
        highlight && 'lg:row-span-2 lg:col-span-2 relative overflow-hidden'
      )}
    >
      {highlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-500/10 pointer-events-none" />
      )}
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted mb-3">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted2 text-fg/80">
          <Tag size={14} /> {item.category[lang]}
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent">
          <Clock size={14} /> {item.readTime[lang]}
        </span>
        {item.badge && item.badge[lang] && (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fg text-bg">
            <Sparkles size={14} /> {item.badge[lang]}
          </span>
        )}
      </div>
      <h3 className={cn('text-2xl font-bold mb-3 group-hover:text-accent transition-colors', highlight && 'text-3xl leading-tight')}>
        {item.title[lang]}
      </h3>
      <p className="text-muted mb-6 leading-relaxed">{item.description[lang]}</p>
      <div className="flex items-center gap-3 text-sm text-muted">
        <span className="flex items-center gap-2">
          <Bookmark size={16} className="text-accent" /> {item.date[lang]}
        </span>
        <span className="flex items-center gap-2">
          <Flame size={16} className="text-orange-500" /> {item.readTime[lang]} Lesezeit
        </span>
      </div>
    </motion.div>
  )
};

const Articles: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const { t } = useTranslation();

  const filtered = useMemo(() => {
    // Basic filtering on German category name for now ensuring backward compat with 'Alle'
    if (activeCategory === 'Alle') return articles;
    // Check both languages or just one. Since data has same values mostly, check en or de.
    return articles.filter((a) => a.category.de === activeCategory || a.category.en === activeCategory);
  }, [activeCategory]);

  // Note: We might want to translate 'Alle' button text later using t('nav.all') etc.

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-bg to-blue-500/5" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #38bdf8 0, transparent 20%), radial-gradient(circle at 80% 0%, #2563eb 0, transparent 18%), radial-gradient(circle at 40% 80%, #6366f1 0, transparent 22%)' }} />
        <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
              {t('nav.knowledgeHub', 'Wissenshub')}
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

      <FAQSection />
    </div>
  );
};

export default Articles;
