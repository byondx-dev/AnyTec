import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Clock } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { BookingBanner } from '@/components/forms/BookingBanner';
import { FAQSection } from '@/components/sections/FAQSection';


const Contact: React.FC = () => {
  const { t } = useTranslation();
  const nextSteps = [
    { step: "01", title: t('contact.nextSteps.items.0.title'), text: t('contact.nextSteps.items.0.text') },
    { step: "02", title: t('contact.nextSteps.items.1.title'), text: t('contact.nextSteps.items.1.text') },
    { step: "03", title: t('contact.nextSteps.items.2.title'), text: t('contact.nextSteps.items.2.text') }
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Hero / Booking Section */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {t('contact.title', "Let's Talk Business.")}
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              {t('contact.subtitle', "Your infrastructure deserves modern solutions. Book a meeting directly with our engineering team.")}
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-fg mb-12">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                <Clock size={18} /> {t('contact.badges.response', "Instant Booking")}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                <CheckCircle size={18} /> {t('contact.badges.call', "Free Initial Consultation")}
              </span>
            </div>

            <div className="max-w-3xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
              <BookingBanner className="!p-8 md:!p-16" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact Info & Steps Grid */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Process Steps */}
            <Reveal delay={0.4}>
              <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.nextSteps.title')}</h2>
              <div className="relative space-y-12 max-w-2xl mx-auto">
                {/* Timeline Line - adjusted to center of the 64px (w-16) bubbles */}
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent to-transparent -ml-px"></div>

                {nextSteps.map((item, i) => (
                  <div key={i} className="relative flex items-center gap-8">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-bg border-4 border-card flex items-center justify-center z-10 relative">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default Contact;
