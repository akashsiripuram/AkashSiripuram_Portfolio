import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { 
    FiArrowRight, 
    FiFileText, 
    FiGithub, 
    FiLinkedin, 
    FiMail, 
    FiTerminal, 
    FiCpu, 
    FiCheckCircle,
    FiLayers,
    FiExternalLink
} from "react-icons/fi";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import ContactForm from "../Contact/ContactFormCard";

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    const [telemetryTab, setTelemetryTab] = useState("telemetry");

    const heroMetrics = [
        { label: "Role", value: "SWE @ Oracle", highlight: "C2M & Groovy" },
        { label: "B.Tech CGPA", value: "9.18 / 10", highlight: "CVR College" },
        { label: "Competitive Stats", value: "1100+ Solved", highlight: "LC 1700 | CF 1136" },
        { label: "Hackathons", value: "3+ Podiums", highlight: "AI & Full-Stack" },
    ];

    const socialLinks = [
        { name: "GitHub", icon: FiGithub, href: "https://github.com/akashsiripuram" },
        { name: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/siripuramakash" },
        { name: "LeetCode", icon: FiTerminal, href: "https://leetcode.com/u/Akash_siripuram/" },
        { name: "Twitter", icon: FaTwitter, href: "https://x.com/siripuramakash2" },
        { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/+919951077641" },
        { name: "Email", icon: FiMail, href: "mailto:siripuramakash2005@gmail.com" },
    ];

    return (
        <section
            id="Home"
            className="min-h-screen w-full flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
                
                {/* LEFT COLUMN: Engineering Introduction */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                    
                    {/* Live Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Software Developer @ Oracle
                        </span>
                        <span className="text-slate-300 dark:text-slate-600">|</span>
                        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                            Hyderabad, India
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
                    >
                        Architecting{" "}
                        <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                            Scalable Systems
                        </span>{" "}
                        & AI Workflows.
                    </motion.h1>

                    {/* Dynamic Role Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-10 text-lg sm:text-xl font-mono font-medium text-slate-600 dark:text-slate-300 flex items-center mb-6"
                    >
                        <span className="text-emerald-600 dark:text-emerald-400 mr-2 font-bold">&gt;</span>
                        <TypeAnimation
                            sequence={[
                                "Building LangGraph multi-agent automations.", 2200,
                                "Developing Oracle C2M billing workflows in Groovy/4GL.", 2400,
                                "Shipping high-performance MERN & Next.js platforms.", 2200,
                                "Architecting production-ready REST & WebSocket APIs.", 2200,
                            ]}
                            wrapper="span"
                            speed={55}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </motion.div>

                    {/* Narrative Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8"
                    >
                        I'm Akash Siripuram, a Software Developer at Oracle and competitive programmer focused on building production-ready web platforms, LLM/RAG agentic workflows, and enterprise automation pipelines. From automating high-volume utility billing to shipping hackathon-winning AI and full-stack software products.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8"
                    >
                        <Link
                            to="Projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                            <span>Explore Projects</span>
                            <FiArrowRight className="text-base" />
                        </Link>

                        <Link
                            to="Projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/70 border border-slate-200 dark:border-slate-700/60 transition-all duration-200 cursor-pointer"
                        >
                            <FiCpu className="text-cyan-500" />
                            <span>AI Architecture</span>
                        </Link>

                        <button
                            onClick={() => setShowForm(true)}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-all duration-200"
                        >
                            <FiMail className="text-emerald-500" />
                            <span>Contact</span>
                        </button>
                    </motion.div>

                    {/* Social Links Dock */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-2 text-slate-500 dark:text-slate-400"
                    >
                        <span className="font-mono text-xs uppercase tracking-wider mr-2 font-semibold text-slate-400 dark:text-slate-500">
                            Connect:
                        </span>
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-700/40 transition-colors"
                            >
                                <item.icon size={16} />
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Interactive Engineering HUD Terminal */}
                <div className="lg:col-span-5 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative rounded-2xl bg-slate-900 dark:bg-[#0d1424] border border-slate-800 text-slate-200 p-5 sm:p-6 shadow-2xl overflow-hidden font-mono text-xs"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                <span className="ml-2 text-slate-400 text-[11px]">akash@oracle-dev: ~</span>
                            </div>
                            <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-md text-[10px]">
                                <button
                                    onClick={() => setTelemetryTab("telemetry")}
                                    className={`px-2 py-0.5 rounded ${telemetryTab === "telemetry" ? "bg-slate-700 text-white font-semibold" : "text-slate-400"}`}
                                >
                                    Signals
                                </button>
                                <button
                                    onClick={() => setTelemetryTab("stack")}
                                    className={`px-2 py-0.5 rounded ${telemetryTab === "stack" ? "bg-slate-700 text-white font-semibold" : "text-slate-400"}`}
                                >
                                    Stack
                                </button>
                            </div>
                        </div>

                        {/* Terminal Body */}
                        {telemetryTab === "telemetry" ? (
                            <div className="space-y-4 text-left">
                                {/* System Status */}
                                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                                    <div className="flex items-center justify-between text-slate-400 mb-2">
                                        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                                            <FiCheckCircle className="text-emerald-400" /> SYSTEM ONLINE
                                        </span>
                                        <span className="text-[10px] text-slate-500">v2.4.0-prod</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                                        <div className="bg-slate-900/80 p-2 rounded-lg">
                                            <span className="text-slate-500 block">CURRENT ORG</span>
                                            <span className="font-semibold text-white">Oracle (C2M / MTM)</span>
                                        </div>
                                        <div className="bg-slate-900/80 p-2 rounded-lg">
                                            <span className="text-slate-500 block">SPECIALIZATION</span>
                                            <span className="font-semibold text-white">AI Agents & Workflows</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Coding Telemetry Preview */}
                                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                                    <div className="flex justify-between items-center text-slate-400">
                                        <span>ALGORITHMIC TELEMETRY</span>
                                        <span className="text-[10px] text-emerald-400 font-mono">1100+ Solved</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="bg-slate-900/80 p-2 rounded-lg text-center">
                                            <span className="text-[10px] text-amber-400 font-bold block">LeetCode</span>
                                            <span className="text-white font-bold text-sm">1700</span>
                                            <span className="text-[9px] text-slate-500 block">Contest Rating</span>
                                        </div>
                                        <div className="bg-slate-900/80 p-2 rounded-lg text-center">
                                            <span className="text-[10px] text-indigo-400 font-bold block">Codeforces</span>
                                            <span className="text-white font-bold text-sm">1136</span>
                                            <span className="text-[9px] text-slate-500 block">Rating</span>
                                        </div>
                                        <div className="bg-slate-900/80 p-2 rounded-lg text-center">
                                            <span className="text-[10px] text-emerald-400 font-bold block">CodeChef</span>
                                            <span className="text-white font-bold text-sm">1469</span>
                                            <span className="text-[9px] text-slate-500 block">Global Rating</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Highlights */}
                                <div className="grid grid-cols-2 gap-2 text-[11px]">
                                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                                        <span className="text-slate-500 text-[10px] block">ACADEMIC HONORS</span>
                                        <span className="text-white font-bold text-xs">9.18 / 10 CGPA</span>
                                        <span className="text-[10px] text-slate-400 block">CVR B.Tech CSE</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                                        <span className="text-slate-500 text-[10px] block">HACKATHONS</span>
                                        <span className="text-white font-bold text-xs">1st @ EPITOME'24</span>
                                        <span className="text-[10px] text-slate-400 block">3rd @ Innovathon 2.0</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-3 text-left">
                                <span className="text-slate-400 text-[11px] block">ENGINEERING STACK FOOTPRINT:</span>
                                <div className="space-y-2">
                                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                                        <span className="text-cyan-400 font-bold text-xs block">AI / AGENTIC</span>
                                        <p className="text-slate-300 text-[11px] mt-1">LangGraph, LangChain, Gemini API, RAG, PyTorch</p>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                                        <span className="text-emerald-400 font-bold text-xs block">ENTERPRISE & BACKEND</span>
                                        <p className="text-slate-300 text-[11px] mt-1">Oracle C2M, Groovy, 4GL, Node.js, FastAPI, Express</p>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                                        <span className="text-indigo-400 font-bold text-xs block">FRONTEND & SOLANA</span>
                                        <p className="text-slate-300 text-[11px] mt-1">React, Next.js, Redux, Tailwind CSS, Solana SDK</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Terminal Footer */}
                        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                            <span>env: production</span>
                            <span className="text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> latency: 24ms
                            </span>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Quick Metrics Strip */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="w-full mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {heroMetrics.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-left shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                            {item.label}
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white block">
                            {item.value}
                        </span>
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1 block">
                            {item.highlight}
                        </span>
                    </div>
                ))}
            </motion.div>

            {/* Contact Form Modal */}
            <ContactForm isOpen={showForm} onClose={() => setShowForm(false)} />
        </section>
    );
};

export default React.memo(Home);
