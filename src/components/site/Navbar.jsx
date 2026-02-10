import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onNavigate }) {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.whyUs, id: 'why-us' },
    { label: t.nav.area, id: 'area' },
    { label: t.nav.contact, id: 'contact' },
  ];

  const handleNav = (id) => {
    setMobileOpen(false);
    if (onNavigate) onNavigate(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button onClick={() => handleNav('hero')} className="flex items-center group">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/16837212d_8051c5d1-eebb-4e8a-b2c0-71bf135047111.jpg"
                alt="DB Kozijnen & Deuren"
                className={`h-8 sm:h-10 w-auto object-contain transition-all duration-300 ${scrolled ? 'drop-shadow-none' : 'drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] brightness-110'}`}
                style={{ filter: scrolled ? 'none' : 'drop-shadow(0 0 12px rgba(255,255,255,0.8)) drop-shadow(0 0 4px rgba(255,255,255,1))' }}
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${scrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  {item.label}
                </button>
              ))}

              {/* Language Toggle */}
              <div className={`ml-3 flex items-center rounded-full p-0.5 ${scrolled ? 'bg-slate-100' : 'bg-white/15'}`}>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${language === 'en' ? (scrolled ? 'bg-[#1a3b5c] text-white' : 'bg-white text-[#1a3b5c]') : (scrolled ? 'text-slate-500' : 'text-white/70')}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('nl')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${language === 'nl' ? (scrolled ? 'bg-[#1a3b5c] text-white' : 'bg-white text-[#1a3b5c]') : (scrolled ? 'text-slate-500' : 'text-white/70')}`}
                >
                  NL
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <div className={`flex items-center rounded-full p-0.5 ${scrolled ? 'bg-slate-100' : 'bg-white/15'}`}>
                <button onClick={() => setLanguage('en')} className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${language === 'en' ? (scrolled ? 'bg-[#1a3b5c] text-white' : 'bg-white text-[#1a3b5c]') : (scrolled ? 'text-slate-500' : 'text-white/70')}`}>EN</button>
                <button onClick={() => setLanguage('nl')} className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${language === 'nl' ? (scrolled ? 'bg-[#1a3b5c] text-white' : 'bg-white text-[#1a3b5c]') : (scrolled ? 'text-slate-500' : 'text-white/70')}`}>NL</button>
              </div>
              <button onClick={() => setMobileOpen(!mobileOpen)} className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}>
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white shadow-xl border-t md:hidden"
          >
            <div className="p-4 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}