import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<'demo' | 'repo'>('demo');

  const handleOpenModal = (project: Project, mode: 'demo' | 'repo') => {
    setSelectedProject(project);
    setModalMode(mode);
  };

  return (
    <section id="proyek" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div className="flex items-center pb-2 border-b-2 border-black mb-6">
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          03
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          DAFTAR PROYEK
        </h2>
      </div>

      {/* 3-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="border-2 border-black p-4 sm:p-5 flex flex-col justify-between bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-150"
          >
            <div>
              {/* Project Blue Badge */}
              <div className="mb-3">
                <span className="bg-[#0026e6] text-white font-mono text-[11px] px-2 py-0.5 font-bold uppercase tracking-wider inline-block">
                  {project.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-mono font-bold text-sm sm:text-base text-black mb-2 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-xs leading-relaxed text-neutral-800 mb-4">
                {project.description}
              </p>

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
            <div className="space-y-2 mt-auto">
              <button
                id={`btn-demo-${project.id}`}
                onClick={() => handleOpenModal(project, 'demo')}
                className="w-full bg-black text-white py-2 px-3 text-xs font-mono font-bold tracking-wider hover:bg-neutral-800 transition flex items-center justify-center gap-1 border-2 border-black cursor-pointer"
              >
                <span>LIVE DEMO</span>
                <span>↗</span>
              </button>
              <button
                id={`btn-repo-${project.id}`}
                onClick={() => handleOpenModal(project, 'repo')}
                className="w-full bg-white text-black py-2 px-3 text-xs font-mono font-bold tracking-wider hover:bg-neutral-100 transition flex items-center justify-center border-2 border-black cursor-pointer"
              >
                REPOSITORI KODE
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
