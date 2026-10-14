/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 56;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-0 sm:py-8 text-black antialiased selection:bg-yellow-300 selection:text-black">
      {/* Centered Portfolio Frame */}
      <div className="w-full max-w-5xl bg-white border-x-2 sm:border-y-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Navigation Bar */}
        <Header onNavigate={scrollToSection} />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero
            onContactClick={() => scrollToSection('kontak')}
            onDownloadCvClick={() => setIsCvModalOpen(true)}
          />

          {/* 01: Tentang Saya */}
          <AboutSection />

          {/* 02: Riwayat Pendidikan */}
          <EducationSection />

          {/* 03: Keahlian & Alat */}
          <SkillsSection />

          {/* 04: Daftar Proyek */}
          <ProjectsSection />

          {/* 05: Riwayat Pengalaman */}
          <ExperienceSection />

          {/* 06: Hubungi Saya */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onBackToTop={scrollToTop} />
      </div>

      {/* CV Download / Preview Modal */}
      {isCvModalOpen && (
        <CvModal onClose={() => setIsCvModalOpen(false)} />
      )}
    </div>
  );
}
