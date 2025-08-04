import React, { Suspense } from "react";
import { motion } from "framer-motion";
import InteractiveText from "./InteractiveText";

// Lazy load components that are not immediately visible
const EducationCard = React.lazy(() => import("./EducationCard"));
const TechnicalProfileCard = React.lazy(() => import("./TechnicalProfileCard"));
const Hobbies = React.lazy(() => import("./Hobbies"));

// --- Constants (no changes needed here) ---

const introText = `Hi, I'm Akash Siripuram — a passionate MERN stack developer who thrives on transforming ideas into dynamic web applications. I believe great software isn't just about clean code; it's about creating meaningful digital experiences that solve real-world problems.
With every project I undertake, I'm driven by the excitement of building something that matters. Whether it's developing an intuitive user interface that delights users or architecting a scalable backend that handles complex business logic, I approach each challenge with curiosity and determination. My journey in web development has been fueled by a constant desire to learn, adapt, and push the boundaries of what's possible with modern web technologies.`;

const technicalProfiles = [
  { platform: "leetcode", username: "Akash_siripuram", profileLink: "https://leetcode.com/Akash_siripuram", fallbackStats: { totalSolved: 466, rating: 1934 } },
  { platform: "codeforces", username: "akash_siripuram", profileLink: "https://codeforces.com/profile/akash_siripuram", fallbackStats: { totalSolved: 212, rating: 1438 } },
  { platform: "codechef", username: "akash_021", profileLink: "https://www.codechef.com/users/akash_021", fallbackStats: { totalSolved: 364, rating: "1481" } },
];

const educationData = [
  { title: "Graduation", College: "CVR College of Engineering", Course: "Bachelor's of Technology", Branch: "Computer Science and Engineering", Marks: <span>CGPA: 9.24 (Till 6<sup>th</sup> Sem)</span>, Year: "Duration: 2022 - 2026" },
  { title: "Senior Secondary", College: "Alphores Junior College", Course: "Physics, Chemistry and Mathematics", Branch: "Marks: 989/1000", Marks: "Percentage: 98.90 %", Year: "Duration: 2020 - 2022" },
  { title: "Secondary Education", College: "Siddartha High School", Branch: "CGPA : 10", Marks: "Percentage:  %", Year: "Duration: 2019 - 2020" },
];

const lang = [
  { name: "English", level: "Full Proficiency" },
  { name: "Telugu", level: "Native" },
];

// --- Animation Variants (no changes needed here) ---
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } };
const itemVariants = { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } };
const titleVariants = { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } } };
const cardVariants = { hidden: { y: 30, opacity: 0, scale: 0.9 }, visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15 } } };

const FallbackLoader = () => (
  <div className="flex justify-center items-center h-48">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const languageBoxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 },
    },
};

function About() {
  return (
    <motion.section
      id="About"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 text-center text-gray-900 dark:text-gray-100 duration-500"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section Title */}
      <motion.div className="relative mb-12" variants={titleVariants}>
        <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4" animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} style={{ backgroundSize: "200% 100%" }}>
          About Me
        </motion.h2>
        <motion.div className="absolute left-1/2 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full" initial={{ width: 0, x: "-50%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
      </motion.div>

      {/* Introduction */}
      <motion.div className="max-w-6xl mb-16" variants={itemVariants}>
        <div className="text-justify text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white dark:bg-gray-800" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20" />
          <InteractiveText text={introText} className="relative z-10" />
        </div>
      </motion.div>

      <Suspense fallback={<FallbackLoader />}>
        {/* Technical Profiles Section */}
        <motion.div className="w-full max-w-7xl mb-16" variants={itemVariants}>
          <motion.h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-8 text-gray-800 dark:text-gray-200 relative" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
            <span className="relative z-10">🚀 Technical Profiles</span>
            <motion.div className="my-1 bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {technicalProfiles.map((profile, index) => (
              <motion.div key={index} variants={cardVariants} whileTap={{ scale: 0.98 }} className="transform-gpu">
                <TechnicalProfileCard {...profile} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Educational Background Section */}
        <motion.div className="w-full max-w-7xl mb-16" variants={itemVariants}>
          <motion.h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-8 text-gray-800 dark:text-gray-200 relative" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
            <span className="relative z-10">🎓 Education </span>
            <motion.div className="my-1 bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400" initial={{ width: 0 }} viewport={{ once: true }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, delay: 0.2 }} />
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {educationData.map((edu, idx) => (
              <motion.div key={idx} variants={cardVariants} className="transform-gpu">
                <EducationCard {...edu} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies Section */}
        <motion.div className="w-full max-w-7xl mb-16" variants={itemVariants}>
          <motion.h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-8 text-gray-800 dark:text-gray-200 relative" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
            <span className="relative z-10">🎨 Hobbies & Interests</span>
            <motion.div className="my-1 bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400" initial={{ width: 0 }} viewport={{ once: true }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, delay: 0.2 }} />
          </motion.h3>
          <motion.div variants={cardVariants} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <Hobbies />
          </motion.div>
        </motion.div>
      </Suspense>

      {/* Language Section */}
      <motion.div className="w-full max-w-7xl" variants={containerVariants}>
        <motion.h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-8 text-gray-800 dark:text-gray-200 relative" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }} variants={itemVariants}>
          <span className="relative z-10">🌍 Languages</span>
          <motion.div className="my-1 bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400" initial={{ width: 0 }} viewport={{ once: true }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, delay: 0.2 }} />
        </motion.h3>

        {/* --- FIX: Map over the 'lang' array to display each language --- */}
        <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-8"
                    variants={containerVariants} // This will stagger the children
                >
          {lang.map((language) => (
            <motion.div 
            key={language.name} 
            className="text-center p-6 rounded-2xl border border-gray-300 dark:border-gray-700 cursor-pointer  hover:border-green-400 dark:hover:border-green-400 transition-colors duration-300 w-full sm:w-64 bg-white/50 dark:bg-gray-800/50 shadow-lg"
            variants={languageBoxVariants}>
              <h4 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {language.name}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
                {language.level}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default React.memo(About);