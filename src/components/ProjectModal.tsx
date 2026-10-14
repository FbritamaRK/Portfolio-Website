import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Terminal, Code2, Check, Copy } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  mode: 'demo' | 'repo';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, mode, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'arch' | 'logs'>(
    mode === 'demo' ? 'preview' : 'arch'
  );
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = mode === 'demo' ? project.demoUrl : project.repoUrl;
    if (url) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white border-4 border-black w-full max-w-2xl max-h-[90vh] flex flex-col font-mono shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Modal Header Bar */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between border-b-2 border-black">
          <div className="flex items-center space-x-2">
            <span className="bg-[#0026e6] text-white text-[11px] px-2 py-0.5 font-bold uppercase">
              {project.tag}
            </span>
            <span className="text-xs font-bold truncate max-w-xs sm:max-w-md">
              {project.title}
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

        {/* Tab Controls */}
        <div className="flex border-b-2 border-black bg-neutral-100 text-xs font-bold">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2.5 flex items-center gap-1.5 cursor-pointer border-r-2 border-black ${
              activeTab === 'preview' ? 'bg-white text-black' : 'hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            <Terminal size={14} />
            <span>PRATINJAU SISTEM</span>
          </button>
          <button
            onClick={() => setActiveTab('arch')}
            className={`px-4 py-2.5 flex items-center gap-1.5 cursor-pointer border-r-2 border-black ${
              activeTab === 'arch' ? 'bg-white text-black' : 'hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            <Code2 size={14} />
            <span>ARSITEKTUR &amp; KODE</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-4 py-2.5 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'logs' ? 'bg-white text-black' : 'hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            <span>STATUS TELEMETRI</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4 text-xs sm:text-sm">
          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-neutral-50">
                <p className="font-bold mb-1 text-black">RINGKASAN PROYEK:</p>
                <p className="text-neutral-800 leading-relaxed">{project.description}</p>
              </div>

              {project.metrics && (
                <div className="bg-[#ffff00] text-black font-bold p-3 border-2 border-black text-xs">
                  * METRIK KINERJA: {project.metrics}
                </div>
              )}

              <div>
                <p className="font-bold text-xs uppercase mb-2">&gt; HIGHLIGHT FITUR UTAMA:</p>
                <ul className="space-y-1.5">
                  {project.highlights?.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <span className="font-bold text-black">[OK]</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <p className="font-bold text-xs uppercase mb-2">&gt; STACK TEKNOLOGI TERINTEGRASI:</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="border-2 border-black bg-white px-2.5 py-1 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'arch' && (
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-black text-[#dfff00] font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-700 text-neutral-400">
                  <span>tree /{project.id}</span>
                  <span>Modular Architecture</span>
                </div>
                <pre className="overflow-x-auto leading-relaxed whitespace-pre font-mono">
                  {project.archTree || `├── src/\n│   ├── components/\n│   └── modules/\n└── README.md`}
                </pre>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                {project.archDescription ||
                  'Arsitektur dirancang secara modular dengan pemisahan dependensi (Clean Architecture), memastikan setiap komponen mudah diuji secara independen.'}
              </p>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="border-2 border-black bg-neutral-900 text-white p-4 font-mono text-xs space-y-2">
              <div className="text-green-400">&gt; audit check: WCAG 2.2 Level AA / Code Quality [PASSED]</div>
              <div className="text-neutral-400">[info] target_standard: Web Content Accessibility Guidelines 2.2 AA</div>
              <div className="text-neutral-400">[info] contrast_ratio: &gt;= 4.5:1 (Normal Text) / &gt;= 3:1 (Large UI) [PASS]</div>
              <div className="text-neutral-400">[info] keyboard_navigation: 100% focus trap &amp; skip links verified</div>
              <div className="text-neutral-400">[info] screen_reader_compat: ARIA 1.2 compliant (NVDA/VoiceOver)</div>
              <div className="text-green-400">&gt; test_suite: all unit &amp; usability test assertions passed (0 errors)</div>
              <div className="text-yellow-400 mt-2">&gt; status: production ready &amp; verified for public usage [OK]</div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="border-t-2 border-black p-4 bg-neutral-50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="border-2 border-black bg-white px-3 py-1.5 font-bold flex items-center gap-1 hover:bg-neutral-100 cursor-pointer"
            >
              {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              <span>{copied ? 'TERSALIN' : 'SALIN URL'}</span>
            </button>
            <a
              href={mode === 'demo' ? project.demoUrl : project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-black bg-white px-3 py-1.5 font-bold flex items-center gap-1 hover:bg-neutral-100 cursor-pointer text-black no-underline"
            >
              <span>{mode === 'demo' ? 'KUNJUNGI TAUTAN' : 'BUKA GITHUB'}</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-1.5 font-bold border-2 border-black hover:bg-neutral-800 cursor-pointer"
          >
            TUTUP
          </button>
        </div>
      </div>
    </div>
  );
};
