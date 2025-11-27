import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend & DB",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "REST APIs", icon: "API" },
      { name: "VS Code", icon: "</>" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-slate-100 ">
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
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tech I work with
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl">
            I focus on building full-stack applications with the MERN stack and
            I&apos;m constantly improving my fundamentals in DSA and system
            design.
          </p>
        </motion.div>

        {/* skill cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((block, idx) => (
            <motion.div
              key={block.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 shadow-lg shadow-slate-950/60"
            >
              <h3 className="text-lg font-semibold mb-3 text-slate-50">
                {block.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {block.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-full bg-slate-950/70 border border-slate-800 px-3 py-1.5 text-xs md:text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
                  >
                    <span className="text-sm md:text-base">
                      {typeof item.icon === "string" ? (
                        <span className="font-mono">{item.icon}</span>
                      ) : (
                        item.icon
                      )}
                    </span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
