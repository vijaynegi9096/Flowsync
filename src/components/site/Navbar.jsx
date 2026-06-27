import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);

      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveLink("#" + id);
          }
        },
        {
          threshold: 0.4,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleOutside = (e) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  const handleNavClick = (e, href) => {
    if (href === "#top") {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setOpen(false);
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  const headerClass = scrolled
    ? "fixed top-0 inset-x-0 z-50 py-3 transition-all duration-300"
    : "fixed top-0 inset-x-0 z-50 py-5 transition-all duration-300";

  const navClass = scrolled
    ? "flex items-center justify-between rounded-full px-5 sm:px-6 py-2.5 transition-all duration-300 glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    : "flex items-center justify-between rounded-full px-5 sm:px-6 py-2.5 transition-all duration-300 glass";

  return (
    <header
      data-testid="navbar"
      ref={drawerRef}
      className={headerClass}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <nav className={navClass}>

          {/* Logo */}
          <a
            href="#top"
            data-testid="nav-logo"
            onClick={(e) => handleNavClick(e, "#top")}
            className="flex items-center gap-2 group"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00D084] to-[#2563EB] shadow-[0_0_20px_rgba(0,208,132,0.4)] transition-transform duration-300 group-hover:scale-110">
              <Zap
                className="h-4 w-4 text-[#0B1120]"
                strokeWidth={2.5}
              />
            </span>

            <span className="font-display font-semibold text-white tracking-tight text-lg">
              Flow<span className="text-[#00D084]">Sync</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = activeLink === l.href;

              const linkClass = isActive
                ? "relative px-4 py-2 text-sm font-medium rounded-full group text-white"
                : "relative px-4 py-2 text-sm font-medium rounded-full group text-[#94A3B8] hover:text-white transition-colors duration-200";

              const pillClass = isActive
                ? "absolute inset-0 rounded-full bg-white/10"
                : "absolute inset-0 rounded-full bg-transparent group-hover:bg-white/5 transition-all duration-200";

              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  className={linkClass}
                >
                  <span className={pillClass} />

                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00D084]" />
                  )}

                  <span className="relative">{l.label}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              data-testid="nav-login-btn"
              className="px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5"
            >
              Login
            </button>

            <button
              data-testid="nav-trial-btn"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-[#00D084] text-[#0B1120] hover:bg-[#00D084]/90 transition-all duration-200 shadow-[0_0_20px_rgba(0,208,132,0.3)] hover:shadow-[0_0_30px_rgba(0,208,132,0.5)] hover:scale-[1.04] active:scale-[0.97]"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-200 active:scale-[0.95]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden mt-3 mx-6 sm:mx-8 rounded-2xl glass-strong p-5"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => {
                const isActive = activeLink === l.href;

                const mobileLinkClass = isActive
                  ? "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 text-white bg-white/10 border border-white/10"
                  : "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 text-[#94A3B8] hover:text-white hover:bg-white/5";

                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    data-testid={`mobile-link-${l.label.toLowerCase()}`}
                    className={mobileLinkClass}
                  >
                    <span>{l.label}</span>

                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                    )}
                  </a>
                );
              })}

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  data-testid="mobile-login-btn"
                  className="px-4 py-3 text-sm font-semibold rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 active:scale-[0.97]"
                >
                  Login
                </button>

                <button
                  data-testid="mobile-trial-btn"
                  className="px-4 py-3 text-sm font-semibold rounded-full bg-[#00D084] text-[#0B1120] hover:bg-[#00D084]/90 transition-all duration-200 shadow-[0_0_16px_rgba(0,208,132,0.3)] active:scale-[0.97]"
                >
                  Start Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
