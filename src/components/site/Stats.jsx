import { motion } from "framer-motion";

const stats = [
    { value: "50,000+", label: "Active users" },
    { value: "99.99%", label: "Uptime guarantee" },
    { value: "120M", label: "Tasks automated" },
    { value: "40%", label: "Productivity uplift" },
];

export default function Stats() {
    return (
        <section
            data-testid="stats-section"
            className="relative border-y border-white/[0.08] bg-white/[0.015]"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            data-testid={`stat-${i}`}
                            className="text-center lg:text-left lg:border-l lg:first:border-0 lg:border-white/10 lg:pl-8 lg:first:pl-0"
                        >
                            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-white">
                                {s.value}
                            </div>
                            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[#94A3B8] font-medium">
                                {s.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
