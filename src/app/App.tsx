import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, ArrowRight, Zap, Brain, Network } from "lucide-react";
import svgPathsBento from "@/imports/SectionTheSolutionBentoGridStyle/svg-f22y1i6wwd";
import imgKnowledgeGraph from "@/imports/SectionTheSolutionBentoGridStyle/63050e281673be4722e84f74c4f99fc5abc5d17e.png";

import svgPathsLogo from "@/imports/LandingPage/svg-gm94mwxro1";
import imgShadow from "@/imports/LandingPage/cb97722bf8f6997018abb02808e20009fbb69fea.png";
import imgMacBookPro16 from "@/imports/LandingPage/590d59e746e6e2148986c4d0850c4434393b07c0.png";
import imgScreenMockupReplaceFill from "@/imports/LandingPage/edefd17a1dc25eeecd030b0ecc86070620be23b3.png";
import imgPartnerLogo from "@/imports/LandingPage/60b452b72f94d1081d67e3ac229dc34170aaaae8.png";
import imgPartnerLogo1 from "@/imports/LandingPage/028fdf04a6f3bfaf2c219d6b8db21e22f38bd1bd.png";
import imgPartnerLogo2 from "@/imports/LandingPage/b941f576e996c504d813e3ba15d78970ce063b85.png";
import imgPartnerLogo3 from "@/imports/LandingPage/4baac82e37787ec4a3b0f2ff29611fccca075b3f.png";
import imgPartnerLogo4 from "@/imports/LandingPage/bb950b3b48110a5167a4e406783101076aa7d22b.png";
import imgKnowledgeGraphVisualization from "@/imports/LandingPage/63050e281673be4722e84f74c4f99fc5abc5d17e.png";
import imgInesKijucarPortrait from "@/imports/LandingPage/ed3a75736e37bc61612f165305ea8ef00804538c.png";
import imgBibusAgLogo from "@/imports/LandingPage/4e3c8f159c65073da573f6a34b22fc750f5f1a2e.png";

gsap.registerPlugin(ScrollTrigger);

type Language = "de" | "en";

function BrandMark() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg className="w-6 h-6" viewBox="0 0 25.5518 28" fill="none" aria-hidden="true">
        <path d={svgPathsLogo.p3b122200} fill="#fff" />
      </svg>
    </div>
  );
}

