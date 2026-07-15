/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skills } from '../data';
import { Skill } from '../types';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';

// Map icon names to Lucide icons
const IconRenderer: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'state' | 'backend' | 'tools'>('all');

  const categories = [
    { id: 'all', label: t.heroGreeting === "Hi, I'm" ? 'All Skills' : 'Все навыки' },
    { id: 'frontend', label: t.skillsCategoryFrontend },
    { id: 'state', label: t.skillsCategoryState },
    { id: 'backend', label: t.skillsCategoryBackend },
    { id: 'tools', label: t.skillsCategoryTools },
  ] as const;

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
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
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{t.navSkills}</span>
            <span className="h-1 w-1 bg-blue-500 rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-4"
          >
            {t.skillsTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {t.skillsSubtitle}
          </motion.p>
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              id={`skills-tab-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md tracking-wide transition-all duration-300 border cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group p-5 bg-[#111111]/60 border border-white/5 hover:border-blue-500/30 rounded-xl relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-white/5 rounded-lg text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 border border-white/10">
                  <IconRenderer name={skill.iconName} className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Progress visualizer */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-gray-500">
                  <span>PROFICIENCY</span>
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-white/[0.02]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:from-blue-400 group-hover:to-indigo-400"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
