import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, CheckCircle, Clock } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { ContactForm } from '@/components/forms/ContactForm';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const nextSteps = [
    { step: "01", title: t('contact.nextSteps.items.0.title'), text: t('contact.nextSteps.items.0.text') },
    { step: "02", title: t('contact.nextSteps.items.1.title'), text: t('contact.nextSteps.items.1.text') },
    { step: "03", title: t('contact.nextSteps.items.2.title'), text: t('contact.nextSteps.items.2.text') }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-12 bg-bg border-b border-border">
        <div className="container mx-auto px-6">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-lg text-muted max-w-2xl mb-8">
              {t('contact.subtitle')}
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-fg">
              <span className="flex items-center gap-2"><Clock size={16} className="text-accent" /> {t('contact.badges.response')}</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /> {t('contact.badges.call')}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <Reveal delay={0.2}>
            <ContactForm className="space-y-6 bg-card p-8 md:p-10 rounded-3xl border border-border shadow-soft" />
          </Reveal>

          {/* Info Side */}
          <div className="space-y-12">
            <Reveal delay={0.3}>
              <h2 className="text-2xl font-bold mb-6">{t('contact.direct.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="bg-muted2 p-3 rounded-lg"><Mail size={24} /></div>
                  <div>
                    <p className="text-xs font-bold text-muted uppercase mb-1">{t('contact.direct.email')}</p>
                    <a href="mailto:hello@anytec.example" className="text-lg font-medium hover:text-accent">hello@anytec.example</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="bg-muted2 p-3 rounded-lg"><Phone size={24} /></div>
                  <div>
                    <p className="text-xs font-bold text-muted uppercase mb-1">{t('contact.direct.phone')}</p>
                    <a href="tel:+491234567890" className="text-lg font-medium hover:text-accent">+49 (0) 123 456 7890</a>
                    <p className="text-sm text-muted mt-1">{t('contact.direct.hours')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="bg-muted2 p-3 rounded-lg"><MapPin size={24} /></div>
                  <div>
                    <p className="text-xs font-bold text-muted uppercase mb-1">{t('contact.direct.office')}</p>
                    <p className="text-lg font-medium">{t('contact.direct.address1')}</p>
                    <p className="text-lg font-medium">{t('contact.direct.address2')}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <h2 className="text-2xl font-bold mb-6">{t('contact.nextSteps.title')}</h2>
              <div className="space-y-4 relative">
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-border -z-10"></div>

                {nextSteps.map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center font-bold text-sm text-muted">{item.step}</div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-muted">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
