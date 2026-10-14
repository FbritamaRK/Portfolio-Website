import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check } from 'lucide-react';
import { HERO_DATA, ABOUT_DATA, SKILLS_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface CvModalProps {
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const cvPlainText = `======================================================================
CURRICULUM VITAE: ${HERO_DATA.name}
${HERO_DATA.location} | ${HERO_DATA.phone}
${HERO_DATA.email} | ${HERO_DATA.linkedin} | ${HERO_DATA.github}
======================================================================

[PROFESSIONAL SUMMARY]
${ABOUT_DATA.paragraphs.join('\n\n')}

[EDUCATION]
Universitas Islam Indonesia (Sep 2022 - Oct 2026)
Bachelor, Informatika - GPA: 3.70 / 4.00 (Cum Laude)
• Fokus pada bidang Pengembangan dan Audit Aksesibilitas Website

[RELEVANT PROJECT EXPERIENCE]
${EXPERIENCE_DATA.filter((e) => !e.company.includes('UNIVERSITAS ISLAM INDONESIA'))
  .map(
    (e) => `• ${e.role} (${e.period})
  ${e.company}
  ${e.description}
  ${e.bullets ? e.bullets.map((b) => `  - ${b}`).join('\n') : ''}`
  )
  .join('\n\n')}

[CERTIFICATIONS]
${CERTIFICATIONS_DATA.map((c) => `• ${c.title} (${c.period})\n  ${c.issuer} | ${c.score || ''}\n  ${c.description}`).join('\n\n')}

[SKILLS & LANGUAGES]
${SKILLS_DATA.map((s) => `${s.title}:\n${s.skills.map((k) => `  - ${k}`).join('\n')}`).join('\n\n')}
`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(cvPlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const element = document.createElement('a');
    const file = new Blob([cvPlainText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'CV_FEBRITAMA_RAKA_QUALITA_AKHSANA.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white border-4 border-black w-full max-w-3xl max-h-[92vh] flex flex-col font-mono shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header Bar */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between border-b-2 border-black">
          <div className="flex items-center space-x-2">
            <span className="bg-[#ffff00] text-black text-[11px] px-2 py-0.5 font-bold uppercase">
              DOKUMEN RESMI
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">
              CV_FEBRITAMA_RAKA_QUALITA_AKHSANA.PDF / TXT
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-neutral-800 p-1 border border-white cursor-pointer"
            aria-label="Tutup"
          >
            <X size={16} />
          </button>
        </div>

        {/* CV Document View */}
        <div className="p-6 overflow-y-auto flex-1 text-xs leading-relaxed space-y-5 bg-neutral-50 border-b-2 border-black print:p-0">
          {/* Header Info */}
          <div className="border-b-2 border-black pb-4">
            <h1 className="text-xl font-black uppercase text-black">{HERO_DATA.name}</h1>
            <p className="font-bold text-neutral-800 mt-1">{HERO_DATA.role} · {HERO_DATA.specialization}</p>
            <p className="text-neutral-600 text-[11px] mt-1">
              {HERO_DATA.location} | {HERO_DATA.phone} | {HERO_DATA.email}
            </p>
            <p className="text-[#0026e6] text-[11px]">
              {HERO_DATA.linkedin} | {HERO_DATA.github}
            </p>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase">
              01. RINGKASAN PROFESIONAL (PROFESSIONAL SUMMARY)
            </h2>
            <p className="text-neutral-800 leading-relaxed">{ABOUT_DATA.paragraphs[0]}</p>
            <p className="text-neutral-800 leading-relaxed mt-2">{ABOUT_DATA.paragraphs[1]}</p>
            <p className="text-neutral-800 leading-relaxed mt-2">{ABOUT_DATA.paragraphs[2]}</p>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase">
              02. PENDIDIKAN (EDUCATION)
            </h2>
            <div className="border border-black p-3 bg-white">
              <div className="flex flex-wrap justify-between font-bold text-black">
                <span>UNIVERSITAS ISLAM INDONESIA</span>
                <span className="text-neutral-600 text-[11px]">Sep 2022 - Oct 2026</span>
              </div>
              <p className="text-[#0026e6] font-bold text-xs mt-0.5">
                Bachelor, Informatika — GPA: 3.70 / 4.00 (Cum Laude)
              </p>
              <p className="text-neutral-700 text-xs mt-1">
                • Fokus pada bidang Pengembangan dan Audit Aksesibilitas Website (WCAG 2.2 Level AA)
              </p>
            </div>
          </div>

          {/* Section: Relevant Project Experience */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase">
              03. RELEVAN PROJECT EXPERIENCE
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_DATA.filter((e) => !e.company.includes('UNIVERSITAS ISLAM INDONESIA')).map((exp, idx) => (
                <div key={idx} className="border border-black p-3 bg-white">
                  <div className="flex flex-wrap justify-between font-bold text-black">
                    <span>{exp.role}</span>
                    <span className="text-neutral-600 text-[11px]">{exp.period}</span>
                  </div>
                  <p className="text-[#0026e6] font-bold text-xs mt-0.5">{exp.company}</p>
                  <p className="text-neutral-800 mt-1.5 leading-relaxed">{exp.description}</p>
                  {exp.bullets && (
                    <ul className="mt-2 space-y-1 text-neutral-700 border-t border-neutral-200 pt-2">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>&gt; {b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase">
              04. SERTIFIKASI (CERTIFICATIONS)
            </h2>
            <div className="space-y-2">
              {CERTIFICATIONS_DATA.map((c, idx) => (
                <div key={idx} className="border border-black p-3 bg-white flex justify-between items-center">
                  <div>
                    <span className="font-bold text-black block">{c.title}</span>
                    <span className="text-[#0026e6] font-bold text-xs block">{c.issuer} {c.score ? `— ${c.score}` : ''}</span>
                    <span className="text-neutral-600 text-[11px] block mt-0.5">{c.description}</span>
                  </div>
                  <div className="text-right text-[11px] font-bold">{c.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Skills & Languages */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase">
              05. KEAHLIAN &amp; BAHASA (SKILLS &amp; LANGUAGES)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {SKILLS_DATA.map((s, i) => (
                <div key={i} className="border border-black p-2.5 bg-white">
                  <span className="font-bold text-[10px] block border-b border-neutral-300 pb-1 mb-1.5 text-black">
                    {s.title}
                  </span>
                  <ul className="space-y-1 text-[10px] text-neutral-800">
                    {s.skills.map((item, j) => (
                      <li key={j}>&gt; {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="p-4 bg-white flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownloadFile}
              className="border-2 border-black bg-white px-3 py-1.5 font-bold flex items-center gap-1.5 hover:bg-black hover:text-white cursor-pointer"
            >
              <Download size={14} />
              <span>UNDUH BERKAS (TXT)</span>
            </button>
            <button
              onClick={handlePrint}
              className="border-2 border-black bg-[#ffff00] text-black px-3 py-1.5 font-bold flex items-center gap-1.5 hover:bg-black hover:text-white cursor-pointer"
            >
              <Printer size={14} />
              <span>CETAK / SIMPAN PDF</span>
            </button>
            <button
              onClick={handleCopyText}
              className="border-2 border-black bg-white px-3 py-1.5 font-bold flex items-center gap-1.5 hover:bg-black hover:text-white cursor-pointer"
            >
              {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              <span>{copied ? 'TERSALIN' : 'SALIN TEKS CV'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="border-2 border-black bg-[#AD0000] text-white px-4 py-1.5 font-bold hover:bg-[#700000] hover:text-white cursor-pointer"
          >
            TUTUP
          </button>
        </div>
      </div>
    </div>
  );
};
