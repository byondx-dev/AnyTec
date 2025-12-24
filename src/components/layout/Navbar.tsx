import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { cn } from '@/utils/cn';
import { NAV_LINKS } from '@/config/navigation';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-bg/80 backdrop-blur-md border-border py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight animate-shine">
          Any Tec
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.filter(link => link.name !== 'Kontakt').map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.name}
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-fg",
                  isActive ? "text-fg font-semibold" : "text-muted"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">

          <ThemeToggle />
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-border px-6 py-2 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 py-4">
              {NAV_LINKS.filter(link => link.name !== 'Kontakt').map((link) => (
                <Link key={link.name} to={link.to} className="text-lg font-medium text-fg py-2" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Button className="w-full" onClick={() => {
                navigate('/kontakt');
                setIsOpen(false);
              }}>Erstgespräch buchen</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  );
};
