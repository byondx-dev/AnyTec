import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/animations/Reveal';
import { Button } from '@/components/ui/Button';
import {
    Cloud, Server, Network, ShieldCheck,
    Settings, Layers, RefreshCw, ArrowRight,
    Brain, Bot, Workflow, Code, Terminal,
    Activity, Headphones, Monitor, ShieldAlert,
    GitBranch, Container, Laptop
} from 'lucide-react';
import hybridEnvImg from '@/assets/hybrid_env.jpg';
import onPremImg from '@/assets/on_prem.jpg';
import aiOpsImg from '@/assets/ai_ops.jpg';
import cloudOpsImg from '@/assets/cloud_ops.jpg';
import devOpsImg from '@/assets/dev_ops.jpg';
import itOpsImg from '@/assets/it_ops.jpg';


interface FeatureCardProps {
    icon: React.ReactNode;
    label: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, label }) => (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-accent/30 transition-colors">
        <div className="text-accent">{icon}</div>
        <span className="text-sm font-medium text-slate-700 dark:text-gray-300">{label}</span>
    </div>
);

const ServiceHighlights: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className="flex flex-col gap-24 py-24 overflow-hidden relative">

            {/* 1. Cloud Operations */}
            <section className="container mx-auto px-6 relative z-10">
                <Reveal width="100%">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Content */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10"
                            >
                                <motion.span variants={itemVariants} className="text-blue-400 font-bold tracking-wider uppercase mb-4 text-sm block">{t('home.cloudOps.badge')}</motion.span>
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-fg dark:text-white mb-6 leading-tight">
                                    {t('home.cloudOps.title')}
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-muted text-lg mb-8 leading-relaxed">
                                    {t('home.cloudOps.description')}
                                </motion.p>

                                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-center mb-10 w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
                                        <FeatureCard icon={<Cloud size={20} className="text-blue-400" />} label={t('home.cloudOps.features.azure')} />
                                        <FeatureCard icon={<ShieldCheck size={20} className="text-blue-400" />} label={t('home.cloudOps.features.m365')} />
                                        <FeatureCard icon={<Settings size={20} className="text-blue-400" />} label={t('home.cloudOps.features.security')} />
                                        <FeatureCard icon={<RefreshCw size={20} className="text-blue-400" />} label={t('home.cloudOps.features.migration')} />
                                    </div>

                                    {/* Integrated Cloud Visual */}
                                    <div className="hidden md:flex w-32 shrink-0 items-center justify-center">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                                            <Cloud size={48} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Button onClick={() => navigate('/services')} variant="ghost" className="w-fit border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500">
                                        {t('home.cloudOps.button')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Visual - Image Placeholder (Right on Desktop) */}
                            {/* Visual - Cloud Operations Image */}
                            <div className="relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden group">
                                <div className="absolute inset-0 bg-[#0f1420]">
                                    <img
                                        src={cloudOpsImg}
                                        alt="Cloud Operations"
                                        className="w-full h-full object-cover dark:opacity-80 transition-opacity duration-700"
                                    />
                                    {/* Cinematic Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent opacity-90 hidden dark:block" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-transparent to-transparent opacity-50 hidden dark:block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* 2. On-Premises */}
            <section className="container mx-auto px-6 relative z-10">
                <Reveal width="100%">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Visual - Image Placeholder (Left on Desktop) */}
                            {/* Visual - Image (Left on Desktop) */}
                            <div className="order-2 lg:order-1 relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-r border-white/10 overflow-hidden group">
                                <div className="absolute inset-0">
                                    <img
                                        src={onPremImg}
                                        alt="On-Premises Infrastructure"
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />
                                    {/* Cinematic Overlay - Vignette & Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80 hidden dark:block" />
                                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(11,15,25,0.8)] pointer-events-none hidden dark:block" />
                                </div>
                            </div>

                            {/* Content */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="order-1 lg:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10"
                            >
                                <motion.span variants={itemVariants} className="text-blue-400 font-bold tracking-wider uppercase mb-4 text-sm block">{t('home.onPrem.badge')}</motion.span>
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-fg dark:text-white mb-6 leading-tight">
                                    {t('home.onPrem.title')}
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-muted text-lg mb-8 leading-relaxed">
                                    {t('home.onPrem.description')}
                                </motion.p>

                                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-center mb-10">
                                    {/* Features */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
                                        <FeatureCard icon={<Server size={20} className="text-blue-400" />} label={t('home.onPrem.features.racks')} />
                                        <FeatureCard icon={<Network size={20} className="text-blue-400" />} label={t('home.onPrem.features.network')} />
                                        <FeatureCard icon={<Settings size={20} className="text-blue-400" />} label={t('home.onPrem.features.maintenance')} />
                                        <FeatureCard icon={<Layers size={20} className="text-blue-400" />} label={t('home.onPrem.features.rollout')} />
                                    </div>

                                    {/* Mini Server Rack Animation */}
                                    <div className="hidden md:block w-32 shrink-0">
                                        <div className="w-full aspect-[2/3] border border-blue-500/20 rounded bg-slate-100 dark:bg-black/40 backdrop-blur-sm flex flex-col gap-1 p-1 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-colors">
                                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                                <div key={i} className="flex-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-[2px] flex items-center px-2 gap-1.5 transition-colors">
                                                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></div>
                                                    <div className="flex-1 h-0.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden transition-colors">
                                                        <motion.div
                                                            className="h-full bg-blue-500/50"
                                                            animate={{ x: ['-100%', '100%'] }}
                                                            transition={{ duration: 1.5 + (i * 0.2), repeat: Infinity, ease: 'linear' }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Button onClick={() => navigate('/services')} variant="ghost" className="w-fit border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500">
                                        {t('home.onPrem.button')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* 3. Hybrid Environments */}
            <section className="container mx-auto px-6 relative z-10">
                <Reveal width="100%">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Content */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10"
                            >
                                <motion.span variants={itemVariants} className="text-blue-400 font-bold tracking-wider uppercase mb-4 text-sm block">{t('home.hybrid.badge')}</motion.span>
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-fg dark:text-white mb-6 leading-tight">
                                    {t('home.hybrid.title')}
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-muted text-lg mb-8 leading-relaxed">
                                    {t('home.hybrid.description')}
                                </motion.p>

                                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-center mb-10 w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
                                        <FeatureCard icon={<Layers size={20} className="text-blue-400" />} label={t('home.hybrid.features.arc')} />
                                        <FeatureCard icon={<ShieldCheck size={20} className="text-blue-400" />} label={t('home.hybrid.features.ad')} />
                                        <FeatureCard icon={<Cloud size={20} className="text-blue-400" />} label={t('home.hybrid.features.saas')} />
                                        <FeatureCard icon={<RefreshCw size={20} className="text-blue-400" />} label={t('home.hybrid.features.integration')} />
                                    </div>

                                    {/* Mini Connecting Worlds Visual */}
                                    <div className="hidden md:block w-48 shrink-0 relative h-24 flex items-center justify-center">
                                        {/* Connection Lines */}
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                            <motion.path
                                                d="M 20 48 Q 96 90 192 48"
                                                stroke="url(#gradient-blue-mini)"
                                                strokeWidth="2"
                                                fill="none"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                whileInView={{ pathLength: 1, opacity: 1 }}
                                                transition={{ duration: 2 }}
                                            />
                                            <defs>
                                                <linearGradient id="gradient-blue-mini" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                                    <stop offset="50%" stopColor="#3b82f6" />
                                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <div className="flex justify-between w-full relative z-10 px-2">
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="w-16 h-20 rounded-lg bg-blue-500/10 border border-blue-500/30 backdrop-blur flex flex-col items-center justify-center gap-1"
                                            >
                                                <Server size={20} className="text-blue-400" />
                                                <span className="text-[8px] text-blue-200 uppercase tracking-widest">On-Prem</span>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="w-16 h-20 rounded-lg bg-cyan-500/10 border border-cyan-500/30 backdrop-blur flex flex-col items-center justify-center gap-1"
                                            >
                                                <Cloud size={20} className="text-cyan-400" />
                                                <span className="text-[8px] text-cyan-200 uppercase tracking-widest">Cloud</span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Button onClick={() => navigate('/services')} variant="ghost" className="w-fit border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500">
                                        {t('home.hybrid.button')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Visual - Image (Right on Desktop) */}
                            <div className="relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden group">
                                <div className="absolute inset-0">
                                    <img
                                        src={hybridEnvImg}
                                        alt="Hybrid Environments"
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />
                                    {/* Cinematic Overlay - Vignette & Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80 hidden dark:block" />
                                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(11,15,25,0.8)] pointer-events-none hidden dark:block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* 4. AI Operations */}
            <section className="container mx-auto px-6 relative z-10">
                <Reveal width="100%">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Visual - Image Placeholder (Left on Desktop) */}
                            <div className="order-2 lg:order-1 relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-r border-white/10 overflow-hidden group">
                                <div className="absolute inset-0">
                                    <img
                                        src={aiOpsImg}
                                        alt="AI Operations"
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />
                                    {/* Cinematic Overlay - Vignette & Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80 hidden dark:block" />
                                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(11,15,25,0.8)] pointer-events-none hidden dark:block" />
                                </div>
                            </div>

                            {/* Content */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="order-1 lg:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10"
                            >
                                <motion.span variants={itemVariants} className="text-blue-400 font-bold tracking-wider uppercase mb-4 text-sm block">{t('home.aiOps.badge')}</motion.span>
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-fg dark:text-white mb-6 leading-tight">
                                    {t('home.aiOps.title')}
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-muted text-lg mb-8 leading-relaxed">
                                    {t('home.aiOps.description')}
                                </motion.p>

                                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-center mb-10 w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
                                        <FeatureCard icon={<Brain size={20} className="text-blue-400" />} label={t('home.aiOps.features.llm')} />
                                        <FeatureCard icon={<Layers size={20} className="text-blue-400" />} label={t('home.aiOps.features.rag')} />
                                        <FeatureCard icon={<Bot size={20} className="text-blue-400" />} label={t('home.aiOps.features.agents')} />
                                        <FeatureCard icon={<Workflow size={20} className="text-blue-400" />} label={t('home.aiOps.features.training')} />
                                    </div>

                                    {/* Integrated AI Visual */}
                                    <div className="hidden md:flex w-32 shrink-0 items-center justify-center">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-cyan-600/10 border border-blue-500/20 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                                            <Brain size={48} className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Button onClick={() => navigate('/services')} variant="ghost" className="w-fit border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500">
                                        {t('home.aiOps.button')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* 5. Dev Operations */}
            <section className="container mx-auto px-6 relative z-10">
                <Reveal width="100%">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Content */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10"
                            >
                                <motion.span variants={itemVariants} className="text-blue-400 font-bold tracking-wider uppercase mb-4 text-sm block">{t('home.devOps.badge')}</motion.span>
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-fg dark:text-white mb-6 leading-tight">
                                    {t('home.devOps.title')}
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-muted text-lg mb-8 leading-relaxed">
                                    {t('home.devOps.description')}
                                </motion.p>

                                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-center mb-10 w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
                                        <FeatureCard icon={<GitBranch size={20} className="text-blue-400" />} label={t('home.devOps.features.cicd')} />
                                        <FeatureCard icon={<Container size={20} className="text-blue-400" />} label={t('home.devOps.features.container')} />
                                        <FeatureCard icon={<Code size={20} className="text-blue-400" />} label={t('home.devOps.features.iac')} />
                                        <FeatureCard icon={<Activity size={20} className="text-blue-400" />} label={t('home.devOps.features.monitoring')} />
                                    </div>

                                    {/* Integrated Dev Ops Visual */}
                                    <div className="hidden md:flex w-32 shrink-0 items-center justify-center">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                                            <Code size={48} className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Button onClick={() => navigate('/services')} variant="ghost" className="w-fit border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500">
                                        {t('home.devOps.button')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Visual - Image Placeholder (Right on Desktop) */}
                            {/* Visual - Dev Ops Image */}
                            <div className="relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden group">
                                <div className="absolute inset-0 bg-[#0f1420]">
                                    <img
                                        src={devOpsImg}
                                        alt="Dev Operations"
                                        className="w-full h-full object-cover dark:opacity-80 transition-opacity duration-700"
                                    />
                                    {/* Cinematic Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent opacity-90 hidden dark:block" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-transparent to-transparent opacity-50 hidden dark:block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* 6. IT Operations */}
            <section className="container mx-auto px-6 relative z-10">
                <Reveal width="100%">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Visual - Image Placeholder (Left on Desktop) */}
                            <div className="order-2 lg:order-1 relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-r border-white/10 overflow-hidden group">
                                <div className="absolute inset-0 bg-[#0f1420]">
                                    <img
                                        src={itOpsImg}
                                        alt="IT Operations"
                                        className="w-full h-full object-cover dark:opacity-80 transition-opacity duration-700"
                                    />
                                    {/* Cinematic Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent opacity-90 hidden dark:block" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-transparent to-transparent opacity-50 hidden dark:block" />
                                </div>
                            </div>

                            {/* Content */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="order-1 lg:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10"
                            >
                                <motion.span variants={itemVariants} className="text-blue-400 font-bold tracking-wider uppercase mb-4 text-sm block">{t('home.itOps.badge')}</motion.span>
                                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-fg dark:text-white mb-6 leading-tight">
                                    {t('home.itOps.title')}
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-muted text-lg mb-8 leading-relaxed">
                                    {t('home.itOps.description')}
                                </motion.p>

                                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-center mb-10 w-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
                                        <FeatureCard icon={<Headphones size={20} className="text-blue-400" />} label={t('home.itOps.features.desk')} />
                                        <FeatureCard icon={<Monitor size={20} className="text-blue-400" />} label={t('home.itOps.features.mdm')} />
                                        <FeatureCard icon={<Activity size={20} className="text-blue-400" />} label={t('home.itOps.features.network')} />
                                        <FeatureCard icon={<ShieldAlert size={20} className="text-blue-400" />} label={t('home.itOps.features.updates')} />
                                    </div>

                                    {/* Integrated IT Ops Visual */}
                                    <div className="hidden md:flex w-32 shrink-0 items-center justify-center">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                                            <Laptop size={48} className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Button onClick={() => navigate('/services')} variant="ghost" className="w-fit border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500">
                                        {t('home.itOps.button')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </Reveal>
            </section>

        </div>
    );
};

export default ServiceHighlights;
