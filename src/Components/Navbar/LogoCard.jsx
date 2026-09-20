import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const LogoCard = () => {
    return (
        <Link
            to="Home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
            {/* Monogram Box */}
            <div className="relative w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-mono font-bold text-xs shadow-md border border-slate-700/40 dark:border-slate-200/40 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-400 dark:group-hover:text-slate-950 transition-colors duration-300">
                AS
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse ring-2 ring-white dark:ring-slate-900" />
            </div>

            {/* Name and Role Label */}
            <div className="flex flex-col text-left">
                <span className="font-bold text-sm text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Akash Siripuram
                </span>
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    SWE @ Oracle
                </span>
            </div>
        </Link>
    );
};

export default React.memo(LogoCard);