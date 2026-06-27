
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "FlowSync replaced 4 internal tools and 3 cron jobs. Our ops team ships automations in hours instead of weeks.",
        name: "Aarav Mehta",
        role: "Head of Operations",
        company: "Northwind Labs",
        avatar:
            "https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc4MjU1MDg4M3ww&ixlib=rb-4.1.0&q=85",
    },
    {
        quote:
            "The AI workflow graph is genuinely impressive. We routed 12M onboarding events through FlowSync last quarter with zero downtime.",
        name: "Sara Lindqvist",
        role: "Staff Engineer",
        company: "Hexa Cloud",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc4MjU1MDg4M3ww&ixlib=rb-4.1.0&q=85",
    },
    {
        quote:
            "The integrations are first-class. Slack, Salesforce and Postgres just work — and the audit logs satisfied our SOC2 auditor on day one.",
        name: "Daniel Okafor",
        role: "VP Engineering",
        company: "Orbit Finance",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc4MjU1MDg4M3ww&ixlib=rb-4.1.0&q=85",
    },
    {
        quote:
            "We saved roughly 36 hours of manual triage every week. The ROI was clear within the first month of the trial.",
        name: "Mei Tanaka",
        role: "Director of Growth",
        company: "Delta Retail",
        avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc4MjU1MDg4M3ww&ixlib=rb-4.1.0&q=85",
    },
    {
        quote:
            "The product feels like Linear-for-automation. Beautiful UI, fast keyboard shortcuts, and incredibly thoughtful defaults.",
        name: "Lucas Romano",
        role: "CTO",
        company: "Cubed Systems",
        avatar:
            "https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        quote:
            "Our finance close went from 6 days to 38 hours. FlowSync agents reconcile invoices and flag anomalies in real time.",
        name: "Hana Yusuf",
        role: "Head of Finance",
        company: "Helix Health",
        avatar:
            "https://images.pexels.com/photos/26872232/pexels-photo-26872232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-3 py-1 text-xs font-medium text-[#7AA5FF] uppercase tracking-[0.18em]">
                        Loved by builders
                    </span>
                    <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium text-white">
                        Teams ship faster with{" "}
                        <span className="gradient-text">FlowSync</span>
                    </h2>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonials.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            data-testid={`testimonial-${i}`}
                            className="relative rounded-2xl p-7 glass hover:border-white/20 transition-colors flex flex-col"
                        >
                            <Quote className="h-5 w-5 text-[#00D084]/70" />
                            <blockquote className="mt-4 text-base text-white/90 leading-relaxed font-body">
                                "{t.quote}"
                            </blockquote>
                            <div className="mt-5 flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-3.5 w-3.5 text-[#00D084]"
                                        fill="currentColor"
                                    />
                                ))}
                            </div>
                            <figcaption className="mt-5 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    loading="lazy"
                                    className="h-10 w-10 rounded-full object-cover border border-white/10"
                                />
                                <div className="leading-tight">
                                    <div className="text-sm font-semibold text-white">
                                        {t.name}
                                    </div>
                                    <div className="text-xs text-[#94A3B8]">
                                        {t.role} · {t.company}
                                    </div>
                                </div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
