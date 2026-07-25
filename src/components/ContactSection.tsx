/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2, AlertTriangle, Mail, SendHorizontal, MessageSquareCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending progress with high-end micro-interactions
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success notification after 5s
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[350px] h-[350px] bg-blue-600/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
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
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{t.navContact}</span>
            <span className="h-1 w-1 bg-blue-500 rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-4"
          >
            {t.contactTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {t.contactSubtitle}
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Contact Direct Cards */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div className="p-6 bg-[#111111]/60 border border-white/5 rounded-xl flex items-start gap-4">
              <div className="p-3 bg-white/5 text-blue-500 rounded-lg border border-white/10">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] font-mono">
                  Email
                </h4>
                <a
                  href="mailto:ibrattillaravshanov@gmail.com"
                  className="text-white hover:text-blue-400 font-bold text-base sm:text-lg transition-colors block mt-1 tracking-tight"
                >
                  ibrattillaravshanov@gmail.com
                </a>
                <span className="text-xs text-gray-500 block mt-1">
                  {language === 'ru' ? 'Отвечаю в течение 24 часов' : 'Response time: within 24 hours'}
                </span>
              </div>
            </div>

            <div className="p-6 bg-[#111111]/60 border border-white/5 rounded-xl flex items-start gap-4">
              <div className="p-3 bg-white/5 text-blue-500 rounded-lg border border-white/10">
                <Send size={20} className="transform rotate-[-30deg]" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] font-mono">
                  Telegram
                </h4>
                <a
                  href="https://t.me/IbrattillaRavshanov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 font-bold text-base sm:text-lg transition-colors block mt-1 tracking-tight"
                >
                  @IbrattillaRavshanov
                </a>
                <span className="text-xs text-gray-500 block mt-1">
                  {language === 'ru' ? 'Мгновенный ответ и связь' : 'Instant responses & feedback'}
                </span>
              </div>
            </div>

            <div className="p-6 bg-[#111111]/60 border border-white/5 rounded-xl flex items-start gap-4 flex-grow">
              <div className="p-3 bg-white/5 text-blue-500 rounded-lg border border-white/10">
                <MessageSquareCode size={20} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] font-mono">
                  {language === 'ru' ? 'Локация' : 'Location'}
                </h4>
                <p className="text-white font-bold text-base sm:text-lg mt-1 tracking-tight">
                  {language === 'ru' ? 'Ташкент, Узбекистан (Доступен релокейт / удаленка)' : 'Tashkent, Uzbekistan (Open to remote & relocation)'}
                </p>
                <span className="text-xs text-gray-500 block mt-1">
                  UTC +5:00
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Form Box */}
          <div className="md:col-span-7 bg-[#111111]/60 border border-white/5 p-6 sm:p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] font-mono">
                  {t.contactNameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.contactPlaceholderName}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] font-mono">
                  {t.contactEmailLabel}
                </label>
                <input
                  type="type"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.contactPlaceholderEmail}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] font-mono">
                  {t.contactMessageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.contactPlaceholderMessage}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm resize-none"
                />
              </div>

              {/* Status alerts with AnimatePresence */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 flex items-center gap-3 text-sm"
                  >
                    <CheckCircle2 size={18} className="shrink-0" />
                    <span>{t.contactSuccessMsg}</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-400 flex items-center gap-3 text-sm"
                  >
                    <AlertTriangle size={18} className="shrink-0" />
                    <span>{t.contactErrorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Send button */}
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 disabled:bg-blue-600/40 text-white hover:bg-blue-500 font-semibold rounded-lg tracking-wide transition-all duration-300 shadow-lg shadow-blue-600/15 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{t.contactSendingBtn}</span>
                  </>
                ) : (
                  <>
                    <SendHorizontal size={16} />
                    <span>{t.contactSendBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
