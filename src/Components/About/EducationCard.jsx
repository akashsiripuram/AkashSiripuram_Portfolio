import React from "react";
import { FiBookOpen, FiAward, FiCalendar } from "react-icons/fi";

const EducationCard = ({
    title = "Degree",
    College = "Institution",
    Course = "Field of Study",
    Branch = "Specialization",
    Marks = "Grade",
    Year = "Period",
}) => {
    return (
        <div className="w-full rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 text-left flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold border border-slate-200/50 dark:border-slate-700/50">
                        {title}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                        <FiCalendar size={12} />
                        {Year.replace('Duration: ', '')}
                    </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {College}
                </h4>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                    {Course}
                </p>
                {Branch && !Branch.startsWith('Marks') && !Branch.startsWith('CGPA') && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {Branch}
                    </p>
                )}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Performance Metric</span>
                <span className="inline-flex items-center gap-1 text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/40">
                    <FiAward size={13} />
                    {Marks.replace('Percentage: ', '').replace('CGPA: ', 'CGPA: ')}
                </span>
            </div>
        </div>
    );
};

export default React.memo(EducationCard);