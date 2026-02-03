import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import FadeIn from "./components/FadeIn";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

const projects = [
  {
    title: "Weather App",
    description: "A minimal weather app that fetches data from a public API and displays forecasts.",
    tech: ["React", "OpenWeather API", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Todo CLI",
    description: "A command-line todo manager for practicing Node and file I/O.",
    tech: ["Node.js", "TypeScript"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Site",
    description: "This site — built to showcase projects and provide contact details.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
];

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git", "PostgreSQL", "Figma"
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]"></div>
      
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-24">
        {/* Hero */}
        <FadeIn>
          <section className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-zinc-800">
              <Image 
                src="/profile.jpg" 
                alt="Profile photo" 
                width={128} 
                height={128} 
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, I&apos;m Daniel. <br className="hidden sm:block" />
                <span className="text-blue-600 dark:text-blue-400">Future Programmer.</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
                I build things to learn and to help others. I enjoy creating small projects, learning new tech, and improving my craft every day.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Get in touch <ArrowRight size={16} />
                </a>
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  See projects
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* About */}
        <FadeIn delay={0.2}>
          <section id="about" className="mt-24 scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight">About</h2>
            <div className="mt-6 grid gap-6 text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
              <p>
                I&apos;m currently learning web development and practicing full-stack concepts. My journey started with simple HTML/CSS pages, and now I&apos;m building interactive applications with React and Next.js.
              </p>
              <p>
                I focus on building accessible, maintainable apps with a special interest in developer experience and clean UI. When I&apos;m not coding, I&apos;m likely reading about new tech or contributing to open source.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Skills */}
        <FadeIn delay={0.3}>
          <section className="mt-12">
            <h3 className="text-lg font-semibold">Technologies I work with</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div 
                  key={skill}
                  className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Projects */}
        <section id="projects" className="mt-24 scroll-mt-24">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Here are some of the projects I&apos;ve worked on recently.</p>
          </FadeIn>
          
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((p, index) => (
              <FadeIn key={p.title} delay={index * 0.1}>
                <ProjectCard {...p} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact */}
        <FadeIn delay={0.2}>
          <section id="contact" className="mt-24 mb-12 scroll-mt-24 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Mail size={24} />
              </div>
              <h2 className="mt-4 text-2xl font-bold">Get in touch</h2>
              <p className="mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
                Want to collaborate, ask a question, or just say hi? I&apos;d love to hear from you.
              </p>
              <a 
                href="mailto:hello@example.com" 
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Say Hello
              </a>
            </div>
          </section>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
