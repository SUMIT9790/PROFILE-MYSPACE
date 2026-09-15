import React from 'react';
import { Award } from 'lucide-react';

export const CertificationsSection = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="py-8 border-b theme-border">
      {/* Section Header */}
      <div className="flex items-center space-x-2 mb-4 font-mono text-xs font-semibold theme-text-muted uppercase tracking-widest">
        <span className="theme-text-faint">+</span>
        <span>CERTIFICATIONS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 rounded-xl theme-bg-card border theme-border theme-bg-hover transition-all shadow-sm flex items-start space-x-3"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Award className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold theme-text-title text-sm">
                {cert.title}
              </h3>
              <p className="text-xs theme-text-muted font-sans mt-0.5">
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
