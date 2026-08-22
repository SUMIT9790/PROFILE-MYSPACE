import React from 'react';
import { GraduationCap } from 'lucide-react';

export const EducationSection = ({ educationList }) => {
  if (!educationList || educationList.length === 0) return null;

  return (
    <section className="py-8 border-b theme-border">
      {/* Section Header */}
      <div className="flex items-center space-x-2 mb-4 font-mono text-xs font-semibold theme-text-muted uppercase tracking-widest">
        <span className="theme-text-faint">+</span>
        <span>EDUCATION</span>
      </div>

      <div className="space-y-4 font-mono">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="p-4.5 rounded-xl theme-bg-card border theme-border theme-bg-hover transition-all shadow-sm"
          >
            {/* Institution Header */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 theme-text-title" />
                </div>
                <div>
                  <h3 className="font-bold theme-text-title text-sm">
                    {edu.institution}
                  </h3>
                  <p className="text-xs theme-text-muted font-sans mt-0.5">
                    {edu.degree} {edu.cgpa ? `· CGPA ${edu.cgpa}` : ''}
                  </p>
                </div>
              </div>

              <span className="text-xs theme-text-faint">{edu.period}</span>
            </div>

            {/* Coursework Tags */}
            {edu.coursework && edu.coursework.length > 0 && (
              <div className="mt-4 pt-3 border-t theme-border">
                <span className="theme-text-faint uppercase text-[10px] tracking-wider block mb-2 font-semibold">
                  COURSEWORK
                </span>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2 py-0.5 rounded bg-[var(--badge-bg)] border border-[var(--badge-border)] theme-text-body transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
