import React from 'react';
import { FiExternalLink, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

function ExperienceCard({ experience }) {
  const { company, role, duration, place, points = [], tags = [], link, highlightBadge } = experience || {};

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 text-left relative overflow-hidden group">
      
      {/* Accent left indicator */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap mb-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {role}
            </h3>
            {highlightBadge && (
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40 font-semibold">
                {highlightBadge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
            <span className="font-bold text-slate-900 dark:text-white">
              {company}
            </span>
            {place && (
              <>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <FiMapPin size={12} />
                  {place}
                </span>
              </>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${company} website`}
                className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                <FiExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 whitespace-nowrap self-start">
          <FiCalendar size={12} />
          {duration}
        </div>
      </div>

      {/* Bulleted Points */}
      <ul className="space-y-3 mb-6">
        {points.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <FiCheckCircle className="text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-1" size={16} />
            <span>{pt}</span>
          </li>
        ))}
      </ul>

      {/* Technology Tags */}
      {tags && tags.length > 0 && (
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(ExperienceCard);