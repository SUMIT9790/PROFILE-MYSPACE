import React, { useState } from 'react';
import { portfolioData as initialData } from './config/portfolioData';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ContributionsGraph } from './components/ContributionsGraph';
import { IntroSection } from './components/IntroSection';
import { StackSection } from './components/StackSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [data] = useState(() => {
    const saved = localStorage.getItem('user_portfolio_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.personal && parsed.personal.name === "SUMIT KUMAR") {
          parsed.personal.avatarUrl = "/profile.jpg";
          parsed.personal.siteName = "SUMIT KUMAR";
          parsed.personal.initials = "SK";
          parsed.personal.location = "Patna, Bihar, India";
          return parsed;
        }
      } catch (e) {
        return initialData;
      }
    }
    return initialData;
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen theme-bg-main theme-text-body transition-colors relative cursor-default">
        {/* Custom Circular Mouse Follower Pointer */}
        <CustomCursor />

        {/* Navigation Header */}
        <Navbar
          personal={data.personal}
          githubUrl={data.socials.github}
        />

        {/* Full-Width Main Container */}
        <main className="max-w-6xl mx-auto px-4 sm:px-8 pb-16 pt-4">
          {/* Hero Header */}
          <HeroSection
            personal={data.personal}
            socials={data.socials}
          />

          {/* Contributions Graph */}
          <ContributionsGraph
            username={data.socials.githubUsername}
          />

          {/* Intro Section */}
          <IntroSection
            introData={data.intro}
            timezone={data.personal.timezone}
          />

          {/* Stack Section */}
          <StackSection
            stackCategories={data.stack}
          />

          {/* Experience Section */}
          {data.experience && data.experience.length > 0 && (
            <ExperienceSection
              experiences={data.experience}
            />
          )}

          {/* Projects Section */}
          <ProjectsSection
            projects={data.projects}
          />

          {/* Education Section */}
          <EducationSection
            educationList={data.education}
          />

          {/* Contact Section */}
          <ContactSection
            contact={data.contact}
            socials={data.socials}
          />

          {/* Footer */}
          <Footer
            name={data.personal.name}
          />
        </main>
      </div>
    </ThemeProvider>
  );
}
