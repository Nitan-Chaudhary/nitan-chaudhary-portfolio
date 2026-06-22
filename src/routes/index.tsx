import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Phone,
  ArrowUp,
  ExternalLink,
  Award,
  GraduationCap,
  Code2,
  BarChart3,
  Brain,
  Globe,
  Sparkles,
  MapPin,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImg from "@/assets/nitan-hero.jpg";
import projectAqi from "@/assets/project-aqi.jpg";
import projectSalary from "@/assets/project-salary.jpg";
import projectCoffee from "@/assets/project-coffee.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nitan Chaudhary — Data Scientist" },
      {
        name: "description",
        content:
          "Portfolio of Nitan Chaudhary — Data Scientist and Data Analyst transforming data into actionable insights.",
      },
      { property: "og:title", content: "Nitan Chaudhary — Data Scientist" },
      {
        property: "og:description",
        content:
          "Portfolio showcasing machine learning and data analytics projects by Nitan Chaudhary.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    icon: Brain,
    title: "Data Science",
    skills: [
      { name: "Pandas / NumPy", level: 90 },
      { name: "Scikit-Learn", level: 85 },
      { name: "Machine Learning", level: 82 },
    ],
  },
  {
    icon: BarChart3,
    title: "Visualization",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Excel", level: 90 },
      { name: "Matplotlib / Seaborn", level: 85 },
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "Streamlit", level: 88 },
    ],
  },
];

const PROJECTS = [
  {
    title: "AQI Status Prediction System",
    category: "Machine Learning",
    image: projectAqi,
    description:
      "Predicts Air Quality Index status using a Random Forest model with an interactive Streamlit dashboard for real-time monitoring.",
    tech: ["Python", "Random Forest", "Streamlit", "Pandas", "Scikit-Learn"],
    features: ["AQI Prediction", "Interactive Dashboard", "Data Visualization"],
    link: "#",
  },
  {
    title: "Employee Salary Analysis",
    category: "Data Analytics",
    image: projectSalary,
    description:
      "End-to-end exploratory data analysis and visualization of employee compensation trends across departments and experience levels.",
    tech: ["Python", "Pandas", "Power BI"],
    features: ["EDA", "Trend Analysis", "Insights Report"],
    link: "#",
  },
];

const CERTIFICATIONS = [
  { title: "Diploma In Computer engineering", org: "Dr. B.R. Ambedkar Govt. Polytechnic Ambota" },
  { title: "Data Science Internship", org: "Sensation Software Solutions Pvt. Ltd." },
  { title: "Python Training", org: "Skysys Engineering" },
  { title: "Frontend Development Training", org: "Apptechies" },
];

const EDUCATION = [
  {
    year: "2023 — 2026",
    title: "Bachelor of Computer Science & Engineering (B.Tech)",
    org: "Sant Baba Bhag Singh University, Jalandhar",
    detail: "",
  },
  {
    year: "2020 — 2023",
    title: "Diploma in Computer Engineering",
    org: "Dr. B.R. Ambedkar Government Polytechnic Ambota, Himachal Pradesh",
    detail: "",
  },
];

const STATS = [
  { value: 15, suffix: "+", label: "Projects" },
  { value: 4, suffix: "", label: "Certifications" },
  { value: 2, suffix: "+", label: "Years Learning" },
  { value: 20, suffix: "+", label: "Tools & Tech" },
];

