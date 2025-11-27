import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Peer Project Hub",
    desc: "A MERN stack platform where students can share, explore and collaborate on projects with authentication & filters.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    live: "https://frontend-final-project-lac.vercel.app",
    code: "https://github.com/thamizh77/Frontend_Final-project",
    featured: true,
  },
  {
    title: "Apple web clone",
    desc: "A responsive Apple India UI clone built with React, Tailwind CSS, and Vite, featuring a sleek navbar, hero section, product highlights, and a clean Apple-style minimal design across all devices.",
    tech: ["React", "Tailwind"],
    live: "https://apple-clone-two-chi.vercel.app/",
    code: "https://github.com/thamizh77/apple_clone",
  },
  {
    title: "🌱 GreenDen Website",
    desc: "GreenDen is a modern, eco-themed website built with HTML, Tailwind CSS, and JavaScript. It’s designed with a clean UI and smooth interactivity to showcase sustainable living, green products, or eco-friendly initiatives.",
    tech: ["HTML", "Tailwind", "JavaScript"],
    live: "https://thamizh77.github.io/greenden/",
    code: "https://github.com/thamizh77/greenden",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 text-slate-100 ">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Things I&apos;ve built
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl">
            Here are some projects that reflect my learning path in full stack
            development. I keep improving and adding more real-world work.
          </p>
        </motion.div>

        {/* project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-400/70 transition shadow-lg shadow-slate-950/60 group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10" />

              <div className="relative p-5 flex flex-col h-full">
                {project.featured && (
                  <span className="inline-flex mb-3 w-fit rounded-full bg-cyan-500/10 border border-cyan-500/40 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Featured
                  </span>
                )}

                <h3 className="text-xl font-semibold mb-2 text-slate-50">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 mb-4 flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-[0.16em] rounded-full bg-slate-950/80 border border-slate-700 px-2 py-1 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 hover:text-cyan-200 hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.code !== "#" && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 hover:text-slate-100 hover:underline"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
