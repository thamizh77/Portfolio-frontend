import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  // scroll effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("Home")}
          className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Thamizh D<span className="text-slate-200"></span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => scrollToSection(link)}
              className="cursor-pointer text-slate-300 hover:text-cyan-400 transition relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all"></span>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Hire Me button */}
          <button
            onClick={() => scrollToSection("Contact")}
            className="hidden md:inline-flex px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition"
          >
            Hire Me
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-slate-700 text-slate-100"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-t border-slate-800">
          <ul className="flex flex-col px-4 pb-4 pt-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li
                key={link}
                onClick={() => scrollToSection(link)}
                className="py-2 text-slate-200 border-b border-slate-800/50 last:border-b-0 cursor-pointer hover:text-cyan-400"
              >
                {link}
              </li>
            ))}
            <button
              onClick={() => scrollToSection("Contact")}
              className="mt-2 w-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-2 text-sm font-semibold"
            >
              Hire Me
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
