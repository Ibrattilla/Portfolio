/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'projects', label: t.navProjects },
    { id: 'skills', label: t.navSkills },
    { id: 'experience', label: t.navExperience },
    { id: 'contact', label: t.navContact },
  ];

  // Handle scroll detection for background and active sections
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo"
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <span className="font-display font-bold text-lg sm:text-xl tracking-tighter text-white transition-all duration-300 group-hover:text-blue-500">
            I.RAVSHANOV<span className="text-blue-500">.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300 cursor-pointer ${
                    activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-white/10" />

          {/* Language Switcher Button */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-md">
            <button
              id="lang-toggle-ru"
              onClick={() => setLanguage('ru')}
              className={`px-2.5 py-0.5 text-[10px] font-mono font-bold rounded transition-all duration-200 cursor-pointer ${
                language === 'ru'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              RU
            </button>
            <button
              id="lang-toggle-en"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-0.5 text-[10px] font-mono font-bold rounded transition-all duration-200 cursor-pointer ${
                language === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-4">
          {/* Quick Language Toggle on Mobile */}
          <button
            id="mobile-lang-quick"
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
            className="flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-md text-xs font-semibold text-zinc-300 hover:text-white cursor-pointer"
          >
            <Globe size={13} className="text-blue-500" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white bg-white/5 border border-white/10 rounded-md transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      id={`mobile-nav-link-${item.id}`}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm font-medium uppercase tracking-wider text-left w-full py-2 border-b border-zinc-900 transition-colors cursor-pointer ${
                        activeSection === item.id ? 'text-blue-400' : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex items-center justify-between border-t border-zinc-900">
                <span className="text-xs font-medium text-zinc-400 flex items-center gap-2">
                  <Globe size={15} className="text-blue-500" />
                  {language === 'ru' ? 'Выберите язык' : 'Select language'}
                </span>
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-md border border-white/10">
                  <button
                    id="mobile-lang-ru"
                    onClick={() => {
                      setLanguage('ru');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 text-[10px] font-mono font-bold rounded transition-all cursor-pointer ${
                      language === 'ru' ? 'bg-blue-600 text-white' : 'text-zinc-400'
                    }`}
                  >
                    Русский
                  </button>
                  <button
                    id="mobile-lang-en"
                    onClick={() => {
                      setLanguage('en');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 text-[10px] font-mono font-bold rounded transition-all cursor-pointer ${
                      language === 'en' ? 'bg-blue-600 text-white' : 'text-zinc-400'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
