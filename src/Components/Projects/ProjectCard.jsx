import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, 
  FiExternalLink, 
  FiCheckCircle, 
  FiCpu, 
  FiLayers, 
  FiDatabase, 
  FiTerminal, 
  FiZap,
  FiChevronDown,
  FiChevronUp,
  FiSend
} from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const tubegptArchitectureSteps = [
  {
    id: "ingest",
    stepNumber: "01",
    name: "Transcript Ingestion",
    title: "Video Context Extraction",
    icon: FiTerminal,
    badge: "FastAPI + Video Parser",
    summary: "Captures and normalizes timestamped video transcripts and user queries from the Chrome extension.",
    codeSnippet: `async def ingest_video_context(video_id: str, query: str):
    # Retrieve raw timestamped transcript
    transcript = await fetch_youtube_transcript(video_id)
    return {"video_id": video_id, "raw_text": transcript, "query": query}`,
    tags: ["FastAPI", "Chrome Extension", "Async IO"],
  },
  {
    id: "chunking",
    stepNumber: "02",
    name: "Semantic Chunking",
    title: "Context Windowing",
    icon: FiLayers,
    badge: "LangChain TextSplitter",
    summary: "Divides long transcripts into semantically coherent overlapping token windows preserving temporal cues.",
    codeSnippet: `splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=150,
    separators=["\\n\\n", "\\n", ". ", " "]
)
chunks = splitter.create_documents(texts=[raw_transcript])`,
    tags: ["LangChain", "Token Windowing"],
  },
  {
    id: "retrieval",
    stepNumber: "03",
    name: "Vector Retrieval",
    title: "Similarity Search & Ranking",
    icon: FiDatabase,
    badge: "Vector Search",
    summary: "Embeds queries into high-dimensional vector space and retrieves top-k relevant transcript chunks.",
    codeSnippet: `query_embedding = generate_embeddings(user_query)
relevant_chunks = vector_store.similarity_search_by_vector(
    embedding=query_embedding, k=4, score_threshold=0.75
)`,
    tags: ["Cosine Similarity", "Top-K Ranking"],
  },
  {
    id: "agent",
    stepNumber: "04",
    name: "LangGraph Agent",
    title: "Multi-Agent Decision Logic",
    icon: FiCpu,
    badge: "LangGraph StateGraph",
    summary: "Orchestrates multi-step reasoning, checks context sufficiency, and formats instructions for synthesis.",
    codeSnippet: `workflow = StateGraph(AgentState)
workflow.add_node("context_checker", verify_relevance)
workflow.add_node("prompt_builder", construct_grounded_prompt)
workflow.add_edge("context_checker", "prompt_builder")
app = workflow.compile()`,
    tags: ["LangGraph", "Agentic Flow"],
  },
  {
    id: "synthesis",
    stepNumber: "05",
    name: "Streaming Synthesis",
    title: "Grounded AI Generation",
    icon: FiZap,
    badge: "Gemini 1.5 LLM",
    summary: "Streams low-latency, contextually grounded answers directly back to the client extension UI.",
    codeSnippet: `response_stream = await gemini_client.generate_content_async(
    contents=grounded_prompt, stream=True,
    generation_config={"temperature": 0.2}
)
async for chunk in response_stream:
    yield f"data: {chunk.text}\\n\\n"`,
    tags: ["Gemini API", "SSE Streaming"],
  },
];

