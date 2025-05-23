"use client";

import { Database, Server, Hammer, Code } from "lucide-react";
import { SkillCard } from "../ui/skill-card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function SkillsSection() {
  const skillsData = [
    {
      title: "Frontend",
      icon: <Database className="w-6 h-6 text-white" />,
      iconColor: "bg-blue-500/20",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "TailwindCSS"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-white" />,
      iconColor: "bg-green-500/20",
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "MySQL"]
    },
    {
      title: "Development Tools",
      icon: <Hammer className="w-6 h-6 text-white" />,
      iconColor: "bg-purple-500/20",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Netlify", "Vercel"]
    },
    {
      title: "Programming",
      icon: <Code className="w-6 h-6 text-white" />,
      iconColor: "bg-orange-500/20",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL","C"]
    }
  ];

  return (
    <section className="py-20  text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-2"
          >
            Skills & Expertise
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-4"></div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto mt-4"
          >
            My technical skills and specialized areas of expertise developed through years of hands-on experience.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                skills={skill.skills}
                iconColor={skill.iconColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}