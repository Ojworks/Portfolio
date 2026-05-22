"use client";

import { Award, ArrowUpRight } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  link: string;
}

const CERTS: Certification[] = [
  {
    name: "Retrieval-Augmented Generation for Enhanced AI Outputs",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "#",
  },
  {
    name: "Gemini for Application Developers",
    issuer: "Google Cloud",
    year: "2026",
    link: "#",
  },
  {
    name: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    link: "#",
  },
  {
    name: "Full-Stack Development 101",
    issuer: "Simplilearn",
    year: "2025",
    link: "#",
  },
  {
    name: "Flutter Development",
    issuer: "Google Skills / Google Cloud",
    year: "2025",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <div className="bento-card">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-stone-100" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CERTS.map((cert, idx) => (
            <div
              key={idx}
              className={`flex items-start justify-between gap-3 p-3 rounded-lg bg-transparent border border-stone-200/60 dark:border-stone-800/60 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300 group/item ${
                idx === CERTS.length - 1 && CERTS.length % 2 !== 0
                  ? "md:col-span-2 md:mx-auto md:w-[calc(50%-6px)] w-full"
                  : ""
              }`}
            >
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-transparent border border-stone-200 dark:border-stone-800 text-stone-400 dark:text-stone-500 group-hover/item:text-stone-800 dark:group-hover/item:text-stone-200 transition-colors">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-stone-800 dark:text-stone-200 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-1">
                    {cert.issuer} &middot; {cert.year}
                  </p>
                </div>
              </div>

              {cert.link && cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-800 dark:text-stone-500 dark:hover:text-stone-200 transition-colors flex-shrink-0 mt-0.5"
                  title="Verify Certification"
                >
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