function Index() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass card-shadow" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
              N
            </span>
            <span className="text-gradient text-lg">Nitan.</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:block">
            <Button size="sm" className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-90">
              Hire Me
            </Button>
          </a>
          <button
            className="md:hidden text-foreground"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground ml-auto" />
            </div>
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 space-y-2 animate-fade-up">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-60 animate-pulse-glow"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div
        className="pointer-events-none absolute top-20 right-0 h-[420px] w-[420px] rounded-full opacity-50 animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.15 200 / 0.35), transparent 70%)",
          animationDelay: "1s",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Available for opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Nitan Chaudhary</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Data Scientist <span className="text-accent">|</span> Data Analyst
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            Passionate about transforming data into meaningful insights through
            Machine Learning, Data Analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-90 glow-shadow"
              asChild
            >
              <a href="#resume">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-border hover:bg-secondary"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <Counter key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
            <div
              className="absolute -inset-6 rounded-full opacity-70 blur-2xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-primary/40 card-shadow animate-float">
              <img
                src={heroImg}
                alt="Nitan Chaudhary"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 glass rounded-2xl px-4 py-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>Open to work</span>
              </div>
            </div>
            <div className="absolute -top-2 -left-2 glass rounded-2xl px-3 py-2 text-xs">
              <Brain className="inline h-3.5 w-3.5 mr-1 text-accent" /> Data Science
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(p * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <div className="glass rounded-2xl p-4 text-center">
      <div className="text-2xl md:text-3xl font-bold text-gradient">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="reveal text-center max-w-2xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {tag}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader tag="About Me" title="Turning data into decisions" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass rounded-3xl p-7 md:col-span-2">

            <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm an aspiring Data Scientist with hands-on
              experience in Python, SQL, and modern data tooling. I design
              end-to-end analytical workflows — from collection and cleaning to
              modeling and storytelling with Power BI and Tableau. I love
              uncovering patterns that change how teams make decisions.
            </p>
            <h3 className="text-xl font-semibold mt-7 mb-3">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed">
              To contribute to data-driven organizations by building reliable
              machine learning systems, intuitive dashboards, and AI products
              that create measurable business impact.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Brain, label: "Machine Learning" },
              { icon: BarChart3, label: "Analytics & BI" },
              { icon: Code2, label: "Python • SQL" },
              { icon: Globe, label: "Streamlit • Web" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="font-medium">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader tag="Skills" title="Toolbox & expertise" />
        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="glass rounded-3xl p-7 card-shadow hover:-translate-y-1 transition">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span>{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-brand transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const cats = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader tag="Projects" title="Selected work" sub="A handful of recent data, ML, and BI projects." />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                filter === c
                  ? "bg-gradient-brand text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <article
              key={p.title}
              className="group glass rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-xs">
                  {p.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary/70 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  <Github className="h-4 w-4" /> View on GitHub
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader tag="Certifications" title="Continuous learning" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.title}
              className="glass rounded-3xl p-6 card-shadow hover:-translate-y-1 transition"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground mb-4">
                <Award className="h-6 w-6" />
              </span>
              <h3 className="font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader tag="Education" title="Academic journey" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-8">
            {EDUCATION.map((e, i) => (
              <div
                key={e.title}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
                  } md:[direction:ltr]`}
                >
                  <div className="glass rounded-2xl p-5 card-shadow">
                    <div className="text-xs text-accent">{e.year}</div>
                    <h3 className="mt-1 font-semibold flex items-center gap-2 md:justify-end">
                      <GraduationCap className="h-4 w-4 text-accent" />
                      {e.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{e.org}</p>
                    <p className="text-sm text-muted-foreground mt-2">{e.detail}</p>
                  </div>
                </div>
                <div
                  className="absolute left-4 md:left-1/2 top-5 h-4 w-4 rounded-full bg-gradient-brand -translate-x-1/2 ring-4 ring-background"
                />
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="glass rounded-3xl p-8 md:p-12 card-shadow flex flex-col md:flex-row items-center gap-8">
          <div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-brand text-primary-foreground glow-shadow">
            <FileText className="h-10 w-10" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold">My Resume</h3>
            <p className="mt-2 text-muted-foreground">
              Get a detailed overview of my experience, skills, and projects.
            </p>
          </div>
          <Button
            size="lg"
            className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-90 glow-shadow"
          >
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader tag="Contact" title="Let's work together" sub="Got a project, role, or just want to chat data?" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "nitan@example.com", href: "mailto:nitan@example.com" },
              { icon: Phone, label: "Phone", value: "+977 98XXXXXXXX", href: "tel:+977" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/nitan", href: "#" },
              { icon: Github, label: "GitHub", value: "github.com/nitan", href: "#" },
              { icon: MapPin, label: "Location", value: "Available remote / on-site" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href ?? "#"}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-0.5 transition block"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
              (e.target as HTMLFormElement).reset();
            }}
            className="glass rounded-3xl p-7 card-shadow space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your name" required className="bg-secondary/40 border-border" />
              <Input type="email" placeholder="Email address" required className="bg-secondary/40 border-border" />
            </div>
            <Input placeholder="Subject" className="bg-secondary/40 border-border" />
            <Textarea
              placeholder="Your message"
              rows={6}
              required
              className="bg-secondary/40 border-border"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-gradient-brand text-primary-foreground hover:opacity-90 glow-shadow"
            >
              {sent ? "Message Sent ✓" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nitan Chaudhary. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          {[Github, Linkedin, Mail].map((I, i) => (
            <a
              key={i}
              href="#"
              className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-gradient-brand hover:text-primary-foreground transition"
              aria-label="Social link"
            >
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          Designed by <span className="text-gradient font-semibold">Nitan Chaudhary</span>
        </div>
      </div>
    </footer>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground glow-shadow hover:scale-110 transition"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
