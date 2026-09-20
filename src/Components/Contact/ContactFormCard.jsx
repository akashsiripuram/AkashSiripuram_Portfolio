import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiX, FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle } from "react-icons/fi";

const ContactForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_default",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_default",
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "user_default"
            )
            .then(() => {
                setIsLoading(false);
                setFormData({ name: "", email: "", message: "" });
                onClose();
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 4000);
            })
            .catch((error) => {
                console.error("Email send error:", error);
                setErrors({ submit: "Failed to send message. You can reach out directly via email." });
                setIsLoading(false);
            });
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl text-left"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                                <div>
                                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block">
                                        Direct Dispatch
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                                        Send a Message
                                    </h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                                    aria-label="Close modal"
                                >
                                    <FiX size={18} />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                        YOUR NAME
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                                            <FiUser size={15} />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. Alex Morgan"
                                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                        />
                                    </div>
                                    {errors.name && <p className="text-red-500 text-xs mt-1 font-mono">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                        EMAIL ADDRESS
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                                            <FiMail size={15} />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="alex@company.com"
                                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-xs mt-1 font-mono">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                        PROJECT / MESSAGE
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3.5 top-3 text-slate-400">
                                            <FiMessageSquare size={15} />
                                        </div>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your team, role, or project..."
                                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
                                        />
                                    </div>
                                    {errors.message && <p className="text-red-500 text-xs mt-1 font-mono">{errors.message}</p>}
                                </div>

                                {errors.submit && (
                                    <p className="text-amber-500 text-xs font-mono bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                                        {errors.submit}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full mt-4 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 flex items-center justify-center gap-2 shadow-md transition-all duration-200 disabled:opacity-60"
                                >
                                    {isLoading ? (
                                        <span>Transmitting...</span>
                                    ) : (
                                        <>
                                            <FiSend size={15} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Success Toast */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl flex items-center gap-3"
                    >
                        <FiCheckCircle className="text-emerald-400 text-xl" />
                        <div>
                            <span className="font-bold text-sm block">Message Delivered</span>
                            <span className="text-xs text-slate-400">Thanks for connecting! I'll reply promptly.</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default React.memo(ContactForm);