
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Hexagon, Triangle, Command, Box, Circle } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

const trustLogos = [
    { icon: Hexagon, name: "Hexa" },
    { icon: Triangle, name: "Delta" },
    { icon: Command, name: "Helix" },
    { icon: Box, name: "Cubed" },
    { icon: Circle, name: "Orbit" },
];

export default function Hero() {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 hero-bg overflow-hidden"
        >
            {/* subtle grid behind */}
            <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                {/* Eyebrow / version badge */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs sm:text-sm text-[#94A3B8] backdrop-blur-md"
                    data-testid="hero-badge"
                >
                    <Sparkles className="h-3.5 w-3.5 text-[#00D084]" />
                    <span>
                        FlowSync v2.0 ·{" "}
                        <span className="text-white font-medium">AI Agents are live</span>
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    data-testid="hero-headline"
                    className="mt-7 font-display text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-medium text-white text-balance leading-[1.02]"
                >
                    Automate Workflows{" "}
                    <span className="block sm:inline gradient-text">with AI</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-[#94A3B8] leading-relaxed text-balance"
                >
                    FlowSync helps teams automate repetitive tasks, manage projects and
                    scale operations using AI-powered workflows — without a single line
                    of code.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
                >
                    <button
                        data-testid="hero-trial-btn"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#00D084] text-[#0B1120] font-semibold px-6 py-3.5 text-sm shadow-[0_0_30px_rgba(0,208,132,0.4)] hover:shadow-[0_0_45px_rgba(0,208,132,0.6)] hover:bg-[#00D084]/95 transition-all active:scale-[0.98]"
                    >
                        Start Free Trial
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <button
                        data-testid="hero-demo-btn"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] text-white font-semibold px-6 py-3.5 text-sm hover:bg-white/[0.08] hover:border-white/20 transition-all backdrop-blur-md active:scale-[0.98]"
                    >
                        <Play className="h-4 w-4 text-[#00D084]" fill="currentColor" />
                        Book Demo
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="mt-5 flex items-center justify-center gap-4 text-xs text-[#94A3B8]"
                >
                    <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00D084]" />
                        Free 14-day trial
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span>No credit card required</span>
                    <span className="hidden sm:inline h-1 w-1 rounded-full bg-white/20" />
                    <span className="hidden sm:inline">Cancel anytime</span>
                </motion.div>

                {/* Dashboard mockup */}
                <DashboardMockup />

                {/* Trust badges */}
                <div className="mt-24 sm:mt-28">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#94A3B8] font-medium">
                        Trusted by engineering teams at
                    </p>
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
                        {trustLogos.map(({ icon: Icon, name }) => (
                            <div
                                key={name}
                                data-testid={`trust-logo-${name.toLowerCase()}`}
                                className="flex items-center gap-2 text-[#94A3B8]/70 hover:text-white/90 transition-colors"
                            >
                                <Icon className="h-5 w-5" strokeWidth={1.5} />
                                <span className="font-display text-base sm:text-lg font-medium tracking-tight">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
