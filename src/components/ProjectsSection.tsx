import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown, ChevronUp, ExternalLink, FolderGit2 } from 'lucide-react';

const INITIAL_PROJECT_COUNT = 3;

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<'demo' | 'repo'>('demo');
  const [isExpanded, setIsExpanded] = useState(false);

  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 100 }, [isExpanded]);

  const handleOpenModal = (project: Project, mode: 'demo' | 'repo') => {
    setSelectedProject(project);
    setModalMode(mode);
  };

  const displayedProjects = isExpanded
    ? PROJECTS_DATA
    : PROJECTS_DATA.slice(0, INITIAL_PROJECT_COUNT);

  const remainingCount = PROJECTS_DATA.length - INITIAL_PROJECT_COUNT;
  const hasMore = remainingCount > 0;

  return (
    <section id="proyek" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div
        ref={headerRef}
        className="animate-on-scroll anim-fade-left flex items-center pb-2 border-b-2 border-black mb-6"
      >
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          04
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          DAFTAR PROYEK
        </h2>
      </div>

      {/* 3-Column Horizontal Projects Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="animate-on-scroll anim-scale-in border-2 border-black p-4 sm:p-5 flex flex-col justify-between bg-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
          >
            <div>
              {/* Project Badge & Subtitle */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="bg-[#0026e6] text-white font-mono text-[11px] px-2 py-0.5 font-bold uppercase tracking-wider inline-block">
                  {project.tag}
                </span>
                {project.subtitle && (
                  <span className="font-mono text-[10px] text-neutral-600 font-bold uppercase border-b border-neutral-300">
                    {project.subtitle}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-mono font-bold text-sm sm:text-base text-black mb-2 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-xs leading-relaxed text-neutral-800 mb-3">
                {project.description}
              </p>

              {/* Highlights Preview */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mb-3 space-y-1 font-mono text-[11px] text-neutral-700 border-l-2 border-black pl-2.5 py-1 bg-neutral-50">
                  {project.highlights.slice(0, 2).map((hl, idx) => (
                    <li key={idx} className="line-clamp-2">
                      • {hl}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="border border-black px-1.5 py-0.5 text-[10px] font-mono font-medium text-black bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 mt-auto pt-3 border-t border-neutral-200">
              <button
                id={`btn-demo-${project.id}`}
                onClick={() => handleOpenModal(project, 'demo')}
                className="w-full bg-black text-white py-2 px-3 text-xs font-mono font-bold tracking-wider hover:bg-neutral-800 transition flex items-center justify-center gap-1.5 border-2 border-black cursor-pointer"
              >
                <span>DETAIL &amp; DEMO</span>
                <span>↗</span>
              </button>
              <button
                id={`btn-repo-${project.id}`}
                onClick={() => handleOpenModal(project, 'repo')}
                className="w-full bg-white text-black py-2 px-3 text-xs font-mono font-bold tracking-wider hover:bg-neutral-100 transition flex items-center justify-center border-2 border-black cursor-pointer"
              >
                ARSITEKTUR &amp; KODE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Action / View More Projects Bar */}
      <div className="mt-8 pt-6 border-t-2 border-black flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-neutral-50 p-4 sm:p-5 border-2">
        <div className="font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-bold text-black uppercase">
            <span className="w-2.5 h-2.5 bg-[#0026e6] inline-block" />
            <span>
              MENAMPILKAN {displayedProjects.length} DARI {PROJECTS_DATA.length} PROYEK
            </span>
          </div>
          <p className="text-neutral-600 text-[11px] sm:text-xs mt-1">
            {isExpanded
              ? 'Seluruh proyek unggulan telah ditampilkan pada daftar di atas.'
              : `Tersedia ${remainingCount} proyek unggulan lainnya yang siap dieksplorasi.`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {hasMore && (
            <button
              id="btn-lihat-proyek-lainnya"
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-black text-white hover:bg-neutral-800 border-2 border-black py-2.5 px-4 text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>
                {isExpanded
                  ? 'TUTUP PROYEK LAINNYA'
                  : `LIHAT PROYEK LAINNYA (+${remainingCount})`}
              </span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}

          <a
            id="btn-github-repositories"
            href="https://github.com/FbritamaRK?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black hover:bg-neutral-100 border-2 border-black py-2.5 px-4 text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer no-underline"
          >
            <FolderGit2 size={16} />
            <span>SEMUA REPOSITORI GITHUB</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          mode={modalMode}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
