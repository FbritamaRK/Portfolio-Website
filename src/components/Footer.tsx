import React from 'react';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  return (
    <footer className="px-6 py-5 sm:px-10 bg-white flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
      {/* Copyright Notice */}
      <div className="text-black text-center sm:text-left text-[11px] sm:text-xs">
        © 2025 ALEX PRATAMA. HAK CIPTA DILINDUNGI UNDANG-UNDANG.
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
