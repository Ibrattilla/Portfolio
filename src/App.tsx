/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-600 selection:text-white antialiased font-sans">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

