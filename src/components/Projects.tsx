"use client";

import { ExternalLink } from "lucide-react";
import { Github } from "./icons";

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  metrics: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Trae",
    category: "Mobile App / State Architecture",
    description:
      "A cross-platform mobile application designed for medical and academic students to track duty sessions, clinical rotations, and attendance hours efficiently.",
    tech: ["React Native", "Expo", "Zustand", "Expo Router", "Gifted Charts"],
    github: "https://github.com/Ojworks/Trae",
    live: "",
    metrics: ["Rotation & Attendance Tracking", "60% Duty Logging Reduction"],
  },
  {
    title: "OMNI",
    category: "Local-First Document Studio",
    description:
      "A serverless, local-first document utility studio enabling secure client-side format conversions, editing, and background removal processing without server latency.",
    tech: ["React", "TypeScript", "WebAssembly", "Cloudflare Workers"],
    github: "https://github.com/Ojworks/Omni",
    live: "",
    metrics: ["100% Client-Side Privacy", "4x Faster Document Renderings"],
  },
];

export default function Projects() {
  return (
    <div className="bento-card">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-stone-100" />
        <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
          Selected Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-3.5 rounded-lg bg-transparent border border-stone-200/60 dark:border-stone-800/60 transition-all duration-300 hover:border-stone-400 dark:hover:border-stone-700 hover:shadow-[0_2px_8px_rgba(0,0,0,0.015)]"
          >
            <div>
              {/* Header: Category & Actions */}
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[9px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-800 dark:text-stone-500 dark:hover:text-stone-200 transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-800 dark:text-stone-500 dark:hover:text-stone-200 transition-colors"
                      aria-label={`${project.title} Live`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="mb-3.5 space-y-0.5 border-t border-stone-200/60 dark:border-stone-800/60 pt-2 flex flex-col gap-0.5">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-1.5 text-[10px] font-medium text-stone-600 dark:text-stone-300">
                    <span className="h-1 w-1 rounded-full bg-stone-600 dark:bg-stone-300" />
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1 mt-auto pt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 text-[9px] rounded bg-transparent border border-stone-200/60 dark:border-stone-800/60 text-stone-500 dark:text-stone-400 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
