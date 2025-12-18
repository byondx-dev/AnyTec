import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Shield, Network, ArrowRight, CheckCircle2, Box, Truck, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { useNavigate } from 'react-router-dom';
import { VscAzure } from 'react-icons/vsc';
import serverRoomImg from '@/assets/server_room.png';


const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="mb-16 md:mb-24">
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20"
        >
            {subtitle}
        </motion.span>
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

const CloudServiceCard = ({ title, desc, icon: Icon, delay = 0 }: { title: string, desc: string, icon: any, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="group relative p-8 rounded-[32px] bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 hover:border-accent/30 transition-all duration-500 overflow-hidden"
    >
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-500">
                <Icon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-muted leading-relaxed">{desc}</p>
        </div>
    </motion.div>
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

    return (
        <div className="min-h-screen pt-32 pb-20 overflow-hidden" ref={containerRef}>

            {/* 1. Hero Section */}
            <section className="container mx-auto px-6 mb-32">
                <Reveal>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                        IT Services <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                            Reimagined.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed mb-12">
                        Von der Cloud bis zum Kabel im Boden. Wir kümmern uns um die Technik, damit du dich auf dein Business konzentrieren kannst.
                    </p>
                </Reveal>
            </section>

            {/* 2. Cloud & Modern Work (Bento Grid) */}
            <section className="container mx-auto px-6 mb-40">
                <SectionHeader title="Cloud & Modern Work" subtitle="Digital Backbone" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Large Card */}
                    <div className="lg:col-span-2 p-10 rounded-[40px] bg-card dark:bg-[#0b0f19] border border-border dark:border-white/10 relative overflow-hidden group shadow-soft">
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                            <Cloud size={200} />
                        </div>
                        <div className="relative z-10 max-w-md">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-8">
                                <VscAzure size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Microsoft Azure & Cloud Infrastructure</h3>
                            <p className="text-muted text-lg mb-8">Skalierbare Server, Datenbanken und App-Hosting. Wir migrieren deine Legacy-Systeme in die moderne Cloud. Sicher, kosteneffizient und weltweit verfügbar.</p>
                            <ul className="space-y-3 mb-8">
                                {['Virtual Machines & VDI', 'Backup & Disaster Recovery', 'Hybrid Cloud Setups'].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                                        <CheckCircle2 size={16} className="text-blue-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Tall Card */}
                    <div className="row-span-2 p-10 rounded-[40px] bg-card dark:bg-gradient-to-br dark:from-indigo-900/20 dark:to-purple-900/20 border border-border dark:border-white/10 relative overflow-hidden backdrop-blur-sm shadow-soft">
                        <div className="absolute inset-0 bg-noise opacity-5" />
                        <div className="w-16 h-16 rounded-2xl bg-accent/20 dark:bg-[#593fd6]/20 text-accent dark:text-[#593fd6] flex items-center justify-center mb-8">
                            <LayoutGrid size={32} />
                        </div>
                        <h3 className="text-3xl font-bold mb-6">Microsoft 365 Modern Work</h3>
                        <p className="text-muted mb-8 leading-relaxed">
                            Die komplette Office-Suite, Teams Telefonie und SharePoint. Perfekt konfiguriert für remote Teams.
                        </p>
                        <div className="space-y-4">
                            {/* Decorative UI Elements */}
                            <div className="bg-muted2/50 dark:bg-black/40 p-4 rounded-xl border border-border dark:border-white/5 backdrop-blur-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><Cloud size={14} /></div>
                                    <div className="text-xs font-bold">OneDrive Sync</div>
                                </div>
                                <div className="h-1.5 w-full bg-muted dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-3/4 animate-pulse" />
                                </div>
                            </div>

                            <div className="bg-muted2/50 dark:bg-black/40 p-4 rounded-xl border border-border dark:border-white/5 backdrop-blur-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center"><Shield size={14} /></div>
                                    <div className="text-xs font-bold">Intune Policy</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                                    <span className="text-[10px] text-green-400">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Card */}
                    <CloudServiceCard
                        title="Cyber Security"
                        desc="Managed Firewall, Endpoint Protection und Email Security."
                        icon={Shield}
                    />

                    {/* Small Card */}
                    <CloudServiceCard
                        title="Network Solutions"
                        desc="SD-WAN, VPN und Standort-Vernetzung für maximale Performance."
                        icon={Network}
                        delay={0.1}
                    />
                </div>
            </section>

            {/* 3. On-Prem Support (Timeline / Process) */}
            <section className="bg-white/5 py-32 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <SectionHeader title="On-Prem Operations" subtitle="Physical Infrastructure" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div className="flex gap-6 group">
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-black group-hover:border-accent transition-colors">
                                    <Server size={24} className="group-hover:text-accent transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Serverraum Management</h3>
                                    <p className="text-muted leading-relaxed">
                                        Wir kümmern uns um deine Racks. Von der sauberen Verkabelung bis zum Austausch defekter Hardware. Ordnung ist Sicherheit.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-black group-hover:border-accent transition-colors">
                                    <Truck size={24} className="group-hover:text-accent transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Office Moves & Rollouts</h3>
                                    <p className="text-muted leading-relaxed">
                                        Büroumzug oder Standortauflösung? Wir bauen ab, transportieren sicher und bauen am neuen Standort wieder auf.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-black group-hover:border-accent transition-colors">
                                    <Box size={24} className="group-hover:text-accent transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Hardware Lifecycle</h3>
                                    <p className="text-muted leading-relaxed">
                                        Beschaffung, Installation und fachgerechte Entsorgung von Altgeräten. Dein Inventory immer auf dem neuesten Stand.
                                    </p>
                                </div>
                            </div>
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
                                <img src={serverRoomImg} alt="Server Room" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-z-10">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                                            <CheckCircle2 size={20} className="text-accent" /> Expert Hardware
                                        </h4>
                                        <p className="text-white/80 text-sm">Unser Team arbeitet direkt an der Hardware. Kein Outsourcing an Subunternehmer.</p>
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

            {/* 4. Support Levels */}
            <section className="container mx-auto px-6 py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <SectionHeader title="Expert Support" subtitle="Always there" />
                        <p className="text-xl text-muted mb-12">
                            Keine Warteschleifen. Direkter Draht zu zertifizierten Experten. Wir lösen Probleme, bevor sie dein Geschäft stoppen.
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" onClick={() => navigate('/kontakt')}>Support anfordern</Button>
                        </div>
                    </div>

                    <div className="relative pl-8 md:pl-0">
                        <div className="absolute top-0 bottom-0 left-[2.25rem] w-px bg-white/10 md:hidden" /> {/* Mobile Operations Line */}

                        <SupportLevel
                            level="1st"
                            color="bg-cyan-300 text-black"
                            title="User Helpdesk"
                            desc="Schnelle Hilfe bei Alltagsproblemen. Passwort vergessen, Drucker streikt oder Outlook zickt? Wir sind sofort da."
                        />
                        <SupportLevel
                            level="2nd"
                            color="bg-blue-500 text-white"
                            title="System Administration"
                            desc="Vertiefte Fehlersuche, Server-Wartung, User-Management und Konfigurationsänderungen."
                        />
                        <SupportLevel
                            level="3rd"
                            color="bg-indigo-600 text-white"
                            title="Expert Engineering"
                            desc="Architektur-Probleme, komplexe Sicherheitsvorfälle und Infrastruktur-Design durch Senior Engineers."
                        />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <div className="p-16 rounded-[48px] bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 relative overflow-hidden">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Bereit für bessere IT?</h2>
                    <Button size="lg" className="h-16 px-12 text-lg" onClick={() => navigate('/kontakt')}>
                        Jetzt Starten <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </section>

        </div>
    );
};

export default Services;
