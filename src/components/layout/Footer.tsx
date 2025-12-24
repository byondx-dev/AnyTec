import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '@/config/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-bg py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <Link to="/" className="text-xl font-bold tracking-tight animate-shine">
            Any Tec
          </Link>
          <div className="flex flex-wrap gap-8 text-sm text-muted">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} to={link.to} className="hover:text-fg">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted border-t border-border pt-8">
          <p>© {new Date().getFullYear()} Any Tec. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-fg">Impressum</a>
            <a href="#" className="hover:text-fg">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};