const translations = {
  de: {
    nav: {
      platform: "Plattform",
      agents: "Agenten",
      integrations: "Integrationen",
      pricing: "Preise",
      signIn: "Anmelden",
      getStarted: "Jetzt starten",
      menuAria: "Menü umschalten",
    },
    hero: {
      badge: "FÜR UNTERNEHMENSWACHSTUM IN SKALA",
      titleLine1: "Schöne Analysen",
      titleLine2: "für smarteres Wachstum",
      subtitle:
        "Leistungsstarke, selbsterklärende Wachstumsanalysen helfen Ihnen dabei, mehr Nutzer zu gewinnen, zu binden und langfristig zu halten. Vertraut von über 4.000 Startups.",
      signUp: "Registrieren",
      demo: "Demo",
    },
    trustedPartners: {
      label: "Unterstützt von Branchenführern",
    },
    problem: {
      eyebrow: "Das Problem",
      heading: "Die Kollaborationslücke",
      description:
        "Teams entwickeln sich hin zu synchroner Zusammenarbeit, die aus ihren leistungsstarken Tools und ihren wichtigsten Dokumenten Sinn macht.",
      cards: [
        {
          title: "Fragmentierte Silos",
          description:
            "Ihre Informationen sind über proprietäre Systeme verteilt, die nicht miteinander sprechen. Erkenntnisse bleiben hinter organisatorischen Mauern gefangen.",
        },
        {
          title: "Latenz und Reibung",
          description:
            "Die Lücke zwischen Gedanke und Wirkung ist zu groß. Jeder Hand-off erzeugt neue Verzögerungen und Ausfallpunkte, die Ihr Team bremsen.",
        },
        {
          title: "Statischer Kontext",
          description:
            "Heutige Tools haben keinen echten Kontext für menschliche Zusammenarbeit. Dadurch entstehen Entscheidungen ohne die nötigen Empfehlungen.",
        },
      ],
    },
    solution: {
      eyebrow: "DIE PLATTFORM",
      headingLine1: "Vereinheitlichte Intelligenz",
      headingLine2: "für hochwertige Ausführung",
      button: "Alle Funktionen entdecken",
      feature1Title: "Der vereinheitlichte Graph",
      feature1Description:
        "Aetheris verwandelt verstreute Dokumente, Logs und Chats in einen maschinenlesbaren Wissensgraph, den Agenten in Echtzeit abfragen können.",
      feature2Title: "Agenten-Orchestrierung",
      feature2Description:
        "Setzen Sie individuelle KI-Agenten ein, die direkt auf der Arbeitsfläche leben, Meetings begleiten, Threads zusammenfassen und technische Aufgaben autonom ausführen.",
      feature3Title: "Unternehmenssicherheit",
      feature3Description:
        "SOC 2 Typ II-konform mit Ende-zu-Ende-Verschlüsselung für alle kollaborativen Daten.",
      feature4Title: "Reiche Integrationen",
      feature4Description:
        "Verbinden Sie Ihren bestehenden Stack – GitHub, Jira, SAP und Slack – in Minuten.",
      feature5Title: "Human-in-the-Loop",
      feature5Description:
        "Übergaben zwischen menschlichen Experten und KI-Agenten laufen nahtlos mit vollständiger Audit-Trail ab.",
    },
    testimonial: {
      quote:
        "Aetheris AI hat unsere Art der Zusammenarbeit zwischen Engineering- und Produktteams komplett verändert. Es ist kein bloßer Workspace mehr, sondern ein intelligenter Partner, der uns über 12 Zeitzonen hinweg synchron hält.",
      author: "Ines Kijucar",
      role: "Chief Technology Officer bei Bibus AG",
    },
    finalCta: {
      eyebrow: "Heute loslegen",
      heading: "Betritt die Ära der agentischen Arbeit.",
      description:
        "Schließen Sie sich 500 Unternehmensteams an, die die fokussierte Zukunft der Intelligenz für die Unternehmensleistung aufbauen.",
      primary: "Kostenlos testen",
      secondary: "Mit dem Vertrieb sprechen",
    },
    footer: {
      links: ["Blogs", "Jobs", "Impressum", "Datenschutz"],
      copyright: "© 2024 Aetheris Intelligence Systems. Für die agentische Ära entwickelt.",
      status: "Systeme online",
    },
  },
  en: {
    nav: {
      platform: "Platform",
      agents: "Agents",
      integrations: "Integrations",
      pricing: "Pricing",
      signIn: "Sign In",
      getStarted: "Get Started",
      menuAria: "Toggle menu",
    },
    hero: {
      badge: "BUILT FOR ENTERPRISE GROWTH AT SCALE",
      titleLine1: "Beautiful analytics",
      titleLine2: "to grow smarter",
      subtitle:
        "Powerful, self-up-to-product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
      signUp: "Sign up",
      demo: "Demo",
    },
    trustedPartners: {
      label: "Supported by industry leaders",
    },
    problem: {
      eyebrow: "The Problem",
      heading: "The Collaboration Gap",
      description:
        "Teams are transforming to synchronous collaboration that makes sense from their high-performance tools and their key documents.",
      cards: [
        {
          title: "Fragmented Silos",
          description:
            "Your information is spread across proprietary systems that don't talk to each other. Insights stay locked behind organizational walls.",
        },
        {
          title: "Latency & Friction",
          description:
            'The gap between "thought" and "impact" is too long. Every handoff creates new delay and points of failure that slow your team down.',
        },
        {
          title: "Static Context",
          description:
            "Today's tools lack true contextual, commercial human collaboration. Leading to decision-points without necessary suggestions.",
        },
      ],
    },
    solution: {
      eyebrow: "THE PLATFORM",
      headingLine1: "Unified Intelligence for",
      headingLine2: "High-Stake Execution",
      button: "Explore all features",
      feature1Title: "The Unified Graph",
      feature1Description:
        "Aetheris transforms disparate documents, logs, and chats into a machine-readable knowledge graph that agents can query in real-time.",
      feature2Title: "Agent Orchestration",
      feature2Description:
        "Deploy custom AI agents that live on the canvas, attending meetings, summarizing threads, and executing technical tasks autonomously.",
      feature3Title: "Enterprise Security",
      feature3Description:
        "SOC2 Type II compliant with end-to-end encryption for all collaborative data.",
      feature4Title: "Rich Integrations",
      feature4Description:
        "Connect your existing stack—GitHub, Jira, SAP, and Slack—in minutes.",
      feature5Title: "Human-in-the-loop",
      feature5Description:
        "Seamlessly hand off tasks between human experts and AI agents with full audit trails.",
    },
    testimonial: {
      quote:
        "Aetheris AI has completely fundamentally shifted how our engineering and product teams collaborate. It's no longer just a workspace; it's an intelligent partner that keeps us synchronized across 12 time zones.",
      author: "Ines Kijucar",
      role: "Chief Technology Officer at Bibus AG",
    },
    finalCta: {
      eyebrow: "Get Started Today",
      heading: "Enter the era of agentic work.",
      description:
        "Join 500 enterprise teams building the focused beyond intelligence on the bottom line.",
      primary: "Start Free Trial",
      secondary: "Talk to Sales",
    },
    footer: {
      links: ["Blogs", "Jobs", "Imprint", "Data protection"],
      copyright: "© 2024 Aetheris Intelligence Systems. Built for the agentic era.",
      status: "Systems Operational",
    },
  },
};

