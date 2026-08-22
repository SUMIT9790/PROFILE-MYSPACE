import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, WhatsappIcon } from './SocialIcons';

export const HeroSection = ({ personal, socials }) => {
  const [timeString, setTimeString] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: personal.timezone || 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        const formattedTime = new Intl.DateTimeFormat('en-GB', options).format(now);
        setTimeString(`${formattedTime} ${personal.timezoneLabel || 'IST'}`);
      } catch (e) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        setTimeString(`${hours}:${minutes} IST`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [personal.timezone, personal.timezoneLabel]);

  const handleCopyEmail = () => {
    if (personal.email) {
      navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyPhone = () => {
    if (personal.phone) {
      navigator.clipboard.writeText(personal.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="relative pt-8 pb-10 border-b theme-border overflow-hidden">
      {/* Background Monogram Watermark - SK */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none font-mono text-[140px] sm:text-[180px] font-black tracking-tighter uppercase theme-text-title">
        {personal.initials || "SK"}
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* Header Profile Row */}
        <div className="flex items-start space-x-5">
          {/* Avatar Box */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl theme-bg-card border theme-border p-1 flex-shrink-0 shadow-lg overflow-hidden">
            <img
              src={personal.avatarUrl || "/profile.jpg"}
              alt={personal.name}
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/profile.jpg";
              }}
            />
          </div>

          {/* Name & Tagline */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase theme-text-title">
                {personal.name || "SUMIT KUMAR"}
              </h1>
              {personal.verified && (
                <span title="Verified Developer">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/10" />
                </span>
              )}
            </div>
            <p className="theme-text-body text-sm sm:text-base mt-1 font-sans max-w-3xl">
              {personal.tagline || "Software Engineer — Building modern web applications & scalable systems."}
            </p>
          </div>
        </div>

        {/* Metadata Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-xs font-mono pt-4 border-t theme-border">
          {/* Role */}
          <div>
            <span className="theme-text-faint uppercase tracking-wider text-[10px] block mb-1 font-semibold">
              ROLE
            </span>
            <span className="theme-text-title font-medium text-sm">{personal.role}</span>
          </div>

          {/* Fellowship / Current Position */}
          <div>
            <span className="theme-text-faint uppercase tracking-wider text-[10px] block mb-1 font-semibold">
              INSTITUTION / DEGREE
            </span>
            <span className="theme-text-title font-medium text-sm">{personal.fellowship}</span>
          </div>

          {/* Location */}
          <div>
            <span className="theme-text-faint uppercase tracking-wider text-[10px] block mb-1 font-semibold">
              LOCATION
            </span>
            <span className="theme-text-title font-medium text-sm">{personal.location || "Patna, Bihar, India"}</span>
          </div>

          {/* Dynamic Local Time */}
          <div>
            <span className="theme-text-faint uppercase tracking-wider text-[10px] block mb-1 font-semibold">
              LOCAL TIME
            </span>
            <span className="theme-text-title font-medium text-sm">
              {timeString}
            </span>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <span className="theme-text-faint uppercase tracking-wider text-[10px] block mb-1 font-semibold">
              EMAIL
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${personal.email}`}
                className="theme-text-title hover:text-emerald-500 underline decoration-[var(--border-strong)] underline-offset-4 font-medium transition-colors text-sm"
              >
                {personal.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="theme-text-faint hover:theme-text-title p-1 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="sm:col-span-2">
            <span className="theme-text-faint uppercase tracking-wider text-[10px] block mb-1 font-semibold">
              PHONE / WHATSAPP
            </span>
            <div className="flex items-center gap-2">
              <a
                href={socials.whatsapp || "https://wa.me/919798676653"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-600 underline decoration-emerald-500/40 underline-offset-4 font-medium transition-colors text-sm flex items-center gap-1.5"
              >
                <WhatsappIcon className="w-4 h-4" />
                <span>{personal.phone || "+91 9798676653"}</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="theme-text-faint hover:theme-text-title p-1 transition-colors"
                title="Copy Phone Number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Social Buttons Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg border theme-border theme-bg-card hover:bg-[var(--bg-card-hover)] flex items-center gap-2 theme-text-title transition-all text-xs font-mono shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}

          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg border theme-border theme-bg-card hover:bg-[var(--bg-card-hover)] flex items-center gap-2 theme-text-title transition-all text-xs font-mono shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          )}

          {socials.leetcode && (
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg border theme-border theme-bg-card hover:bg-[var(--bg-card-hover)] flex items-center gap-2 theme-text-title transition-all text-xs font-mono shadow-sm"
            >
              <LeetcodeIcon className="w-4 h-4" />
              <span>LeetCode</span>
            </a>
          )}

          {socials.whatsapp && (
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 flex items-center gap-2 text-emerald-500 font-semibold transition-all text-xs font-mono shadow-sm"
            >
              <WhatsappIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
