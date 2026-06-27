
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../ui/accordion";

const faqs = [
    {
        q: "Is there a free trial?",
        a: "Yes. Every plan starts with a 14-day free trial — no credit card required. You'll have full access to Pro features so you can evaluate FlowSync with your team.",
    },
    {
        q: "Can I cancel anytime?",
        a: "Absolutely. You can cancel or downgrade your plan directly from your account at any time. We'll prorate any remaining time on annual plans.",
    },
    {
        q: "How does FlowSync handle security and compliance?",
        a: "FlowSync is SOC 2 Type II certified, GDPR-ready and supports SSO, SCIM, audit logs and end-to-end encryption. Enterprise plans support VPC deployments and regional data residency.",
    },
    {
        q: "What integrations do you support?",
        a: "300+ native integrations including Slack, Notion, Salesforce, HubSpot, Stripe, Postgres, Snowflake, GitHub, Linear and Zapier. Plus a fully open HTTP/REST connector and webhooks.",
    },
    {
        q: "Can I upgrade or change plans later?",
        a: "Yes — you can upgrade, downgrade or switch billing frequency at any time. Your remaining balance is automatically applied to your new plan.",
    },
];

export default function FAQ() {
    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="relative py-24 sm:py-32"
        >
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center">
                    <span className="inline-flex items-center rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-3 py-1 text-xs font-medium text-[#7AA5FF] uppercase tracking-[0.18em]">
                        FAQ
                    </span>
                    <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium text-white">
                        Frequently asked{" "}
                        <span className="gradient-text">questions</span>
                    </h2>
                    <p className="mt-5 text-lg text-[#94A3B8] leading-relaxed">
                        Everything you need to know about FlowSync. Can't find an answer?{" "}
                        <a href="#contact" className="text-[#00D084] hover:underline">
                            Talk to our team
                        </a>
                        .
                    </p>
                </div>

                <Accordion type="single" collapsible className="mt-12 w-full">
                    {faqs.map((f, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            data-testid={`faq-item-${i}`}
                            className="border-b border-white/10 last:border-b-0"
                        >
                            <AccordionTrigger
                                data-testid={`faq-trigger-${i}`}
                                className="text-left font-display text-base sm:text-lg font-medium text-white hover:text-[#00D084] hover:no-underline py-6 [&>svg]:text-[#94A3B8]"
                            >
                                {f.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#94A3B8] text-base leading-relaxed font-body pb-6">
                                {f.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
