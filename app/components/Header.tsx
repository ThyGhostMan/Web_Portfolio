export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/70 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/60">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="text-lg font-bold">Future Programmer</a>
        <nav className="flex gap-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
