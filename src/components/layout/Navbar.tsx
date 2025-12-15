import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { cn } from '@/utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#' },
    { name: 'Preise', href: '#' },
    { name: 'Ressourcen', href: '#' },
    { name: 'Warum Any Tec', href: '#features' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-bg/80 backdrop-blur-md border-border py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold">A</div>
          <span>Any Tec</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted hover:text-fg transition-colors">
              {link.name}
            </a>
          ))}
          <Link to="/kontakt" className="text-sm font-medium text-muted hover:text-fg transition-colors">
            Kontakt
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-muted hover:text-fg p-2">
            <Search size={20} />
          </button>
          <ThemeToggle />
          <Button variant="ghost" onClick={() => navigate('/kontakt')}>Kontakt</Button>
          <Button onClick={() => navigate('/kontakt')}>Erstgespräch buchen</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-fg">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-border p-6 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium text-fg py-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <Link to="/kontakt" className="text-lg font-medium text-fg py-2" onClick={() => setIsOpen(false)}>
              Kontakt
            </Link>
            <div className="h-px bg-border my-2" />
            <Button className="w-full" onClick={() => {
              navigate('/kontakt');
              setIsOpen(false);
            }}>Erstgespräch buchen</Button>
          </div>
        </div>
      )}
    </nav>
  );
};