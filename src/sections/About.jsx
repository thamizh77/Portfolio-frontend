import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-100 ">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
       {/* Left: text */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2">
    About
  </p>
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Who I am as a developer
  </h2>

  <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4">
    I&apos;m <span className="text-cyan-300 font-medium">Thamizh D</span>, a 
    2nd year <span className="text-cyan-300 font-medium">
    Artificial Intelligence &amp; Data Science
    </span> student at SRM VEC. I&apos;m passionate 
    about <span className="text-cyan-300 font-medium">full stack development </span> 
    using the MERN stack.
  </p>

  <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-4">
    I love building smart applications that combine 
    <span className="text-slate-200 font-medium"> web development &amp; artificial intelligence</span>.
    I believe in learning by building — constantly improving my skills and working toward 
    becoming a <span className="text-slate-200 font-medium">
    high-impact software engineer
    </span>.
  </p>

  <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6">
    This portfolio represents my journey as a developer — I&apos;ll keep adding 
    better projects as I grow and get one step closer to my tech career goals.
  </p>

  <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 dark:bg-slate-200/60">
      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-600 mb-1">
        Current Focus
      </p>
      <p className="text-slate-100 dark:text-slate-900">MERN Stack</p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 dark:bg-slate-200/60">
      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-600 mb-1">
        Goal
      </p>
      <p className="text-slate-100 dark:text-slate-900">High-impact Software Engineer</p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 dark:bg-slate-200/60">
      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-600 mb-1">
        Strength
      </p>
      <p className="text-slate-100 dark:text-slate-900">Consistency over talent</p>
    </div>
  </div>
</motion.div>


        {/* Right: small profile / stats card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="relative rounded-3xl bg-slate-900/70 border border-slate-800 p-5 shadow-lg shadow-slate-950/60">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-transparent to-indigo-500/20 blur-2xl -z-10" />

            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
              Snapshot
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Name</span>
                <span className="text-slate-100">Thamizh D</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Role</span>
                <span className="text-slate-100">MERN Stack Learner</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">College</span>
                <span className="text-slate-100 text-right">
                  SRM VEC
                  <br />
                  Artificial Intelligence &amp; Data Science
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location</span>
                <span className="text-slate-100 text-right">
                  Chennai
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-400 italic">
              &quot;Small consistent progress today becomes the version of me
              that reaches well tomorrow.&quot;
            </p>
          </div>

          <div className="rounded-3xl border border-dashed border-cyan-500/40 bg-cyan-500/5 px-4 py-3 text-xs md:text-sm text-cyan-100">
            <p>
              Currently learning after college hours – balancing classes, MERN
              stack, DSA and personal projects. This portfolio will keep
              evolving as I do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
