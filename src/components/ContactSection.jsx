import React, { useState } from 'react';
import { ExternalLink, Mail, Phone, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, WhatsappIcon } from './SocialIcons';

export const ContactSection = ({ contact, socials }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    if (contact.email) {
      navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyPhone = () => {
    if (contact.phone) {
      navigator.clipboard.writeText(contact.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="py-10 border-b theme-border">
      {/* Section Header */}
      <div className="flex items-center space-x-2 mb-4 font-mono text-xs font-semibold theme-text-muted uppercase tracking-widest">
        <span className="theme-text-faint">+</span>
        <span>CONTACT</span>
      </div>

      {/* Main Headline */}
      <h2 className="text-2xl sm:text-4xl font-bold theme-text-title mb-6 tracking-tight">
        {contact.title || "Have something to build? Let's talk."}
      </h2>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs">
        {/* Email Box */}
        {contact.email && (
          <div className="p-4 rounded-xl theme-bg-card border theme-border flex flex-col justify-between group hover:border-[var(--border-strong)] transition-colors shadow-sm">
            <span className="theme-text-faint uppercase text-[10px] tracking-wider mb-2 block font-semibold">
              EMAIL
            </span>
            <div className="flex items-center justify-between gap-1">
              <a
                href={`mailto:${contact.email}`}
                className="theme-text-title hover:text-emerald-500 font-medium truncate flex items-center gap-1.5"
                title={contact.email}
              >
                <Mail className="w-4 h-4 theme-text-muted flex-shrink-0" />
                <span className="truncate">{contact.email}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="theme-text-faint hover:theme-text-title p-1 transition-colors flex-shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}

        {/* WhatsApp & Phone Box */}
        {contact.phone && (
          <div className="p-4 rounded-xl theme-bg-card border border-emerald-500/40 flex flex-col justify-between group hover:border-emerald-500 transition-colors shadow-sm">
            <span className="text-emerald-500 uppercase text-[10px] tracking-wider mb-2 block font-semibold flex items-center gap-1">
              <WhatsappIcon className="w-3 h-3 text-emerald-500" /> WHATSAPP / PHONE
            </span>
            <div className="flex items-center justify-between gap-1">
              <a
                href={contact.whatsapp || "https://wa.me/919798676653"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-600 font-medium truncate flex items-center gap-1.5"
                title={contact.phone}
              >
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="truncate">{contact.phone}</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="theme-text-faint hover:theme-text-title p-1 transition-colors flex-shrink-0"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}

        {/* GitHub Box */}
        {socials.github && (
          <div className="p-4 rounded-xl theme-bg-card border theme-border flex flex-col justify-between group hover:border-[var(--border-strong)] transition-colors shadow-sm">
            <span className="theme-text-faint uppercase text-[10px] tracking-wider mb-2 block font-semibold">
              GITHUB
            </span>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-text-title hover:text-emerald-500 font-medium flex items-center justify-between"
            >
              <div className="flex items-center space-x-2 truncate">
                <GithubIcon className="w-4 h-4 theme-text-muted flex-shrink-0" />
                <span className="truncate">@{socials.githubUsername || contact.github || 'SUMIT9790'}</span>
              </div>
              <ExternalLink className="w-4 h-4 theme-text-faint group-hover:theme-text-title transition-colors flex-shrink-0" />
            </a>
          </div>
        )}

        {/* LinkedIn Box */}
        {socials.linkedin && (
          <div className="p-4 rounded-xl theme-bg-card border theme-border flex flex-col justify-between group hover:border-[var(--border-strong)] transition-colors shadow-sm">
            <span className="theme-text-faint uppercase text-[10px] tracking-wider mb-2 block font-semibold">
              LINKEDIN
            </span>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-text-title hover:text-emerald-500 font-medium flex items-center justify-between"
            >
              <div className="flex items-center space-x-2 truncate">
                <LinkedinIcon className="w-4 h-4 theme-text-muted flex-shrink-0" />
                <span className="truncate">sumit-gupta</span>
              </div>
              <ExternalLink className="w-4 h-4 theme-text-faint group-hover:theme-text-title transition-colors flex-shrink-0" />
            </a>
          </div>
        )}

        {/* LeetCode Box */}
        {socials.leetcode && (
          <div className="p-4 rounded-xl theme-bg-card border theme-border flex flex-col justify-between group hover:border-[var(--border-strong)] transition-colors shadow-sm">
            <span className="theme-text-faint uppercase text-[10px] tracking-wider mb-2 block font-semibold">
              LEETCODE
            </span>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-text-title hover:text-emerald-500 font-medium flex items-center justify-between"
            >
              <div className="flex items-center space-x-2 truncate">
                <LeetcodeIcon className="w-4 h-4 theme-text-muted flex-shrink-0" />
                <span className="truncate">SUMIT9708</span>
              </div>
              <ExternalLink className="w-4 h-4 theme-text-faint group-hover:theme-text-title transition-colors flex-shrink-0" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
