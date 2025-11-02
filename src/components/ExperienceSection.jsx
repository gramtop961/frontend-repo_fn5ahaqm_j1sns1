import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'TechCorp',
    period: '2022 — Present',
    highlights: [
      'Led migration to a modern component architecture with TypeScript',
      'Shipped design system used across 5 product teams',
      'Improved performance core web vitals by 35%'
    ]
  },
  {
    role: 'Full‑stack Developer',
    company: 'StartupXYZ',
    period: '2020 — 2022',
    highlights: [
      'Built real-time dashboards with React and websockets',
      'Designed scalable APIs with FastAPI and MongoDB',
      'Implemented CI/CD and testing culture'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full bg-slate-950 py-16 text-slate-100">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-cyan-300" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">
                    {exp.role} • <span className="text-cyan-300">{exp.company}</span>
                  </h3>
                </div>
                <span className="text-sm text-slate-400">{exp.period}</span>
              </div>
              <ul className="mt-3 list-inside list-disc text-slate-300">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
