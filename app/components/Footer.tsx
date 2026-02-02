export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Future Programmer</span>
        <nav className="flex gap-4">
          <a href="#" className="hover:underline">GitHub</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
