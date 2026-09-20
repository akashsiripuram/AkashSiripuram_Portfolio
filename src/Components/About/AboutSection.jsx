import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { 
  FiCpu, 
  FiTerminal, 
  FiLayers, 
  FiDatabase, 
  FiCode, 
  FiActivity, 
  FiAward, 
  FiCheckCircle 
} from "react-icons/fi";

const EducationCard = React.lazy(() => import("./EducationCard"));
const TechnicalProfileCard = React.lazy(() => import("./TechnicalProfileCard"));

const capabilityPillars = [
  {
    icon: FiCpu,
    title: "AI & Agentic Systems",
    tagline: "LangGraph, RAG & LLM Workflows",
    description: "Architecting multi-agent reasoning graphs, context-aware RAG pipelines, and automated browser extensions with Gemini and FastAPI.",
    metrics: "LangGraph • LangChain • PyTorch • Gemini",
    accent: "text-cyan-500 dark:text-cyan-400",
    border: "hover:border-cyan-500/50",
  },
  {
    icon: FiTerminal,
    title: "Enterprise Automation",
    tagline: "Oracle C2M & Batch Processing",
    description: "Developing robust CRM workflows, rate schedules, tariffs, and high-volume billing batch pipelines using Groovy and 4GL.",
    metrics: "Oracle C2M/MTM • Groovy • 4GL • Batch Jobs",
    accent: "text-emerald-500 dark:text-emerald-400",
    border: "hover:border-emerald-500/50",
  },
  {
    icon: FiLayers,
    title: "Full-Stack Architecture",
    tagline: "MERN & Scalable Web Apps",
    description: "Building production full-stack systems with React.js, Next.js, Node.js, Express, and WebSockets with resilient data flows and clean APIs.",
    metrics: "React • Next.js • Express • REST • WebSockets",
    accent: "text-indigo-500 dark:text-indigo-400",
    border: "hover:border-indigo-500/50",
  },
  {
    icon: FiCode,
    title: "Algorithmic Engineering",
    tagline: "Data Structures & Speed Coding",
    description: "Active competitive programming background with 1100+ problems solved across LeetCode (1700), Codeforces, and CodeChef.",
    metrics: "1100+ Solved • Graphs • Dynamic Programming",
    accent: "text-amber-500 dark:text-amber-400",
    border: "hover:border-amber-500/50",
  },
];

const technicalProfiles = [
  { platform: "leetcode", username: "Akash_siripuram", profileLink: "https://leetcode.com/u/Akash_siripuram/", fallbackStats: { totalSolved: 713, rating: 1700, rankBadge: 'Knight (1700)' } },
  { platform: "codeforces", username: "akash_siripuram", profileLink: "https://codeforces.com/profile/akash_siripuram", fallbackStats: { totalSolved: 93, rating: 1136, rankBadge: 'Pupil (1136)' } },
  { platform: "codechef", username: "akash_021", profileLink: "https://www.codechef.com/users/akash_021", fallbackStats: { totalSolved: 370, rating: 1469, rankBadge: '2★ (1469)' } },
];

const educationData = [
  { title: "Bachelor of Technology", College: "CVR College of Engineering", Course: "Computer Science & Engineering", Branch: "B.Tech CSE", Marks: "9.18 / 10 CGPA", Year: "2022 - 2026" },
  { title: "Senior Secondary (12th)", College: "Alphores Junior College", Course: "Mathematics, Physics & Chemistry", Branch: "Marks: 989/1000", Marks: "98.90%", Year: "2020 - 2022" },
  { title: "Secondary School (10th)", College: "Siddartha High School", Course: "General Science & Mathematics", Branch: "State Board", Marks: "10 / 10 CGPA", Year: "2019 - 2020" },
];

const FallbackLoader = () => (
  <div className="flex justify-center items-center h-32">
    <div className="w-7 h-7 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function About() {
  return (
    <section
      id="About"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left"
    >
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-3 border border-slate-200 dark:border-slate-700/60">
          <span>// 01. CAPABILITIES & TELEMETRY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Engineering Identity & Core Pillars
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Combining enterprise automation, deep algorithmic problem solving, and modern generative AI architectures to build robust, high-impact software systems.
        </p>
      </div>

      {/* 4 Core Capability Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {capabilityPillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300 ${pillar.border}`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                <pillar.icon size={22} className={pillar.accent} />
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400">
                PILLAR 0{idx + 1}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              {pillar.title}
            </h3>
            <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
              {pillar.tagline}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {pillar.description}
            </p>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                {pillar.metrics}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Live Coding Telemetry */}
      <div className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-slate-200 dark:border-slate-800 gap-3">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <FiActivity className="text-emerald-500" />
              Live Coding Telemetry
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Dynamically retrieved in real-time from official platform APIs and scrapers.
            </p>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 font-semibold">
            1100+ Total Problems Solved
          </span>
        </div>

        <Suspense fallback={<FallbackLoader />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalProfiles.map((profile, index) => (
              <TechnicalProfileCard key={index} {...profile} />
            ))}
          </div>
        </Suspense>
      </div>

      {/* Academic Background */}
      <div>
        <div className="mb-6 pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Academic Background
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Consistent high-academic excellence in Computer Science & Engineering.
            </p>
          </div>
        </div>

        <Suspense fallback={<FallbackLoader />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {educationData.map((edu, idx) => (
              <EducationCard key={idx} {...edu} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
}

export default React.memo(About);
