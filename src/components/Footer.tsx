import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HERO_DATA } from '../data/portfolioData';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const footerRef = useScrollAnimation<HTMLElement>({ threshold: 0.3 });

  return (
    <footer
      ref={footerRef}
      className="animate-on-scroll anim-fade-up px-6 py-5 sm:px-10 bg-white flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono"
    >
      {/* Copyright Notice */}
      <div className="text-black text-center sm:text-left text-[11px] sm:text-xs">
        © 2026 {HERO_DATA.name}. HAK CIPTA DILINDUNGI UNDANG-UNDANG.
      </div>

      {/* Back to Top Button */}
      <button
        id="btn-back-to-top"
        onClick={onBackToTop}
        className="bg-black text-white px-4 py-2 font-mono font-bold text-xs tracking-wider border-2 border-black hover:bg-neutral-800 transition active:scale-95 cursor-pointer uppercase"
      >
        KEMBALI KE ATAS
      </button>
    </footer>
  );
};
