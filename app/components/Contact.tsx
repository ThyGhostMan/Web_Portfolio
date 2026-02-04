"use client";

import { Mail, Github, Facebook } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const email = "daadeguzman@addu.edu.ph";
  const github = "https://github.com/ThyGhostMan";
  const facebook = "https://www.facebook.com/danieladrian.deguzman";

  return (
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
          
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Mail size={16} /> Email
            </a>

            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <Github size={16} /> GitHub
            </a>

            <a 
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1877F2]/90"
            >
              <Facebook size={16} /> Facebook
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
