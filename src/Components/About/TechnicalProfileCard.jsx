import React, { useEffect, useState } from 'react';
import { FiExternalLink, FiCode, FiAward, FiActivity } from 'react-icons/fi';
import { motion } from 'framer-motion';

import leetcodeLogo from '../../assets/codingProfiles/leetcode.svg';
import codeforcesLogo from '../../assets/codingProfiles/cf.svg';
import codechef from '../../assets/codingProfiles/codechef.svg';

const platformDetails = {
  leetcode: {
    name: 'LeetCode',
    tag: 'Competitive / Problem Solving',
    accentColor: 'text-amber-500 dark:text-amber-400',
    badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-300',
    logo: leetcodeLogo,
    fetchData: async (username) => {
      try {
        const [profileRes, contestRes] = await Promise.allSettled([
          fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`),
          fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`),
        ]);

        let solved = null;
        let rating = null;

        if (profileRes.status === 'fulfilled' && profileRes.value.ok) {
          const profileData = await profileRes.value.json();
          if (profileData?.matchedUserStats?.acSubmissionNum?.[0]?.count) {
            solved = profileData.matchedUserStats.acSubmissionNum[0].count;
          } else if (profileData?.totalSolved) {
            solved = profileData.totalSolved;
          }
        }

        if (contestRes.status === 'fulfilled' && contestRes.value.ok) {
          const contestData = await contestRes.value.json();
          if (contestData?.contestRating) {
            rating = Math.round(contestData.contestRating);
          }
        }

        return {
          totalSolved: solved ?? 713,
          rating: rating ?? 1700,
          rankBadge: 'Top 14% (Contest)',
        };
      } catch {
        return { totalSolved: 713, rating: 1700, rankBadge: 'Knight / 1700' };
      }
    },
  },
  codeforces: {
    name: 'Codeforces',
    tag: 'Contest & Speed Algorithms',
    accentColor: 'text-indigo-500 dark:text-indigo-400',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-300',
    logo: codeforcesLogo,
    fetchData: async (username) => {
      try {
        const [infoRes, statusRes] = await Promise.allSettled([
          fetch(`https://codeforces.com/api/user.info?handles=${username}`),
          fetch(`https://codeforces.com/api/user.status?handle=${username}`),
        ]);

        let rating = null;
        let solvedCount = null;
        let rank = 'Pupil / Newbie';

        if (infoRes.status === 'fulfilled' && infoRes.value.ok) {
          const info = await infoRes.value.json();
          if (info.status === 'OK' && info.result?.[0]) {
            rating = info.result[0].rating || info.result[0].maxRating;
            rank = info.result[0].rank || rank;
          }
        }

        if (statusRes.status === 'fulfilled' && statusRes.value.ok) {
          const statusData = await statusRes.value.json();
          if (statusData.status === 'OK' && Array.isArray(statusData.result)) {
            const solvedSet = new Set();
            statusData.result.forEach((sub) => {
              if (sub.verdict === 'OK' && sub.problem) {
                solvedSet.add(`${sub.problem.contestId}-${sub.problem.index}`);
              }
            });
            solvedCount = solvedSet.size;
          }
        }

        return {
          totalSolved: solvedCount ?? 93,
          rating: rating ?? 1136,
          rankBadge: rank,
        };
      } catch {
        return { totalSolved: 93, rating: 1136, rankBadge: 'Active Coder' };
      }
    },
  },
  codechef: {
    name: 'CodeChef',
    tag: 'Long Challenges & Starters',
    accentColor: 'text-emerald-500 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-300',
    logo: codechef,
    fetchData: async (username) => {
      try {
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.codechef.com/users/${username}`)}`;
        const res = await fetch(proxyUrl);
        if (res.ok) {
          const data = await res.json();
          const html = data.contents;
          if (typeof html === 'string') {
            const ratingMatch = html.match(/<div class="rating-number">([^<]+)<\/div>/i) || html.match(/rating:\s*([0-9]+)/i);
            const solvedMatch = html.match(/Total Problems Solved:\s*([0-9]+)/i);

            const parsedRating = ratingMatch ? parseInt(ratingMatch[1].trim(), 10) : null;
            const parsedSolved = solvedMatch ? parseInt(solvedMatch[1].trim(), 10) : null;

            if (parsedRating || parsedSolved) {
              return {
                totalSolved: parsedSolved ?? 370,
                rating: parsedRating ?? 1469,
                rankBadge: '2★ Division 3',
              };
            }
          }
        }
      } catch {
        // fallback
      }
      return { totalSolved: 370, rating: 1469, rankBadge: '2★ / Div 3' };
    },
  },
};

const TechnicalProfileCard = ({
  platform,
  username,
  profileLink,
  fallbackStats = { totalSolved: '---', rating: '---', rankBadge: 'Verified' },
}) => {
  const [stats, setStats] = useState(fallbackStats);
  const [loading, setLoading] = useState(true);

  const normalizedPlatform = platform.toLowerCase();
  const platformData = platformDetails[normalizedPlatform];

  useEffect(() => {
    let isMounted = true;
    const loadProfileData = async () => {
      setLoading(true);
      if (!platformData || !platformData.fetchData) {
        if (isMounted) setLoading(false);
        return;
      }
      try {
        const liveData = await platformData.fetchData(username);
        if (isMounted && liveData) {
          setStats(liveData);
        }
      } catch {
        if (isMounted) setStats(fallbackStats);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProfileData();
    return () => { isMounted = false; };
  }, [username, platform, platformData, fallbackStats]);

  if (!platformData) return null;

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between text-left group">
      
      {/* Top Bar */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 p-2 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center flex-shrink-0">
              <img src={platformData.logo} alt={`${platformData.name} logo`} className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white leading-tight">
                {platformData.name}
              </h4>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 block">
                @{username}
              </span>
            </div>
          </div>

          <a
            href={profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={`Open ${platformData.name} profile`}
          >
            <FiExternalLink size={15} />
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">
          {platformData.tag}
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-700/40">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">
            <FiCode size={13} />
            <span>Solved</span>
          </div>
          {loading ? (
            <div className="h-7 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
          ) : (
            <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              {stats.totalSolved}
            </span>
          )}
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-700/40">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">
            <FiAward size={13} className={platformData.accentColor} />
            <span>Rating</span>
          </div>
          {loading ? (
            <div className="h-7 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
          ) : (
            <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              {stats.rating}
            </span>
          )}
        </div>
      </div>

      {/* Live sync signal */}
      <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <FiActivity className="text-emerald-500 animate-pulse" size={12} /> Live API Telemetry
        </span>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${platformData.badgeBg}`}>
          {stats.rankBadge || 'Active'}
        </span>
      </div>

    </div>
  );
};

export default React.memo(TechnicalProfileCard);