const ProjectCard = ({ project, variant = "standard" }) => {
  const { 
    title, 
    category, 
    badge, 
    description, 
    image, 
    tech = [], 
    highlights = [], 
    sourceCode, 
    link,
    telegramBot,
    hasArchitecture
  } = project;

  const [showArch, setShowArch] = useState(false);
  const [activeArchStep, setActiveArchStep] = useState(tubegptArchitectureSteps[0]);

  if (variant === "flagship") {
    return (
      <div className="w-full rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden group">
        
        {/* Glow accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-indigo-500" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content side */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap mb-3">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-200/60 dark:border-cyan-800/40">
                  {badge || "Featured AI Flagship"}
                </span>
                {category && (
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {category}
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                {title}
              </h3>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-6">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <FiCheckCircle className="text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" size={15} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech + Actions */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {hasArchitecture && (
                  <button
                    onClick={() => setShowArch(!showArch)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-cyan-100 dark:bg-cyan-950/60 hover:bg-cyan-200 dark:hover:bg-cyan-900/60 border border-cyan-300/60 dark:border-cyan-700/60 transition-colors"
                  >
                    <FiCpu className="text-cyan-600 dark:text-cyan-400" />
                    <span>{showArch ? "Hide Architecture" : "View TubeGPT Architecture"}</span>
                    {showArch ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                  </button>
                )}

                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 transition-colors"
                  >
                    <span>Launch Live Demo</span>
                    <FiExternalLink size={14} />
                  </a>
                )}

                {sourceCode && (
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                  >
                    <FiGithub size={14} />
                    <span>Source Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Visual side */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {image ? (
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-950 group-hover:scale-[1.01] transition-transform duration-300">
                <img src={image} alt={title} className="w-full h-auto object-cover max-h-[300px]" />
              </div>
            ) : (
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 border border-slate-800 p-6 sm:p-8 text-left font-mono text-xs text-slate-300 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-500">
                  <span>tubegpt_system.py</span>
                  <span className="text-cyan-400 font-bold">FastAPI / LangChain</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-500 block">PIPELINE FLOW:</span>
                    <p className="text-white font-bold text-sm">Chrome Ext ➔ FastAPI ➔ Vector Store ➔ Gemini LLM</p>
                  </div>
                  <div>
                    <span className="text-slate-500 block">KEY CAPABILITY:</span>
                    <p className="text-emerald-400">Contextual Video Q&A with Semantic Search</p>
                  </div>
                  <div>
                    <span className="text-slate-500 block">LATENCY PROFILE:</span>
                    <p className="text-slate-300">Streaming SSE responses in &lt;1.2s</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Embedded Interactive Architecture Dropdown for TubeGPT */}
        <AnimatePresence>
          {showArch && hasArchitecture && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="mb-4">
                <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  TubeGPT Interactive Pipeline Explorer
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  How TubeGPT Processes & Answers Video Context
                </h4>
              </div>

              {/* Step tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6 bg-slate-50 dark:bg-slate-950/60 p-2 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                {tubegptArchitectureSteps.map((step) => {
                  const isCur = activeArchStep.id === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveArchStep(step)}
                      className={`p-2.5 rounded-xl flex flex-col items-start text-left transition-all ${
                        isCur ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs border border-slate-200/80 dark:border-slate-700" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-mono text-[10px] font-bold text-slate-400">0{step.stepNumber}</span>
                        <step.icon size={12} className={isCur ? "text-cyan-500" : "text-slate-400"} />
                      </div>
                      <span className="font-bold text-xs truncate w-full">{step.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Step details + Code view */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50 dark:bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">
                      {activeArchStep.badge}
                    </span>
                    <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {activeArchStep.title}
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {activeArchStep.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {activeArchStep.tags.map(t => (
                      <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                    <div className="text-[10px] text-slate-500 pb-2 mb-2 border-b border-slate-800 flex justify-between">
                      <span>snippet_{activeArchStep.id}.py</span>
                      <span className="text-emerald-400 font-semibold">Python 3.11</span>
                    </div>
                    <pre className="text-xs leading-relaxed text-slate-300">
                      <code>{activeArchStep.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between text-left group">
      <div>
        {image && (
          <div className="w-full h-44 rounded-xl overflow-hidden mb-5 bg-slate-950 border border-slate-200/60 dark:border-slate-800">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}

        <div className="flex items-center justify-between gap-2 mb-2">
          {badge && (
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/60 dark:border-slate-700/60">
              {badge}
            </span>
          )}
          {category && (
            <span className="font-mono text-[11px] text-slate-400">
              {category}
            </span>
          )}
        </div>

        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {title}
        </h4>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
          {tech.map((t) => (
            <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label={`Open ${title} live demo`}
              >
                <FiExternalLink size={15} />
              </a>
            )}
            {telegramBot && (
              <a
                href={telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label={`Open ${title} Telegram bot`}
              >
                <FaTelegramPlane size={15} />
              </a>
            )}
            {sourceCode && (
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label={`Open ${title} source code`}
              >
                <FiGithub size={15} />
              </a>
            )}
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            Engineered Build
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
