/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MessageSquare, Terminal, Award, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleCtaClick = (id: string) => {
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

  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-6"
        >
          {/* Availability Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-full"
          >
            <span className="flex h-2 w-2 relative inline-block mr-2 align-middle">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold font-mono">
              {t.heroGreeting === "Hi, I'm" ? 'AVAILABLE FOR HIRE' : 'ДОСТУПЕН ДЛЯ РАБОТЫ'}
            </span>
          </motion.div>

          {/* Main Title Name & Role */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white leading-[1.1]">
              <span className="text-gray-500 font-sans font-light text-sm sm:text-base block mb-2 tracking-[0.3em] uppercase">
                {t.heroGreeting}
              </span>
              Ibrattilla Ravshanov
            </h1>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 tracking-tight">
              {t.heroTitle}
            </h2>
          </motion.div>

          {/* Subtitle / Statement */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 font-normal max-w-2xl leading-relaxed font-sans"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* Intro paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed"
          >
            {t.heroIntro}
          </motion.p>

          {/* Action Callouts */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto"
          >
            <button
              id="hero-cta-projects"
              onClick={() => handleCtaClick('projects')}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              <span>{t.heroCtaProjects}</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              id="hero-cta-contact"
              onClick={() => handleCtaClick('contact')}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg font-semibold transition-all cursor-pointer"
            >
              <MessageSquare size={16} className="text-blue-400" />
              <span>{t.heroCtaContact}</span>
            </button>
          </motion.div>

          {/* Premium Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 pt-10 border-t border-white/10 w-full max-w-3xl"
          >
            <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-colors duration-300">
              <span className="flex items-center gap-2 text-2xl sm:text-3xl font-display font-bold text-blue-400">
                <Clock size={18} className="text-zinc-600" />
                3+
              </span>
              <span className="text-xs text-gray-400 mt-1 font-sans">
                {t.heroYearsExp}
              </span>
            </div>

            <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-colors duration-300">
              <span className="flex items-center gap-2 text-2xl sm:text-3xl font-display font-bold text-indigo-400">
                <Award size={18} className="text-zinc-600" />
                15+
              </span>
              <span className="text-xs text-gray-400 mt-1 font-sans">
                {t.heroProjectsDone}
              </span>
            </div>

            <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-colors duration-300">
              <span className="flex items-center gap-2 text-2xl sm:text-3xl font-display font-bold text-emerald-400">
                <Users size={18} className="text-zinc-600" />
                100%
              </span>
              <span className="text-xs text-gray-400 mt-1 font-sans">
                {t.heroSatisfiedClients}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Aesthetic bottom shadow transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
};
