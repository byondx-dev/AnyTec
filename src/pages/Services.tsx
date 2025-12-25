import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, ArrowRight, CheckCircle2, Monitor, Truck, LayoutGrid, Lock, Activity } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { useNavigate } from 'react-router-dom';
import { VscAzure } from 'react-icons/vsc';
import { PiMicrosoftTeamsLogo, PiMicrosoftOutlookLogo, PiMicrosoftWordLogo, PiMicrosoftExcelLogo, PiMicrosoftPowerpointLogo } from 'react-icons/pi';
import { SiCisco, SiUbiquiti, SiFortinet } from 'react-icons/si';
import { MicrosoftSharePointLogo, MicrosoftOneDriveLogo, MicrosoftIntuneLogo } from '@/components/icons/MicrosoftCustomIcons';
import { ChangingText } from '@/components/ui/ChangingText';
import serverRoomImg from '@/assets/server_room.png';
import carbonPattern from '@/assets/carbon-fibre.png';
import { useTranslation } from 'react-i18next';

const SectionHeader = ({ title }: { title: string }) => (
    <div className="mb-16 md:mb-24">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
            {title}
        </motion.h2>
    </div>
);

const SupportLevel = ({ level, title, desc, color }: { level: string, title: string, desc: string, color: string }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex gap-8 group"
    >
        <div className="relative">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-black ${color} shadow-lg z-10 relative group-hover:scale-110 transition-transform duration-300`}>
                {level}
            </div>
            <div className="absolute top-16 bottom-0 left-1/2 w-px bg-white/10 -z-0" />
        </div>
        <div className="pb-16 pt-2">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-muted text-lg max-w-xl">{desc}</p>
        </div>
    </motion.div>
);

const Services: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { t } = useTranslation();

    return (
        <div className="min-h-screen pt-32 pb-20 overflow-hidden" ref={containerRef}>

            {/* 1. Hero Section */}
            <section className="container mx-auto px-6 mb-32">
                <Reveal>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                        {t('services.hero.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                            {t('services.hero.titleSuffix')}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed mb-12">
                        {t('services.hero.description')}
                    </p>
                </Reveal>
            </section>

            {/* 2. Azure Section (Aurora Effect) */}
            <section className="container mx-auto px-6 mb-40">
                <ChangingText
                    prefix={t('services.azure.prefix')}
                    words={['Cloud Networking', 'Container Environments', 'Cloud Engineers', 'Kubernetes Cluster', 'Scalable Architectures']}
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative p-10 md:p-16 rounded-[48px] border border-blue-200 dark:border-blue-500/30 overflow-hidden shadow-2xl group"
                >
                    {/* Aurora Background */}
                    <div className="absolute inset-0 bg-blue-50 dark:bg-[#0b0f19] z-0 transition-colors duration-500" />
                    <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-blue-400/20 dark:bg-blue-600/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-60 animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[100%] bg-cyan-400/20 dark:bg-cyan-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="w-20 h-20 rounded-3xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 backdrop-blur-md">
                                <VscAzure size={48} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                                {t('services.azure.title')} <br />{t('services.azure.titleSuffix')}
                            </h3>
                            <p className="text-xl text-slate-600 dark:text-muted leading-relaxed max-w-lg">
                                {t('services.azure.description')}
                            </p>
                            <Button className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-lg shadow-blue-900/20">
                                {t('services.azure.button')}
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: t('services.azure.items.kubernetes.title'), desc: t('services.azure.items.kubernetes.desc') },
                                { title: t('services.azure.items.terraform.title'), desc: t('services.azure.items.terraform.desc') },
                                { title: t('services.azure.items.cicd.title'), desc: t('services.azure.items.cicd.desc') },
                                { title: t('services.azure.items.hybrid.title'), desc: t('services.azure.items.hybrid.desc') },
                                { title: t('services.azure.items.identity.title'), desc: t('services.azure.items.identity.desc') },
                                { title: t('services.azure.items.cost.title'), desc: t('services.azure.items.cost.desc') }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 border border-blue-100 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all backdrop-blur-sm shadow-sm dark:shadow-none"
                                >
                                    <h4 className="text-lg font-bold mb-2 text-blue-700 dark:text-blue-300">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-muted">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 3. M365 Modern Work Section */}
            <section className="container mx-auto px-6 mb-40">
                <ChangingText
                    prefix={t('services.m365.prefix')}
                    words={['Modern Workplace', 'Teams Telephony', 'SharePoint Intranet', 'Device Management', 'Secure Collab']}
                    className="mb-12"
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="p-10 md:p-16 rounded-[48px] bg-indigo-50/50 dark:bg-card dark:bg-gradient-to-br dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-white/10 relative overflow-hidden backdrop-blur-sm shadow-2xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { icon: PiMicrosoftTeamsLogo, name: 'Teams', color: 'text-[#6264A7]' },
                                    { icon: PiMicrosoftOutlookLogo, name: 'Outlook', color: 'text-[#0078D4]' },
                                    { icon: MicrosoftSharePointLogo, name: 'SharePoint', color: 'text-[#0078D4]' },
                                    { icon: MicrosoftOneDriveLogo, name: 'OneDrive', color: 'text-[#0078D4]' },
                                    { icon: PiMicrosoftWordLogo, name: 'Word', color: 'text-[#2B579A]' },
                                    { icon: PiMicrosoftExcelLogo, name: 'Excel', color: 'text-[#217346]' },
                                    { icon: PiMicrosoftPowerpointLogo, name: 'PowerPoint', color: 'text-[#B7472A]' },
                                    { icon: MicrosoftIntuneLogo, name: 'Intune', color: 'text-[#0078D4]' },
                                ].map((app, i) => (
                                    <motion.div
                                        key={app.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="aspect-square flex flex-col items-center justify-center gap-3 p-4 rounded-3xl bg-white dark:bg-white/5 border border-indigo-100 dark:border-white/5 hover:border-indigo-300 dark:hover:bg-white/10 hover:scale-105 transition-all cursor-default shadow-sm dark:shadow-none"
                                    >
                                        <app.icon size={42} className={app.color} />
                                        <span className="text-xs font-semibold text-slate-500 dark:text-muted-foreground">{app.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="w-20 h-20 rounded-3xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
                                <LayoutGrid size={48} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                                {t('services.m365.title')} <br />{t('services.m365.titleSuffix')}
                            </h3>
                            <p className="text-xl text-slate-600 dark:text-muted leading-relaxed">
                                {t('services.m365.description')}
                            </p>
                            <ul className="space-y-4">
                                {(t('services.m365.features', { returnObjects: true }) as string[]).map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-gray-300">
                                        <CheckCircle2 className="text-indigo-500 dark:text-indigo-400" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 4. Networking & Security Section (NEW) */}
            <section className="container mx-auto px-6 mb-40">
                <ChangingText
                    prefix={t('services.network.prefix')}
                    words={['Firewall Security', 'Endpoint Protection', 'XDR / EDR', 'WLAN Voucher System', 'Zero Trust Architecture']}
                    className="mb-12"
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="p-10 md:p-16 rounded-[48px] bg-emerald-50/50 dark:bg-[#0f1115] border border-emerald-100 dark:border-white/10 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: `url(${carbonPattern})` }} />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 dark:bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="w-20 h-20 rounded-3xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                                <Shield size={48} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                                {t('services.network.title')} <br />{t('services.network.titleSuffix')}
                            </h3>
                            <p className="text-xl text-slate-600 dark:text-muted leading-relaxed">
                                {t('services.network.description')}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {(t('services.network.tags', { returnObjects: true }) as string[]).map((tag, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-emerald-100 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-sm font-medium text-emerald-700 dark:text-emerald-400">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Vendor Portfolio Grid */}
                        <div className="bg-white/60 dark:bg-white/5 rounded-[32px] p-8 border border-white/50 dark:border-white/5 backdrop-blur-sm">
                            <h4 className="text-lg font-bold mb-4 text-slate-400 dark:text-white/50 uppercase tracking-wider">{t('services.network.vendors.network')}</h4>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                    <SiCisco size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#1BA0D7] transition-colors" />
                                    <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.network.vendors.cisco')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                    <SiFortinet size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#EE3124] transition-colors" />
                                    <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.network.vendors.fortinet')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                    <SiUbiquiti size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#0559C9] transition-colors" />
                                    <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.network.vendors.ubiquiti')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                    <Shield size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#F37021] transition-colors" />
                                    <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.network.vendors.watchguard')}</span>
                                </div>
                            </div>

                            <h4 className="text-lg font-bold mb-4 text-slate-400 dark:text-white/50 uppercase tracking-wider">{t('services.network.vendors.endpoint')}</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                    <Shield size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#FC0000] transition-colors" />
                                    <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.network.vendors.crowdstrike')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                    <Activity size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#6726F3] transition-colors" />
                                    <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.network.vendors.sentinelone')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                    <Server size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#FA582D] transition-colors" />
                                    <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.network.vendors.paloalto')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                    <Lock size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#D71921] transition-colors" />
                                    <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.network.vendors.trendmicro')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 5. On-Prem Operations (Timeline / Process) */}
            <section className="bg-white/5 py-32 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <SectionHeader title={t('services.onprem.title')} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="flex gap-6 group"
                            >
                                <div className="shrink-0 pt-1">
                                    <Server size={32} className="text-muted group-hover:text-accent transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{t('services.onprem.server.title')}</h3>
                                    <p className="text-muted leading-relaxed">
                                        {t('services.onprem.server.desc')}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="flex gap-6 group"
                            >
                                <div className="shrink-0 pt-1">
                                    <Truck size={32} className="text-muted group-hover:text-accent transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{t('services.onprem.moves.title')}</h3>
                                    <p className="text-muted leading-relaxed">
                                        {t('services.onprem.moves.desc')}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex gap-6 group"
                            >
                                <div className="shrink-0 pt-1">
                                    <Monitor size={32} className="text-muted group-hover:text-accent transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{t('services.onprem.lifecycle.title')}</h3>
                                    <p className="text-muted leading-relaxed">
                                        {t('services.onprem.lifecycle.desc')}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Visual Side - 3D Floating Card */}
                        <div className="relative h-[600px] flex items-center justify-center perspective-1000">
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotateX: [0, 5, 0],
                                    rotateY: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 dark:border-white/5 group"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <img src={serverRoomImg} alt="Server Room" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-z-10">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                                            <CheckCircle2 size={20} className="text-accent" /> {t('services.onprem.card.title')}
                                        </h4>
                                        <p className="text-white/80 text-sm">{t('services.onprem.card.desc')}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Background Elements */}
                            <div className="absolute -z-10 inset-0 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Support Levels */}
            <section className="container mx-auto px-6 py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <SectionHeader title={t('services.support.title')} />
                        <p className="text-xl text-muted mb-12">
                            {t('services.support.description')}
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" onClick={() => navigate('/kontakt')}>{t('services.support.button')}</Button>
                        </div>
                    </div>

                    <div className="relative pl-8 md:pl-0">
                        <div className="absolute top-0 bottom-0 left-[2.25rem] w-px bg-white/10 md:hidden" /> {/* Mobile Operations Line */}

                        <SupportLevel
                            level={t('services.support.levels.l1.level')}
                            color="bg-cyan-300 text-black"
                            title={t('services.support.levels.l1.title')}
                            desc={t('services.support.levels.l1.desc')}
                        />
                        <SupportLevel
                            level={t('services.support.levels.l2.level')}
                            color="bg-blue-500 text-white"
                            title={t('services.support.levels.l2.title')}
                            desc={t('services.support.levels.l2.desc')}
                        />
                        <SupportLevel
                            level={t('services.support.levels.l3.level')}
                            color="bg-indigo-600 text-white"
                            title={t('services.support.levels.l3.title')}
                            desc={t('services.support.levels.l3.desc')}
                        />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <div className="p-16 rounded-[48px] bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 relative overflow-hidden">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('services.cta.title')}</h2>
                    <Button size="lg" className="h-16 px-12 text-lg" onClick={() => navigate('/kontakt')}>
                        {t('services.cta.button')} <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </section>

        </div>
    );
};

export default Services;
