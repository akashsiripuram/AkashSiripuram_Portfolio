"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Trophy, LineChart, Star, ArrowRight } from "lucide-react";

type Platform = "leetcode" | "codeforces" | "codechef";

const platforms = {
  leetcode: {
    name: "LeetCode",
    problemsSolved: 427,
    contestsAttended: 32,
    rating: 1865,
    color: "from-yellow-400 to-yellow-600",
    rank: "Expert"
  },
  codeforces: {
    name: "Codeforces",
    problemsSolved: 312,
    contestsAttended: 28,
    rating: 1422,
    color: "from-red-400 to-red-600",
    rank: "Specialist"
  },
  codechef: {
    name: "CodeChef",
    problemsSolved: 245,
    contestsAttended: 22,
    rating: 1876,
    color: "from-brown-400 to-brown-600",
    rank: "4★"
  }
};

export default function CodingStats() {
  const [activePlatform, setActivePlatform] = useState<Platform>("leetcode");
  const stats = platforms[activePlatform];

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Coding Profile</h2>
        <div className="flex space-x-2">
          {(Object.keys(platforms) as Platform[]).map((platform) => (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activePlatform === platform
                  ? `bg-gradient-to-r ${platforms[platform].color} text-white`
                  : "text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              {platforms[platform].name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePlatform}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-zinc-800 rounded-2xl p-6 shadow-xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">{stats.name}</h3>
            <div className="flex items-center bg-zinc-900 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-white font-medium">{stats.rank}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-xl p-4 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-3">
                <Code2 className="w-5 h-5 text-blue-400" />
                <ArrowRight className="w-4 h-4 text-zinc-600" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stats.problemsSolved}
              </div>
              <div className="text-sm text-zinc-400">Problems</div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-4 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-3">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <ArrowRight className="w-4 h-4 text-zinc-600" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stats.contestsAttended}
              </div>
              <div className="text-sm text-zinc-400">Contests</div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-4 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-3">
                <LineChart className="w-5 h-5 text-green-400" />
                <ArrowRight className="w-4 h-4 text-zinc-600" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stats.rating}
              </div>
              <div className="text-sm text-zinc-400">Rating</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-700">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Global Rank</span>
              <span className="text-white font-medium">Top 5%</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}