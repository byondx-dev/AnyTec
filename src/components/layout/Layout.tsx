import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTopButton } from '../ui/ScrollToTopButton';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SetupSelectionProvider } from '@/context/SetupSelectionContext';

export const Layout: React.FC = () => {
  return (
    <SetupSelectionProvider>
      <div className="min-h-screen bg-bg text-fg font-sans selection:bg-accent selection:text-white">
        <Navbar />
        <main className="pt-24">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTopButton />
        <ScrollRestoration />
      </div>
    </SetupSelectionProvider>
  );
};
