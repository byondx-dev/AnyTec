import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useSetupSelection } from '@/context/SetupSelectionContext';

type ContactFormProps = {
  className?: string;
};

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const { t } = useTranslation();
  const { selectedSetups } = useSetupSelection();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [customMessage, setCustomMessage] = useState('');

  const suffix = useMemo(() => {
    if (!selectedSetups.length) return '';
    return `${t('contactForm.activeSetups')} ${selectedSetups.join(', ')}`;
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
        <h3 className="text-2xl font-bold mb-2">{t('contactForm.success.title')}</h3>
        <p className="text-muted mb-6">
          {t('contactForm.success.desc')}
        </p>
        <Button onClick={() => setStatus('idle')} variant="secondary">
          {t('contactForm.success.button')}
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {t('contactForm.labels.name')}
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder={t('contactForm.placeholders.name')}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            {t('contactForm.labels.company')}
          </label>
          <input
            required
            type="text"
            name="company"
            id="company"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder={t('contactForm.placeholders.company')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {t('contactForm.labels.email')}
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder={t('contactForm.placeholders.email')}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            {t('contactForm.labels.phone')}
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder={t('contactForm.placeholders.phone')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="industry" className="text-sm font-medium">
            {t('contactForm.labels.industry')}
          </label>
          <select
            name="industry"
            id="industry"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
          >
            <option value="">{t('contactForm.options.choose')}</option>
            <option value="retail">{t('contactForm.options.retail')}</option>
            <option value="gastro">{t('contactForm.options.gastro')}</option>
            <option value="office">{t('contactForm.options.office')}</option>
            <option value="health">{t('contactForm.options.health')}</option>
            <option value="other">{t('contactForm.options.other')}</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="locations" className="text-sm font-medium">
            {t('contactForm.labels.locations')}
          </label>
          <select
            name="locations"
            id="locations"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
          >
            <option value="1">{t('contactForm.options.loc1')}</option>
            <option value="2-5">{t('contactForm.options.loc2_5')}</option>
            <option value="5-20">{t('contactForm.options.loc5_20')}</option>
            <option value="20+">{t('contactForm.options.loc20plus')}</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {t('contactForm.labels.message')}
        </label>
        <textarea
          required
          name="message"
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
          placeholder={t('contactForm.placeholders.message')}
          value={combinedMessage}
          onChange={(e) => handleMessageChange(e.target.value)}
        />
        {selectedSetups.length > 0 && (
          <p className="text-xs text-muted">
            {t('contactForm.selected')} {selectedSetups.join(', ')}
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
          {t('contactForm.privacy')}
        </label>
      </div>

      <Button type="submit" disabled={status === 'submitting'} className="w-full">
        {status === 'submitting' ? t('contactForm.submitting') : t('contactForm.submit')}
      </Button>
    </form>
  );
};
