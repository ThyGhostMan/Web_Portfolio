"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({ title, description, tech, link, github }: ProjectProps) {
  return (
    <motion.article 
      whileHover={{ y: -5 }}
      className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <div>
        <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                <Folder size={20} />
            </div>
            <div className="flex gap-2">
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" aria-label="View Source Code">
                        <Github size={20} />
                    </a>
                )}
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" aria-label="View Project">
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>
        </div>
        
        <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>

      {tech && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
