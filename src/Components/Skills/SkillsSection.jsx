import React, { useState } from "react";
import { 
  FiCode, 
  FiCpu, 
  FiLayers, 
  FiServer, 
  FiDatabase, 
  FiTool, 
  FiInfo, 
  FiCheckCircle, 
  FiExternalLink 
} from "react-icons/fi";

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: FiCode,
    skills: [
      { name: "Java", experience: "DSA, Object-Oriented Design, High-Volume Data Pipelines", highlight: "Core DSA Language" },
      { name: "Python", experience: "FastAPI, LangChain, PyTorch, Gemini API Integrations", highlight: "AI & Backend" },
      { name: "JavaScript", experience: "React.js, Node.js, Express, Async Workflows", highlight: "Full-Stack Core" },
      { name: "TypeScript", experience: "Type-Safe Frontend & Node.js Application Development", highlight: "Type Systems" },
      { name: "Groovy", experience: "Oracle C2M Business Logic, Utility Billing Automation", highlight: "Oracle Enterprise" },
      { name: "4GL", experience: "Enterprise C2M/MTM Module Customization & Batch Processing", highlight: "Oracle C2M" },
    ],
  },
  {
    id: "ai",
    name: "AI & Agents",
    icon: FiCpu,
    skills: [
      { name: "LangGraph", experience: "Orchestrated automation extension for Oracle C2M/MTM reducing runtime by 80%", highlight: "Enterprise Agent" },
      { name: "LangChain", experience: "Document processing, semantic chunking & context retrieval pipelines", highlight: "RAG Workflows" },
      { name: "Gemini API", experience: "Integrated into TubeGPT, EduWave, and Digital Guruji conversational bots", highlight: "Multimodal LLMs" },
      { name: "RAG Pipelines", experience: "Embedding generation, vector search, top-k ranking for video/document Q&A", highlight: "Retrieval Systems" },
      { name: "PyTorch", experience: "Deep learning fundamentals, tensor transformations, ML experimentation", highlight: "Neural Nets" },
      { name: "Generative AI", experience: "Prompt engineering, token budgeting, low-temperature grounded generation", highlight: "Synthesis" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: FiLayers,
    skills: [
      { name: "React.js", experience: "Modular SPA development, custom hooks, state management, interactive UI", highlight: "Production Standard" },
      { name: "Next.js", experience: "SSR/SSG architectures, optimized routing, decentralized application frontends", highlight: "Server Components" },
      { name: "Tailwind CSS", experience: "Bespoke design systems, dark mode palettes, responsive layouts", highlight: "Design Systems" },
      { name: "Redux", experience: "Global state management for complex full-stack web applications", highlight: "State Orchestration" },
      { name: "ShadCN / UI", experience: "Accessible, high-polish component primitives and modal interfaces", highlight: "Component UI" },
      { name: "HTML5 / CSS3", experience: "Semantic markup, modern flex/grid layouts, micro-interactions", highlight: "Web Fundamentals" },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: FiServer,
    skills: [
      { name: "Node.js", experience: "Event-driven runtime for high-throughput REST APIs and microservices", highlight: "Async Engine" },
      { name: "Express.js", experience: "RESTful routing, middleware authentication, JWT, API endpoints", highlight: "REST APIs" },
      { name: "FastAPI", experience: "High-speed asynchronous Python backend for TubeGPT AI service", highlight: "Async APIs" },
      { name: "RESTful APIs", experience: "Clean endpoint contracts, validation, error boundaries, rate limiting", highlight: "API Architecture" },
      { name: "Socket.io / WebSockets", experience: "Real-time bi-directional messaging in CivicSphere and Orbity", highlight: "Real-Time Comms" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: FiDatabase,
    skills: [
      { name: "MongoDB", experience: "Document schemas, aggregation pipelines, query optimization for 3+ apps", highlight: "NoSQL DB" },
      { name: "PostgreSQL", experience: "Relational data modeling, relational schemas, indexing, ACID transactions", highlight: "Relational DB" },
      { name: "MySQL", experience: "Relational queries, structured schema design, data persistence", highlight: "SQL Standard" },
    ],
  },
  {
    id: "tools",
    name: "DevOps & Tools",
    icon: FiTool,
    skills: [
      { name: "Git & GitHub", experience: "Branching workflows, version control, CI/CD pipelines, code reviews", highlight: "Version Control" },
      { name: "Postman", experience: "API contract testing, environment management, automated mock collections", highlight: "API Testing" },
      { name: "VS Code", experience: "Primary development IDE with customized extension workflows and debugging", highlight: "Development IDE" },
      { name: "Vercel", experience: "Serverless edge deployment, CI/CD integrations, preview pipelines", highlight: "Cloud Deployment" },
      { name: "Solana SDK", experience: "Decentralized P2P transaction settlement for Bob marketplace", highlight: "Blockchain SDK" },
    ],
  },
];

function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);
  const [activeSkill, setActiveSkill] = useState(skillCategories[0].skills[0]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setActiveSkill(cat.skills[0]);
  };

  return (
    <section
      id="Skills"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left"
    >
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-3 border border-slate-200 dark:border-slate-700/60">
          <span>// 05. TECHNICAL ECOSYSTEM</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tools, Languages & Stacks
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Interactive technical ecosystem mapped directly to real production use cases and architectural implementations.
        </p>
      </div>

      {/* Main Grid: Categories on Left, Chips + Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Category Navigation */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          {skillCategories.map((category) => {
            const isSelected = selectedCategory.id === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className={`p-4 rounded-2xl flex items-center justify-between text-left transition-all duration-200 border
                  ${isSelected 
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 shadow-sm" 
                    : "bg-slate-50/70 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${isSelected ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400" : "bg-slate-200/60 dark:bg-slate-800 text-slate-500"}`}>
                    <category.icon size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-sm block">
                      {category.name}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>
                {isSelected && (
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Chips & Inspector Pane */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Skill Chips Grid */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {selectedCategory.name} Stack
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                Click a technology to inspect
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {selectedCategory.skills.map((skill) => {
                const isActive = activeSkill.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    onClick={() => setActiveSkill(skill)}
                    className={`p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between
                      ${isActive 
                        ? "bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 border-slate-900 dark:border-emerald-400 shadow-md scale-[1.02]" 
                        : "bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border-slate-200/60 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600"
                      }
                    `}
                  >
                    <span className="font-bold text-sm leading-tight block mb-1">
                      {skill.name}
                    </span>
                    <span className={`font-mono text-[10px] ${isActive ? "text-slate-300 dark:text-slate-900 font-semibold" : "text-slate-500 dark:text-slate-400"}`}>
                      {skill.highlight}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contextual Usage Inspector */}
          {activeSkill && (
            <div className="p-6 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 font-mono text-xs shadow-md text-left">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="flex items-center gap-2 text-emerald-400 font-bold">
                  <FiInfo /> TECHNICAL INSPECTOR: {activeSkill.name.toUpperCase()}
                </span>
                <span className="text-[10px] text-slate-500">{activeSkill.highlight}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[11px] block mb-1">PRACTICAL PRODUCTION CONTEXT:</span>
                <p className="text-slate-200 text-sm leading-relaxed font-sans font-medium">
                  {activeSkill.experience}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default React.memo(SkillsSection);
