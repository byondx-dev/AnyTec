import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Payload:', data);

    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-12 bg-bg border-b border-border">
        <div className="container mx-auto px-6">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
            <p className="text-lg text-muted max-w-2xl mb-8">
              Bereit für das nächste Level deiner IT? Fülle das Formular aus und wir melden uns innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-fg">
              <span className="flex items-center gap-2"><Clock size={16} className="text-accent"/> Antwort < 24h</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-accent"/> Unverbindliches Erstgespräch</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <Reveal delay={0.2}>
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent/10 border border-accent/20 rounded-3xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Nachricht gesendet!</h3>
                <p className="text-muted mb-8">Vielen Dank für deine Anfrage. Unser Team wird sich schnellstmöglich bei dir melden.</p>
                <Button onClick={() => setStatus('idle')} variant="secondary">Neue Nachricht</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded-3xl border border-border shadow-soft">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input required type="text" name="name" id="name" className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Max Mustermann" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Unternehmen</label>
                    <input required type="text" name="company" id="company" className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Firma GmbH" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">E-Mail</label>
                    <input required type="email" name="email" id="email" className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="max@firma.de" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Telefon (Optional)</label>
                    <input type="tel" name="phone" id="phone" className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="+49 ..." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-medium">Branche</label>
                    <select name="industry" id="industry" className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all">
                      <option value="">Bitte wählen...</option>
                      <option value="retail">Einzelhandel / Retail</option>
                      <option value="gastro">Gastronomie / Café</option>
                      <option value="office">Büro / Coworking</option>
                      <option value="health">Fitness / Yoga</option>
                      <option value="other">Sonstige</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="locations" className="text-sm font-medium">Anzahl Standorte</label>
                    <select name="locations" id="locations" className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all">
                      <option value="1">1 Standort</option>
                      <option value="2-5">2-5 Standorte</option>
                      <option value="5-20">5-20 Standorte</option>
                      <option value="20+">20+ Standorte</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Nachricht</label>
                  <textarea required name="message" id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Erzähl uns kurz von deinem Projekt..."></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input required type="checkbox" id="privacy" className="w-4 h-4 text-accent rounded border-border focus:ring-accent" />
                  <label htmlFor="privacy" className="text-sm text-muted">Ich stimme der Verarbeitung meiner Daten zu.</label>
                </div>

                <Button type="submit" disabled={status === 'submitting'} className="w-full">
                  {status === 'submitting' ? 'Wird gesendet...' : 'Anfrage senden'}
                </Button>
              </form>
            )}
          </Reveal>

          {/* Info Side */}
          <div className="space-y-12">
             <Reveal delay={0.3}>
                <h2 className="text-2xl font-bold mb-6">Direkter Kontakt</h2>
                <div className="space-y-6">
                   <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                      <div className="bg-muted2 p-3 rounded-lg"><Mail size={24}/></div>
                      <div>
                        <p className="text-xs font-bold text-muted uppercase mb-1">E-Mail</p>
                        <a href="mailto:hello@anytec.example" className="text-lg font-medium hover:text-accent">hello@anytec.example</a>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                      <div className="bg-muted2 p-3 rounded-lg"><Phone size={24}/></div>
                      <div>
                        <p className="text-xs font-bold text-muted uppercase mb-1">Telefon</p>
                        <a href="tel:+491234567890" className="text-lg font-medium hover:text-accent">+49 (0) 123 456 7890</a>
                        <p className="text-sm text-muted mt-1">Mo-Fr, 09:00 - 18:00 Uhr</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                      <div className="bg-muted2 p-3 rounded-lg"><MapPin size={24}/></div>
                      <div>
                        <p className="text-xs font-bold text-muted uppercase mb-1">Office</p>
                        <p className="text-lg font-medium">Technologiepark 1</p>
                        <p className="text-lg font-medium">10115 Berlin</p>
                      </div>
                   </div>
                </div>
             </Reveal>

             <Reveal delay={0.4}>
               <h2 className="text-2xl font-bold mb-6">Was passiert als Nächstes?</h2>
               <div className="space-y-4 relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-border -z-10"></div>
                  
                  {[
                    { step: "01", title: "Erstgespräch", text: "Wir klären deine Anforderungen in 15 Min." },
                    { step: "02", title: "Konzept", text: "Du erhältst einen Blueprint für dein Setup." },
                    { step: "03", title: "Rollout", text: "Wir liefern Hardware und konfigurieren die Cloud." }
                  ].map((item, i) => (
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