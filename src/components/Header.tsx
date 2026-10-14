import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'TENTANG', target: 'tentang' },
    { label: 'PENDIDIKAN', target: 'pendidikan' },
    { label: 'KEAHLIAN', target: 'keahlian' },
    { label: 'PROYEK', target: 'proyek' },
    { label: 'PENGALAMAN', target: 'pengalaman' },
  ];

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b-2 border-black bg-white sticky top-0 z-40">
      <div className="flex justify-between items-stretch">
        {/* Brand Logo Box */}
        <div
          onClick={() => handleNavClick('hero')}
          className="border-r-2 border-black px-4 sm:px-6 py-3 font-mono font-bold text-xs sm:text-sm tracking-wider flex items-center cursor-pointer select-none hover:bg-neutral-50 transition"
          id="nav-logo"
        >
          <span>FEBRITAMA.DEV</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-stretch font-mono text-xs font-bold tracking-wider" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.target}
              id={`nav-link-${item.target}`}
              onClick={() => handleNavClick(item.target)}
              className="border-l-2 border-black px-4 lg:px-5 py-3.5 hover:bg-neutral-100 transition flex items-center cursor-pointer uppercase"
            >
              {item.label}
            </button>
          ))}
          {/* KONTAK Button with solid black background */}
          <button
            id="nav-link-kontak"
            onClick={() => handleNavClick('kontak')}
            className="border-l-2 border-black bg-black text-white px-5 lg:px-6 py-3.5 hover:bg-neutral-800 transition flex items-center cursor-pointer uppercase"
          >
            KONTAK
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-stretch border-l-2 border-black">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3.5 py-2.5 flex items-center justify-center hover:bg-neutral-100 text-black"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-white flex flex-col font-mono text-xs font-bold divide-y-2 divide-black">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              className="px-5 py-3 text-left hover:bg-neutral-100 transition"
            >
              &gt; {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('kontak')}
            className="px-5 py-3 text-left bg-black text-white hover:bg-neutral-800 transition"
          >
            &gt; KONTAK SAYA
          </button>
        </div>
      )}
    </header>
  );
};
