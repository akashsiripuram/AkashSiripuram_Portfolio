import React, { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";

const ContactInfoCard = ({ icon, title, value, href, fullAddress }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
    }, [copied]);

    const handleCopy = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const textToCopy = fullAddress || value;
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
    };

    return (
        <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 text-left flex items-center justify-between group">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 flex-shrink-0">
                    {icon}
                </div>
                <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold block">
                        {title}
                    </span>
                    {href ? (
                        <a
                            href={href}
                            className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors break-all"
                        >
                            {value}
                        </a>
                    ) : (
                        <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white break-words">
                            {value}
                        </span>
                    )}
                </div>
            </div>

            <button
                onClick={handleCopy}
                aria-label={`Copy ${title} to clipboard`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ml-2 flex-shrink-0"
            >
                {copied ? <FiCheck className="text-emerald-500" size={16} /> : <FiCopy size={16} />}
            </button>
        </div>
    );
};

export default React.memo(ContactInfoCard);