import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Cloud, ShieldCheck, ChevronDown, Cpu, Server, Laptop, Wifi, ArrowRight, Store } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';

import { cn } from '@/utils/cn';
import { ReadyToWorkSection } from '@/components/home/ReadyToWorkSection';
import RotatingText from '@/components/text/RotatingText';
import Hyperspeed from '@/components/Hyperspeed/Hyperspeed';
import { hyperspeedPresets } from '@/components/Hyperspeed/hyperspeedPresets';
import { useTheme } from '@/context/ThemeContext';
import LogoLoop from '@/components/ui/LogoLoop';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiPostgresql, SiDocker, SiLinux,
  SiPython, SiAtlassian,
  SiVmware, SiAmazon, SiKubernetes, SiAnsible, SiTerraform, SiWireshark,
  SiOracle, SiMysql, SiMongodb, SiRedis, SiSlack, SiGithub, SiGitlab, SiJenkins, SiGrafana, SiPrometheus,
  SiNginx, SiSalesforce, SiSap, SiAdobe, SiIntel, SiNvidia, SiCloudflare, SiVercel, SiStripe, SiFigma
} from 'react-icons/si';
import FingerprintButton from '@/components/ui/FingerprintButton';



const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-fg dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVite className="text-[#646CFF]" />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiLinux className="text-fg dark:text-white" />, title: "Linux", href: "https://www.linux.org" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
  { node: <SiAtlassian className="text-[#0052CC]" />, title: "Atlassian", href: "https://www.atlassian.com" },
  { node: <SiVmware className="text-[#607078]" />, title: "VMware", href: "https://www.vmware.com" },
  { node: <SiAmazon className="text-[#FF9900]" />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiKubernetes className="text-[#326CE5]" />, title: "Kubernetes", href: "https://kubernetes.io" },
  { node: <SiAnsible className="text-[#EE0000]" />, title: "Ansible", href: "https://www.ansible.com" },
  { node: <SiTerraform className="text-[#7B42BC]" />, title: "Terraform", href: "https://www.terraform.io" },
  { node: <SiWireshark className="text-[#1679A7]" />, title: "Wireshark", href: "https://www.wireshark.org" },
  { node: <SiOracle className="text-[#F80000]" />, title: "Oracle", href: "https://www.oracle.com" },
  { node: <SiMysql className="text-[#4479A1]" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiRedis className="text-[#DC382D]" />, title: "Redis", href: "https://redis.io" },
  { node: <SiSlack className="text-[#4A154B]" />, title: "Slack", href: "https://slack.com" },
  { node: <SiGithub className="text-fg dark:text-white" />, title: "GitHub", href: "https://github.com" },
  { node: <SiGitlab className="text-[#FC6D26]" />, title: "GitLab", href: "https://about.gitlab.com" },
  { node: <SiJenkins className="text-[#D24939]" />, title: "Jenkins", href: "https://www.jenkins.io" },
  { node: <SiGrafana className="text-[#F46800]" />, title: "Grafana", href: "https://grafana.com" },
  { node: <SiPrometheus className="text-[#E6522C]" />, title: "Prometheus", href: "https://prometheus.io" },
  { node: <SiNginx className="text-[#009639]" />, title: "Nginx", href: "https://nginx.org" },
  { node: <SiSalesforce className="text-[#00A1E0]" />, title: "Salesforce", href: "https://www.salesforce.com" },
  { node: <SiSap className="text-[#0FABCC]" />, title: "SAP", href: "https://www.sap.com" },
  { node: <SiAdobe className="text-[#FF0000]" />, title: "Adobe", href: "https://www.adobe.com" },
  { node: <SiIntel className="text-[#0068B5]" />, title: "Intel", href: "https://www.intel.com" },
  { node: <SiNvidia className="text-[#76B900]" />, title: "Nvidia", href: "https://www.nvidia.com" },
  { node: <SiCloudflare className="text-[#F38020]" />, title: "Cloudflare", href: "https://www.cloudflare.com" },
  { node: <SiVercel className="text-fg dark:text-white" />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiStripe className="text-[#008CDD]" />, title: "Stripe", href: "https://stripe.com" },
  { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma", href: "https://www.figma.com" },
];

