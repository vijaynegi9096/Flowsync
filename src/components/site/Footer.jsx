import { useState } from "react";
import { Zap, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";

const groups = [
    {
        title: "Product",
        links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Customers", "Press", "Contact"],
    },
    {
        title: "Resources",
        links: ["Documentation", "Guides", "Blog", "API Reference", "Status"],
    },
    {
        title: "Legal",
        links: ["Privacy", "Terms", "Security", "DPA", "Cookies"],
    },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        toast.success("You're on the list! Welcome to FlowSync.");
        setEmail("");
    };

    return (
        <footer id="contact" data-testid="footer" className="relative pt-24 pb-10 border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#00D084] to-[#2563EB]">
                                <Zap className="h-4 w-4 text-[#0B1120]" strokeWidth={2.5} />
                            </span>
                            <span className="font-display font-semibold text-white tracking-tight text-lg">
                                Flow<span className="text-[#00D084]">Sync</span>
                            </span>
                        </div>
                        <p className="mt-4 text-sm text-[#94A3B8] leading-relaxed max-w-xs">
                            Automate workflows with AI. Built for teams that move fast and
                            ship without compromise.
                        </p>

                        <form onSubmit={onSubmit} className="mt-6" data-testid="newsletter-form">
                            <label
                                htmlFor="newsletter-email"
                                className="text-xs uppercase tracking-[0.22em] text-[#94A3B8] font-medium"
                            >
                                Get monthly product updates
                            </label>
                            <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 focus-within:border-[#00D084]/50 transition-colors">
                                <input
                                    id="newsletter-email"
                                    data-testid="newsletter-input"
                                    type="email"
                                    inputMode="email"
                                    placeholder="you@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 bg-transparent text-sm text-white placeholder:text-[#94A3B8] px-3 py-2 outline-none"
                                />
                                <button
                                    data-testid="newsletter-submit"
                                    type="submit"
                                    className="inline-flex items-center gap-1.5 rounded-full bg-[#00D084] text-[#0B1120] text-sm font-semibold px-4 py-2 hover:bg-[#00D084]/95 transition-colors"
                                >
                                    Subscribe
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {groups.map((g) => (
                        <div key={g.title}>
                            <div className="text-xs uppercase tracking-[0.22em] text-white font-semibold">
                                {g.title}
                            </div>
                            <ul className="mt-4 space-y-2.5">
                                {g.links.map((l) => (
                                    <li key={l}>
                                        <a
                                            href="#"
                                            data-testid={`footer-link-${l.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                                        >
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.06]">
                    <p className="text-xs text-[#94A3B8]">
                        © {new Date().getFullYear()} FlowSync, Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {[
                            { Icon: Twitter, label: "twitter" },
                            { Icon: Github, label: "github" },
                            { Icon: Linkedin, label: "linkedin" },
                        ].map(({ Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                data-testid={`social-${label}`}
                                aria-label={label}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#94A3B8] hover:text-white hover:border-white/20 transition-colors"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Massive wordmark */}
                <div aria-hidden className="mt-14 select-none overflow-hidden">
                    <div className="font-display font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.06] to-transparent leading-none text-[22vw] text-center">
                        FLOWSYNC
                    </div>
                </div>
            </div>
        </footer>
    );
}
