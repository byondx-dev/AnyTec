import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, ArrowRight, CheckCircle2, Monitor, Truck, LayoutGrid, Lock, Activity, Code, Headphones, RefreshCw, PenTool, ClipboardCheck, Power, Cable, Thermometer, Battery } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { useNavigate } from 'react-router-dom';
import { VscAzure } from 'react-icons/vsc';
import { PiMicrosoftTeamsLogo, PiMicrosoftOutlookLogo, PiMicrosoftWordLogo, PiMicrosoftExcelLogo, PiMicrosoftPowerpointLogo } from 'react-icons/pi';
import { SiCisco, SiUbiquiti, SiFortinet, SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiGithub, SiGitlab, SiPrometheus, SiGrafana } from 'react-icons/si';
import { MicrosoftSharePointLogo, MicrosoftOneDriveLogo, MicrosoftIntuneLogo } from '@/components/icons/MicrosoftCustomIcons';
import { ChangingText } from '@/components/ui/ChangingText';

import carbonPattern from '@/assets/carbon-fibre.png';
import { useTranslation } from 'react-i18next';
import { FAQSection } from '@/components/sections/FAQSection';

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

            {/* 5. DevOps Section (Blue/Cyan Theme) */}
            <section className="container mx-auto px-6 mb-40">
                <ChangingText
                    prefix={t('services.devOps.prefix')}
                    words={['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Automated Testing', 'GitOps Workflows']}
                    className="mb-12"
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="p-10 md:p-16 rounded-[48px] bg-blue-50/50 dark:bg-[#0f1115] border border-blue-100 dark:border-white/10 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: `url(${carbonPattern})` }} />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            {/* Tool Stack Grid */}
                            <div className="bg-white/60 dark:bg-white/5 rounded-[32px] p-8 border border-white/50 dark:border-white/5 backdrop-blur-sm">
                                <h4 className="text-lg font-bold mb-4 text-slate-400 dark:text-white/50 uppercase tracking-wider">{t('services.devOps.tools.tools')}</h4>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                        <SiDocker size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#2496ED] transition-colors" />
                                        <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.devOps.tools.docker')}</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                        <SiKubernetes size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#326CE5] transition-colors" />
                                        <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.devOps.tools.kubernetes')}</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                        <SiTerraform size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#7B42BC] transition-colors" />
                                        <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.devOps.tools.terraform')}</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                        <SiAnsible size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#EE0000] transition-colors" />
                                        <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.devOps.tools.ansible')}</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                        <SiGithub size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#181717] dark:group-hover:text-white transition-colors" />
                                        <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.devOps.tools.github')}</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                        <SiGitlab size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#FC6D26] transition-colors" />
                                        <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.devOps.tools.gitlab')}</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                        <SiPrometheus size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#E6522C] transition-colors" />
                                        <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.devOps.tools.prometheus')}</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2 text-center border border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none group">
                                        <SiGrafana size={32} className="text-slate-600 dark:text-gray-400 group-hover:text-[#F46800] transition-colors" />
                                        <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">{t('services.devOps.tools.grafana')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="w-20 h-20 rounded-3xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                                <Code size={48} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                                {t('services.devOps.title')} <br />{t('services.devOps.titleSuffix')}
                            </h3>
                            <p className="text-xl text-slate-600 dark:text-muted leading-relaxed">
                                {t('services.devOps.description')}
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-gray-300">
                                    <CheckCircle2 className="text-blue-500 dark:text-blue-400" /> Continuous Integration & Delivery
                                </li>
                                <li className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-gray-300">
                                    <CheckCircle2 className="text-blue-500 dark:text-blue-400" /> Infrastructure as Code (IaC)
                                </li>
                                <li className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-gray-300">
                                    <CheckCircle2 className="text-blue-500 dark:text-blue-400" /> Container Orchestration
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 6. IT Operations Section (Cyan/Teal Theme) */}
            <section className="container mx-auto px-6 mb-40">
                <ChangingText
                    prefix={t('services.itOps.prefix')}
                    words={['User Helpdesk', 'Onboarding & Offboarding', 'Hardware Lifecycle', 'Software Deployment', 'Mobile Device Mgmt']}
                    className="mb-12"
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="p-10 md:p-16 rounded-[48px] bg-cyan-50/50 dark:bg-[#0f1115] border border-cyan-100 dark:border-white/10 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: `url(${carbonPattern})` }} />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="w-20 h-20 rounded-3xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                                <Headphones size={48} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                                {t('services.itOps.title')} <br />{t('services.itOps.titleSuffix')}
                            </h3>
                            <p className="text-xl text-slate-600 dark:text-muted leading-relaxed">
                                {t('services.itOps.description')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-cyan-100 dark:border-white/10 backdrop-blur-sm flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                                        <Headphones size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-gray-200">{t('services.itOps.features.desk')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-cyan-100 dark:border-white/10 backdrop-blur-sm flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                                        <Monitor size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-gray-200">{t('services.itOps.features.hardware')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-cyan-100 dark:border-white/10 backdrop-blur-sm flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                                        <RefreshCw size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-gray-200">{t('services.itOps.features.software')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-cyan-100 dark:border-white/10 backdrop-blur-sm flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                                        <ClipboardCheck size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-gray-200">{t('services.itOps.features.onboarding')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Integrated IT Ops Visual/Grid */}
                        <div className="bg-white/60 dark:bg-white/5 rounded-[32px] p-8 border border-white/50 dark:border-white/5 backdrop-blur-sm">
                            <h4 className="text-lg font-bold mb-4 text-slate-400 dark:text-white/50 uppercase tracking-wider">{t('services.itOps.features.cats')}</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                            <Power size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 dark:text-white">Onboarding Setup</div>
                                            <div className="text-xs text-slate-500">Hardware + Access</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono bg-slate-100 dark:bg-white/10 px-2 py-1 rounded">SLA: 48h</div>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                            <Headphones size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 dark:text-white">User Support</div>
                                            <div className="text-xs text-slate-500">M365, Teams, Printer</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono bg-slate-100 dark:bg-white/10 px-2 py-1 rounded">SLA: 15m</div>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <PenTool size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 dark:text-white">Maintenance</div>
                                            <div className="text-xs text-slate-500">Updates & Security</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono bg-slate-100 dark:bg-white/10 px-2 py-1 rounded">Auto</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 7. On-Prem Section (Amber/Slate Theme) */}
            <section className="container mx-auto px-6 mb-40">
                <ChangingText
                    prefix={t('services.onprem.prefix')}
                    words={['Server Rooms', 'Structured Cabling', 'Access Control', 'Office Relocation', 'Hardware Lifecycle']}
                    className="mb-12"
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="p-10 md:p-16 rounded-[48px] bg-amber-50/50 dark:bg-[#0f1115] border border-amber-100 dark:border-white/10 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: `url(${carbonPattern})` }} />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 dark:bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="w-20 h-20 rounded-3xl bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
                                <Server size={48} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                                {t('services.onprem.title')} <br />{t('services.onprem.titleSuffix')}
                            </h3>
                            <p className="text-xl text-slate-600 dark:text-muted leading-relaxed">
                                {t('services.onprem.description')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-amber-100 dark:border-white/10 backdrop-blur-sm flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400">
                                        <Cable size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-gray-200">{t('services.onprem.features.cabling')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-amber-100 dark:border-white/10 backdrop-blur-sm flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400">
                                        <Truck size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-gray-200">Office Moves</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-amber-100 dark:border-white/10 backdrop-blur-sm flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400">
                                        <Battery size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-gray-200">{t('services.onprem.features.power')}</span>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-amber-100 dark:border-white/10 backdrop-blur-sm flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400">
                                        <Thermometer size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-gray-200">{t('services.onprem.features.cooling')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Integrated On-Prem Visual/Grid */}
                        <div className="bg-white/60 dark:bg-white/5 rounded-[32px] p-8 border border-white/50 dark:border-white/5 backdrop-blur-sm">
                            <h4 className="text-lg font-bold mb-4 text-slate-400 dark:text-white/50 uppercase tracking-wider">Infrastructure Stats</h4>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                            <Activity size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 dark:text-white">{t('services.onprem.stats.uptime')}</div>
                                            <div className="text-xs text-slate-500">Power & Connectivity</div>
                                        </div>
                                    </div>
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                            <Truck size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 dark:text-white">{t('services.onprem.stats.response')}</div>
                                            <div className="text-xs text-slate-500">Physical Intervention</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-500/20 flex items-center justify-center text-slate-600 dark:text-slate-400">
                                            <Lock size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 dark:text-white">{t('services.onprem.stats.compliance')}</div>
                                            <div className="text-xs text-slate-500">Physical Security</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
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

            {/* 7. FAQ */}
            <FAQSection />

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
