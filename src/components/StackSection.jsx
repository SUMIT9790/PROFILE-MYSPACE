import React from 'react';
import { Code, Layout, Server, Database, Cpu, Terminal } from 'lucide-react';

export const StackSection = ({ stackCategories }) => {
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'languages':
        return <Code className="w-3.5 h-3.5 theme-text-muted" />;
      case 'frontend':
        return <Layout className="w-3.5 h-3.5 theme-text-muted" />;
      case 'backend':
        return <Server className="w-3.5 h-3.5 theme-text-muted" />;
      case 'database':
        return <Database className="w-3.5 h-3.5 theme-text-muted" />;
      case 'ai & rag':
        return <Cpu className="w-3.5 h-3.5 theme-text-muted" />;
      default:
        return <Terminal className="w-3.5 h-3.5 theme-text-muted" />;
    }
  };

  return (
    <section className="py-8 border-b theme-border">
      {/* Section Header */}
      <div className="flex items-center space-x-2 mb-4 font-mono text-xs font-semibold theme-text-muted uppercase tracking-widest">
        <span className="theme-text-faint">+</span>
        <span>STACK</span>
      </div>

      {/* Stack Categories List */}
      <div className="divide-y divide-slate-200 dark:divide-neutral-800/60 border-t border-b theme-border font-mono text-xs">
        {stackCategories.map((item) => (
          <div
            key={item.id}
            className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[var(--bg-card-hover)] px-3 rounded-md transition-colors"
          >
            {/* Category Title */}
            <div className="flex items-center space-x-3 w-44 flex-shrink-0">
              <span className="theme-text-faint font-mono text-[11px]">{item.id}</span>
              <div className="flex items-center space-x-2">
                {getCategoryIcon(item.category)}
                <span className="font-bold theme-text-title">{item.category}</span>
              </div>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {item.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[var(--badge-bg)] border border-[var(--badge-border)] theme-text-title text-[11px] font-mono hover:border-emerald-500 transition-all shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
