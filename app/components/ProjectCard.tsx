interface ProjectProps {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectProps) {
  return (
    <article className="rounded-lg border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      {tech && (
        <p className="mt-3 text-xs text-zinc-500">Tech: {tech.join(' · ')}</p>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-foreground hover:underline"
        >
          View project →
        </a>
      )}
    </article>
  );
}
