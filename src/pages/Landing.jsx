
import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import Features from "../components/site/Features";
import Stats from "../components/site/Stats";
import Benefits from "../components/site/Benefits";
import Testimonials from "../components/site/Testimonials";
import Pricing from "../components/site/Pricing";
import FAQ from "../components/site/FAQ";
import Footer from "../components/site/Footer";
import { Toaster } from "../components/ui/sonner";

export default function Landing() {
    return (
        <div data-testid="landing-page" className="relative min-h-screen bg-[#0B1120] text-white overflow-x-clip">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Stats />
                <Benefits />
                <Testimonials />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
            <Toaster richColors theme="dark" position="bottom-right" />
        </div>
    );
}
