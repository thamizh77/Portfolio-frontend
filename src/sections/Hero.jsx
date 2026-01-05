import { motion } from "framer-motion";
import profile from "../assets/IO.jpeg"; // your profile image

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center 
      bg-slate-950 text-slate-100 dark:bg-slate-50 dark:text-slate-900 
      transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left text */}
        <div className="space-y-5">
          <motion.p
            className="text-sm font-semibold tracking-[0.25em] text-cyan-400 uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Vishesh K
            </span>
            <br />
            <span className="text-slate-300 dark:text-slate-800 text-2xl md:text-3xl">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-slate-400 dark:text-slate-700 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I build modern web applications using React, Node.js & MongoDB.
            Passionate about merging Full Stack Development & AI to create
            smart real-world solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {/* CV Button */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 
              text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition"
            >
              Get CV
            </a>

            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full border border-slate-700 dark:border-slate-300 
              text-sm font-semibold text-slate-200 dark:text-slate-800 
              hover:border-cyan-400 hover:text-cyan-400 dark:hover:text-cyan-500 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-slate-700 dark:border-slate-300 
              text-sm font-semibold text-slate-200 dark:text-slate-800 
              hover:border-cyan-400 hover:text-cyan-400 dark:hover:text-cyan-500 transition"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </div>

        {/* Right profile image */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute -inset-16 bg-gradient-to-tr 
          from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl" />

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full 
          bg-slate-900 dark:bg-slate-200 border border-slate-700/80 dark:border-slate-300 
          shadow-[0_0_60px_rgba(34,211,238,0.25)] overflow-hidden">
            <img
              src={profile}
              alt="Thamizh"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
