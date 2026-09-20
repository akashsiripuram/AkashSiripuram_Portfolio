import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiTerminal, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { name: 'GitHub', icon: FiGithub, url: 'https://github.com/akashsiripuram' },
        { name: 'LinkedIn', icon: FiLinkedin, url: 'https://www.linkedin.com/in/siripuramakash' },
        { name: 'LeetCode', icon: FiTerminal, url: 'https://leetcode.com/u/Akash_siripuram/' },
        { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/siripuramakash2' },
        { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/+919951077641' },
    ];

    const navLinks = [
        { name: 'About', to: 'About' },
        { name: 'Experience', to: 'Experience' },
        { name: 'Projects', to: 'Projects' },
        { name: 'Stack', to: 'Skills' },
        { name: 'Honors', to: 'Achievements' },
        { name: 'Contact', to: 'Contact' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full border-t border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md text-slate-600 dark:text-slate-400 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                
                {/* Main Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    
                    {/* Brand / Identity */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-slate-900 dark:text-white text-base">
                                Akash Siripuram
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-xs text-slate-500 font-mono mt-0.5">
                            Software Developer @ Oracle • AI Systems Engineer
                        </span>
                    </div>

                    {/* Quick Nav Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="cursor-pointer text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Socials & Scroll to Top */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.name}
                                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    <s.icon size={15} />
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ml-2"
                        >
                            <FiArrowUp size={15} />
                        </button>
                    </div>

                </div>

                {/* Bottom Meta */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
                    <span>© {new Date().getFullYear()} Akash Siripuram. Engineered with React & Tailwind.</span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Available for select engineering opportunities</span>
                    </span>
                </div>

            </div>
        </footer>
    );
};

export default React.memo(Footer);
