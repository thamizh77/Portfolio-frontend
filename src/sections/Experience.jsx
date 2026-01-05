const Experience = () => {
  const timeline = [
    {
      year: "2024 - 2028",
      title: "B.Tech ECE",
      place: "SRM IST",
      desc: "Building strong foundations in programming, data structures, AI and software engineering.",
    },
    {
      year: "2025-Present",
      title: "MERN Stack Training",
      place: "Error Makes Clever Academy",
      desc: "Learning full-stack development with React, Node.js, Express and MongoDB through hands-on projects.",
    },
    {
      year: "Future",
      title: "Software Developer",
      place: "Goal",
      desc: "Aiming to become a world-class engineer, combining AI + Full Stack to solve real-world problems.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 text-slate-100 ">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2">Experience & Journey</h2>
        <p className="text-slate-400 text-sm md:text-base mb-8">
          A quick look at my learning path and goals.
        </p>

        <div className="relative border-l border-slate-700 pl-6 space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative">
              


              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                {item.year}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                {item.title}
              </h3>
              <p className="text-sm text-cyan-300 mb-1">{item.place}</p>
              <p className="text-sm text-slate-400 max-w-2xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
