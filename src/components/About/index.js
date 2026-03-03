import { motion } from "framer-motion";
import {
  FaReact, FaFigma, FaNode, FaGithub,
} from "react-icons/fa";
import {
  SiAdobexd, SiNextdotjs, SiExpress, SiMongodb,
  SiPostman, SiVercel, SiRender, SiLangchain, SiN8N,
} from "react-icons/si";
import { GiPineTree } from "react-icons/gi";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsDatabaseFill } from "react-icons/bs";

const allSkills = [
  { icon: SiLangchain, name: "LangChain", color: "#4ade80", tag: "genai" },
  { icon: GiPineTree, name: "Pinecone", color: "#c084fc", tag: "genai" },
  { icon: BsDatabaseFill, name: "Vector DB", color: "#f472b6", tag: "genai" },
  { icon: FaReact, name: "React", color: "#3b82f6", tag: "frontend" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff", tag: "frontend" },
  { icon: RiTailwindCssFill, name: "Tailwind", color: "#22d3ee", tag: "frontend" },
  { icon: FaNode, name: "Node.js", color: "#22c55e", tag: "backend" },
  { icon: SiExpress, name: "Express", color: "#d1d5db", tag: "backend" },
  { icon: SiMongodb, name: "MongoDB", color: "#16a34a", tag: "backend" },
  { icon: FaGithub, name: "GitHub", color: "#ffffff", tag: "tools" },
  { icon: SiPostman, name: "Postman", color: "#fb923c", tag: "tools" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff", tag: "tools" },
  { icon: SiRender, name: "Render", color: "#a855f7", tag: "tools" },
  { icon: SiN8N, name: "n8n", color: "#ef4444", tag: "tools" },
  { icon: FaFigma, name: "Figma", color: "#a855f7", tag: "design" },
  { icon: SiAdobexd, name: "Adobe XD", color: "#ec4899", tag: "design" },
];

const terminalStyles = `
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
@keyframes typeIn {
  from { width: 0; }
  to { width: 100%; }
}
`;

const codeLines = [
  { type: "comment", text: "// sourabh-gautam.js" },
  { type: "blank", text: "" },
  { type: "keyword", prefix: "const ", name: "developer", equals: " = {" },
  { type: "prop", key: "name", value: '"Sourabh Gautam"' },
  { type: "prop", key: "role", value: '"Full-Stack AI Developer"' },
  { type: "prop", key: "stack", value: '"MERN + GenAI"' },
  { type: "prop", key: "focus", value: '["AI Chatbots", "RAG Systems", "LLM Apps"]' },
  { type: "prop", key: "passion", value: '"Building intelligent web apps"' },
  { type: "close", text: "};" },
];

const About = () => {
  return (
    <>
      <style>{terminalStyles}</style>
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-600/[0.05] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-emerald-600/[0.04] rounded-full blur-3xl" />
        </div>

        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-violet-400 mb-6"
          >
            About Me
          </motion.p>

          {/* ─── Terminal Window ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-10"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/10 to-emerald-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0d1117] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                {/* Title bar */}
                <div className="flex items-center justify-between px-5 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">sourabh-gautam.js</span>
                  <div className="w-16" />
                </div>

                {/* Code content */}
                <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                      className="flex"
                    >
                      <span className="w-8 text-right mr-6 text-gray-600 select-none text-xs md:text-sm">
                        {i + 1}
                      </span>
                      {line.type === "comment" && (
                        <span className="text-gray-500 italic">{line.text}</span>
                      )}
                      {line.type === "blank" && <span>&nbsp;</span>}
                      {line.type === "keyword" && (
                        <span>
                          <span className="text-purple-400">{line.prefix}</span>
                          <span className="text-blue-300">{line.name}</span>
                          <span className="text-white">{line.equals}</span>
                        </span>
                      )}
                      {line.type === "prop" && (
                        <span className="pl-8">
                          <span className="text-cyan-300">{line.key}</span>
                          <span className="text-white">: </span>
                          <span className="text-amber-300">{line.value}</span>
                          <span className="text-white">,</span>
                        </span>
                      )}
                      {line.type === "close" && (
                        <span className="text-white">{line.text}</span>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="flex mt-1"
                  >
                    <span className="w-8 mr-6" />
                    <span
                      className="inline-block w-2.5 h-5 bg-violet-400"
                      style={{ animation: "blink 1s step-end infinite" }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Skills as npm packages ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-600/10 to-blue-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0d1117] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                {/* Title bar */}
                <div className="flex items-center justify-between px-5 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">tech-stack</span>
                  <div className="w-16" />
                </div>

                {/* Package install style */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6 font-mono">
                    <span className="text-emerald-400 text-sm">$</span>
                    <span className="text-gray-300 text-sm">npm install my-tech-stack</span>
                    <span
                      className="inline-block w-2 h-4 bg-emerald-400 ml-1"
                      style={{ animation: "blink 1s step-end infinite" }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {allSkills.map((skill, i) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.04, duration: 0.3 }}
                          className="group/chip flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-default"
                        >
                          <Icon
                            className="text-base transition-transform duration-300 group-hover/chip:scale-110"
                            style={{ color: skill.color }}
                          />
                          <span className="text-xs font-mono text-gray-400 group-hover/chip:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default About;