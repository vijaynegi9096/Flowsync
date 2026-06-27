
import { motion } from "framer-motion";
import { Clock, TrendingDown, MessagesSquare, Rocket } from "lucide-react";

const benefits = [
    {
        icon: Clock,
        title: "Save Time",
        eyebrow: "Reclaim 20+ hours / week",
        desc: "Offload repetitive operations to AI agents and focus your team on the work that compounds.",
        graphic: <SaveTimeGraphic />,
    },
    {
        icon: TrendingDown,
        title: "Reduce Costs",
        eyebrow: "Cut ops spend by 38%",
        desc: "Replace brittle scripts and siloed tooling with a unified platform. Pay for runs — not seats.",
        graphic: <ReduceCostsGraphic />,
        reverse: true,
    },
    {
        icon: MessagesSquare,
        title: "Improve Collaboration",
        eyebrow: "One source of truth",
        desc: "Shared workspaces, reviews and comments — engineering, ops and growth ship together.",
        graphic: <CollaborationGraphic />,
    },
    {
        icon: Rocket,
        title: "Scale Faster",
        eyebrow: "Built for millions of runs",
        desc: "Auto-scaling, observability and 99.99% uptime — designed for production from day one.",
        graphic: <ScaleGraphic />,
        reverse: true,
    },
];

export default function Benefits() {
    return (
        <section
            id="benefits"
            data-testid="benefits-section"
            className="relative py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-3 py-1 text-xs font-medium text-[#00D084] uppercase tracking-[0.18em]">
                        Why teams choose FlowSync
                    </span>
                    <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium text-white">
                        Outcomes that{" "}
                        <span className="gradient-text">compound weekly</span>
                    </h2>
                </div>

                <div className="mt-16 space-y-20 sm:space-y-28">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            data-testid={`benefit-${i}`}
                            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                                b.reverse ? "lg:[&>*:first-child]:order-2" : ""
                            }`}
                        >
                            <div>
                                <div className="text-xs uppercase tracking-[0.22em] text-[#00D084] font-medium">
                                    {b.eyebrow}
                                </div>
                                <h3 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-white">
                                    {b.title}
                                </h3>
                                <p className="mt-4 text-lg text-[#94A3B8] leading-relaxed max-w-md">
                                    {b.desc}
                                </p>
                                <div className="mt-7 flex items-center gap-3 text-sm text-[#94A3B8]">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-[#00D084]">
                                        <b.icon className="h-4 w-4" />
                                    </span>
                                    Backed by real customer data
                                </div>
                            </div>
                            <div className="relative">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:p-9 overflow-hidden glass">
                                    {b.graphic}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- Decorative graphics built with divs/svgs ---------- */

function SaveTimeGraphic() {
    return (
        <div className="space-y-3">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => {
                const before = [80, 70, 90, 75, 85][i];
                const after = [22, 18, 30, 20, 25][i];
                return (
                    <div key={d} className="flex items-center gap-3">
                        <span className="w-8 text-[10px] uppercase tracking-widest text-[#94A3B8]">{d}</span>
                        <div className="flex-1 h-2 rounded-full bg-white/[0.05] overflow-hidden">
                            <div className="h-full bg-white/15" style={{ width: `${before}%` }} />
                        </div>
                        <div className="flex-1 h-2 rounded-full bg-white/[0.05] overflow-hidden">
                            <div className="h-full" style={{ width: `${after}%`, background: "#00D084" }} />
                        </div>
                    </div>
                );
            })}
            <div className="flex justify-between pt-3 text-[10px] uppercase tracking-widest text-[#94A3B8]">
                <span>Before FlowSync</span>
                <span className="text-[#00D084]">After</span>
            </div>
        </div>
    );
}

function ReduceCostsGraphic() {
    return (
        <div>
            <div className="flex items-end justify-between h-44 gap-2">
                {[60, 70, 55, 80, 50, 38, 28].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                        <div
                            className="w-full rounded-md"
                            style={{
                                height: `${h}%`,
                                background:
                                    i > 4
                                        ? "linear-gradient(180deg, #00D084, #2563EB)"
                                        : "rgba(255,255,255,0.08)",
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-[#94A3B8]">Q1 → Q3 Ops spend</span>
                <span className="text-[#00D084] font-semibold">−38%</span>
            </div>
        </div>
    );
}

function CollaborationGraphic() {
    return (
        <div className="space-y-3">
            {[
                { name: "Alex", role: "Eng", c: "#00D084", msg: "Pushed workflow v3 → review please" },
                { name: "Priya", role: "Ops", c: "#2563EB", msg: "LGTM, queued for prod deploy" },
                { name: "Sam", role: "PM", c: "#00D084", msg: "Onboarding flow saved 4.2h/day" },
            ].map((m) => (
                <div key={m.name} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <span
                        className="h-8 w-8 rounded-full flex items-center justify-center font-display text-xs font-semibold text-[#0B1120]"
                        style={{ background: m.c }}
                    >
                        {m.name[0]}
                    </span>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-xs">
                            <span className="font-semibold text-white">{m.name}</span>
                            <span className="text-[#94A3B8]">· {m.role}</span>
                        </div>
                        <p className="text-sm text-[#94A3B8] mt-0.5">{m.msg}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ScaleGraphic() {
    return (
        <div className="relative h-44">
            <svg viewBox="0 0 320 160" className="w-full h-full">
                <defs>
                    <linearGradient id="scl" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0" stopColor="#2563EB" />
                        <stop offset="1" stopColor="#00D084" />
                    </linearGradient>
                    <linearGradient id="sclf" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#00D084" stopOpacity="0.25" />
                        <stop offset="1" stopColor="#00D084" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d="M0,140 C40,135 60,125 100,110 C140,95 170,80 200,55 C230,30 270,18 320,10 L320,160 L0,160 Z" fill="url(#sclf)" />
                <path d="M0,140 C40,135 60,125 100,110 C140,95 170,80 200,55 C230,30 270,18 320,10" stroke="url(#scl)" strokeWidth="2.5" fill="none" />
                {[
                    [0, 140], [100, 110], [200, 55], [320, 10],
                ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3" fill="#00D084" />
                ))}
            </svg>
            <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-[#94A3B8]">Runs / month</span>
                <span className="text-white font-semibold">120M+ and growing</span>
            </div>
        </div>
    );
}
