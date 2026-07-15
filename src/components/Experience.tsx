/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experience } from '../data';
import { Briefcase, Calendar, Star, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Experience: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <span className="h-1 w-1 bg-blue-500 rounded-full" />
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{t.navExperience}</span>
            <span className="h-1 w-1 bg-blue-500 rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-4"
          >
            {t.experienceTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {t.experienceSubtitle}
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Company selector tabs on desktop, full list layout on mobile */}
          <div className="md:col-span-4 flex md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-2 border-b md:border-b-0 md:border-l border-white/10 scrollbar-none">
            {experience.map((item, idx) => (
              <button
                key={idx}
                id={`exp-tab-${idx}`}
                onClick={() => setActiveItem(idx)}
                className={`flex-none md:flex-initial text-left px-4 py-3 text-sm font-semibold rounded-lg md:rounded-l-none md:rounded-r-lg border md:border-l-2 md:border-y-0 md:border-r-0 transition-all duration-300 cursor-pointer whitespace-nowrap md:whitespace-normal ${
                  activeItem === idx
                    ? 'bg-white/5 text-blue-400 border-blue-500 md:border-l-blue-500'
                    : 'bg-transparent text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5'
                }`}
              >
                <div className="font-display font-bold text-white group-hover:text-blue-400">
                  {item.company.split(' / ')[0]}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{item.period}</div>
              </button>
            ))}
          </div>

          {/* Active Job Experience Details */}
          <div className="md:col-span-8 bg-[#111111]/60 border border-white/5 p-6 sm:p-8 rounded-xl relative overflow-hidden">
            {/* Ambient subtle gradient backdrop */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/[0.01] blur-2xl pointer-events-none" />

            <motion.div
              key={activeItem}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Header */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    {language === 'ru' ? experience[activeItem].role.ru : experience[activeItem].role.en}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-400">
                    <Calendar size={12} className="text-blue-500" />
                    {experience[activeItem].period}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-400 font-semibold">
                  <Briefcase size={14} />
                  <span>{experience[activeItem].company}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {language === 'ru' ? experience[activeItem].description.ru : experience[activeItem].description.en}
              </p>

              {/* Achievements bullet points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <Star size={12} className="text-blue-500" />
                  {language === 'ru' ? 'Ключевые результаты' : 'Key Responsibilities & Impact'}
                </h4>
                <ul className="space-y-3">
                  {(language === 'ru' ? experience[activeItem].achievements.ru : experience[activeItem].achievements.en).map((ach, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                      <span className="text-gray-300 text-sm leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
