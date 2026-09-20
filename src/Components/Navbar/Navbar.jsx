import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
    RiCloseLine,
    RiMenu4Line,
    RiSunLine,
    RiMoonLine
} from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";
import LogoCard from "./LogoCard";
import { useTheme } from "../ThemeContext";

const menuItems = [
    { name: "About", to: "About" },
    { name: "Experience", to: "Experience" },
    { name: "Projects", to: "Projects" },
    { name: "Stack", to: "Skills" },
    { name: "Honors", to: "Achievements" },
    { name: "Contact", to: "Contact" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();
    const [activeSection, setActiveSection] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollOffset = -70;

    return (
        <>
            <header className="fixed top-0 left-0 right-0 w-full flex justify-center z-50 px-4 py-3 sm:py-4 transition-all duration-300 pointer-events-none">
                <nav
                    className={`
                        pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300
                        ${isScrolled 
                            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-900/5 dark:shadow-black/20" 
                            : "bg-white/60 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-white/5"
                        }
                    `}
                >
                    {/* Left: Brand Monogram */}
                    <LogoCard />

                    {/* Center: Desktop Navigation Pills */}
                    <div className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/50 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700/40">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={scrollOffset}
                                onSetActive={() => setActiveSection(item.name)}
                                className={`
                                    relative px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200 select-none
                                    ${activeSection === item.name
                                        ? "text-slate-950 dark:text-white font-semibold"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
                                    }
                                `}
                            >
                                {activeSection === item.name && (
                                    <motion.div
                                        layoutId="activePill"
                                        className="absolute inset-0 bg-white dark:bg-slate-700/80 rounded-lg shadow-xs border border-slate-200/60 dark:border-slate-600/60 -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Actions & Dark Mode */}
                    <div className="flex items-center gap-2">
                        {/* Resume Shortcut */}
                        <a
                            href="https://drive.google.com/file/d/129IubG0I4c9f6134u4YfOLasVO73xScU/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Resume
                        </a>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleDarkMode}
                            aria-label="Toggle theme"
                            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {darkMode ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <RiSunLine size={16} className="text-amber-400" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <RiMoonLine size={16} className="text-slate-700" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                            {menuOpen ? <RiCloseLine size={18} /> : <RiMenu4Line size={18} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            className="fixed top-20 left-4 right-4 max-w-sm mx-auto p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-50 lg:hidden"
                        >
                            <div className="flex flex-col gap-1">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        offset={scrollOffset}
                                        onClick={() => setMenuOpen(false)}
                                        className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                                    <a
                                        href="https://drive.google.com/file/d/129IubG0I4c9f6134u4YfOLasVO73xScU/view?usp=drive_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-emerald-600"
                                    >
                                        View Full Resume
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default React.memo(Navbar);
