import { CodeXml } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/70 backdrop-blur-md dark:border-zinc-800 dark:bg-black/60">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-lg font-bold hover:text-blue-600 transition-colors">
          <CodeXml className="text-blue-600" />
          <span>Daniel de Guzman</span>
        </a>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#about" className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
