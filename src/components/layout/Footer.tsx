import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { NAV_LINKS } from '@/config/navigation';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language || 'en';
    const nextLang = currentLang.startsWith('de') ? 'en' : 'de';
    i18n.changeLanguage(nextLang);
  };

  return (
    <footer className="border-t border-border bg-bg py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <Link to="/" className="text-xl font-bold tracking-tight animate-shine">
            Any Tec
          </Link>
          <div className="flex flex-wrap gap-8 text-sm text-muted">
            {NAV_LINKS.map((link) => (
              <Link key={link.key} to={link.to} className="hover:text-fg">
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted border-t border-border pt-8">
          <p>© {new Date().getFullYear()} Any Tec. All rights reserved. A ByondX Enterprise Company</p>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
            <div className="flex gap-6">
              <a href="#" className="hover:text-fg">{t('footer.imprint')}</a>
              <a href="#" className="hover:text-fg">{t('footer.privacy')}</a>
              <a href="https://anydesk.com/en/downloads/windows" target="_blank" rel="noopener noreferrer" className="hover:text-fg">{t('footer.homeSupport')}</a>
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted2/50 hover:bg-muted2 transition-colors text-fg"
            >
              <Globe size={12} />
              <span className="font-semibold">{(i18n.language || 'en').startsWith('de') ? 'DE' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};