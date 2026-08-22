import React, { useMemo } from 'react';

export const IntroSection = ({ introData, timezone }) => {
  const greeting = useMemo(() => {
    try {
      const now = new Date();
      const hour = parseInt(
        new Intl.DateTimeFormat('en-US', {
          timeZone: timezone || 'Asia/Kolkata',
          hour: 'numeric',
          hour12: false
        }).format(now),
        10
      );

      if (hour >= 5 && hour < 12) return 'Morning!!';
      if (hour >= 12 && hour < 17) return 'Afternoon!!';
      return 'Evening!!';
    } catch (e) {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return 'Morning!!';
      if (hour >= 12 && hour < 17) return 'Afternoon!!';
      return 'Evening!!';
    }
  }, [timezone]);

  return (
    <section className="py-8 border-b theme-border">
      {/* Section Header */}
      <div className="flex items-center space-x-2 mb-3 font-mono text-xs font-semibold theme-text-muted uppercase tracking-widest">
        <span className="theme-text-faint">+</span>
        <span>INTRO</span>
      </div>

      {/* Dynamic Handwritten Greeting */}
      <h2 className="font-handwritten text-4xl sm:text-5xl font-bold theme-text-title mb-4 tracking-wide">
        {greeting}
      </h2>

      {/* Bullet points */}
      <ul className="space-y-3 text-sm sm:text-base theme-text-body font-sans leading-relaxed">
        {introData.bullets && introData.bullets.map((bullet, index) => (
          <li key={index} className="flex items-start space-x-2.5">
            <span className="theme-text-muted font-mono mt-1 text-xs">◆</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
