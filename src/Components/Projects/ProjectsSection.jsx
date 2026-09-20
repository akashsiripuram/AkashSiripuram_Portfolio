import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { FiChevronDown, FiChevronUp, FiLayers } from "react-icons/fi";

const allProjects = [
  {
    id: "tubegpt",
    title: "TubeGPT",
    category: "AI & Chrome Extension",
    badge: "Flagship AI Project",
    description:
      "A context-aware Chrome extension and AI backend enabling users to ask questions about YouTube videos and receive instant, grounded answers based on video context using FastAPI, LangChain, and Gemini.",
    image: null,
    tech: ["Python", "FastAPI", "LangChain", "Gemini API", "Chrome Extension", "Vector Retrieval"],
    highlights: [
      "Created a Chrome extension enabling users to ask questions about YouTube videos and receive context-aware answers based on video content.",
      "Architected the application workflow to process video context and generate relevant responses through an AI-powered backend.",
      "Engineered low-latency streaming SSE responses for high-velocity user queries.",
    ],
    sourceCode: "https://github.com/akashsiripuram",
    variant: "flagship",
    hasArchitecture: true,
  },
  {
    id: "eduwave",
    title: "EduWave",
    category: "EdTech & Full-Stack Platform",
    badge: "1st Place @ EPITOME'24",
    description:
      "A full-stack smart education platform featuring live interactive video classes, automated quizzes, personalized learning paths, and an integrated Gemini AI assistant for students.",
    image: "/Project/eduwave.png",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini API", "Express.js", "Tailwind CSS"],
    highlights: [
      "Designed a full-stack education platform featuring live video classes, quizzes, personalized learning paths, and an AI chat assistant for students.",
      "Integrated frontend and backend workflows using React.js, Node.js, and MongoDB with Gemini AI integration; won 1st place among 30+ teams at EPITOME'24 Hackathon.",
    ],
    sourceCode: "https://github.com/akashsiripuram/eduWave",
    link: "https://edu-wave.vercel.app/",
    variant: "flagship",
  },
  {
    id: "spur-chat",
    title: "Spur Chat",
    category: "AI Customer Support",
    badge: "Groq LLM + PostgreSQL",
    description:
      "A customer-support chat system with a floating widget, Express/TypeScript backend, PostgreSQL persistence, and Groq SDK (openai/gpt-oss-20b) with store FAQ prompt injection.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Groq SDK"],
    highlights: [
      "Built a floating customer support widget with conversation restore via localStorage conversationId.",
      "Persisted chat history in PostgreSQL and injected domain knowledge into the LLM system prompt for accurate replies.",
    ],
    sourceCode: "https://github.com/akashsiripuram/spur-chat",
    variant: "standard",
  },
  {
    id: "bob",
    title: "Bob – Decentralized Marketplace",
    category: "Decentralized & Distributed Systems",
    badge: "3rd Place @ Innovathon 2.0",
    description:
      "A decentralized peer-to-peer marketplace using Next.js, Node.js, MongoDB, and Solana for low-cost, instant micro-transactions and secure data exchange.",
    image: "/Project/bob.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Solana SDK", "Tailwind CSS"],
    highlights: [
      "Optimized transaction workflows to approximately 0.000005 SOL transaction cost during a 36-hour hackathon.",
      "Secured 3rd place among 60+ teams at Innovathon 2.0 (VNR VJIET).",
    ],
    sourceCode: "https://github.com/akashsiripuram/bob",
    link: "https://bob-v1.vercel.app/",
    variant: "standard",
  },
  {
    id: "yokai",
    title: "Yokai – Solana Wallet Tracker Bot",
    category: "Solana & Automation Bot",
    badge: "Live Telegram Bot",
    description:
      "A Telegram bot to centralize and track multiple Solana wallets, token balances, NFT holdings, and real-time price updates with automated cron alert pipelines.",
    tech: ["Node.js", "TypeScript", "Prisma ORM", "Telegraf", "@solana/web3.js", "Cron Jobs"],
    highlights: [
      "Enables users to add/manage multiple Solana wallets, view aggregated balances, and track NFTs in real-time.",
      "Engineered automated token subscription and price fluctuation notifications via scheduled cron jobs.",
    ],
    sourceCode: "https://github.com/akashsiripuram/yokai",
    telegramBot: "http://t.me/yokaiwallet_bot",
    variant: "standard",
  },
  {
    id: "flip-for-sol",
    title: "Flip for SOL",
    category: "Solana Blockchain App",
    badge: "On-Chain Devnet Game",
    description:
      "A Solana-based decentralized web application where users stake SOL on an on-chain coin flip with Phantom & Backpack wallet integration on Solana devnet.",
    tech: ["React", "Next.js", "Node.js", "Solana SDK", "Phantom Wallet", "Tailwind CSS"],
    highlights: [
      "Integrated browser wallet extensions (Phantom, Backpack) for on-chain staking and instant devnet payout logic.",
      "Built responsive stake control and transaction state verification interface.",
    ],
    sourceCode: "https://github.com/akashsiripuram/flip-for-sol",
    variant: "standard",
  },
  {
    id: "nexus",
    title: "Nexus – Team Collaboration Platform",
    category: "Full-Stack Collaboration",
    badge: "Production SaaS Demo",
    description:
      "A modern team collaboration and task management platform with role-based member assignment, real-time status updates, and automated Nodemailer HTML notifications.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
    highlights: [
      "Built user and task management workflows with automated welcome emails and credential generation.",
      "Deployed full-stack platform across Vercel frontend and live backend API.",
    ],
    sourceCode: "https://github.com/akashsiripuram/Nexus",
    link: "https://nexus-v1-phi.vercel.app/",
    variant: "standard",
  },
  {
    id: "hercyclediary",
    title: "HerCycleDiary",
    category: "HealthTech & AI Assistant",
    badge: "Gemini AI Health Tracker",
    description:
      "A women's menstrual health tracker with period cycle prediction, cramp-based food nutrition suggestions, history analytics, and a Gemini AI guidance chatbot.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini API", "Tailwind CSS"],
    highlights: [
      "Engineered cycle duration prediction algorithms, period analytics, and cramp-based nutrition advice.",
      "Integrated Gemini AI assistant for instant, personalized guidance and cycle queries.",
    ],
    sourceCode: "https://github.com/akashsiripuram/HerCycleDiary",
    variant: "standard",
  },
  {
    id: "civicsphere",
    title: "CivicSphere",
    category: "GovTech & Real-Time Workflows",
    badge: "24-Hour Hackathon Build",
    description:
      "A full-stack urban governance platform for real-time civic issue reporting, complaint tracking, and smart city emergency workflows with WebSocket chat.",
    image: "/Project/civicsphere.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Gemini API"],
    highlights: [
      "Engineered real-time issue reporting and WebSocket-based citizen-to-administrator communication.",
      "Integrated AI and weather-aware emergency alert workflows for civic response use cases.",
    ],
    sourceCode: "https://github.com/akashsiripuram/CivicSphere",
    link: "https://civic-sphere.vercel.app/",
    variant: "standard",
  },
  {
    id: "orbity",
    title: "Orbity",
    category: "Real-Time Collaboration",
    badge: "WebSockets Platform",
    description:
      "A real-time chat application for responsive multi-user messaging and collaborative communication across distributed clients.",
    image: "/Project/orbity.png",
    tech: ["React.js", "Node.js", "Express.js", "WebSockets", "Tailwind CSS"],
    highlights: [
      "Built WebSocket-based real-time messaging with a clean, responsive interface.",
      "Engineered room state management and low-latency message broadcast pipelines.",
    ],
    sourceCode: "https://github.com/akashsiripuram/Orbity",
    link: "https://orbity-teal.vercel.app/",
    variant: "standard",
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? allProjects 
    : allProjects.filter(p => filter === "ai" 
        ? (p.tech.includes("Gemini API") || p.tech.includes("LangChain") || p.tech.includes("Groq SDK"))
        : (p.tech.includes("Solana SDK") || p.tech.includes("@solana/web3.js")));

  // In initial view: show flagship projects + top 3 standard projects
  const flagshipProjects = filteredProjects.filter(p => p.variant === "flagship");
  const standardProjects = filteredProjects.filter(p => p.variant !== "flagship");
  
  const displayedStandard = showAll ? standardProjects : standardProjects.slice(0, 3);
  const remainingCount = Math.max(0, standardProjects.length - 3);

  return (
    <section
      id="Projects"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-3 border border-slate-200 dark:border-slate-700/60">
            <span>// 04. FEATURED PRODUCTS & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Case studies of AI-powered applications, decentralized Solana systems, customer-support bots, and production full-stack platforms.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/60 self-start md:self-auto">
          <button
            onClick={() => setFilter("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              filter === "all"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            All Builds ({allProjects.length})
          </button>
          <button
            onClick={() => setFilter("ai")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              filter === "ai"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            AI / LLM
          </button>
          <button
            onClick={() => setFilter("blockchain")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              filter === "blockchain"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Solana / Blockchain
          </button>
        </div>
      </div>

      {/* Flagship Projects (TubeGPT & EduWave) */}
      <div className="space-y-8 mb-10">
        {flagshipProjects.map((p) => (
          <ProjectCard key={p.id} project={p} variant="flagship" />
        ))}
      </div>

      {/* Standard / Modular Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedStandard.map((p) => (
          <ProjectCard key={p.id} project={p} variant="standard" />
        ))}
      </div>

      {/* Showcase All Projects Toggle Button */}
      {standardProjects.length > 3 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-200"
          >
            <FiLayers className="text-emerald-500" />
            <span>
              {showAll ? "Show Fewer Projects" : `Show All Projects (${remainingCount} More Builds)`}
            </span>
            {showAll ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
          </button>
        </div>
      )}
    </section>
  );
}

export default React.memo(Projects);
