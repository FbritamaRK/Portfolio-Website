import React from 'react';
import { Download } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onDownloadCvClick: () => void;
  onDownloadCvAtsClick?: () => void;
}

/** Rotating CSS 3D cube */
const Cube3D: React.FC = () => (
  <div className="cube-float">
    <div className="cube-scene">
      <div className="cube-body">
        <div className="cube-face cube-face--front">DEV</div>
        <div className="cube-face cube-face--back">CODE</div>
        <div className="cube-face cube-face--left">WEB</div>
        <div className="cube-face cube-face--right">UI</div>
        <div className="cube-face cube-face--top"></div>
        <div className="cube-face cube-face--bottom"></div>
      </div>
    </div>
  </div>
);

/** Isometric stacked boxes */
const IsoStack: React.FC = () => (
  <div className="iso-stack">
    <div className="iso-box iso-box-1" />
    <div className="iso-box iso-box-2" />
    <div className="iso-box iso-box-3" />
  </div>
);

/** 4×5 animated dot grid */
const DotGrid: React.FC = () => (
  <div className="dot-grid">
    {Array.from({ length: 20 }).map((_, i) => (
      <span key={i} />
    ))}
  </div>
);

/** The full decorative panel shown on md+ screens */
const DecorativePanel: React.FC = () => (
  <div className="hidden md:flex flex-col items-center justify-center gap-8 hero-anim hero-anim-d6 select-none">

    {/* Top row: dot grid + diamond */}
    <div className="flex items-start gap-6">
      <DotGrid />
      <div className="flex flex-col items-center gap-4 mt-1">
        <div className="shape-diamond" />
        <div className="shape-bar-h" />
      </div>
    </div>

    {/* Centre: spinning 3D cube */}
    <Cube3D />

    {/* Bottom row: iso stack + rings + bars */}
    <div className="flex items-end gap-6">
      <div className="flex flex-col gap-3">
        <div className="shape-ring" />
        <div className="flex gap-3 items-center">
          <div className="shape-square-yellow" />
          <div className="shape-ring-sm" />
          <div className="shape-square-sm" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IsoStack />
        <div className="shape-bar-h" style={{ width: 44 }} />
      </div>
    </div>

    {/* Caption label */}
    <div className="font-mono text-[10px] font-bold tracking-[0.18em] text-neutral-400 uppercase">
      [ WEB · MOBILE · GAME · WCAG 2.2 ]
    </div>
  </div>
);

export const Hero: React.FC<HeroProps> = ({
  onContactClick,
  onDownloadCvClick,
  onDownloadCvAtsClick,
}) => {
  return (
    <section id="hero" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-12 bg-white">
      <div className="flex items-center gap-10">

        {/* ── Left column: text content ── */}
        <div className="flex-1 min-w-0">
          {/* Status Badge */}
          <div className="mb-4 hero-anim hero-anim-d1 flex flex-wrap items-center gap-2">
            <span
              id="status-badge"
              className="status-blip bg-black text-[#17FF00] font-mono text-xs font-bold px-2.5 py-1 tracking-wider uppercase"
            >
              {HERO_DATA.status}
            </span>
            <span className="font-mono text-[11px] font-bold px-2 py-0.5 border border-black bg-neutral-100 text-neutral-800">
              📍 {HERO_DATA.location}
            </span>
          </div>

          {/* Greeting */}
          <p className="hero-anim hero-anim-d2 font-mono text-sm sm:text-base text-black mb-1">
            {HERO_DATA.greeting}
          </p>

          {/* Name Title */}
          <h1 className="hero-anim hero-anim-d3 font-mono font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider text-black mb-3 uppercase leading-tight">
            {HERO_DATA.name}
          </h1>

          {/* Role & Specialization Badges */}
          <div className="hero-anim hero-anim-d3 flex flex-wrap gap-1.5 mb-6">
            <span className="bg-[#0026e6] text-white font-mono text-[11px] font-bold px-2.5 py-1 uppercase tracking-wide">
              {HERO_DATA.role}
            </span>
            <span className="bg-[#ffff00] text-black font-mono text-[11px] font-bold px-2.5 py-1 border border-black uppercase tracking-wide">
              WCAG 2.2 LEVEL AA
            </span>
          </div>

          {/* Divider Bar */}
          <div className="hero-anim hero-anim-d3 border-b-2 border-black w-full mb-6" />

          {/* Bio Box */}
          <div className="hero-anim hero-anim-d4 border-2 border-black p-4 sm:p-5 mb-6 bg-white">
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed text-black">
              {HERO_DATA.bio}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="hero-anim hero-anim-d5 flex flex-wrap items-center gap-4">
            <button
              id="btn-hubungi-saya"
              onClick={onContactClick}
              className="bg-black text-white px-5 sm:px-6 py-3 font-mono font-bold text-xs sm:text-sm border-2 border-black hover:bg-neutral-800 transition tracking-wider cursor-pointer"
            >
              HUBUNGI SAYA
            </button>
            <button
              id="btn-unduh-cv"
              onClick={onDownloadCvClick}
              className="bg-white text-black px-5 sm:px-6 py-3 font-mono font-bold text-xs sm:text-sm border-2 border-black hover:bg-neutral-100 transition tracking-wider cursor-pointer"
            >
              LIHAT RINGKASAN CV
            </button>
            <a
              id="btn-unduh-cv-ats"
              href={HERO_DATA.cvDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (onDownloadCvAtsClick) {
                  e.preventDefault();
                  onDownloadCvAtsClick();
                }
              }}
              className="bg-white text-black px-5 sm:px-6 py-3 font-mono font-bold text-xs sm:text-sm border-2 border-black hover:bg-neutral-100 transition tracking-wider cursor-pointer flex items-center gap-2 no-underline"
            >
              <Download size={15} />
              <span>UNDUH CV (ATS)</span>
            </a>
          </div>
        </div>

        {/* ── Right column: 3D decorative elements (md+) ── */}
        <div className="hidden md:block flex-shrink-0">
          <DecorativePanel />
        </div>

      </div>
    </section>
  );
};
