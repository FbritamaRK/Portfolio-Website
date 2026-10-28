import React from 'react';

interface HeroIllustration3DProps {
  className?: string;
  isCompact?: boolean;
}

export const HeroIllustration3D: React.FC<HeroIllustration3DProps> = ({
  className = '',
  isCompact = false,
}) => {
  return (
    <div
      className={`relative select-none flex flex-col items-center justify-center ${className}`}
      role="img"
      aria-label="Komposisi ilustrasi 3D low-poly Web, Mobile, Game, dan Aksesibilitas WCAG 2.2 AA"
    >
      {/* ── Top Micro-Header / Editorial Metadata ── */}
      <div className="w-full flex items-center justify-between mb-2 px-1 text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase border-b border-black/20 pb-1.5">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 bg-[#dfff00] border border-black" />
          SYS // 3D.ISOMETRIC
        </span>
        <span className="text-black bg-neutral-100 px-1.5 py-0.2 border border-black/40 text-[9px]">
          WCAG 2.2 AA
        </span>
      </div>

      {/* ── The Low-Poly 3D Composition (Retina-crisp SVG) ── */}
      <div className="relative w-full overflow-visible">
        <svg
          viewBox="0 0 450 410"
          className="w-full h-auto overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Brutalist Shadow Filter */}
            <filter id="brutalist-shadow-sm" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="3" dy="3" stdDeviation="0" floodColor="#000000" floodOpacity="1" />
            </filter>
            <filter id="brutalist-shadow-md" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="4" dy="4" stdDeviation="0" floodColor="#000000" floodOpacity="1" />
            </filter>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#dfff00" floodOpacity="0.8" />
            </filter>
            {/* Diagonal Grid Hatching Pattern for Brutalist Tech Texture */}
            <pattern id="tech-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.12" />
            </pattern>
          </defs>

          {/* ─────────────────────────────────────────────────────────────
              1. BACKGROUND GEOMETRIC ELEMENTS & TECHNICAL MARKERS
          ───────────────────────────────────────────────────────────── */}

          {/* Editorial Crosshairs (+) */}
          <g stroke="#000000" strokeWidth="1.5" strokeLinecap="square" opacity="0.75">
            <path d="M12,12 L12,22 M7,17 L17,17" />
            <path d="M438,12 L438,22 M433,17 L443,17" />
            <path d="M438,390 L438,400 M433,395 L443,395" />
            <path d="M12,390 L12,400 M7,395 L17,395" />
          </g>

          {/* Fine Technical Coordinate & Construction Lines */}
          <line x1="20" y1="17" x2="110" y2="17" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          <line x1="330" y1="17" x2="430" y2="17" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          <line x1="438" y1="26" x2="438" y2="130" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />

          {/* 4x4 Dot Matrix Grid (Top Right) */}
          <g className="hero-3d-pulse">
            {Array.from({ length: 16 }).map((_, i) => {
              const col = i % 4;
              const row = Math.floor(i / 4);
              return (
                <circle
                  key={`dot-${i}`}
                  cx={315 + col * 12}
                  cy={24 + row * 12}
                  r="1.8"
                  fill="#000000"
                />
              );
            })}
          </g>

          {/* Rotating Wireframe Ring (Accent) */}
          <g transform="translate(395, 42)">
            <circle
              r="16"
              fill="none"
              stroke="#000000"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              className="hero-3d-spin-slow"
              style={{ transformOrigin: 'center' }}
            />
            <circle r="4" fill="#000000" />
          </g>

          {/* Rotated Neon Diamond Accent */}
          <rect
            x="264"
            y="32"
            width="18"
            height="18"
            fill="#dfff00"
            stroke="#000000"
            strokeWidth="2"
            transform="rotate(45 273 41)"
            className="hero-3d-cube"
          />

          {/* ─────────────────────────────────────────────────────────────
              2. MAIN HERO OBJECT: 3D LOW-POLY COMPUTER MONITOR
                 Features: faceted bevels, stand, glowing neon </> code symbol
          ───────────────────────────────────────────────────────────── */}
          <g className="hero-3d-main">
            {/* Monitor Drop Shadow on Desktop Surface */}
            <polygon
              points="155,296 295,296 325,286 125,286"
              fill="#000000"
              opacity="0.25"
            />

            {/* ── Stand Base (Low-poly faceted slab) ── */}
            {/* Base Shadow */}
            <polygon
              points="168,284 256,284 278,274 190,274"
              fill="#000000"
            />
            {/* Base Front Face */}
            <polygon
              points="164,278 252,278 252,284 164,284"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />
            {/* Base Right Face (Shaded) */}
            <polygon
              points="252,278 274,268 274,274 252,284"
              fill="#1a1a1a"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />
            {/* Base Top Face (Lit neon facet) */}
            <polygon
              points="164,278 186,268 274,268 252,278"
              fill="#dfff00"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />

            {/* ── Stand Neck (Low-poly faceted column) ── */}
            {/* Neck Right Face (Shaded) */}
            <polygon
              points="234,250 244,244 242,269 232,274"
              fill="#737373"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />
            {/* Neck Front Face */}
            <polygon
              points="212,250 234,250 232,274 210,274"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />

            {/* ── Monitor Housing (3D Extrusion Facets) ── */}
            {/* Solid Brutalist Shadow Behind Monitor */}
            <polygon
              points="126,116 342,116 358,103 358,245 342,256 126,256"
              fill="#000000"
            />

            {/* Top Bevel Facet (High studio light) */}
            <polygon
              points="120,110 136,97 352,97 336,110"
              fill="#f5f5f5"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />
            {/* Right Bevel Facet (Studio shadow) */}
            <polygon
              points="336,110 352,97 352,239 336,252"
              fill="#141414"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />

            {/* Monitor Front Frame */}
            <rect
              x="120"
              y="110"
              width="216"
              height="142"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2.5"
            />

            {/* ── Monitor Screen (High Contrast Brutalist Display) ── */}
            <rect
              x="128"
              y="118"
              width="200"
              height="126"
              fill="#050505"
              stroke="#000000"
              strokeWidth="1.5"
            />

            {/* Screen Header Bar */}
            <line x1="128" y1="138" x2="328" y2="138" stroke="#222222" strokeWidth="1" />
            <g transform="translate(136, 126)">
              <rect x="0" y="2" width="6" height="6" fill="#ffffff" />
              <rect x="9" y="2" width="6" height="6" fill="#dfff00" />
              <rect x="18" y="2" width="6" height="6" fill="#737373" />
              <text x="32" y="8" fill="#737373" fontFamily="Space Mono, monospace" fontSize="7.5" fontWeight="bold">
                DEV_TERMINAL // MAIN
              </text>
            </g>
            <g transform="translate(288, 126)">
              <rect x="0" y="1" width="34" height="9" fill="#141414" stroke="#333333" strokeWidth="0.8" />
              <circle cx="5" cy="5.5" r="2" fill="#dfff00" />
              <text x="11" y="7.5" fill="#dfff00" fontFamily="Space Mono, monospace" fontSize="6" fontWeight="bold">
                ONLINE
              </text>
            </g>

            {/* Signature Neon Yellow </> Code Symbol (Hero Centerpiece) */}
            <g className="hero-3d-glow">
              <text
                x="228"
                y="190"
                textAnchor="middle"
                fill="#dfff00"
                fontFamily="Space Mono, JetBrains Mono, monospace"
                fontSize="38"
                fontWeight="900"
                letterSpacing="4"
                filter="url(#neon-glow)"
              >
                &lt; / &gt;
              </text>
            </g>

            {/* Monospace Code & Syntax Indentation Graphic */}
            <g transform="translate(148, 206)">
              {/* Syntax line 1 */}
              <rect x="0" y="0" width="28" height="4" fill="#dfff00" />
              <rect x="34" y="0" width="56" height="4" fill="#ffffff" opacity="0.9" />
              <rect x="96" y="0" width="38" height="4" fill="#525252" />
              
              {/* Syntax line 2 with Blinking Cursor */}
              <rect x="12" y="10" width="44" height="4" fill="#ffffff" opacity="0.9" />
              <rect x="62" y="10" width="30" height="4" fill="#dfff00" />
              <rect
                x="98"
                y="8"
                width="6"
                height="8"
                fill="#dfff00"
                className="hero-3d-cursor"
              />
            </g>

            {/* Monitor Status Chip */}
            <g transform="translate(148, 230)">
              <text
                x="0"
                y="6"
                fill="#888888"
                fontFamily="Space Mono, monospace"
                fontSize="6.5"
                fontWeight="bold"
                letterSpacing="1"
              >
                [ CORE_SYS // V2.6 // TSX+VITE ]
              </text>
            </g>
          </g>

          {/* ─────────────────────────────────────────────────────────────
              3. FLOATING CODE WINDOW (Full-Stack Web Representation)
                 Positioned top-left, floating with offset rhythm
          ───────────────────────────────────────────────────────────── */}
          <g className="hero-3d-window">
            {/* Brutalist Hard Shadow */}
            <rect
              x="22"
              y="28"
              width="178"
              height="102"
              fill="#000000"
            />
            {/* Window Container */}
            <rect
              x="18"
              y="24"
              width="178"
              height="102"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2.5"
            />
            {/* Window Titlebar */}
            <rect
              x="18"
              y="24"
              width="178"
              height="23"
              fill="#000000"
            />
            {/* Window Buttons */}
            <g transform="translate(26, 31)">
              <rect x="0" y="0" width="7" height="7" fill="#ffffff" />
              <rect x="11" y="0" width="7" height="7" fill="#dfff00" />
              <rect x="22" y="0" width="7" height="7" fill="#737373" />
            </g>
            {/* Title */}
            <text
              x="62"
              y="39"
              fill="#ffffff"
              fontFamily="Space Mono, monospace"
              fontSize="8"
              fontWeight="bold"
              letterSpacing="0.5"
            >
              FULLSTACK_WEB.TSX
            </text>
            {/* Micro Badge */}
            <rect x="162" y="30" width="26" height="11" fill="#dfff00" />
            <text
              x="175"
              y="38.5"
              textAnchor="middle"
              fill="#000000"
              fontFamily="Space Mono, monospace"
              fontSize="6.5"
              fontWeight="bold"
            >
              WEB
            </text>

            {/* Code Lines with Monospace Editorial Hierarchy */}
            <g transform="translate(28, 56)">
              {/* Line 1 */}
              <text x="0" y="6" fill="#000000" fontFamily="Space Mono, monospace" fontSize="7.5" fontWeight="bold">
                import
              </text>
              <text x="35" y="6" fill="#737373" fontFamily="Space Mono, monospace" fontSize="7.5">
                &#123; FullStack &#125;
              </text>
              <text x="96" y="6" fill="#000000" fontFamily="Space Mono, monospace" fontSize="7.5" fontWeight="bold">
                from
              </text>
              <text x="122" y="6" fill="#000000" fontFamily="Space Mono, monospace" fontSize="7.5">
                'core';
              </text>

              {/* Line 2 */}
              <text x="0" y="20" fill="#000000" fontFamily="Space Mono, monospace" fontSize="7.5" fontWeight="bold">
                const
              </text>
              <text x="30" y="20" fill="#000000" fontFamily="Space Mono, monospace" fontSize="7.5">
                api =
              </text>
              <rect x="58" y="11" width="38" height="12" fill="#dfff00" stroke="#000000" strokeWidth="0.8" />
              <text x="77" y="20" textAnchor="middle" fill="#000000" fontFamily="Space Mono, monospace" fontSize="6.5" fontWeight="bold">
                ASYNC
              </text>
              <text x="100" y="20" fill="#737373" fontFamily="Space Mono, monospace" fontSize="7.5">
                () =&gt; &#123;
              </text>

              {/* Line 3 */}
              <text x="12" y="34" fill="#000000" fontFamily="Space Mono, monospace" fontSize="7.5" fontWeight="bold">
                return
              </text>
              <text x="46" y="34" fill="#000000" fontFamily="Space Mono, monospace" fontSize="7.5">
                &lt;App router="v2" /&gt;
              </text>

              {/* Line 4 */}
              <text x="0" y="47" fill="#737373" fontFamily="Space Mono, monospace" fontSize="7.5">
                &#125;;
              </text>
              <rect x="18" y="40" width="5" height="9" fill="#dfff00" className="hero-3d-cursor" />

              {/* Line Indication Bars */}
              <line x1="0" y1="56" x2="158" y2="56" stroke="#e5e5e5" strokeWidth="1" />
              <text x="0" y="64" fill="#a3a3a3" fontFamily="Space Mono, monospace" fontSize="6" fontWeight="bold">
                // FULL-STACK · REACT · NODE · TS
              </text>
            </g>
          </g>

          {/* ─────────────────────────────────────────────────────────────
              4. 3D LOW-POLY SMARTPHONE (Mobile App Development Representation)
                 Positioned right flank, extruded 3D bevels & app UI wireframe
          ───────────────────────────────────────────────────────────── */}
          <g className="hero-3d-phone">
            {/* Brutalist Hard Shadow */}
            <polygon
              points="334,174 416,174 424,166 424,306 416,314 334,314"
              fill="#000000"
            />

            {/* 3D Extruded Top Facet */}
            <polygon
              points="328,168 336,160 418,160 410,168"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />
            {/* 3D Extruded Right Edge Facet */}
            <polygon
              points="410,168 418,160 418,300 410,308"
              fill="#1a1a1a"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />

            {/* Phone Front Face */}
            <rect
              x="328"
              y="168"
              width="82"
              height="140"
              rx="4"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2.5"
            />

            {/* Phone Screen Inset */}
            <rect
              x="334"
              y="174"
              width="70"
              height="128"
              rx="2"
              fill="#080808"
            />

            {/* Dynamic Island / Speaker Pill */}
            <rect x="357" y="177" width="24" height="4" rx="2" fill="#222222" />

            {/* Screen Header */}
            <g transform="translate(340, 186)">
              <text x="0" y="6" fill="#ffffff" fontFamily="Space Mono, monospace" fontSize="6.5" fontWeight="bold">
                MOBILE_APP
              </text>
              <rect x="46" y="0" width="18" height="7" fill="#dfff00" />
              <text x="55" y="5.5" textAnchor="middle" fill="#000000" fontFamily="Space Mono, monospace" fontSize="5" fontWeight="bold">
                IOS/AND
              </text>
            </g>

            {/* App UI Card 1 (Features & Wireframe) */}
            <g transform="translate(340, 198)">
              <rect x="0" y="0" width="58" height="24" rx="2" fill="#141414" stroke="#262626" strokeWidth="0.8" />
              <rect x="4" y="4" width="8" height="8" fill="#dfff00" />
              <rect x="16" y="4" width="34" height="3" fill="#ffffff" />
              <rect x="16" y="9" width="22" height="3" fill="#737373" />
              <line x1="4" y1="17" x2="54" y2="17" stroke="#262626" strokeWidth="0.8" />
            </g>

            {/* App UI Card 2 (Interactive Toggle) */}
            <g transform="translate(340, 227)">
              <rect x="0" y="0" width="58" height="24" rx="2" fill="#141414" stroke="#262626" strokeWidth="0.8" />
              <rect x="4" y="4" width="26" height="3" fill="#ffffff" />
              <rect x="4" y="10" width="18" height="3" fill="#737373" />
              {/* Active Toggle Switch in Neon Yellow */}
              <rect x="36" y="6" width="18" height="9" rx="4.5" fill="#dfff00" stroke="#000000" strokeWidth="0.8" />
              <circle cx="49" cy="10.5" r="3" fill="#000000" />
            </g>

            {/* Primary Action Button (Deploy Mobile) */}
            <g transform="translate(340, 258)">
              <rect x="0" y="0" width="58" height="16" rx="2" fill="#dfff00" stroke="#000000" strokeWidth="1" />
              <text x="29" y="10.5" textAnchor="middle" fill="#000000" fontFamily="Space Mono, monospace" fontSize="6.5" fontWeight="bold">
                RUN MOBILE
              </text>
            </g>

            {/* Home Navigation Indicator Bar */}
            <rect x="357" y="294" width="24" height="2.5" rx="1.25" fill="#ffffff" opacity="0.8" />

            {/* Micro Badge floating above phone */}
            <g transform="translate(336, 146)">
              <rect x="0" y="0" width="66" height="15" fill="#000000" stroke="#000000" strokeWidth="1" />
              <text x="33" y="10.5" textAnchor="middle" fill="#dfff00" fontFamily="Space Mono, monospace" fontSize="7" fontWeight="bold" letterSpacing="0.8">
                [ 02. MOBILE ]
              </text>
            </g>
          </g>

          {/* ─────────────────────────────────────────────────────────────
              5. 3D GEOMETRIC CUBE WITH GAME CONTROLLER SYMBOL
                 (Game Development Representation)
                 Positioned lower-left, isometric cube with D-pad & buttons
          ───────────────────────────────────────────────────────────── */}
          <g className="hero-3d-cube">
            {/* Ground Shadow under the Cube */}
            <polygon
              points="38,284 102,284 86,294 22,294"
              fill="#000000"
              opacity="0.35"
            />

            {/* Isometric 3D Cube */}
            {/* Top Face (Neon Yellow Diamond lit by studio light) */}
            <polygon
              points="64,204 98,220 64,236 30,220"
              fill="#dfff00"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />
            {/* Top Face Detail: Stylized Game Cross */}
            <g transform="translate(64, 220)">
              <circle r="4" fill="#000000" />
            </g>

            {/* Left Face (Crisp White with Game D-Pad Symbol) */}
            <polygon
              points="30,220 64,236 64,276 30,260"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />
            {/* Game Controller D-Pad Cross Symbol */}
            <g transform="translate(47, 248)">
              {/* Horizontal Bar */}
              <rect x="-9" y="-3" width="18" height="6" fill="#000000" />
              {/* Vertical Bar */}
              <rect x="-3" y="-9" width="6" height="18" fill="#000000" />
              {/* Center Dot */}
              <circle cx="0" cy="0" r="1.5" fill="#dfff00" />
            </g>

            {/* Right Face (Deep Shadow Black with Action Buttons A/B/X/Y) */}
            <polygon
              points="64,236 98,220 98,260 64,276"
              fill="#0a0a0a"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />
            {/* 4 Action Buttons in Diamond Formation */}
            <g transform="translate(81, 248)">
              {/* Button Y (Top) */}
              <circle cx="0" cy="-6" r="2.2" fill="#dfff00" />
              {/* Button B (Right) */}
              <circle cx="6" cy="0" r="2.2" fill="#ffffff" />
              {/* Button A (Bottom) */}
              <circle cx="0" cy="6" r="2.2" fill="#dfff00" />
              {/* Button X (Left) */}
              <circle cx="-6" cy="0" r="2.2" fill="#ffffff" />
            </g>

            {/* Micro Tag Floating Beside Cube */}
            <g transform="translate(20, 298)">
              <rect x="0" y="0" width="84" height="15" fill="#000000" />
              <text x="42" y="10.5" textAnchor="middle" fill="#ffffff" fontFamily="Space Mono, monospace" fontSize="7" fontWeight="bold">
                [ 03. GAME DEV ]
              </text>
            </g>
          </g>

          {/* ─────────────────────────────────────────────────────────────
              6. ACCESSIBILITY SEAL / ELEMENT (WCAG 2.2 Level AA)
                 Brutalist badge with universal accessibility symbol & contrast dial
          ───────────────────────────────────────────────────────────── */}
          <g className="hero-3d-badge">
            {/* Brutalist Hard Shadow */}
            <rect
              x="118"
              y="322"
              width="216"
              height="50"
              fill="#000000"
            />
            {/* Badge Container */}
            <rect
              x="114"
              y="318"
              width="216"
              height="50"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2.5"
            />

            {/* Left Icon Compartment (High Contrast Solid Black) */}
            <rect
              x="114"
              y="318"
              width="48"
              height="50"
              fill="#000000"
            />

            {/* Universal Accessibility Icon (Stylized Figure in Circle) */}
            <g transform="translate(138, 343)">
              {/* Enclosing Circular Guide */}
              <circle r="15" fill="none" stroke="#dfff00" strokeWidth="1.2" strokeDasharray="3 2" />
              {/* Head */}
              <circle cx="0" cy="-7.5" r="2.8" fill="#dfff00" />
              {/* Outstretched Arms */}
              <line x1="-10" y1="-2" x2="10" y2="-2" stroke="#dfff00" strokeWidth="2" strokeLinecap="round" />
              {/* Torso */}
              <line x1="0" y1="-3" x2="0" y2="6" stroke="#dfff00" strokeWidth="2" />
              {/* Legs Spread */}
              <line x1="0" y1="6" x2="-6" y2="12" stroke="#dfff00" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="6" x2="6" y2="12" stroke="#dfff00" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Right Information Compartment */}
            <g transform="translate(170, 332)">
              <text x="0" y="6" fill="#000000" fontFamily="Space Mono, monospace" fontSize="9" fontWeight="bold" letterSpacing="0.5">
                WCAG 2.2 LEVEL AA
              </text>
              <text x="0" y="17" fill="#737373" fontFamily="Space Mono, monospace" fontSize="7" fontWeight="bold">
                UNIVERSAL ACCESSIBILITY
              </text>

              {/* High Contrast Ratio Chip (4.5:1+ Contrast) */}
              <g transform="translate(0, 22)">
                <rect x="0" y="0" width="76" height="11" fill="#dfff00" stroke="#000000" strokeWidth="0.8" />
                <text x="38" y="8" textAnchor="middle" fill="#000000" fontFamily="Space Mono, monospace" fontSize="6.5" fontWeight="bold">
                  &#9680; 4.5:1+ CONTRAST
                </text>
              </g>

              {/* 100% INCLUSIVE TAG */}
              <g transform="translate(82, 22)">
                <rect x="0" y="0" width="68" height="11" fill="#000000" />
                <text x="34" y="8" textAnchor="middle" fill="#ffffff" fontFamily="Space Mono, monospace" fontSize="6.5" fontWeight="bold">
                  [ 04. A11Y ]
                </text>
              </g>
            </g>
          </g>

          {/* ─────────────────────────────────────────────────────────────
              7. GEOMETRIC ACCENTS & GRAPHIC ENHANCERS
          ───────────────────────────────────────────────────────────── */}
          {/* Accent Black Square */}
          <rect
            x="340"
            y="336"
            width="14"
            height="14"
            fill="#000000"
            className="hero-3d-pulse"
          />
          {/* Accent Neon Square */}
          <rect
            x="360"
            y="342"
            width="18"
            height="18"
            fill="#dfff00"
            stroke="#000000"
            strokeWidth="2"
            className="hero-3d-cube"
          />
          {/* Accent Horizontal Bar */}
          <rect
            x="386"
            y="350"
            width="42"
            height="4"
            fill="#000000"
          />

          {/* Left Vertical Accent Bar */}
          <rect
            x="14"
            y="142"
            width="4"
            height="44"
            fill="#000000"
          />
        </svg>
      </div>

      {/* ── Swiss Editorial Bottom Tagline ── */}
      <div className="mt-3 w-full flex items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#dfff00] font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <span>WEB</span>
          <span className="text-white">/</span>
          <span>MOBILE</span>
          <span className="text-white">/</span>
          <span>GAME</span>
          <span className="text-white">/</span>
          <span>A11Y</span>
        </div>
      </div>
    </div>
  );
};
