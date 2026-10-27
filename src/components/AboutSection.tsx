import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import profileGraduationImg from '../assets/profile-graduation.jpg';

export const AboutSection: React.FC = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const contentRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 90 });
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // Close modal on Escape key & manage body scroll
  useEffect(() => {
    if (!isPhotoModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPhotoModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isPhotoModalOpen]);

  return (
    <section id="tentang" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div
        ref={headerRef}
        className="animate-on-scroll anim-fade-left flex items-center pb-2 border-b-2 border-black mb-6"
      >
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          {ABOUT_DATA.sectionNumber}
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          {ABOUT_DATA.title}
        </h2>
      </div>

      {/* Main Content Box */}
      <div
        ref={contentRef}
        className="border-2 border-black p-5 sm:p-7 bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-start">

          {/* ── Left Column: Pure Photo (Proportional & Clean) ── */}
          <div className="animate-on-scroll anim-fade-right lg:col-span-5 flex justify-center">
            <div
              className="w-full max-w-[290px] sm:max-w-[320px] border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              onClick={() => setIsPhotoModalOpen(true)}
              title="Klik untuk melihat foto ukuran penuh"
            >
              <img
                src={profileGraduationImg}
                alt="Foto Febritama Raka Qualita Akhsana"
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── Right Column: Bio Paragraphs & Highlights ── */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {ABOUT_DATA.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="animate-on-scroll anim-fade-up font-mono text-xs sm:text-sm leading-relaxed text-black"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Highlight Quick Stats */}
            <div className="animate-on-scroll anim-fade-up pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t-2 border-black mt-2">
              <div className="border border-black p-3 bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-mono text-[10px] text-neutral-500 uppercase block font-bold">AKADEMIK</span>
                <span className="font-mono font-bold text-xs sm:text-sm text-black block mt-0.5">S1 Informatika UII</span>
                <span className="font-mono text-[11px] text-[#0026e6] font-bold block">Cum Laude (IPK 3.70)</span>
              </div>
              <div className="border border-black p-3 bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-mono text-[10px] text-neutral-500 uppercase block font-bold">SPESIALISASI</span>
                <span className="font-mono font-bold text-xs sm:text-sm text-black block mt-0.5">Aksesibilitas Web</span>
                <span className="font-mono text-[11px] text-neutral-700 font-bold block">WCAG 2.2 Level AA</span>
              </div>
              <div className="border border-black p-3 bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-mono text-[10px] text-neutral-500 uppercase block font-bold">KAPABILITAS</span>
                <span className="font-mono font-bold text-xs sm:text-sm text-black block mt-0.5">Lintas Platform</span>
                <span className="font-mono text-[11px] text-neutral-700 font-bold block">Web · Mobile · Game Dev</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Full Photo Lightbox Modal ── */}
      {isPhotoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto Profil Penuh"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div
            className="relative bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-sm sm:max-w-md w-full flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-black text-white px-3 py-2 flex items-center justify-between border-b-2 border-black">
              <span className="font-mono text-xs font-bold tracking-wider uppercase">
              </span>
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="bg-white text-black p-1 hover:bg-[#ffff00] transition border border-black cursor-pointer"
                title="Tutup (Esc)"
                aria-label="Tutup modal foto"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-3 bg-neutral-100 flex items-center justify-center overflow-auto max-h-[82vh]">
              <img
                src={profileGraduationImg}
                alt="Foto Febritama Raka Qualita Akhsana"
                className="max-h-[76vh] w-auto object-contain border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
