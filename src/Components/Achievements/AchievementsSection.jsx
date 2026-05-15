import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "Innovathon 2.0",
    result: "3rd Place among 60+ teams",
    date: "Jan 2025",
    description: "Created Bob, a decentralized blockchain data marketplace at VNR VJIET.",
    highlights: ["Solana marketplace", "Secure micro-transactions", "36-hour product execution"],
  },
  {
    title: "BlockBinge Hackathon",
    result: "2nd Place",
    date: "Sept 2024",
    description: "Built a decentralized real-time chat application hosted by MLSA-USAR Student Chapter.",
    highlights: ["Real-time messaging", "Decentralized architecture", "Hackathon delivery"],
  },
  {
    title: "EPITOME'24 Hackathon",
    result: "1st Place among 30+ teams",
    date: "Mar 2024",
    description: "Built EduWave, an AI-powered smart education platform at GRIET, Hyderabad.",
    highlights: ["Gemini-powered ChatAI", "Role-based learning workflows", "MERN platform"],
  },
  {
    title: "HackSphere",
    result: "2nd Place among 50+ teams",
    date: "Oct 2023",
    description: "Built Serenity, a real-time collaboration platform at BITS Pilani.",
    highlights: ["Real-time collaboration", "Rapid prototyping", "Team-based product design"],
  },
];

const certifications = [
  {
    title: "Oracle OCI AI Foundations Associate",
    issuer: "Oracle",
    description:
      "Completed the learning path covering Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI fundamentals with practical applications on Oracle Cloud Infrastructure.",
    highlights: ["AI and ML fundamentals", "Deep Learning", "Generative AI", "Oracle Cloud Infrastructure"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { y: 35, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 18 } },
};

const titleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

function AchievementCard({ item }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full rounded-2xl border border-gray-300/80 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 p-6 text-left shadow-lg backdrop-blur-md transition-colors hover:border-green-500/50 dark:hover:border-green-400/70"
    >
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-green-500 dark:bg-green-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="mt-1 font-semibold text-green-600 dark:text-green-400">{item.result}</p>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.date}</span>
      </div>
      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.highlights.map((highlight) => (
          <span key={highlight} className="rounded-full bg-cyan-100/80 dark:bg-cyan-900/50 px-3 py-1 text-xs font-semibold text-cyan-800 dark:text-cyan-300">
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CertificationCard({ item }) {
  return (
    <motion.div
      variants={cardVariants}
      className="rounded-2xl border border-blue-300/70 dark:border-blue-800/70 bg-white/70 dark:bg-gray-800/70 p-6 text-left shadow-lg backdrop-blur-md"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-blue-100 dark:bg-blue-900/50 p-3 text-blue-600 dark:text-blue-300">
          <FaCertificate size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-300">{item.issuer}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.highlights.map((highlight) => (
          <span key={highlight} className="rounded-full bg-green-100/80 dark:bg-green-900/40 px-3 py-1 text-xs font-semibold text-green-800 dark:text-green-300">
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function AchievementsSection() {
  return (
    <motion.section
      id="Achievements"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className="relative mb-12" variants={titleVariants}>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
          Achievements
        </h2>
        <motion.div className="absolute left-1/2 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full" initial={{ width: 0, x: "-50%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
      </motion.div>

      <div className="w-full max-w-7xl space-y-16">
        <motion.div variants={containerVariants}>
          <motion.h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-8 text-gray-800 dark:text-gray-200 relative" variants={titleVariants}>
            <span className="relative z-10 flex items-center gap-3"><FaTrophy className="text-yellow-500" /> Hackathon Wins</span>
            <motion.div className="my-1 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {achievements.map((item) => (
              <AchievementCard key={item.title} item={item} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={containerVariants}>
          <motion.h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-8 text-gray-800 dark:text-gray-200 relative" variants={titleVariants}>
            <span className="relative z-10 flex items-center gap-3"><FaAward className="text-blue-500" /> Certifications</span>
            <motion.div className="my-1 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {certifications.map((item) => (
              <CertificationCard key={item.title} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default React.memo(AchievementsSection);
