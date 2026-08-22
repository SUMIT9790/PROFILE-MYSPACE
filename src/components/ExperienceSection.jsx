import React from 'react';
import { Briefcase } from 'lucide-react';

export const ExperienceSection = ({ experiences }) => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <section className="py-8 border-b theme-border">
      {/* Section Header */}
      <div className="flex items-center space-x-2 mb-4 font-mono text-xs font-semibold theme-text-muted uppercase tracking-widest">
        <span className="theme-text-faint">+</span>
        <span>EXPERIENCE</span>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4.5 rounded-xl theme-bg-card border theme-border theme-bg-hover transition-all shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 font-mono">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4 theme-text-muted" />
                <h3 className="font-bold theme-text-title text-sm">{exp.role}</h3>
                <span className="theme-text-faint">@</span>
                <span className="theme-text-title font-semibold">{exp.company}</span>
              </div>
              <span className="text-xs theme-text-faint">{exp.period}</span>
            </div>

            {exp.location && (
              <p className="text-xs font-mono theme-text-faint mb-3">{exp.location}</p>
            )}

            <ul className="space-y-2 text-xs sm:text-sm theme-text-body font-sans mb-3">
              {exp.description.map((desc, dIdx) => (
                <li key={dIdx} className="flex items-start space-x-2">
                  <span className="theme-text-faint font-mono mt-1">◆</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {exp.tags && (
              <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px]">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-[var(--badge-bg)] border border-[var(--badge-border)] theme-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
