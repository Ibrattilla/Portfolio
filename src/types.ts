/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TranslationContent {
  navHome: string;
  navProjects: string;
  navSkills: string;
  navExperience: string;
  navContact: string;
  
  heroGreeting: string;
  heroTitle: string;
  heroSubtitle: string;
  heroIntro: string;
  heroCtaProjects: string;
  heroCtaContact: string;
  heroYearsExp: string;
  heroProjectsDone: string;
  heroSatisfiedClients: string;
  
  projectsTitle: string;
  projectsSubtitle: string;
  projectsViewMore: string;
  projectsDemo: string;
  projectsCode: string;
  projectsClose: string;
  projectsStack: string;
  
  skillsTitle: string;
  skillsSubtitle: string;
  skillsCategoryFrontend: string;
  skillsCategoryState: string;
  skillsCategoryBackend: string;
  skillsCategoryTools: string;
  
  experienceTitle: string;
  experienceSubtitle: string;
  experiencePresent: string;
  
  contactTitle: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactMessageLabel: string;
  contactPlaceholderName: string;
  contactPlaceholderEmail: string;
  contactPlaceholderMessage: string;
  contactSendBtn: string;
  contactSendingBtn: string;
  contactSuccessMsg: string;
  contactErrorMsg: string;
  
  footerText: string;
  footerRights: string;
}

export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    ru: string;
  };
  details: {
    en: string[];
    ru: string[];
  };
  image: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  accentClass: string; // Tailwind class like text-violet-500 or border-violet-500/30
  glowClass: string;   // Tailwind glow colors
}

export interface Skill {
  name: string;
  iconName: string; // for rendering corresponding lucide icons
  level: number; // 0-100 for visual indicator
  category: 'frontend' | 'state' | 'backend' | 'tools';
}

export interface ExperienceItem {
  period: string;
  role: {
    en: string;
    ru: string;
  };
  company: string;
  description: {
    en: string;
    ru: string;
  };
  achievements: {
    en: string[];
    ru: string[];
  };
}
