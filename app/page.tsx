import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Weather App",
    description: "A minimal weather app that fetches data from a public API and displays forecasts.",
    tech: ["React", "OpenWeather API", "Tailwind"],
    link: "#",
  },
  {
    title: "Todo CLI",
    description: "A command-line todo manager for practicing Node and file I/O.",
    tech: ["Node.js", "TypeScript"],
    link: "#",
  },
  {
    title: "Portfolio Site",
    description: "This site — built to showcase projects and provide contact details.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "#",
  },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Hero */}
        <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
          <div className="h-28 w-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">FP</div>
          <div>
            <h1 className="text-3xl font-semibold">Hi I'm Daniel — I'm a Future Programmer</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-xl">
              I build things to learn and to help others. I enjoy creating small projects, learning new tech, and improving my craft every day. This portfolio highlights some of my practice projects and skills.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#contact" className="rounded-full bg-black/90 text-white px-4 py-2 text-sm">Get in touch</a>
              <a href="#projects" className="rounded-full border border-zinc-200 px-4 py-2 text-sm">See projects</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-12">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            I'm learning web development and practicing full-stack concepts. I focus on building accessible, maintainable apps with a special interest in developer experience and clean UI.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} link={p.link} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Want to collaborate or ask a question? Send an email:</p>
          <a className="mt-4 inline-block rounded-full bg-black/90 text-white px-4 py-2 text-sm" href="mailto:hello@example.com">hello@example.com</a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
