import React from "react";
import { motion } from "framer-motion";
import ExperienceCategory from "./ExperienceCategory"; // Import the new component

// --- Centralized and Structured Data ---
const experienceData = [
  {
    title: "💼 Professional Experience",
    items: [
      {
        company: "Oracle",
        role: "Project Intern",
        duration: "Jan 2026 - Present",
        place: "Hyderabad",
        description: "Engineered a browser-based automation extension for Oracle C2M and MTM that reduced process execution time by 80%, streamlining billing operations across thousands of daily transactions. Customized Oracle C2M modules using 4GL and Groovy to support utility CRM workflows for electricity and water billing across a high-volume enterprise environment. Managed batch processing pipelines for billing cycles and customer data integrations, eliminating manual intervention and improving operational reliability at scale.",
        link: "https://www.oracle.com/",
      },
      {
        company: "Digital Guruji",
        role: "Full Stack Developer",
        duration: "Sep 2024 - Feb 2025",
        place: "Remote",
        description: "Built and deployed 3+ full-stack React, Node.js, and MongoDB applications with end-to-end ownership from architecture to production. Integrated a Gemini API-powered conversational chatbot into production web applications, automating user interactions and reducing manual response overhead. Designed and optimized scalable REST APIs with efficient MongoDB queries, ensuring consistent performance and clean data flow across all application layers.",
        link: "https://www.digitalguru.buzz/",
      },
    ],
  },
  {
    title: "🏆 Leadership & Responsibilities",
    items: [
      {
        company: "GDG On Campus CVR",
        role: "Web Core Team Member",
        duration: "September 2024 - Dec 2025",
        description: "Organize developer sessions, technical practice events, and hackathon initiatives as part of the web core team, helping peers learn modern web development through collaborative community programs.",
        link: "https://gdsccvr.vercel.app/",
      },
      {
        company: "LDC CVR",
        role: "Tech Team Member",
        duration: "February 2025 - Dec 2025",
        description: "Built and maintained the LDC CVR website for event management and gallery workflows, improving how the campus community organizes events, publishes updates, and documents activities.",
        link: "https://cvrldc.vercel.app/",
      },
    ],
  },
];

// --- Animation Variants (defined once) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const titleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
};


function Experience() {
  return (
    <>
      {/* Define CSS variables for theming to avoid prop drilling */}
      <style>{`
        :root { --shadow-color: rgba(0, 0, 0, 0.1); }
        html.dark { --shadow-color: rgba(0, 0, 0, 0.3); }
      `}</style>
      <motion.section
        id="Experience"
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div className="relative mb-12" variants={titleVariants}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
                Experience
            </h2>
            <motion.div className="absolute left-1/2 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full" initial={{ width: 0, x: "-50%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}/>
        </motion.div>

        {/* Render categories in a clean, declarative way */}
        <div className="flex flex-col gap-16">
            {experienceData.map((category) => (
                <ExperienceCategory key={category.title} title={category.title} items={category.items} />
            ))}
        </div>
      </motion.section>
    </>
  );
}

export default React.memo(Experience);
