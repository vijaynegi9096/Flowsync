
import { motion } from "framer-motion";
import {
    Workflow,
    LineChart,
    Users,
    Plug,
    ShieldCheck,
    CloudCog,
} from "lucide-react";

const features = [
    {
        icon: Workflow,
        title: "AI Workflow Automation",
        desc: "Build intelligent multi-step workflows with natural language. Let AI agents handle repetitive operations end-to-end.",
        accent: "#00D084",
    },
    {
        icon: LineChart,
        title: "Real-Time Analytics",
        desc: "Track throughput, success rates and time saved across every workflow with live dashboards and granular metrics.",
        accent: "#2563EB",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        desc: "Shared workspaces, role-based access and inline comments — bring engineering, ops and growth into one place.",
        accent: "#00D084",
    },
    {
        icon: Plug,
        title: "Smart Integrations",
        desc: "Connect to 300+ tools natively — Slack, Notion, Salesforce, HubSpot, Stripe, Postgres and many more.",
        accent: "#2563EB",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        desc: "SOC 2 Type II, GDPR-ready, SSO, audit logs and end-to-end encryption. Built for regulated industries.",
        accent: "#00D084",
    },
    {
        icon: CloudCog,
        title: "Cloud Scalability",
        desc: "Auto-scaling infrastructure that handles millions of runs per day, with 99.99% uptime and regional residency.",
        accent: "#2563EB",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            data-testid="features-section"
            className="relative py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-3 py-1 text-xs font-medium text-[#7AA5FF] uppercase tracking-[0.18em]">
                        Capabilities
                    </span>
                    <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium text-white">
                        Every primitive your team needs to{" "}
                        <span className="gradient-text">ship automations</span>
                    </h2>
                    <p className="mt-5 text-lg text-[#94A3B8] leading-relaxed max-w-xl">
                        From intelligent triggers to enterprise-grade governance — FlowSync
                        is a complete platform for AI-native operations.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => (
                        <motion.article
                            key={f.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            data-testid={`feature-card-${i}`}
                            className="group relative rounded-2xl p-7 lg:p-8 bg-white/[0.025] border border-white/10 hover:border-white/20 hover:bg-white/[0.045] transition-all duration-300"
                        >
                            <span
                                aria-hidden
                                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{
                                    background: `radial-gradient(450px circle at 30% 0%, ${f.accent}14, transparent 50%)`,
                                }}
                            />
                            <span
                                className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.04] border border-white/5"
                                style={{ color: f.accent }}
                            >
                                <f.icon className="h-5 w-5" strokeWidth={2} />
                            </span>
                            <h3 className="relative mt-5 font-display text-lg sm:text-xl font-medium text-white">
                                {f.title}
                            </h3>
                            <p className="relative mt-2.5 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
