import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-bg py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-fg text-bg flex items-center justify-center font-bold">A</div>
              <span className="text-xl font-bold">Any Tec</span>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-muted">
              <a href="#" className="hover:text-fg">Services</a>
              <a href="#" className="hover:text-fg">Preise</a>
              <a href="#" className="hover:text-fg">Ressourcen</a>
              <Link to="/kontakt" className="hover:text-fg">Kontakt</Link>
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