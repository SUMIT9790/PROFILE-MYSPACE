import React from 'react';

export const Footer = ({ name }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-8 pb-8 font-mono text-xs flex flex-col items-center text-center border-t theme-border mt-10">
      {/* Subtle Understated Quote Line */}
      <div className="py-4 px-4 text-center max-w-2xl mx-auto mb-6">
        <p className="text-xs sm:text-sm italic font-sans theme-text-muted tracking-wide">
          “I have not come this far to only come this far 🙂”
        </p>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 theme-text-faint text-xs font-mono pt-4 border-t theme-border">
        <div>
          © {year} <span className="theme-text-title font-semibold">{name || "SUMIT KUMAR"}</span>. All rights reserved.
        </div>

        <div className="flex items-center space-x-3 text-[11px]">
          <span>Built with React + Vite</span>
          <span>•</span>
          <span className="theme-text-faint">Developer Portfolio</span>
        </div>
      </div>
    </footer>
  );
};