// --- Sub-components for Home Sections ---



const AnimateHeight = ({ isVisible, children }: { isVisible: boolean, children?: React.ReactNode }) => (
  <motion.div
    initial={false}
    animate={{ height: isVisible ? 'auto' : 0, opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
    className="overflow-hidden"
  >
    {children}
  </motion.div>
);

const InteractiveModule = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();

  const steps = [
    { id: 0, title: t('home.interactive.steps.0.title'), desc: t('home.interactive.steps.0.desc') },
    { id: 1, title: t('home.interactive.steps.1.title'), desc: t('home.interactive.steps.1.desc') },
    { id: 2, title: t('home.interactive.steps.2.title'), desc: t('home.interactive.steps.2.desc') }
  ];

  return (
    <div className="rounded-[40px] bg-[#0b0f19] text-white p-8 md:p-16 relative overflow-hidden border border-white/5 shadow-2xl isolate">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
        {/* Left */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {t('home.interactive.title')} <br /><span className="text-gray-500">{t('home.interactive.titleSuffix')}</span>
          </h2>
        </div>

        {/* Center - Orbit Visual */}
        <div className="flex justify-center py-12 lg:py-0">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Orbits */}
            <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
            <div className="absolute w-48 h-48 rounded-full border border-white/5 animate-[spin_16s_linear_infinite_reverse]" />
            <div className="absolute w-32 h-32 rounded-full border border-white/5 animate-spin-slow" />

            {/* Center AI Chip */}
            <div className="w-20 h-20 rounded-2xl bg-[#0f1420] border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.15)] relative z-10">
              <span className="text-xl font-bold text-white">AI</span>
            </div>

            {/* Orbiting Icons */}
            <motion.div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0b0f19] p-2 rounded-full border border-white/10 text-accent shadow-lg shadow-accent/10"><Cloud size={14} /></div>
            </motion.div>
            <motion.div className="absolute w-full h-full animate-[spin_15s_linear_infinite_reverse]">
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-[#0b0f19] p-2 rounded-full border border-white/10 text-blue-400 shadow-lg shadow-blue-400/10"><Server size={14} /></div>
            </motion.div>
            <motion.div className="absolute w-full h-full animate-[spin_25s_linear_infinite]">
              <div className="absolute bottom-4 left-1/4 bg-[#0b0f19] p-2 rounded-full border border-white/10 text-purple-400 shadow-lg shadow-purple-400/10"><ShieldCheck size={14} /></div>
            </motion.div>
          </div>
        </div>

        {/* Right - Steps */}
        <div className="space-y-3">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={cn(
                "w-full text-left p-5 rounded-xl border transition-all duration-500 relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                activeStep === step.id
                  ? "bg-white/[0.03] border-accent/40 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                  : "bg-transparent border-transparent hover:bg-white/[0.02]"
              )}
            >
              {/* Active Indicator Bar */}
              {activeStep === step.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-accent shadow-[0_0_10px_currentColor]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="flex items-center gap-4 mb-1">
                <span className={cn(
                  "text-[10px] font-mono px-1.5 py-0.5 rounded transition-colors duration-300",
                  activeStep === step.id ? "bg-accent text-black font-bold" : "bg-white/5 text-gray-500"
                )}>
                  0{step.id + 1}
                </span>
                <span className={cn("font-medium transition-colors duration-300", activeStep === step.id ? "text-white" : "text-gray-500 group-hover:text-gray-300")}>
                  {step.title}
                </span>
              </div>

              <AnimateHeight isVisible={activeStep === step.id}>
                <p className="text-sm text-gray-400 mt-2 pl-10 leading-relaxed">{step.desc}</p>
              </AnimateHeight>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={cn("text-lg font-medium transition-colors duration-300 pr-8", isOpen ? "text-gradient-accent" : "text-fg group-hover:text-muted")}>{question}</span>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-gradient-accent text-white rotate-180" : "bg-muted2 text-muted group-hover:bg-muted"
        )}>
          <ChevronDown size={16} />
        </div>
      </button>
      <AnimateHeight isVisible={isOpen}>
        <div className="pb-8 text-muted leading-relaxed max-w-2xl">
          {answer}
        </div>
      </AnimateHeight>
    </div>
  );
};

