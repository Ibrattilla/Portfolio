/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Send, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/ibrattilla-ravshanov',
      icon: <Github size={18} />,
      hoverClass: 'hover:text-white hover:bg-white/10'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ibrattilla-ravshanov/',
      icon: <Linkedin size={18} />,
      hoverClass: 'hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/20'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/IbrattillaRavshanov',
      icon: <Send size={18} className="transform rotate-[-30deg]" />,
      hoverClass: 'hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/20'
    }
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 relative overflow-hidden">
      {/* Visual background separation line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left branding */}
        <div className="text-center md:text-left space-y-1">
          <span className="font-display font-bold text-lg text-white">
            I.RAVSHANOV<span className="text-blue-500">.</span>
          </span>
          <p className="text-xs text-gray-500 font-sans tracking-wide">
            {t.footerText} • © {currentYear} {t.footerRights}
          </p>
        </div>

        {/* Center: Social Networks */}
        <div className="flex items-center gap-3">
          {socials.map((soc) => (
            <a
              key={soc.name}
              id={`social-${soc.name.toLowerCase()}`}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 text-gray-400 rounded-md border border-white/10 bg-white/5 transition-all duration-300 ${soc.hoverClass}`}
              aria-label={soc.name}
            >
              {soc.icon}
            </a>
          ))}
        </div>

        {/* Right back to top scroll */}
        <motion.button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          className="p-2.5 text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 rounded-md transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
};
