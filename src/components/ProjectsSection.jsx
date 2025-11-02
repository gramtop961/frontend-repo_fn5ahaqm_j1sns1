import React from 'react';
import { Code } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Analytics Dashboard',
    description:
      'High‑performance dashboard with live metrics, custom charts, and role‑based access.',
    tags: ['React', 'WebSockets', 'Tailwind']
  },
  {
    title: 'API Platform Starter',
    description:
      'Production‑ready FastAPI template with auth, rate limiting, and background jobs.',
    tags: ['FastAPI', 'MongoDB', 'Docker']
  },
  {
    title: 'Design System Kit',
    description:
      'A reusable UI library built with Radix + Tailwind, themable and accessible.',
    tags: ['TypeScript', 'Radix UI', 'Storybook']
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 py-16 text-slate-100">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-center gap-2">
          <Code className="h-5 w-5 text-cyan-300" />
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <article
              key={idx}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-300 ring-1 ring-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
