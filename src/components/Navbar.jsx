import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Navbar = ({ personal, githubUrl }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-navbar)] backdrop-blur-md border-b theme-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Left Avatar Badge & Headline */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg theme-bg-card border theme-border flex items-center justify-center overflow-hidden hover:border-emerald-500 transition-all shadow-sm flex-shrink-0 p-1.5 group"
            title="SUMIT KUMAR"
          >
            <img
              src="/avatar-icon.png"
              alt="Avatar Icon"
              className="w-full h-full object-contain filter dark:invert invert-0 transition-transform group-hover:scale-110"
            />
          </a>

          <span className="font-mono text-xs sm:text-sm font-black tracking-wider uppercase theme-text-title">
            {personal.siteName || "SUMIT KUMAR || SOFTWARE ENGINEER"}
          </span>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          {/* GitHub Link */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg theme-text-muted hover:theme-text-title hover:bg-[var(--bg-card-hover)] transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg theme-bg-card hover:bg-[var(--bg-card-hover)] border theme-border transition-all"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4.5 h-4.5 text-amber-400" />
            ) : (
              <Moon className="w-4.5 h-4.5 text-indigo-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
