import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight, FiGithub, FiLinkedin, FiTerminal } from "react-icons/fi";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactFormCard";

const contactDetails = [
    {
        icon: <FiMail className="w-5 h-5 text-emerald-500" />,
        title: "Email",
        value: "siripuramakash2005@gmail.com",
        href: "mailto:siripuramakash2005@gmail.com",
    },
    {
        icon: <FiPhone className="w-5 h-5 text-cyan-500" />,
        title: "Phone",
        value: "+91 9951077641",
        href: "tel:+919951077641",
    },
    {
        icon: <FiMapPin className="w-5 h-5 text-indigo-500" />,
        title: "Location",
        value: "Hyderabad, Telangana, India",
        fullAddress: "Hyderabad, Telangana, India",
    },
];

const socialLinks = [
    { name: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/siripuramakash" },
    { name: "GitHub", icon: FiGithub, href: "https://github.com/akashsiripuram" },
    { name: "LeetCode", icon: FiTerminal, href: "https://leetcode.com/u/Akash_siripuram/" },
    { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/+919951077641" },
    { name: "Twitter", icon: FaTwitter, href: "https://x.com/siripuramakash2" },
];

function ContactSection() {
    const [showForm, setShowForm] = useState(false);

    return (
        <section
            id="Contact"
            className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left"
        >
            {/* Callout Container */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d1424] to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
                
                {/* Ambient Top Glow */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                    
                    {/* Left: Callout narrative */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-mono font-semibold text-emerald-400 mb-4 border border-slate-700">
                            <span>// 07. DIRECT CONNECT</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                            Have an interesting problem to solve?
                        </h2>
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                            Whether you're looking for an engineer to architect AI agent systems, scale enterprise workflows, or collaborate on innovative web products, let's build something exceptional.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => setShowForm(true)}
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all duration-200"
                            >
                                <FiSend size={15} />
                                <span>Send Direct Message</span>
                            </button>

                            <a
                                href="https://drive.google.com/file/d/129IubG0I4c9f6134u4YfOLasVO73xScU/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                            >
                                <span>View Full Resume</span>
                                <FiArrowRight size={15} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Cards & Socials */}
                    <div className="lg:col-span-5 space-y-4">
                        {contactDetails.map((detail) => (
                            <ContactInfoCard key={detail.title} {...detail} />
                        ))}

                        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                            <span className="font-mono text-xs text-slate-400">FIND ME ONLINE:</span>
                            <div className="flex items-center gap-2">
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.name}
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 transition-colors"
                                    >
                                        <s.icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal */}
            <ContactForm isOpen={showForm} onClose={() => setShowForm(false)} />
        </section>
    );
}

export default React.memo(ContactSection);