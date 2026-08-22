import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, Coffee, Code, FileText, Cpu, Terminal } from 'lucide-react';

export const ProjectsSection = ({ projects }) => {
  const [openProjectId, setOpenProjectId] = useState(projects[0]?.id || null);

  const toggleProject = (id) => {
    setOpenProjectId(prev => (prev === id ? null : id));
  };

  const getProjectIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('café') || t.includes('cafe') || t.includes('ops')) {
      return <Coffee className="w-4 h-4 theme-text-title" />;
    }
    if (t.includes('repo') || t.includes('github') || t.includes('explainer')) {
      return <Code className="w-4 h-4 theme-text-title" />;
    }
    if (t.includes('doc') || t.includes('rag') || t.includes('pdf')) {
      return <FileText className="w-4 h-4 theme-text-title" />;
    }
    if (t.includes('ai') || t.includes('llm')) {
      return <Cpu className="w-4 h-4 theme-text-title" />;
    }
    return <Terminal className="w-4 h-4 theme-text-title" />;
  };

  return (
    <section className="py-8 border-b theme-border">
      {/* Section Header */}
      <div className="flex items-center space-x-2 mb-4 font-mono text-xs font-semibold theme-text-muted uppercase tracking-widest">
        <span className="theme-text-faint">+</span>
        <span>PROJECTS</span>
      </div>

      {/* Accordion Project List */}
      <div className="space-y-3 font-mono">
        {projects.map((project) => {
          const isOpen = openProjectId === project.id;

          return (
            <div
              key={project.id}
              className="rounded-xl theme-bg-card border theme-border overflow-hidden transition-all hover:border-[var(--border-strong)] shadow-sm"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-[var(--bg-card-hover)] transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center flex-shrink-0">
                    {getProjectIcon(project.title)}
                  </div>
                  <span className="font-bold theme-text-title text-sm">
                    {project.title}
                  </span>
                </div>

                <div className="flex items-center space-x-3 theme-text-muted text-xs">
                  <span>{project.year || '2026'}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 theme-text-title" />
                  ) : (
                    <ChevronDown className="w-4 h-4 theme-text-title" />
                  )}
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-4 pb-5 pt-1 border-t theme-border">
                      {project.subtitle && (
                        <p className="theme-text-muted text-xs sm:text-sm font-sans mb-3">
                          {project.subtitle}
                        </p>
                      )}

                      {project.bullets && (
                        <ul className="space-y-2 text-xs sm:text-sm theme-text-body font-sans mb-4">
                          {project.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start space-x-2">
                              <span className="theme-text-faint font-mono mt-1 text-xs">◆</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {project.tags && (
                        <div className="flex flex-wrap gap-1.5 mb-4 text-[10px]">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-[var(--badge-bg)] border border-[var(--badge-border)] theme-text-body font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded bg-[var(--badge-bg)] hover:bg-[var(--bg-card-hover)] border border-[var(--badge-border)] theme-text-title flex items-center space-x-1.5 transition-colors uppercase tracking-wider text-[11px]"
                          >
                            <span>REPOSITORY</span>
                            <ExternalLink className="w-3 h-3 theme-text-muted" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
