import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled ? "py-3" : "py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <nav
                    className={`flex items-center justify-between rounded-full px-5 sm:px-6 py-2.5 transition-all duration-300 ${
                        scrolled
                            ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                            : "glass"
                    }`}
                >
                    {/* Logo */}
                    <a
                        href="#top"
                        data-testid="nav-logo"
                        className="flex items-center gap-2 group"
                    >
                        <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00D084] to-[#2563EB] shadow-[0_0_20px_rgba(0,208,132,0.4)]">
                            <Zap className="h-4 w-4 text-[#0B1120]" strokeWidth={2.5} />
                        </span>
                        <span className="font-display font-semibold text-white tracking-tight text-lg">
                            Flow<span className="text-[#00D084]">Sync</span>
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                data-testid={`nav-link-${l.label.toLowerCase()}`}
                                className="px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors rounded-full"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="hidden lg:flex items-center gap-2">
                        <button
                            data-testid="nav-login-btn"
                            className="px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors"
                        >
                            Login
                        </button>
                        <button
                            data-testid="nav-trial-btn"
                            className="px-5 py-2 text-sm font-semibold rounded-full bg-[#00D084] text-[#0B1120] hover:bg-[#00D084]/90 transition-all shadow-[0_0_20px_rgba(0,208,132,0.3)] hover:shadow-[0_0_30px_rgba(0,208,132,0.5)] active:scale-[0.98]"
                        >
                            Start Free Trial
                        </button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        data-testid="mobile-menu-toggle"
                        onClick={() => setOpen((s) => !s)}
                        aria-label="Toggle menu"
                        className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 text-white"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </nav>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        data-testid="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden mt-3 mx-6 sm:mx-8 rounded-2xl glass-strong p-5"
                    >
                        <div className="flex flex-col gap-1">
                            {links.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    data-testid={`mobile-link-${l.label.toLowerCase()}`}
                                    className="px-3 py-3 rounded-lg text-base font-medium text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                <button
                                    data-testid="mobile-login-btn"
                                    className="px-4 py-2.5 text-sm font-semibold rounded-full bg-white/5 text-white border border-white/10"
                                >
                                    Login
                                </button>
                                <button
                                    data-testid="mobile-trial-btn"
                                    className="px-4 py-2.5 text-sm font-semibold rounded-full bg-[#00D084] text-[#0B1120]"
                                >
                                    Start Trial
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

