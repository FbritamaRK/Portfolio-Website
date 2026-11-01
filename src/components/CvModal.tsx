import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink } from 'lucide-react';
import {
  HERO_DATA,
  SKILLS_DATA,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  generateAtsCvText,
} from '../data/portfolioData';

interface CvModalProps {
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const cvPlainText = generateAtsCvText();

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs print:p-0 print:bg-white print:static">
      <div className="bg-white border-4 border-black w-full max-w-3xl max-h-[92vh] flex flex-col font-mono shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] print:border-none print:shadow-none print:max-h-none print:max-w-none">
        {/* Header Bar - Hidden on print */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between border-b-2 border-black print:hidden">
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
        <div className="p-6 overflow-y-auto flex-1 text-xs leading-relaxed space-y-5 bg-neutral-50 border-b-2 border-black print:bg-white print:p-6 print:border-none">
          {/* Header Info */}
          <div className="border-b-2 border-black pb-4 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-black uppercase text-black tracking-wide">
              {HERO_DATA.name}
            </h1>
            <p className="text-neutral-700 text-xs mt-1.5 font-medium">
              {HERO_DATA.location} | {HERO_DATA.phone}
            </p>
            <p className="text-[#0026e6] text-xs mt-1 font-bold flex flex-wrap gap-2 items-center justify-center sm:justify-start">
              <span>{HERO_DATA.email}</span>
              <span className="text-black">|</span>
              <a
                href={HERO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-0.5"
              >
                linkedin.com/in/febritamaark/
              </a>
              <span className="text-black">|</span>
              <a
                href={HERO_DATA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-0.5"
              >
                portfolrk.vercel.app
              </a>
            </p>
          </div>

          {/* Section: Ringkasan Profesional */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase text-xs tracking-wider">
              RINGKASAN PROFESIONAL
            </h2>
            <p className="text-neutral-800 leading-relaxed text-justify">
              {HERO_DATA.bio}
            </p>
          </div>

          {/* Section: Pendidikan */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase text-xs tracking-wider">
              PENDIDIKAN
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="border border-black p-3 bg-white">
                  <div className="flex flex-wrap justify-between font-bold text-black">
                    <span className="text-black uppercase">{edu.company}</span>
                    <span className="text-neutral-600 text-[11px] font-bold">{edu.period}</span>
                  </div>
                  <p className="text-[#0026e6] font-bold text-xs mt-0.5">
                    {edu.role}
                  </p>
                  <p className="text-neutral-800 text-xs mt-1.5 leading-relaxed">
                    • {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Pengalaman Proyek */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase text-xs tracking-wider">
              PENGALAMAN PROYEK
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="border border-black p-3.5 bg-white">
                  <div className="flex flex-wrap justify-between font-bold text-black gap-1">
                    <span className="text-xs sm:text-sm">{exp.role}</span>
                    <span className="text-neutral-600 text-[11px] font-bold">{exp.period}</span>
                  </div>
                  <p className="text-[#0026e6] font-bold text-xs mt-0.5 mb-2">{exp.company}</p>
                  {exp.bullets && exp.bullets.length > 0 ? (
                    <ul className="space-y-1.5 text-neutral-800 border-t border-neutral-200 pt-2 text-xs">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <span className="font-bold text-black shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-neutral-800 mt-1.5 leading-relaxed text-xs">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section: Sertifikasi */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase text-xs tracking-wider">
              SERTIFIKASI
            </h2>
            <div className="space-y-2">
              {CERTIFICATIONS_DATA.map((c, idx) => (
                <div key={idx} className="border border-black p-3 bg-white flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                  <div>
                    <span className="font-bold text-black block">{c.title}</span>
                    <span className="text-[#0026e6] font-bold text-xs block">{c.issuer}</span>
                  </div>
                  <div className="text-left sm:text-right text-[11px] font-bold text-neutral-700">
                    {c.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Keahlian & Bahasa */}
          <div>
            <h2 className="font-bold text-black border-b border-black pb-1 mb-2 uppercase text-xs tracking-wider">
              KEAHLIAN &amp; BAHASA
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {SKILLS_DATA.map((s, i) => (
                <div key={i} className="border border-black p-2.5 bg-white">
                  <span className="font-bold text-[10px] block border-b border-neutral-300 pb-1 mb-1.5 text-black uppercase">
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

        {/* Action Controls - Hidden on print */}
        <div className="p-4 bg-white flex flex-wrap items-center justify-between gap-3 text-xs font-mono print:hidden">
          <div className="flex flex-wrap items-center gap-2">
            {/* <button
              onClick={handleDownloadFile}
              className="border-2 border-black bg-white px-3 py-1.5 font-bold flex items-center gap-1.5 hover:bg-black hover:text-white cursor-pointer"
            >
              <Download size={14} />
              <span>UNDUH BERKAS (TXT)</span>
            </button> */}
            {/* <button
              onClick={handlePrint}
              className="border-2 border-black bg-[#ffff00] text-black px-3 py-1.5 font-bold flex items-center gap-1.5 hover:bg-black hover:text-white cursor-pointer"
            >
              <Printer size={14} />
              <span>CETAK / SIMPAN PDF</span>
            </button> */}
            {/* <button
              onClick={handleCopyText}
              className="border-2 border-black bg-white px-3 py-1.5 font-bold flex items-center gap-1.5 hover:bg-black hover:text-white cursor-pointer"
            >
              {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              <span>{copied ? 'TERSALIN' : 'SALIN TEKS CV'}</span>
            </button> */}
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
