import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Bob Decentralized",
    description:
      "A Solana-based peer-to-peer data marketplace for secure data labeling, polling, and decentralized data exchange.",
    image: "/Project/bob.png",
    tech: ["Next.js", "Node.js", "Express", "Tailwind CSS", "MongoDB", "Solana SDK"],
    highlights: [
      "Processed secure marketplace transactions at 0.000005 SOL per transaction.",
      "Implemented millisecond-level Solana payment settlement under 36-hour hackathon constraints.",
      "Placed 3rd among 60+ teams at Innovathon 2.0.",
    ],
    sourceCode: "https://github.com/akashsiripuram/bob",
    link: "https://bob-v1.vercel.app/",
  },
  {
    title: "CivicSphere",
    description:
      "A full-stack urban governance platform for real-time civic issue reporting, complaint tracking, admin communication, and smart city workflows.",
    image: "/Project/civicsphere.png",
    tech: [
      "React",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "JWT",
      "Node.js",
      "Gemini API",
      "OpenWeather API",
      "WebSockets",
      "Nodemailer",
    ],
    highlights: [
      "Built end-to-end in a 24-hour hackathon with real-time complaint tracking.",
      "Engineered WebSocket-based citizen-to-administrator chat and live status updates.",
      "Integrated AI and weather-aware emergency alert workflows for civic response use cases.",
    ],
    sourceCode: "https://github.com/akashsiripuram/CivicSphere",
    link: "https://civic-sphere.vercel.app/",
  },
  {
    title: "Eduwave",
    description:
      "An AI-powered MERN education platform connecting teachers and students through live learning, role-based access, quizzes, and analytics.",
    image: "/Project/eduwave.png",
    tech: [
      "React",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "JWT",
      "Node.js",
      "ZegoCloud",
      "Gemini API",
    ],
    highlights: [
      "Built JWT authentication, role-based dashboards, live video conferencing, and quiz management.",
      "Integrated Gemini-powered ChatAI, personalized learning paths, leaderboards, and performance analytics.",
      "Won 1st place among 30+ teams at EPITOME'24 Hackathon at GRIET, Hyderabad.",
    ],
    sourceCode: "https://github.com/akashsiripuram/eduWave",
    link: "https://edu-wave.vercel.app/",
  },
  {
    title: "Orbity",
    description:
      "A real-time chat application for responsive multi-user messaging and collaborative communication.",
    image: "/Project/orbity.png",
    tech: ["React", "Node.js", "Express", "WebSockets", "Tailwind CSS"],
    highlights: [
      "Built WebSocket-based real-time messaging with a clean, responsive interface.",
      "Focused on fast interactive communication patterns for collaborative environments.",
      "Complements hackathon experience building decentralized real-time chat systems.",
    ],
    sourceCode: "https://github.com/akashsiripuram/Orbity",
    link: "https://orbity-teal.vercel.app/",
  },
  {
    title: "Additional Builds",
    description:
      "A collection of focused products and hackathon prototypes across collaboration, productivity, and user-centered web applications.",
    image: "/Project/civicsphere.png",
    tech: ["MERN", "React", "Node.js", "MongoDB", "WebSockets", "AI Integrations"],
    highlights: [
      "Built Nexus, HerCycleDiary, Serenity, and other rapid prototypes noted in the resume.",
      "Serenity placed 2nd among 50+ teams at HackSphere, BITS Pilani.",
      "Projects reflect fast product execution across AI, collaboration, and full-stack workflows.",
    ],
  },
];

// --- Animation Variants (No changes needed) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const titleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

function Projects() {
  return (
    <motion.section
      id="Projects"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}>
      {/* Section Title */}
      <motion.div className="relative mb-12" variants={titleVariants}>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
          Projects
        </h2>
        <motion.div
          className="absolute left-1/2 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
          initial={{ width: 0, x: "-50%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Main Content Area */}
      <motion.div className="w-full max-w-7xl" variants={containerVariants}>
        <motion.h3
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-8 text-gray-800 dark:text-gray-200 relative"
          variants={titleVariants}>
          <span className="relative z-10">💻 Development Projects</span>
          <motion.div
            className="my-1 bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.h3>

        {/* --- ENHANCEMENT: Added 'perspective' style to enable 3D animations --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: "1200px" }}
          variants={containerVariants}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default React.memo(Projects);
