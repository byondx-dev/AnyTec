import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { articles } from '@/data/articles';

const ArticlePost: React.FC = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const lang = (i18n.language || 'en').startsWith('de') ? 'de' : 'en';

    const article = articles.find((a) => a.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Artikel nicht gefunden / Article not found</h1>
                <Button onClick={() => navigate('/artikel')}>Zurück / Back</Button>
            </div>
        );
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: article.title[lang],
                text: article.description[lang],
                url: window.location.href,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            // Could add toast notification here
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Header offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <article className="min-h-screen pt-28 pb-20">
            {/* Background decoration */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/artikel')}
                        className="group pl-0 hover:bg-transparent hover:text-accent"
                    >
                        <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={20} />
                        {lang === 'de' ? 'Zurück zur Übersicht' : 'Back to Articles'}
                    </Button>
                </motion.div>

                {/* Header Section */}
                <div className="max-w-4xl mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6"
                    >
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                            {article.category[lang]}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={16} /> {article.date[lang]}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={16} /> {article.readTime[lang]} {lang === 'de' ? 'Lesezeit' : 'Read time'}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
                    >
                        {article.title[lang]}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4"
                    >
                        <Button variant="secondary" size="sm" onClick={handleShare}>
                            <Share2 size={16} className="mr-2" /> {lang === 'de' ? 'Teilen' : 'Share'}
                        </Button>
                    </motion.div>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar (TOC) - Sticky on Desktop */}
                    <aside className="lg:col-span-3 lg:block hidden">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">{lang === 'de' ? 'Inhalt' : 'Contents'}</h4>
                                <nav className="flex flex-col space-y-2 border-l border-border/50">
                                    {article.toc && article.toc[lang] ? article.toc[lang].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="text-left text-sm text-muted hover:text-accent hover:border-l-2 hover:border-accent pl-4 -ml-[1px] py-1 transition-all"
                                        >
                                            {item.title}
                                        </button>
                                    )) : null}
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-8 lg:col-start-5">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="prose prose-lg dark:prose-invert prose-headings:text-fg prose-p:text-muted prose-a:text-accent prose-strong:text-fg max-w-none"
                            dangerouslySetInnerHTML={{ __html: article.content[lang] || '' }}
                        />
                    </div>

                </div>
            </div>
        </article>
    );
};

export default ArticlePost;
