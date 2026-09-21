import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check } from 'lucide-react';
import { HERO_DATA, ABOUT_DATA, SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface CvModalProps {
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const cvPlainText = `=====================================================
CURRICULUM VITAE: ${HERO_DATA.name}
${HERO_DATA.bio}
Kontak: alex.pratama@dev.id | https://github.com/alexpratama
=====================================================

[01] TENTANG SAYA
${ABOUT_DATA.paragraphs.join('\n\n')}

[02] KEAHLIAN TEKNIS
${SKILLS_DATA.map((s) => `${s.title}:\n${s.skills.map((k) => `  - ${k}`).join('\n')}`).join('\n\n')}

[03] RIWAYAT PENGALAMAN & PENDIDIKAN
${EXPERIENCE_DATA.map(
  (e) => `• ${e.role} | ${e.company} (${e.period})
  ${e.description}`
).join('\n\n')}

[04] PROYEK UTAMA
${PROJECTS_DATA.map(
  (p) => `• ${p.title} [${p.tag}]
  Stack: ${p.techStack.join(', ')}
  Deskripsi: ${p.description}`
).join('\n\n')}
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
    element.download = 'CV_ALEX_PRATAMA.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white border-4 border-black w-full max-w-2xl max-h-[90vh] flex flex-col font-mono shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header Bar */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between border-b-2 border-black">
          <div className="flex items-center space-x-2">
            <span className="bg-[#ffff00] text-black text-[11px] px-2 py-0.5 font-bold uppercase">
              DOKUMEN
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">
              CV_ALEX_PRATAMA.PDF / TXT
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
        <div className="p-6 overflow-y-auto flex-1 text-xs leading-relaxed space-y-4 bg-neutral-50 border-b-2 border-black print:p-0">
          <div className="border-b-2 border-black pb-4">
            <h1 className="text-xl font-black">{HERO_DATA.name}</h1>
            <p className="font-bold text-neutral-800 mt-1">Full-Stack Web Developer &amp; Software Engineer</p>
            <p className="text-neutral-600 text-[11px]">alex.pratama@dev.id | Jakarta, Indonesia | github.com/alexpratama</p>
          </div>

          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2">01. RINGKASAN PROFESIONAL</h2>
            <p className="text-neutral-800">{ABOUT_DATA.paragraphs[0]}</p>
          </div>

          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2">02. PENGALAMAN KERJA</h2>
            <div className="space-y-3">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold text-black">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="text-neutral-600 text-[11px]">{exp.period}</span>
                  </div>
                  <p className="text-neutral-800 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2">03. KEAHLIAN UTAMA</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SKILLS_DATA.map((s, i) => (
                <div key={i} className="border border-black p-2 bg-white">
                  <span className="font-bold text-[10px] block border-b border-neutral-300 pb-1 mb-1">
                    {s.title}
                  </span>
                  <ul className="space-y-0.5 text-[10px]">
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
              className="border-2 border-black bg-black text-white px-3 py-1.5 font-bold flex items-center gap-1.5 hover:bg-neutral-800 cursor-pointer"
            >
              <Download size={14} />
              <span>UNDUH BERKAS</span>
            </button>
            <button
              onClick={handlePrint}
              className="border-2 border-black bg-white px-3 py-1.5 font-bold flex items-center gap-1.5 hover:bg-neutral-100 cursor-pointer"
            >
              <Printer size={14} />
              <span>CETAK / PDF</span>
            </button>
            <button
              onClick={handleCopyText}
              className="border-2 border-black bg-white px-3 py-1.5 font-bold flex items-center gap-1.5 hover:bg-neutral-100 cursor-pointer"
            >
              {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              <span>{copied ? 'TERSALIN' : 'SALIN TEKS'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="border-2 border-black bg-white px-4 py-1.5 font-bold hover:bg-neutral-100 cursor-pointer"
          >
            TUTUP
          </button>
        </div>
      </div>
    </div>
  );
};
