import React from "react";
import { FiAward, FiCheckCircle, FiCalendar, FiMapPin } from "react-icons/fi";
import { FaTrophy, FaCertificate } from "react-icons/fa";

const hackathonWins = [
  {
    title: "EPITOME'24 Hackathon",
    placement: "1st Place Winner",
    metric: "Rank 1 of 30+ Teams",
    date: "Mar 2024",
    location: "GRIET, Hyderabad",
    project: "EduWave – AI Smart Education Platform",
    description: "Architected a full-stack educational ecosystem with Gemini-powered AI assistants and live video learning workflows.",
    tags: ["1st Place", "Gemini API", "MERN Stack", "EdTech"],
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Innovathon 2.0",
    placement: "3rd Place Podium",
    metric: "Rank 3 of 60+ Teams",
    date: "Jan 2025",
    location: "VNR VJIET",
    project: "Bob – Solana Decentralized Marketplace",
    description: "Built a high-speed decentralized data marketplace with 0.000005 SOL micro-transaction costs under a 36-hour sprint.",
    tags: ["3rd Place", "Solana SDK", "Micro-Transactions", "Solana Marketplace"],
    badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "HackSphere Hackathon",
    placement: "2nd Place Runner-Up",
    metric: "Rank 2 of 50+ Teams",
    date: "Oct 2023",
    location: "BITS Pilani",
    project: "Serenity – Real-Time Collaboration Hub",
    description: "Delivered a rapid real-time team collaboration platform with distributed synchronization in a competitive hackathon.",
    tags: ["2nd Place", "Real-Time Comms", "Rapid Build", "BITS Pilani"],
    badgeBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400",
  },
];

const certifications = [
  {
    title: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
    issuer: "Oracle University",
    date: "Certified 2025",
    description:
      "Comprehensive certification covering Artificial Intelligence, Machine Learning, Deep Learning, Large Language Models, and Generative AI services on Oracle Cloud Infrastructure.",
    topics: ["Generative AI", "Deep Learning", "LLMs & Embeddings", "Oracle Cloud (OCI)", "ML Pipelines"],
  },
];

function AchievementsSection() {
  return (
    <section
      id="Achievements"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left"
    >
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-3 border border-slate-200 dark:border-slate-700/60">
          <span>// 06. HONORS & RECOGNITION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Hackathon Honors & Certifications
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Proven product execution in high-intensity engineering hackathons and verified cloud AI credentials.
        </p>
      </div>

      {/* Hackathon Podium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {hackathonWins.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className={`font-mono text-xs px-3 py-1 rounded-full font-bold border ${item.badgeBg}`}>
                  {item.placement}
                </span>
                <span className="flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <FiCalendar size={12} />
                  {item.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">
                <FiMapPin size={12} />
                <span>{item.location}</span>
                <span>•</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{item.metric}</span>
              </div>

              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Project: {item.project}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Oracle Certification Banner */}
      {certifications.map((cert, i) => (
        <div
          key={i}
          className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border border-slate-800 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex-shrink-0">
              <FaCertificate size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                  {cert.issuer}
                </span>
                <span className="font-mono text-xs text-slate-400">{cert.date}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mb-4">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.topics.map((tp) => (
                  <span key={tp} className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
                    {tp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default React.memo(AchievementsSection);
