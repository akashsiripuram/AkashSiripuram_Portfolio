"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = {
    frontend: [
      { 
        name: "HTML5", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        description: "Markup Language"
      },
      { 
        name: "CSS3", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        description: "Styling & Layout"
      },
      { 
        name: "JavaScript", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: "Programming Language"
      },
      { 
        name: "React", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "UI Library"
      },
      { 
        name: "Bootstrap", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        description: "CSS Framework"
      },
      { 
        name: "Tailwind CSS", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        description: "Utility Framework"
      }
    ],
    backend: [
      { 
        name: "Node.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "Runtime Environment"
      },
      { 
        name: "Express.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        description: "Web Framework"
      },
      { 
        name: "MongoDB", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        description: "NoSQL Database"
      },
      { 
        name: "MySQL", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        description: "SQL Database"
      },
      { 
        name: "RESTful APIs", 
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastapi.svg",
        description: "API Architecture"
      }
    ],
    tools: [
      { 
        name: "Git", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        description: "Version Control"
      },
      { 
        name: "GitHub", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        description: "Code Repository"
      },
      { 
        name: "VS Code", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        description: "Code Editor"
      },
      { 
        name: "Postman", 
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        description: "API Testing"
      },
      { 
        name: "Netlify", 
        icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
        description: "Hosting Platform"
      },
      { 
        name: "Vercel", 
        icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
        description: "Deployment Platform"
      }
    ],
    programming: [
      { 
        name: "JavaScript", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: "Web Development"
      },
      { 
        name: "TypeScript", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        description: "Typed JavaScript"
      },
      { 
        name: "Python", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "General Purpose"
      },
      { 
        name: "Java", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        description: "Enterprise Development"
      },
      { 
        name: "SQL", 
        icon: "https://www.svgrepo.com/show/255832/sql.svg",
        description: "Database Queries"
      },
      { 
        name: "C", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        description: "System Programming"
      }
    ]
  };

  const categories = [
    { id: "all", name: "All", gradient: "from-purple-500 to-pink-500" },
    { id: "frontend", name: "Frontend", gradient: "from-blue-500 to-cyan-500" },
    { id: "backend", name: "Backend", gradient: "from-green-500 to-emerald-500" },
    { id: "tools", name: "Tools", gradient: "from-orange-500 to-red-500" },
    { id: "programming", name: "Programming", gradient: "from-indigo-500 to-purple-500" }
  ];

  const getAllSkills = () => {
    return Object.values(skillsData).flat();
  };

  const getFilteredSkills = () => {
    if (activeCategory === "all") return getAllSkills();
    return skillsData[activeCategory] || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24  relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Skills & 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-xl`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          >
            {getFilteredSkills().map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group bg-white rounded-3xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="text-center">
                  {/* Icon Container */}
                  <div className="w-15 h-15 mx-auto mb-6 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300 flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback div */}
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg hidden">
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-md font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Description */}
                
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

       
      </div>
    </section>
  );
}