import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-slate-100">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold text-white">
            Portfolio
          </a>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#projects">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name — Built with React, Tailwind, and a playful 3D touch.
      </footer>
    </div>
  );
};

export default App;
