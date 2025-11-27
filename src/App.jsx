import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-50 dark:text-slate-900 transition-colors duration-300">
      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
