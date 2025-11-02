import React from 'react';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-16 text-slate-100">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-center gap-2">
          <User className="h-5 w-5 text-cyan-300" />
          <h2 className="text-2xl font-semibold">About</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-slate-300">
              I’m a software engineer who enjoys crafting seamless user interfaces and robust backend
              systems. My work blends strong product thinking with clean, maintainable code. I love
              solving complex problems, mentoring teams, and turning ideas into polished
              applications.
            </p>
            <p className="mt-4 text-slate-300">
              Outside of coding, you’ll find me exploring design systems, reading about developer
              experience, and tinkering with 3D/creative tooling.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
              Core Skills
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-200">
              <li className="rounded bg-white/5 px-2.5 py-1">React</li>
              <li className="rounded bg-white/5 px-2.5 py-1">TypeScript</li>
              <li className="rounded bg-white/5 px-2.5 py-1">Node.js</li>
              <li className="rounded bg-white/5 px-2.5 py-1">FastAPI</li>
              <li className="rounded bg-white/5 px-2.5 py-1">MongoDB</li>
              <li className="rounded bg-white/5 px-2.5 py-1">Tailwind</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
