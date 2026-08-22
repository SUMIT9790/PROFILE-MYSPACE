import React, { useState } from 'react';
import { X, Save, Copy, Check, RefreshCw } from 'lucide-react';

export const DataCustomizerModal = ({ isOpen, onClose, data, onSave }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState(data);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  const handlePersonalChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };

  const handleSocialChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      socials: {
        ...prev.socials,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const generateExportCode = () => {
    return `export const portfolioData = ${JSON.stringify(formData, null, 2)};`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateExportCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 font-mono">
      <div className="bg-[#121318] border border-neutral-700/80 rounded-xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>⚡ Customize Portfolio Details</span>
            </h2>
            <p className="text-xs text-neutral-400 font-sans">
              Update your details live or copy the code for <code className="text-emerald-400 font-mono">src/config/portfolioData.js</code>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-800 px-5 bg-neutral-900/20 text-xs">
          <button
            onClick={() => setActiveTab('personal')}
            className={`py-2.5 px-4 font-bold border-b-2 transition-colors ${
              activeTab === 'personal'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Personal Info
          </button>
          <button
            onClick={() => setActiveTab('socials')}
            className={`py-2.5 px-4 font-bold border-b-2 transition-colors ${
              activeTab === 'socials'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Links & Socials
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`py-2.5 px-4 font-bold border-b-2 transition-colors ${
              activeTab === 'export'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Export JS Code
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs">
          {activeTab === 'personal' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-neutral-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.personal.name || ''}
                  onChange={(e) => handlePersonalChange('name', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="e.g. Farzan Khan"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Initials (Badge)</label>
                <input
                  type="text"
                  value={formData.personal.initials || ''}
                  onChange={(e) => handlePersonalChange('initials', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="e.g. FK"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-neutral-400 block mb-1">Tagline</label>
                <input
                  type="text"
                  value={formData.personal.tagline || ''}
                  onChange={(e) => handlePersonalChange('tagline', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="e.g. Building AI-native products — measured, not assumed."
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Role</label>
                <input
                  type="text"
                  value={formData.personal.role || ''}
                  onChange={(e) => handlePersonalChange('role', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="e.g. Full-Stack & AI Engineer"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Fellowship / Position</label>
                <input
                  type="text"
                  value={formData.personal.fellowship || ''}
                  onChange={(e) => handlePersonalChange('fellowship', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="e.g. FOSSEE Summer Fellow @ IIT Bombay"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Location</label>
                <input
                  type="text"
                  value={formData.personal.location || ''}
                  onChange={(e) => handlePersonalChange('location', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="e.g. India"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Email</label>
                <input
                  type="text"
                  value={formData.personal.email || ''}
                  onChange={(e) => handlePersonalChange('email', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="e.g. yourname@gmail.com"
                />
              </div>
            </div>
          )}

          {activeTab === 'socials' && (
            <div className="space-y-4">
              <div>
                <label className="text-neutral-400 block mb-1">GitHub Profile URL</label>
                <input
                  type="text"
                  value={formData.socials.github || ''}
                  onChange={(e) => handleSocialChange('github', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="https://github.com/yourusername"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">GitHub Username (for Heatmap)</label>
                <input
                  type="text"
                  value={formData.socials.githubUsername || ''}
                  onChange={(e) => handleSocialChange('githubUsername', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="yourusername"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">LinkedIn Profile URL</label>
                <input
                  type="text"
                  value={formData.socials.linkedin || ''}
                  onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="https://linkedin.com/in/yourusername"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">LeetCode Profile URL</label>
                <input
                  type="text"
                  value={formData.socials.leetcode || ''}
                  onChange={(e) => handleSocialChange('leetcode', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="https://leetcode.com/yourusername"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">Resume Link (PDF / Drive URL)</label>
                <input
                  type="text"
                  value={formData.socials.resume || ''}
                  onChange={(e) => handleSocialChange('resume', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-400"
                  placeholder="/resume.pdf or https://drive.google.com/..."
                />
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-400 font-sans">
                  Copy this JSON code into <code className="text-emerald-400">src/config/portfolioData.js</code>:
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded flex items-center gap-1 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg text-emerald-400 text-[11px] overflow-x-auto max-h-60 leading-relaxed font-mono">
                {generateExportCode()}
              </pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3 border-t border-neutral-800 bg-neutral-900/50 flex items-center justify-between">
          <button
            onClick={() => setFormData(data)}
            className="px-3 py-1.5 text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors text-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 border border-neutral-700 rounded text-neutral-300 hover:text-white transition-colors text-xs"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-1.5 bg-neutral-100 text-black hover:bg-white font-bold rounded flex items-center gap-1.5 transition-colors text-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
