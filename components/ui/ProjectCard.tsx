'use client';

import React from 'react';
import { Project } from '@/data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const gradients = [
    'from-[#72383D]/20 to-[#AC9C8D]/40',
    'from-[#322D29]/20 to-[#D1C7BD]/60',
    'from-[#AC9C8D]/30 to-[#72383D]/30',
    'from-[#72383D]/30 to-[#322D29]/30',
    'from-[#AC9C8D]/40 to-[#D1C7BD]/40',
  ];

  const bgGradient = gradients[index % gradients.length];

  return (
    <div className="luxury-card p-6 sm:p-8 flex flex-col justify-between group h-full">
      <div>
        {/* Editorial Visual Container */}
        <div
          className={`w-full h-52 sm:h-60 rounded-[24px] bg-gradient-to-br ${bgGradient} border border-[#AC9C8D]/40 mb-6 relative overflow-hidden flex items-center justify-center`}
        >
          <div className="text-center p-6 backdrop-blur-md bg-[#EFE9E1]/60 rounded-2xl border border-[#EFE9E1]/80 shadow-sm max-w-[85%]">
            <span className="text-[10px] font-mono tracking-widest text-[#72383D] uppercase font-bold">
              {project.category}
            </span>
            <div className="font-serif text-2xl font-semibold text-[#322D29] mt-1">
              {project.title}
            </div>
            <div className="text-xs font-mono text-[#322D29]/70 mt-1 font-medium">
              {project.subtitle}
            </div>
          </div>
        </div>

        {/* Content Subtitle & Year */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-mono text-[#72383D] font-semibold tracking-wide uppercase">
            {project.subtitle}
          </span>
          <span className="text-xs font-mono text-[#322D29]/60">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#322D29] mb-3 group-hover:text-[#72383D] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#322D29]/85 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Tech Stack & Links */}
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#EFE9E1]/90 border border-[#AC9C8D]/40 text-[#322D29] text-xs font-mono rounded-lg font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-[#AC9C8D]/30">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live project: ${project.title}`}
            className="btn-primary flex-1 py-3 px-4 text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Live Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title}`}
            className="btn-secondary px-4 py-3 text-xs font-medium flex items-center justify-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-[#322D29]" />
            <span className="hidden sm:inline">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
