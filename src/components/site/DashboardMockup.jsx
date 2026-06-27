
import { motion } from "framer-motion";
import {
    Database,
    Cpu,
    Cloud,
    Zap,
    Activity,
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";

/**
 * Stylized AI Workflow dashboard mockup built entirely in HTML/CSS/Framer Motion.
 * Mimics a real product surface a la Linear / Vercel / Stripe.
 */
export default function DashboardMockup() {
    return (
        <motion.div
            data-testid="hero-dashboard"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-16 sm:mt-20 mx-auto max-w-5xl"
        >
            {/* Soft glow behind */}
            <div
                aria-hidden
                className="absolute -inset-x-10 -inset-y-10 -z-10 blur-3xl opacity-60"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(37,99,235,0.25), rgba(0,208,132,0.18) 40%, transparent 70%)",
                }}
            />

            <div className="relative rounded-2xl border border-white/10 bg-[#0B1120]/70 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.02]">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F57]/80" />
                    <span className="h-3 w-3 rounded-full bg-[#FEBC2E]/80" />
                    <span className="h-3 w-3 rounded-full bg-[#28C840]/80" />
                    <div className="mx-auto flex items-center gap-2 text-xs text-[#94A3B8] font-body">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00D084] animate-pulse-glow" />
                        app.flowsync.io / workflows / customer-onboarding
                    </div>
                </div>

                <div className="grid grid-cols-12 min-h-[360px] sm:min-h-[440px]">
                    {/* Sidebar */}
                    <aside className="hidden sm:flex flex-col col-span-2 border-r border-white/[0.07] py-4 px-3 gap-1">
                        {["Workflows", "Inbox", "Analytics", "Integrations", "Team", "Settings"].map(
                            (item, i) => (
                                <div
                                    key={item}
                                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                                        i === 0
                                            ? "bg-white/[0.06] text-white"
                                            : "text-[#94A3B8]"
                                    }`}
                                >
                                    <span
                                        className={`h-1.5 w-1.5 rounded-sm ${
                                            i === 0 ? "bg-[#00D084]" : "bg-white/20"
                                        }`}
                                    />
                                    {item}
                                </div>
                            )
                        )}
                        <div className="mt-auto rounded-lg border border-white/[0.07] p-2.5">
                            <div className="text-[10px] uppercase tracking-widest text-[#94A3B8] mb-1">Plan</div>
                            <div className="text-xs font-semibold text-white">Pro · 14d trial</div>
                        </div>
                    </aside>

                    {/* Canvas */}
                    <div className="col-span-12 sm:col-span-10 relative p-5 sm:p-7">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-[#94A3B8]">
                                    Workflow
                                </div>
                                <div className="font-display text-base sm:text-lg font-semibold text-white">
                                    Customer Onboarding · Live
                                </div>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 text-xs">
                                <span className="px-2.5 py-1 rounded-full border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084] font-medium">
                                    Active
                                </span>
                                <span className="px-2.5 py-1 rounded-full border border-white/10 text-[#94A3B8]">
                                    Last run · 12s ago
                                </span>
                            </div>
                        </div>

                        {/* Graph */}
                        <div className="relative h-[220px] sm:h-[260px]">
                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 600 260"
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0" stopColor="#00D084" stopOpacity="0.9" />
                                        <stop offset="1" stopColor="#2563EB" stopOpacity="0.9" />
                                    </linearGradient>
                                </defs>
                                {[
                                    "M70,130 C140,130 160,60 240,60",
                                    "M70,130 C140,130 160,200 240,200",
                                    "M310,60 C380,60 400,130 470,130",
                                    "M310,200 C380,200 400,130 470,130",
                                ].map((d, i) => (
                                    <path
                                        key={i}
                                        d={d}
                                        stroke="url(#lg1)"
                                        strokeWidth="1.5"
                                        strokeDasharray="6 6"
                                        className="animate-dash"
                                    />
                                ))}
                            </svg>

                            <Node x="left-[2%]" y="top-1/2 -translate-y-1/2" icon={Database} label="Source" sub="HubSpot" tone="primary" />
                            <Node x="left-[35%]" y="top-[8%]" icon={Cpu} label="AI Enrich" sub="GPT · 0.8s" tone="secondary" />
                            <Node x="left-[35%]" y="bottom-[8%]" icon={Zap} label="Trigger" sub="Slack DM" tone="primary" />
                            <Node x="right-[2%]" y="top-1/2 -translate-y-1/2" icon={Cloud} label="Deploy" sub="Prod" tone="secondary" pulse />
                        </div>

                        {/* Floating analytics widget */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="absolute -bottom-6 right-4 sm:right-7 w-[230px] glass-strong rounded-xl p-3.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)]"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#94A3B8]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#00D084] animate-pulse-glow" />
                                    Live throughput
                                </div>
                                <ArrowUpRight className="h-3.5 w-3.5 text-[#00D084]" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="font-display text-xl font-semibold text-white">12,847</span>
                                <span className="text-xs text-[#00D084] font-medium">+24%</span>
                            </div>
                            {/* mini sparkline */}
                            <svg viewBox="0 0 200 40" className="mt-2 w-full h-8">
                                <defs>
                                    <linearGradient id="sl" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0" stopColor="#00D084" stopOpacity="0.4" />
                                        <stop offset="1" stopColor="#00D084" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,30 L20,26 L40,28 L60,20 L80,22 L100,14 L120,16 L140,8 L160,12 L180,4 L200,8 L200,40 L0,40 Z"
                                    fill="url(#sl)"
                                />
                                <path
                                    d="M0,30 L20,26 L40,28 L60,20 L80,22 L100,14 L120,16 L140,8 L160,12 L180,4 L200,8"
                                    stroke="#00D084"
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                            </svg>
                        </motion.div>

                        {/* Floating status pill */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                            className="absolute -top-3 left-4 sm:left-7 glass-strong rounded-full px-3 py-1.5 flex items-center gap-2 text-xs"
                        >
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#00D084]" />
                            <span className="text-white font-medium">Saved 4.2h today</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function Node({ x, y, icon: Icon, label, sub, tone = "primary", pulse }) {
    const accent = tone === "primary" ? "#00D084" : "#2563EB";
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`absolute ${x} ${y} w-[120px] sm:w-[140px] glass rounded-xl p-2.5 sm:p-3 ${pulse ? "animate-float" : ""}`}
            style={{ boxShadow: `0 0 24px ${accent}22` }}
        >
            <div className="flex items-center gap-2">
                <span
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md"
                    style={{ background: `${accent}1f`, color: accent }}
                >
                    <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="leading-tight">
                    <div className="text-xs font-semibold text-white">{label}</div>
                    <div className="text-[10px] text-[#94A3B8]">{sub}</div>
                </div>
            </div>
            <div className="mt-2 flex items-center gap-1">
                <Activity className="h-2.5 w-2.5 text-[#94A3B8]" />
                <div className="h-1 flex-1 rounded-full bg-white/5 overflow-hidden">
                    <div
                        className="h-full rounded-full"
                        style={{ width: "68%", background: accent }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