function useScrollAnimation(ref: React.RefObject<HTMLElement | null>, animProps = {}, triggerProps = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40, ...animProps },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          ...triggerProps,
        },
      }
    );
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
}

function NavBar({ language, setLanguage }: { language: Language; setLanguage: (value: Language) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const content = translations[language].nav;

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 });
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [content.platform, content.agents, content.integrations, content.pricing];

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 md:top-6 left-0 right-0 mx-auto z-50 w-[calc(100%-32px)] max-w-[1060px] rounded-full transition-all duration-300 ${
          scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-xl shadow-2xl" : "bg-[#222]/90 backdrop-blur-md shadow-lg"
        }`}
      >
        <div className="relative flex items-center justify-between px-5 sm:px-7 h-[60px]">
          <div className="flex items-center gap-3 shrink-0 z-10">
            <BrandMark />
            <span className="font-['Kanit',sans-serif] font-bold text-white text-lg sm:text-xl leading-none whitespace-nowrap">
              Agile Collaborative AI
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map(item => (
              <a
                key={item}
                href="#"
                className="font-['Kanit',sans-serif] text-white/85 text-[15px] hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0 z-10">
            <div className="hidden md:flex items-center rounded-full border border-white/15 bg-white/10 p-1">
              {(["de", "en"] as Language[]).map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                    language === lang ? "bg-white text-black" : "text-white/80 hover:text-white"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="hidden md:block font-['Kanit',sans-serif] text-white/80 text-[15px] hover:text-white transition-colors">
              {content.signIn}
            </button>
            <button className="hidden md:block font-['Kanit',sans-serif] font-bold text-white text-[15px] bg-black px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 shadow">
              {content.getStarted}
            </button>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen(v => !v)}
              aria-label={content.menuAria}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed top-[60px] left-0 right-0 mx-auto z-40 w-[calc(100%-32px)] max-w-[1060px] md:hidden">
          <div className="bg-[#1a1a1a] rounded-b-3xl px-6 pb-5 pt-3 border-t border-white/10">
            {navItems.map(item => (
              <a key={item} href="#" className="block font-['Kanit',sans-serif] text-white/85 py-2.5 text-base border-b border-white/5 last:border-0">
                {item}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between rounded-full border border-white/15 bg-white/10 p-1">
              {(["de", "en"] as Language[]).map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex-1 rounded-full px-3 py-2 text-sm font-medium transition-all ${
                    language === lang ? "bg-white text-black" : "text-white/80"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 font-['Kanit',sans-serif] text-white/80 text-sm py-2 border border-white/20 rounded-full">{content.signIn}</button>
              <button className="flex-1 font-['Kanit',sans-serif] font-bold text-white text-sm py-2 bg-black rounded-full">{content.getStarted}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Hero({ language }: { language: Language }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const content = translations[language].hero;

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.3")
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .fromTo(mockupRef.current, { opacity: 0, y: 60, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" }, "-=0.3");

    gsap.to(mockupRef.current, {
      y: -12,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.5,
    });
  }, []);

  return (
    <section className="relative bg-white/70 backdrop-blur-xl overflow-hidden min-h-screen flex flex-col items-center justify-start pt-[140px] pb-[60px] px-5">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5 bg-white/80 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          <span className="font-['Kanit',sans-serif] text-[13px] text-black/60 font-medium tracking-wide">
            {content.badge}
          </span>
        </div>

        <h1
          ref={titleRef}
          className="font-['Kanit',sans-serif] font-bold text-[clamp(2.4rem,7vw,5rem)] leading-[1.1] text-black mb-6"
        >
          {content.titleLine1}<br />{content.titleLine2}
        </h1>

        <p
          ref={subtitleRef}
          className="font-['Kanit',sans-serif] font-light text-[clamp(1rem,2.5vw,1.25rem)] text-black/55 max-w-2xl mb-8 leading-relaxed"
        >
          {content.subtitle}
        </p>

        <div ref={buttonsRef} className="flex flex-wrap items-center justify-center gap-4">
          <button className="font-['Kanit',sans-serif] font-bold text-white bg-black px-8 py-3.5 rounded-full text-base hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            {content.signUp}
          </button>
          <button className="font-['Kanit',sans-serif] font-medium text-black border border-black/15 bg-white/80 px-8 py-3.5 rounded-full text-base hover:border-black/30 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm">
            {content.demo}
          </button>
        </div>
      </div>

      {/* Mockup */}
      <div ref={mockupRef} className="relative z-10 mt-14 w-full max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
          {/* Browser chrome */}
          <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-4 bg-white/10 rounded-md h-5" />
          </div>
          <img
            src={imgScreenMockupReplaceFill}
            alt="Agile Collaborative AI Dashboard"
            className="w-full block object-cover"
          />
        </div>
        {/* Shadow glow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-black/20 blur-2xl rounded-full" />
      </div>
    </section>
  );
}

function TrustedPartners({ language }: { language: Language }) {
  const sectionRef = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const content = translations[language].trustedPartners;

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(labelRef.current, { opacity: 0 }, {
      opacity: 1, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
    });
    gsap.fromTo(
      logosRef.current?.children ? Array.from(logosRef.current.children) : [],
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      }
    );
  }, []);

  const logos = [imgPartnerLogo, imgPartnerLogo1, imgPartnerLogo2, imgPartnerLogo3, imgPartnerLogo4];

  return (
    <section ref={sectionRef} className="py-16 px-5 bg-white border-t border-black/5">
      <div className="max-w-5xl mx-auto">
        <div ref={labelRef} className="text-center mb-10">
          <span className="font-['Kanit',sans-serif] text-[11px] font-semibold tracking-[0.2em] text-black/35 uppercase">
            {content.label}
          </span>
        </div>
        <div ref={logosRef} className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {logos.map((logo, i) => (
            <div key={i} className="opacity-40 hover:opacity-70 transition-opacity duration-200 grayscale hover:grayscale-0">
              <img src={logo} alt={`Partner ${i + 1}`} className="h-8 sm:h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ icon: Icon, title, description, delay }: { icon: React.ElementType; title: string; description: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay,
      scrollTrigger: { trigger: ref.current, start: "top 88%" }
    });
  }, []);

  return (
    <div
      ref={ref}
      className="group flex flex-col gap-4 p-7 rounded-2xl border border-black/8 bg-white hover:border-black/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-200">
        <Icon size={20} className="text-black group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="font-['Kanit',sans-serif] font-semibold text-black text-lg mb-2">{title}</h3>
        <p className="font-['Kanit',sans-serif] font-light text-black/55 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TheProblem({ language }: { language: Language }) {
  const headingRef = useRef<HTMLDivElement>(null);
  const content = translations[language].problem;

  useEffect(() => {
    if (!headingRef.current) return;
    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: headingRef.current, start: "top 85%" }
    });
  }, []);

  return (
    <section className="py-24 px-5 bg-[#f6f6f6]">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-['Kanit',sans-serif] text-[11px] font-semibold tracking-[0.2em] text-black/40 uppercase">{content.eyebrow}</span>
          </div>
          <h2 className="font-['Kanit',sans-serif] font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-black mb-5">
            {content.heading}
          </h2>
          <p className="font-['Kanit',sans-serif] font-light text-black/55 text-lg max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <ProblemCard
            icon={Network}
            title={content.cards[0].title}
            description={content.cards[0].description}
            delay={0}
          />
          <ProblemCard
            icon={Zap}
            title={content.cards[1].title}
            description={content.cards[1].description}
            delay={0.1}
          />
          <ProblemCard
            icon={Brain}
            title={content.cards[2].title}
            description={content.cards[2].description}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

function TheSolution({ language }: { language: Language }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const content = translations[language].solution;

  useEffect(() => {
    if (!headingRef.current) return;
    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: headingRef.current, start: "top 85%" }
    });
    if (!gridRef.current) return;
    const cards = Array.from(gridRef.current.children);
    gsap.fromTo(cards, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: gridRef.current, start: "top 80%" }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-5 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)" }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headingRef} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center">
              <span className="font-['Kanit',sans-serif] text-[11px] font-semibold tracking-[0.15em] text-black/40 uppercase bg-[#f2f4f7] px-3 py-1 rounded-full">
                {content.eyebrow}
              </span>
            </div>
            <h2 className="font-['Kanit',sans-serif] font-medium text-[clamp(1.7rem,3.5vw,2.2rem)] leading-[1.3] text-black">
              {content.headingLine1}<br />{content.headingLine2}
            </h2>
          </div>
          <button className="font-['Kanit',sans-serif] font-bold text-black text-base flex items-center gap-2 group shrink-0 hover:opacity-60 transition-opacity">
            {content.button}
            <svg width="15" height="11" viewBox="0 0 15 11.31" fill="none">
              <path d={svgPathsBento.p8967080} fill="black" />
            </svg>
          </button>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef}>
          {/* Desktop bento: side-by-side row 1 */}
          <div className="hidden lg:grid gap-5 mb-5" style={{ gridTemplateColumns: "repeat(12, minmax(0, 1fr))", gridTemplateRows: "388px" }}>
            {/* Feature 1: Unified Graph — 8 cols */}
            <div
              className="relative rounded-2xl overflow-hidden backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] border border-black/10"
              style={{ gridColumn: "1 / span 8" }}
            >
              {/* Image: fills bottom half */}
              <div className="absolute" style={{ inset: "170px 41px -120px 41px", display: "flex", flexDirection: "column", paddingTop: 32 }}>
                <div className="flex-1 relative opacity-80 overflow-hidden">
                  <img src={imgKnowledgeGraph} alt="Knowledge Graph" className="absolute h-full max-w-none" style={{ left: "29.08%", width: "41.84%", top: 0 }} />
                  <div className="absolute inset-0 bg-white mix-blend-saturation" />
                </div>
              </div>
              {/* Text */}
              <div className="absolute top-10 left-10 right-10">
                <h3 className="font-['Kanit',sans-serif] font-medium text-[32px] leading-[1.3] text-black mb-4">{content.feature1Title}</h3>
                <p className="font-['Kanit',sans-serif] text-[#475467] text-base leading-relaxed">
                  {content.feature1Description}
                </p>
              </div>
            </div>

            {/* Feature 2: Agent Orchestration — 4 cols */}
            <div
              className="relative rounded-2xl backdrop-blur-[10px] bg-white border border-black/10 flex flex-col p-8"
              style={{ gridColumn: "9 / span 4" }}
            >
              {/* Icon */}
              <div className="mb-auto">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-8">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d={svgPathsBento.p9899234} fill="black" />
                  </svg>
                </div>
                <h3 className="font-['Kanit',sans-serif] text-2xl text-black mb-4">{content.feature2Title}</h3>
                <p className="font-['Kanit',sans-serif] text-[#475467] text-base leading-relaxed">
                  {content.feature2Description}
                </p>
              </div>
              {/* Progress indicator */}
              <div className="mt-8 bg-[#dee1e6] rounded-lg p-4 border border-black/5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                  <div className="flex-1 h-2 bg-black/10 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-black/40 shrink-0" />
                  <div className="h-2 bg-black/5 rounded-full w-[80%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile row 1: stacked */}
          <div className="lg:hidden flex flex-col gap-5 mb-5">
            <div className="relative rounded-2xl overflow-hidden backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] border border-black/10 p-8 min-h-[300px]">
              <h3 className="font-['Kanit',sans-serif] font-medium text-2xl text-black mb-3">The Unified Graph</h3>
              <p className="font-['Kanit',sans-serif] text-[#475467] text-base leading-relaxed mb-6">
                Aetheris transforms disparate documents, logs, and chats into a machine-readable knowledge graph that agents can query in real-time.
              </p>
              <div className="relative rounded-xl overflow-hidden opacity-80 h-40">
                <img src={imgKnowledgeGraph} alt="Knowledge Graph" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-white mix-blend-saturation" />
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-black/10 p-8">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-6">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path d={svgPathsBento.p9899234} fill="black" />
                </svg>
              </div>
              <h3 className="font-['Kanit',sans-serif] text-2xl text-black mb-3">{content.feature2Title}</h3>
              <p className="font-['Kanit',sans-serif] text-[#475467] text-base leading-relaxed">
                {content.feature2Description}
              </p>
            </div>
          </div>

          {/* Row 2: 3 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Enterprise Security */}
            <div className="rounded-2xl backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] border border-black/10 p-8 flex flex-col gap-2">
              <svg width="20" height="26" viewBox="0 0 20 25.26" fill="none" className="mb-2">
                <path d={svgPathsBento.pd8e0740} fill="black" />
              </svg>
              <h3 className="font-['Kanit',sans-serif] text-xl text-black pt-2">{content.feature3Title}</h3>
              <p className="font-['Kanit',sans-serif] text-[#475467] text-base leading-relaxed">
                {content.feature3Description}
              </p>
            </div>

            {/* Rich Integrations */}
            <div className="rounded-2xl backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] border border-black/10 p-8 flex flex-col gap-2">
              <svg width="24" height="26" viewBox="0 0 24 25.33" fill="none" className="mb-2">
                <path d={svgPathsBento.p86b0300} fill="black" />
              </svg>
              <h3 className="font-['Kanit',sans-serif] text-xl text-black pt-2">{content.feature4Title}</h3>
              <p className="font-['Kanit',sans-serif] text-[#475467] text-base leading-relaxed">
                {content.feature4Description}
              </p>
            </div>

            {/* Human-in-the-loop */}
            <div className="rounded-2xl backdrop-blur-[10px] bg-[rgba(255,255,255,0.7)] border border-black/10 p-8 flex flex-col gap-2">
              <svg width="31" height="14" viewBox="0 0 30.67 13.97" fill="none" className="mb-2">
                <path d={svgPathsBento.pacc96a0} fill="black" />
              </svg>
              <h3 className="font-['Kanit',sans-serif] text-xl text-black pt-2">{content.feature5Title}</h3>
              <p className="font-['Kanit',sans-serif] text-[#475467] text-base leading-relaxed">
                {content.feature5Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial({ language }: { language: Language }) {
  const ref = useRef<HTMLElement>(null);
  const content = translations[language].testimonial;

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelector(".quote-text"), { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" }
    });
    gsap.fromTo(ref.current.querySelector(".quote-author"), { opacity: 0 }, {
      opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.3,
      scrollTrigger: { trigger: ref.current, start: "top 80%" }
    });
  }, []);

  return (
    <section ref={ref} className="py-24 px-5 bg-[#f6f6f6] overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="mb-8 relative">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg mx-auto">
            <img src={imgInesKijucarPortrait} alt="Ines Kijucar" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black flex items-center justify-center">
            <div className="w-2 h-2 rounded-sm bg-white" />
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-7">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded-full bg-black" />
          ))}
        </div>

        <blockquote className="quote-text font-['Kanit',sans-serif] font-bold text-[clamp(1.3rem,4vw,2.2rem)] leading-[1.4] text-black mb-8 max-w-3xl">
          {content.quote}
        </blockquote>

        <div className="quote-author flex flex-col items-center gap-3">
          <div className="text-center">
            <p className="font-['Kanit',sans-serif] font-semibold text-black text-base">{content.author}</p>
            <p className="font-['Kanit',sans-serif] text-sm text-black/45 font-light">{content.role}</p>
          </div>
          <img src={imgBibusAgLogo} alt="Bibus AG" className="h-7 object-contain opacity-50" />
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ language }: { language: Language }) {
  const ref = useRef<HTMLElement>(null);
  const content = translations[language].finalCta;

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelector(".cta-inner"), { opacity: 0, y: 40, scale: 0.97 }, {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" }
    });
  }, []);

  return (
    <section ref={ref} className="py-10 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="cta-inner relative bg-black rounded-3xl py-20 px-8 sm:px-14 flex flex-col items-center text-center overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          {/* Decorative blurs */}
          <div className="absolute top-[-96px] right-[-96px] w-96 h-96 rounded-full bg-white/5 blur-[50px] pointer-events-none" />
          <div className="absolute bottom-[-64px] left-[-64px] w-64 h-64 rounded-full bg-white/5 blur-[40px] pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="font-['Kanit',sans-serif] text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase block mb-6">
              {content.eyebrow}
            </span>
            <h2 className="font-['Kanit',sans-serif] font-bold text-[clamp(2rem,5vw,3.2rem)] leading-[1.15] text-white mb-4">
              {content.heading}
            </h2>
            <p className="font-['Kanit',sans-serif] font-light text-white/55 text-lg mb-10 leading-relaxed">
              {content.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="font-['Kanit',sans-serif] font-bold text-black bg-white px-10 py-4 rounded-full text-base hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {content.primary}
              </button>
              <button className="font-['Kanit',sans-serif] font-bold text-white px-10 py-4 rounded-full text-base border-2 border-white/20 hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5">
                {content.secondary}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ language }: { language: Language }) {
  const ref = useRef<HTMLElement>(null);
  const content = translations[language].footer;

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { opacity: 0 }, {
      opacity: 1, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 90%" }
    });
  }, []);

  return (
    <footer ref={ref} className="bg-[#f6f6f6] pt-14 pb-10 px-5 border-t border-black/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10">
          {content.links.map(link => (
            <a key={link} href="#" className="font-['Kanit',sans-serif] text-[#3c4043] text-base hover:text-black transition-colors">
              {link}
            </a>
          ))}
        </div>
        <div className="mb-10 text-center">
          <p className="mx-auto max-w-2xl font-['Kanit',sans-serif] font-bold text-[clamp(1.75rem,5vw,3rem)] text-transparent select-none"
            style={{ WebkitTextStroke: '1px rgba(0,0,0,0.08)' }}>
            Agile Collaborative AI
          </p>
        </div>
        <div className="border-t border-black/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Kanit',sans-serif] text-sm text-[rgba(60,64,67,0.6)]">
            {content.copyright}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-black shadow-[0_0_8px_0_rgba(0,0,0,0.1)]" />
            <span className="font-['Kanit',sans-serif] text-sm text-[rgba(60,64,67,0.6)]">{content.status}</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>("de");

  return (
    <div className="font-['Kanit',sans-serif] bg-white min-h-screen">
      <NavBar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <TrustedPartners language={language} />
      <TheProblem language={language} />
      <TheSolution language={language} />
      <Testimonial language={language} />
      <FinalCTA language={language} />
      <Footer language={language} />
    </div>
  );
}
