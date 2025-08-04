import React from "react";
import { motion } from "framer-motion";
import ExperienceCategory from "./ExperienceCategory"; // Import the new component

// --- Centralized and Structured Data ---
const experienceData = [
  {
    title: "💼 Internships",
    items: [
      {
        company: "Digital Guruji",
        role: "Full Stack Developer Lead Intern",
        duration: "Jan 2025 - Feb 2025",
        place: "Remote",
        description: "Led full-stack development of 5+ scalable web apps using modern frontend and backend technologies.Mentored 3 interns, fostering technical growth and collaboration.",
        link: "https://www.digitalguru.buzz/",
      },
      {
        company: "Digital Guruji",
        role: "Frontend Developer Intern",
        duration: "Sept 2024 - Dec 2024",
        place: "Remote",
        description: "Developed 6+ AI-powered websites using HTML, CSS, JavaScript, and TailwindCSS.Collaborated on UI/UX design to enhance user engagement and performance, achieving 40% faster load times.",
        link: "https://www.digitalguru.buzz/",
      },
    ],
  },
  {
    title: "🏆 Positions of Responsibility",
    items: [
      {
        company: "GDG On Campus CVR",
        role: "Web Core Team Member",
        duration: "September 2024 - Present",
        description: "Organize tech events, practice sessions, and hackathons as part of the core web team, fostering collaborative learning within Google's developer community.",
        link: "https://gdsccvr.vercel.app/",
      },
      {
        company: "LDC CVR",
        role: "Tech Team Member",
        duration: "February 2025 - Present",
        description: "Developed the LDC CVR website for event management and gallery creation, streamlining event organization and documentation processes for the campus community.",
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