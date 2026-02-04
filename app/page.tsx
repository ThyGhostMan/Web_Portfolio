import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import FadeIn from "./components/FadeIn";
import Contact from "./components/Contact";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Calculators Website",
    description: "A simple website where I created a collection of calculators that calculates Converson, Income tax, Factorial, and simple Payroll",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://deguzmancalculators.vercel.app/",
    github: "https://github.com/ThyGhostMan/De-Guzman_ITC_WEB",
  },
  {
    title: "NSTP Infomercial",
    description: "A video infomercial I edited for the NSTP program at ADDU.",
    tech: ["Capcut"],
    link: "https://drive.google.com/file/d/1-j0ch5aylA08VWbtr3SmggPLkPqNNNQO/view?usp=sharing",
  },
  {
    title: "Quiz Game",
    description: "A simple and fun quiz game heavily inspired to the website Quizizz.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://deguzman-quizgame.vercel.app/",
    github: "https://github.com/ThyGhostMan/De-Guzman_Quiz-Game",
  },
  {
    title: "The Two lives of Christmas",
    description: "A short film project I edited for our 21st century literature subject.",
    tech: ["Capcut"],
    link: "https://drive.google.com/file/d/1PAyzcFNI-N3L8_KpwS_OgS0i6ClRib6y/view?usp=sharing",
  },
];

const skills = [
  "HTML", "CSS", "JavaScript", "Git", "Python", "Capcut"
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
            <div className="relative h-36 w-36 shrink-0 self-center sm:self-auto overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-zinc-800">
              <Image 
                src="/profile.jpg" 
                alt="Profile photo" 
                width={144} 
                height={144} 
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, I&apos;m Daniel. <br className="hidden sm:block" />
                <span className="text-blue-600 dark:text-blue-400">Programmer & Video Editor.</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
                I&apos;m a student of ADDU eager learn and create. Whether it&apos;s developing web applications or crafting compelling video content, I love bringing ideas to life.
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
                I&apos;m a passionate developer with video editing experience. I am currently a CS student learning more and more about programming and also offering my editing skills on projects.
              </p>
              <p>
                I specialize in creating web applications and editing video content. I&apos;m constantly learning new technologies and techniques to improve my craft in both fields.
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
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
