import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useSetupSelection } from '@/context/SetupSelectionContext';

type ContactFormProps = {
  className?: string;
};

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const { selectedSetups } = useSetupSelection();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [customMessage, setCustomMessage] = useState('');

  const suffix = useMemo(() => {
    if (!selectedSetups.length) return '';
    return `Ausgewählte Setups: ${selectedSetups.join(', ')}`;
  }, [selectedSetups]);

  const combinedMessage = useMemo(() => {
    if (!suffix) return customMessage;
    const trimmed = customMessage.trimEnd();
    return `${trimmed}${trimmed ? '\n\n' : ''}${suffix}`;
  }, [customMessage, suffix]);

  useEffect(() => {
    // Keep custom message intact while updating suffix automatically
    setCustomMessage((prev) => prev);
  }, [suffix]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.set('message', combinedMessage);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Payload:', data);

    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleMessageChange = (value: string) => {
    if (suffix && value.endsWith(suffix)) {
      const possibleCustom = value.slice(0, value.length - suffix.length).trimEnd();
      const cleaned = possibleCustom.replace(/\n\n$/, '');
      setCustomMessage(cleaned);
      return;
    }
    setCustomMessage(value);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-accent/10 border border-accent/20 rounded-3xl p-10 text-center"
      >
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white mx-auto mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Nachricht gesendet!</h3>
        <p className="text-muted mb-6">
          Vielen Dank für deine Anfrage. Unser Team wird sich schnellstmöglich bei dir melden.
        </p>
        <Button onClick={() => setStatus('idle')} variant="secondary">
          Neue Nachricht
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder="Max Mustermann"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Unternehmen
          </label>
          <input
            required
            type="text"
            name="company"
            id="company"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder="Firma GmbH"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-Mail
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder="max@firma.de"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Telefon (Optional)
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder="+49 ..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="industry" className="text-sm font-medium">
            Branche
          </label>
          <select
            name="industry"
            id="industry"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
          >
            <option value="">Bitte wählen...</option>
            <option value="retail">Einzelhandel / Retail</option>
            <option value="gastro">Gastronomie / Café</option>
            <option value="office">Büro / Coworking</option>
            <option value="health">Fitness / Yoga</option>
            <option value="other">Sonstige</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="locations" className="text-sm font-medium">
            Anzahl Standorte
          </label>
          <select
            name="locations"
            id="locations"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
          >
            <option value="1">1 Standort</option>
            <option value="2-5">2-5 Standorte</option>
            <option value="5-20">5-20 Standorte</option>
            <option value="20+">20+ Standorte</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Nachricht
        </label>
        <textarea
          required
          name="message"
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
          placeholder="Erzähl uns kurz von deinem Projekt..."
          value={combinedMessage}
          onChange={(e) => handleMessageChange(e.target.value)}
        />
        {selectedSetups.length > 0 && (
          <p className="text-xs text-muted">
            Ausgewählt: {selectedSetups.join(', ')}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          required
          type="checkbox"
          id="privacy"
          className="w-4 h-4 text-accent rounded border-border focus:ring-accent"
        />
        <label htmlFor="privacy" className="text-sm text-muted">
          Ich stimme der Verarbeitung meiner Daten zu.
        </label>
      </div>

      <Button type="submit" disabled={status === 'submitting'} className="w-full">
        {status === 'submitting' ? 'Wird gesendet...' : 'Anfrage senden'}
      </Button>
    </form>
  );
};
