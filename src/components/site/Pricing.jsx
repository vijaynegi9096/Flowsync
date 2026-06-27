
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const PLANS = [
    {
        id: "starter",
        name: "Starter",
        tagline: "For individuals exploring AI automation.",
        monthly: 999,
        yearly: 799,
        cta: "Start Free Trial",
        highlight: false,
        features: [
            "Up to 3 active workflows",
            "1,000 AI runs / month",
            "20+ integrations",
            "Community support",
            "Email notifications",
        ],
    },
    {
        id: "pro",
        name: "Pro",
        tagline: "For growing teams shipping production automations.",
        monthly: 2999,
        yearly: 2399,
        cta: "Start Free Trial",
        highlight: true,
        features: [
            "Unlimited active workflows",
            "100,000 AI runs / month",
            "300+ integrations",
            "Real-time analytics & alerts",
            "Role-based access control",
            "Priority support",
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        tagline: "For organizations with compliance & scale needs.",
        monthly: null,
        yearly: null,
        cta: "Contact Sales",
        highlight: false,
        features: [
            "Custom AI runs & SLAs",
            "SSO, SCIM & audit logs",
            "On-prem & VPC deployment",
            "SOC 2 Type II, HIPAA, GDPR",
            "Dedicated success engineer",
            "24/7 enterprise support",
        ],
    },
];

export default function Pricing() {
    const [yearly, setYearly] = useState(true);

    return (
        <section
            id="pricing"
            data-testid="pricing-section"
            className="relative py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-3 py-1 text-xs font-medium text-[#00D084] uppercase tracking-[0.18em]">
                        Pricing
                    </span>
                    <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium text-white">
                        Simple, transparent{" "}
                        <span className="gradient-text">pricing</span>
                    </h2>
                    <p className="mt-5 text-lg text-[#94A3B8] leading-relaxed">
                        Start free. Upgrade as your team scales. Cancel anytime.
                    </p>

                    {/* Toggle */}
                    <div
                        data-testid="billing-toggle"
                        className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1"
                    >
                        <button
                            data-testid="billing-monthly"
                            onClick={() => setYearly(false)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                                !yearly
                                    ? "bg-white text-[#0B1120]"
                                    : "text-[#94A3B8] hover:text-white"
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            data-testid="billing-yearly"
                            onClick={() => setYearly(true)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all inline-flex items-center gap-2 ${
                                yearly
                                    ? "bg-white text-[#0B1120]"
                                    : "text-[#94A3B8] hover:text-white"
                            }`}
                        >
                            Yearly
                            <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#00D084]/15 text-[#00D084]">
                                −20%
                            </span>
                        </button>
                    </div>
                </div>

                <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    {PLANS.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                            data-testid={`pricing-card-${p.id}`}
                            className={`relative rounded-2xl p-8 flex flex-col ${
                                p.highlight
                                    ? "bg-white/[0.04] border border-white/15 lg:scale-[1.03] shadow-[0_30px_70px_-20px_rgba(37,99,235,0.35)]"
                                    : "bg-white/[0.025] border border-white/10"
                            }`}
                        >
                            {p.highlight && (
                                <>
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute -inset-px rounded-2xl"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgba(0,208,132,0.35), rgba(37,99,235,0.35))",
                                            WebkitMask:
                                                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                            padding: 1,
                                        }}
                                    />
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-[#00D084] text-[#0B1120] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
                                        <Sparkles className="h-3 w-3" /> Most popular
                                    </span>
                                </>
                            )}

                            <div className="relative">
                                <h3 className="font-display text-2xl font-medium text-white">
                                    {p.name}
                                </h3>
                                <p className="mt-1.5 text-sm text-[#94A3B8] leading-relaxed">
                                    {p.tagline}
                                </p>

                                <div className="mt-6 flex items-baseline gap-1.5">
                                    {p.monthly === null ? (
                                        <span className="font-display text-4xl font-medium text-white">
                                            Custom
                                        </span>
                                    ) : (
                                        <>
                                            <span className="font-display text-5xl font-medium tracking-tighter text-white">
                                                ₹{yearly ? p.yearly.toLocaleString() : p.monthly.toLocaleString()}
                                            </span>
                                            <span className="text-sm text-[#94A3B8]">/month</span>
                                        </>
                                    )}
                                </div>
                                {p.monthly !== null && (
                                    <div className="mt-1 text-xs text-[#94A3B8]">
                                        {yearly ? "billed yearly" : "billed monthly"}
                                    </div>
                                )}
                            </div>

                            <button
                                data-testid={`pricing-cta-${p.id}`}
                                className={`relative mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-5 py-3 transition-all active:scale-[0.98] ${
                                    p.highlight
                                        ? "bg-[#00D084] text-[#0B1120] hover:bg-[#00D084]/95 shadow-[0_0_30px_rgba(0,208,132,0.4)]"
                                        : "bg-white/[0.05] text-white border border-white/10 hover:bg-white/[0.1]"
                                }`}
                            >
                                {p.cta}
                            </button>

                            <ul className="relative mt-7 space-y-3.5">
                                {p.features.map((f) => (
                                    <li
                                        key={f}
                                        className="flex items-start gap-2.5 text-sm text-[#cbd5e1]"
                                    >
                                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#00D084]/15 text-[#00D084]">
                                            <Check className="h-2.5 w-2.5" strokeWidth={3} />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