// --- Main Page Component ---

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isFingerprintPressed, setIsFingerprintPressed] = useState(false);
  const { t } = useTranslation();

  // Custom colors for Light Mode to match white background
  const currentEffectOptions = useMemo(() => {
    const lightModeColors = {
      roadColor: 0xffffff,
      islandColor: 0xffffff,
      background: 0xffffff,
      shoulderLines: 0xe5e7eb,
      brokenLines: 0xe5e7eb,
      leftCars: [0xff0080, 0x7928ca, 0xff0080],
      rightCars: [0x00C6FF, 0x0072FF, 0x00C6FF],
      sticks: 0x00C6FF
    };

    return {
      ...hyperspeedPresets.one,
      colors: theme === 'light' ? lightModeColors : hyperspeedPresets.one.colors,
      roadOpacity: theme === 'light' ? 0.3 : 1.0,
    };
  }, [theme]);

  return (
    <div className="overflow-hidden">
      {/* 2. Hero Section - With Overflow Hidden */}
      <section className="relative min-h-[100svh] lg:min-h-[92vh] flex items-center pt-12 lg:pt-20 overflow-hidden">
        {/* Hyperspeed Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4.0, ease: "easeInOut" }}
          key={theme} // Force re-render when theme changes
        >
          <Hyperspeed effectOptions={currentEffectOptions} isSpeedingUp={isFingerprintPressed} />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl relative z-20 flex flex-col items-center">
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 text-balance -tracking-wide">
                {t('home.hero.titlePart1')} <br /> {t('home.hero.titlePart2')} <br />{t('home.hero.titlePart3')} <span className="text-muted/40">Tec.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('home.hero.description')}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col items-center gap-10">
                {/* Fingerprint Button - replaces old hero buttons */}
                <div className="mt-2">
                  <FingerprintButton
                    onPressChange={setIsFingerprintPressed}
                    idleText={t('home.hero.hold')}
                    activeText={t('home.hero.active')}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-muted/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* 2.5 Logo Loop Section */}
      <section className="py-10 border-b border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col items-center gap-6 text-center">
        <div className="container mx-auto px-6">
          <span className="text-sm font-semibold text-muted uppercase tracking-widest opacity-70">{t('home.logos.workingWith')}</span>
        </div>

        <div className="w-full">
          <Reveal delay={0.1} width="100%">
            <div className="w-full opacity-80 hover:opacity-100 transition-opacity">
              <LogoLoop
                logos={techLogos}
                speed={60}
                direction="left"
                logoHeight={38}
                gap={60}
                hoverSpeed={30}
                scaleOnHover
                fadeOut
                fadeOutColor={theme === 'light' ? "#ffffff" : "#000000"}
                ariaLabel="Technology partners"
              />
            </div>
          </Reveal>
        </div>

        <div className="container mx-auto px-6">
          <span className="text-xs font-bold text-transparent select-none opacity-1">{t('home.logos.tools')}</span>
        </div>
      </section>

      {/* 3. Statement Section */}
      {/* 3. Statement / Services Link Services */}
      <section className="py-32 relative bg-card/50 overflow-hidden">
        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none text-border">
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0 40 Q 30 40 50 50 T 100 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <Reveal>
            <div className="w-16 h-16 mx-auto bg-surface rounded-2xl shadow-soft flex items-center justify-center mb-10 border border-border">
              <span className="font-bold text-gradient-accent text-xl">IT</span>
            </div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-bg/50 backdrop-blur text-xs font-semibold text-muted mb-8 tracking-wide uppercase">
              {t('home.statement.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {t('home.statement.title')} <br /><span className="text-muted/40">{t('home.statement.titleSuffix')}</span>
            </h2>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              {t('home.statement.text')}
            </p>
            <div className="flex justify-center">
              <Button variant="ghost" size="lg" className="rounded-full px-8 border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent" onClick={() => navigate('/services')}>
                {t('home.statement.button')} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-center gap-3 text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-muted">{t('home.rotating.prefix')}</span>
              <RotatingText
                texts={[
                  'Gastro',
                  'IT',
                  'Cloud',
                  'Retail',
                  'Wellness',
                  'Workspace',
                  'Cinema',
                  'Salon',
                  'E-Commerce',
                  'Security',
                  'Rollouts',
                  'Support',
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-120%', opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <p className="text-muted max-w-3xl mt-4 mx-auto">
              {t('home.rotating.description')}
            </p>
          </Reveal>
        </div>
      </section>

      <ReadyToWorkSection />

      {/* 5. Mid CTA */}
      <section className="py-32 relative overflow-hidden">
        {/* Subtle Circuit Outline Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20 20 H 80 V 80 H 20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="20" cy="20" r="2" fill="currentColor" />
                <circle cx="80" cy="80" r="2" fill="currentColor" />
                <path d="M80 20 L 100 20" stroke="currentColor" strokeWidth="1" />
                <path d="M0 80 L 20 80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">{t('home.midCta.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{t('home.midCta.title')}<span className="text-muted/50">{t('home.midCta.titleSuffix')}</span></h2>
            <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">{t('home.midCta.description')}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              {/* Card 1: Setups */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate('/setups')}
                className="group relative w-full sm:w-72 h-[22rem] text-left rounded-[2.5rem] bg-[#0f1420] border border-white/10 p-8 cursor-pointer overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] flex flex-col justify-between"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500 group-hover:bg-accent group-hover:text-black shadow-lg shadow-black/20">
                  <Store className="w-8 h-8" />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-2 leading-none tracking-tight">{t('home.midCta.card1.title')}<br />{t('home.midCta.card1.subtitle')}</h3>
                  <p className="text-sm text-gray-400 font-medium mb-6">{t('home.midCta.card1.desc')}</p>

                  {/* Button */}
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold text-sm shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all duration-300">
                    {t('home.midCta.card1.button')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Services */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={() => navigate('/services')}
                className="group relative w-full sm:w-72 h-[22rem] text-left rounded-[2.5rem] bg-[#0f1420] border border-white/10 p-8 cursor-pointer overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col justify-between"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-500 group-hover:text-white shadow-lg shadow-black/20">
                  <Cloud className="w-8 h-8" />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-2 leading-none tracking-tight">{t('home.midCta.card2.title')}<br />{t('home.midCta.card2.subtitle')}</h3>
                  <p className="text-sm text-gray-400 font-medium mb-6">{t('home.midCta.card2.desc')}</p>

                  {/* Button */}
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300">
                    {t('home.midCta.card2.button')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Dark Interactive Module */}
      <section className="py-20 container mx-auto px-6">
        <Reveal width="100%">
          <InteractiveModule />
        </Reveal>
      </section>

      {/* 7. Comparison Section */}
      <section className="py-32 bg-card/50">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-12">
              <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent"><Wifi size={16} /></div>
              <span className="text-sm font-bold text-muted uppercase tracking-wider">{t('home.comparison.badge')}</span>
            </div>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-20">{t('home.comparison.title')} <span className="text-muted/40">{t('home.comparison.titleSuffix')}</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Other Providers */}
              <div className="p-10 rounded-3xl border border-dashed border-border/60 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-xl mb-4">{t('home.comparison.card1.title')}</h3>
                <p className="text-sm text-muted mb-8 leading-relaxed">{t('home.comparison.card1.desc')}</p>
                <div className="flex justify-center opacity-40 grayscale">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="w-10 h-10 border-2 border-fg/20 rounded-lg bg-fg/5"></div>
                    <div className="w-10 h-10 border-2 border-fg/20 rounded-lg bg-fg/5"></div>
                    <div className="w-10 h-10 border-2 border-fg/20 rounded-lg bg-fg/5"></div>
                    <div className="w-10 h-10 border-2 border-dashed border-fg/10 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Classic IT */}
              <div className="p-10 rounded-3xl border border-dashed border-border/60 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-xl mb-4">{t('home.comparison.card2.title')}</h3>
                <p className="text-sm text-muted mb-8 leading-relaxed">{t('home.comparison.card2.desc')}</p>
                <div className="flex justify-center opacity-60">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="w-14 h-14 border-2 border-fg/30 rounded-xl flex items-center justify-center bg-surface"><Laptop size={24} /></div>
                    <div className="h-6 w-0.5 bg-fg/30"></div>
                    <div className="w-14 h-14 border-2 border-fg/30 rounded-xl flex items-center justify-center bg-surface"><Server size={24} /></div>
                  </div>
                </div>
              </div>

              {/* Any Tec */}
              <div className="p-10 rounded-3xl border border-border bg-surface shadow-xl shadow-accent/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-accent group-hover:opacity-10 transition-opacity duration-500 scale-150 origin-top-right">
                  <Cpu size={120} />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gradient-accent">{t('home.comparison.card3.title')}</h3>
                <p className="text-sm text-muted mb-8 leading-relaxed">{t('home.comparison.card3.desc')}</p>

                {/* Visual Nodes */}
                <div className="relative h-40 flex items-center justify-center">
                  {/* Central Node */}
                  <div className="absolute w-14 h-14 bg-gradient-accent rounded-2xl shadow-lg shadow-accent/40 z-10 flex items-center justify-center text-white">
                    <Check size={28} strokeWidth={3} />
                  </div>
                  {/* Satellite Nodes */}
                  {[0, 1, 2, 3, 4, 5].map(i => (
                    <motion.div
                      key={i}
                      className="absolute w-2.5 h-2.5 bg-fg dark:bg-white rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{
                        opacity: [0, 1, 0.5],
                        scale: 1,
                        x: Math.cos(i * 1.05) * 60,
                        y: Math.sin(i * 1.05) * 60
                      }}
                      transition={{ delay: i * 0.1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                  ))}
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none text-accent/20">
                    <motion.circle cx="50%" cy="50%" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"
                      initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-32 bg-bg">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <Reveal>
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Häufige <span className="text-muted/40">Fragen</span>
              </h2>
              <p className="text-muted mb-8">Alles was du über den Start mit Any Tec wissen musst.</p>
              <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-accent" onClick={() => navigate('/kontakt')}>
                Frage nicht dabei? Kontaktier uns <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <div className="space-y-4">
                <AccordionItem
                  question={t('home.faq.items.0.q')}
                  answer={t('home.faq.items.0.a')}
                />
                <AccordionItem
                  question={t('home.faq.items.1.q')}
                  answer={t('home.faq.items.1.a')}
                />
                <AccordionItem
                  question={t('home.faq.items.2.q')}
                  answer={t('home.faq.items.2.a')}
                />
                <AccordionItem
                  question={t('home.faq.items.3.q')}
                  answer={t('home.faq.items.3.a')}
                />
                <AccordionItem
                  question={t('home.faq.items.4.q')}
                  answer={t('home.faq.items.4.a')}
                />
                <AccordionItem
                  question={t('home.faq.items.5.q')}
                  answer={t('home.faq.items.5.a')}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-40 relative overflow-hidden bg-[#0b0f19] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] opacity-[0.07]">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/20" />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">{t('home.finalCta.title')}</h2>
            <p className="text-gray-400 mb-12 text-lg md:text-xl">{t('home.finalCta.desc')}</p>
            <Button size="lg" className="h-16 px-10 text-lg bg-gradient-accent text-white hover:opacity-90 shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-all hover:scale-105" onClick={() => navigate('/kontakt')}>
              {t('home.finalCta.button')}
            </Button>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default Home;
