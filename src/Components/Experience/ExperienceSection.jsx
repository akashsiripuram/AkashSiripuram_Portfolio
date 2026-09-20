import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const professionalExperience = [
  {
    company: "Oracle",
    role: "Software Developer",
    duration: "Jul 2026 - Present",
    place: "Hyderabad, India",
    highlightBadge: "Current Role",
    points: [
      "Configured rate schedules, tariffs, and business rules in Oracle Utilities Customer to Meter (C2M) to support utility billing operations for the eThekwini utility project.",
      "Automated utility billing workflows using Groovy and 4GL business logic and created batch processing jobs for large-scale billing and customer data operations.",
    ],
    tags: ["Oracle C2M", "Groovy", "4GL", "Enterprise Billing", "Batch Processing", "CRM Workflows"],
    link: "https://www.oracle.com/",
  },
  {
    company: "Oracle",
    role: "Project Intern",
    duration: "Jan 2026 - Jul 2026",
    place: "Hyderabad, India",
    highlightBadge: "80% Time Reduction",
    points: [
      "Pioneered a LangGraph-based automation extension for Oracle C2M/MTM that reduced process execution time by 80% in a high-volume enterprise environment.",
      "Restructured batch processing pipelines for billing cycles and customer data integrations using 4GL and Groovy, reducing manual intervention in CRM workflows.",
    ],
    tags: ["LangGraph", "AI Automation", "Oracle C2M / MTM", "4GL", "Groovy", "Pipeline Optimization"],
    link: "https://www.oracle.com/",
  },
  {
    company: "Digital Guruji",
    role: "Full Stack Developer Intern",
    duration: "Sep 2024 - Feb 2025",
    place: "Remote",
    highlightBadge: "3+ Production Apps",
    points: [
      "Delivered 3+ production full-stack applications using React.js, Node.js, and MongoDB, contributing across architecture, development, integration, testing, and deployment.",
      "Crafted RESTful APIs with Node.js and Express.js, optimized MongoDB queries, and integrated Gemini API capabilities into application workflows.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "RESTful APIs"],
    link: "https://www.digitalguru.buzz/",
  },
];

const leadershipExperience = [
  {
    company: "GDG On Campus CVR",
    role: "Web Core Team Member",
    duration: "Sep 2024 - Dec 2025",
    place: "Hyderabad, India",
    highlightBadge: "Developer Community",
    points: [
      "Organized developer sessions, technical practice events, and hackathon initiatives as part of the web core team, mentoring peers on modern web development and collaborative tooling.",
    ],
    tags: ["Community Leadership", "Technical Mentorship", "Web Development"],
    link: "https://gdsccvr.vercel.app/",
  },
  {
    company: "LDC CVR",
    role: "Tech Team Member",
    duration: "Feb 2025 - Dec 2025",
    place: "Hyderabad, India",
    highlightBadge: "Campus Engineering",
    points: [
      "Built and maintained the LDC CVR website for campus event management and gallery workflows, streamlining event publishing and activity documentation.",
    ],
    tags: ["React", "Event Management", "Frontend Engineering"],
    link: "https://cvrldc.vercel.app/",
  },
];

function Experience() {
  const [activeTab, setActiveTab] = useState("professional");

  const currentList = activeTab === "professional" ? professionalExperience : leadershipExperience;

  return (
    <section
      id="Experience"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-3 border border-slate-200 dark:border-slate-700/60">
            <span>// 03. TRACK RECORD & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience & Impact
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Enterprise software engineering at Oracle, full-stack product shipping at Digital Guruji, and developer leadership.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/60 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("professional")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeTab === "professional"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Engineering Roles
          </button>
          <button
            onClick={() => setActiveTab("leadership")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeTab === "leadership"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Leadership & Campus
          </button>
        </div>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {currentList.map((item, index) => (
          <ExperienceCard key={`${item.company}-${index}`} experience={item} />
        ))}
      </div>
    </section>
  );
}

export default React.memo(Experience);
