/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data';
import { Project } from '../types';
import { ExternalLink, Github, X, CheckCircle, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
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
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{t.navProjects}</span>
            <span className="h-1 w-1 bg-blue-500 rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-4"
          >
            {t.projectsTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {t.projectsSubtitle}
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col h-full bg-[#111111]/60 border border-white/5 hover:border-blue-500/30 rounded-xl overflow-hidden transition-all duration-300 shadow-xl"
            >
              {/* Project Image Panel */}
              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {language === 'ru' ? project.description.ru : project.description.en}
                </p>

                {/* Bottom Actions */}
                <div className="flex items-center justify-end pt-4 border-t border-white/5 mt-auto">
                  <button
                    id={`project-view-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>{t.projectsViewMore}</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                      className="font-mono"
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div id="project-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Head Image */}
              <div className="relative aspect-[16/8] w-full bg-zinc-900 border-b border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  id="project-modal-close"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-black text-zinc-400 hover:text-white rounded-full border border-white/10 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Contents */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {language === 'ru' ? selectedProject.description.ru : selectedProject.description.en}
                  </p>
                </div>

                {/* Key Accomplishments Bullet Points */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Code size={14} className="text-blue-500" />
                    {language === 'ru' ? 'Результаты и Достижения' : 'Key Achievements'}
                  </h4>
                  <ul className="space-y-3.5">
                    {(language === 'ru' ? selectedProject.details.ru : selectedProject.details.en).map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-blue-500 shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer CTA Buttons */}
              <div className="p-6 border-t border-white/5 bg-[#0c0c0c] flex flex-col sm:flex-row items-center gap-3">
                <a
                  id="project-modal-demo"
                  href={selectedProject.demoUrl}
                  target={selectedProject.demoUrl === '#' ? undefined : '_blank'}
                  rel={selectedProject.demoUrl === '#' ? undefined : 'noopener noreferrer'}
                  onClick={(e) => {
                    if (selectedProject.demoUrl === '#') {
                      e.preventDefault();
                    }
                  }}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                >
                  <ExternalLink size={16} />
                  <span>{t.projectsDemo}</span>
                </a>
                <a
                  id="project-modal-github"
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg text-sm border border-white/10 transition-colors"
                >
                  <Github size={16} className="text-blue-400" />
                  <span>{t.projectsCode}</span>
                </a>
                <button
                  id="project-modal-cancel"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-3 text-gray-400 hover:text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                >
                  {t.projectsClose}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
