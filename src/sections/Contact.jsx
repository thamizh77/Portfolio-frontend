import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const API_BASE_URL =import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:4000";




const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await axios.post(`${API_BASE_URL}/api/contact`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("✅ Contact response:", res.data);

      if (res.data?.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(res.data?.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("❌ Contact form error:", err);

      setStatus("error");
      setErrorMsg(
        err.response?.data?.message ||
          err.message ||
          "Server error. Please check backend / network."
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 ">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10">
        {/* LEFT: Info */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let&apos;s build something
          </h2>
          <p className="text-slate-400 text-sm md:text-base mb-6">
            Have an idea, internship opportunity or want to collaborate on a
            project? Drop a message and I&apos;ll get back to you as soon as I
            can.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex gap-3 mt-6">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/thamizh221/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-200 
    hover:border-cyan-400 hover:text-cyan-400 transition text-sm"
  >
    <FaLinkedin size={18} />
    LinkedIn
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/thamizh77"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-200 
    hover:border-cyan-400 hover:text-cyan-400 transition text-sm"
  >
    <FaGithub size={18} />
    GitHub
  </a>
</div>

            <div>
              <span className="text-slate-400">Email</span>
              <p className="text-cyan-300">visheshk@gmail.com</p>
            </div>
            <div>
  <span className="text-slate-400">Mobile</span>
  <p className="text-cyan-300">+91 9566196818</p>
</div>

            <div>
              <span className="text-slate-400">Location</span>
              <p className="text-slate-200">Chennai</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-lg shadow-slate-950/60"
        >
          <h3 className="text-xl font-semibold mb-4">Send a message</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              required
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              required
            />

            <textarea
              rows="4"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="Tell me about your idea or question..."
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 py-2.5 text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-3 text-green-400 text-sm">
              Message sent successfully
            </p>
          )}

          {status === "error" && (
            <p className="mt-3 text-red-400 text-sm">
              Failed to send: {errorMsg}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
