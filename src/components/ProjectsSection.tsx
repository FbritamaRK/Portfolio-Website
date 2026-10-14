import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<'demo' | 'repo'>('demo');

  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 100 });

  const handleOpenModal = (project: Project, mode: 'demo' | 'repo') => {
    setSelectedProject(project);
    setModalMode(mode);
  };

  return (
    <section id="proyek" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div
        ref={headerRef}
        className="animate-on-scroll anim-fade-left flex items-center pb-2 border-b-2 border-black mb-6"
      >
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          03
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          DAFTAR PROYEK
        </h2>
      </div>

      {/* 2-Column Projects Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="animate-on-scroll anim-scale-in border-2 border-black p-5 sm:p-6 flex flex-col justify-between bg-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
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
              <h3 className="font-mono font-bold text-base sm:text-lg text-black mb-2 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-xs sm:text-sm leading-relaxed text-neutral-800 mb-4">
                {project.description}
              </p>

              {/* Highlights Preview */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mb-4 space-y-1 font-mono text-xs text-neutral-700 border-l-2 border-black pl-3 py-1 bg-neutral-50">
                  {project.highlights.slice(0, 2).map((hl, idx) => (
                    <li key={idx} className="line-clamp-2">
                      • {hl}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="border border-black px-2 py-0.5 text-[10px] font-mono font-medium text-black bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto pt-2 border-t border-neutral-200">
              <button
                id={`btn-demo-${project.id}`}
                onClick={() => handleOpenModal(project, 'demo')}
                className="w-full bg-black text-white py-2.5 px-3 text-xs font-mono font-bold tracking-wider hover:bg-neutral-800 transition flex items-center justify-center gap-1.5 border-2 border-black cursor-pointer"
              >
                <span>DETAIL &amp; DEMO</span>
                <span>↗</span>
              </button>
              <button
                id={`btn-repo-${project.id}`}
                onClick={() => handleOpenModal(project, 'repo')}
                className="w-full bg-white text-black py-2.5 px-3 text-xs font-mono font-bold tracking-wider hover:bg-neutral-100 transition flex items-center justify-center border-2 border-black cursor-pointer"
              >
                ARSITEKTUR &amp; KODE
              </button>
            </div>
          </div>
        ))}
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
