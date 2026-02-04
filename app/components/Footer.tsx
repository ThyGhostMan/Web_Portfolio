import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} Daniel de Guzman. All rights reserved.</span>
        <nav className="flex gap-6">
          <a href="https://github.com/ThyGhostMan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Github size={18} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="mailto:daadeguzman@addu.edu.ph" title="daadeguzman@addu.edu.ph" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Mail size={18} />
            <span className="sr-only">Email</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
