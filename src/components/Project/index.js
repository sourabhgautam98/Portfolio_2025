import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "GitHub Codebase Chat",
    description:
      "Built an AI-powered codebase chat system that enables developers to ask natural language questions about GitHub repositories and receive accurate, context-aware answers. ",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Mongoose",
      "LangChain",
      "Google Gemini API",
      "Pinecone",
    ],
    image: "/assets/github.png",
    type: "AI Fullstack App",
    projectUrl: "https://git-codebase-chats-frontend.vercel.app/",
    accent: "from-violet-600 to-blue-500",
    accentGlow: "rgba(139, 92, 246, 0.3)",
  },
  {
    id: 2,
    title: "Truematch",
    description:
      "A Tinder-like matchmaking app with a swipe feed, user profiles, connection & request system. Implements JWT-based auth for login/signup and secure connection requests.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Mongoose",
    ],
    image: "/assets/truematch.png",
    type: "Fullstack App",
    projectUrl: "https://truematch-web.vercel.app/",
    accent: "from-rose-500 to-pink-500",
    accentGlow: "rgba(244, 63, 94, 0.3)",
  },
  {
    id: 3,
    title: "Phone Mart Website",
    description:
      "Mobile e-commerce platform with user panel for browsing products, viewing details, and purchasing phones. Built admin dashboard with product management and order tracking.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Supabase",
    ],
    image: "/assets/phone-mart.png",
    type: "Fullstack Website",
    projectUrl: "https://ecommerce-frontend-three-dusky.vercel.app",
    accent: "from-emerald-500 to-teal-500",
    accentGlow: "rgba(16, 185, 129, 0.3)",
  },
  {
    id: 4,
    title: "Ai Tools",
    description:
      "AI tools based on common functionalities: text-to-speech, text-to-image, and background remover.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React-Bootstrap",
      "MUI",
      "API Integration",
      "LLM Models",
    ],
    image: "/assets/Ai-tools.png",
    type: "Website",
    projectUrl: "https://ai--tools.vercel.app/",
    accent: "from-amber-500 to-orange-500",
    accentGlow: "rgba(245, 158, 11, 0.3)",
  },
  {
    id: 5,
    title: "pubg-website",
    description:
      "A fan-made project dedicated to PUBG (PlayerUnknown's Battlegrounds), built using modern web technologies with Vite and React.",
    technologies: ["React.js", "Tailwind", "GSAP"],
    image: "/assets/pubg.png",
    type: "Website",
    projectUrl: "https://pubg-website-hazel.vercel.app/",
    accent: "from-yellow-500 to-lime-500",
    accentGlow: "rgba(234, 179, 8, 0.3)",
  },
  {
    id: 6,
    title: "News Look",
    description:
      "A news website that allows users to read and search for news articles from various sources.",
    technologies: ["React", "CSS", "API Integration"],
    image: "/assets/NewsLook.png",
    type: "Website",
    projectUrl: "https://newslook.vercel.app/",
    accent: "from-cyan-500 to-blue-500",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },
  {
    id: 7,
    title: "Weather App",
    description:
      "A simple and modern weather application where users can view current weather conditions including temperature, humidity, and wind speed for any city.",
    technologies: ["React", "CSS", "API Integration"],
    image: "/assets/weather.png",
    type: "Website",
    projectUrl: "https://weather--view.vercel.app/",
    accent: "from-sky-500 to-indigo-500",
    accentGlow: "rgba(14, 165, 233, 0.3)",
  },
  {
    id: 8,
    title: "Rush-app-Case-Study",
    description:
      "This is a case study of an app which I have designed and you can find on the Play store.",
    technologies: [
      "Figma",
      "UI/UX Design",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Thinking",
    ],
    image: "/assets/rush.png",
    type: "Design",
    projectUrl: "https://www.behance.net/gallery/214947919/Rush-app-Case-Study",
    accent: "from-fuchsia-500 to-purple-500",
    accentGlow: "rgba(217, 70, 239, 0.3)",
  },
  {
    id: 9,
    title: "SMC-APP-Case-Study",
    description:
      "This is a case study of an app which I have designed and you can find on the Play store.",
    technologies: [
      "Figma",
      "UI/UX Design",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Thinking",
    ],
    image: "/assets/smc.png",
    type: "Design",
    projectUrl:
      "https://www.behance.net/gallery/211299697/SMC-APP-Case-Study",
    accent: "from-pink-500 to-rose-500",
    accentGlow: "rgba(236, 72, 153, 0.3)",
  },
];

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.05, rotate: -1, transition: { duration: 0.4, ease: "easeOut" } },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

/* ─── Project Card ─── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      {/* Glow behind the card */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{ background: project.accentGlow }}
      />

      <div className="relative bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-white/[0.12] group-hover:bg-white/[0.05]">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:direction-rtl"
            }`}
        >
          {/* ─── Image Side ─── */}
          <motion.div
            className={`relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-[360px] ${!isEven ? "lg:order-2" : ""
              }`}
            initial="rest"
            animate={hovered ? "hover" : "rest"}
          >
            <motion.div variants={imageVariants} className="w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
              />
            </motion.div>

            {/* Gradient overlay on image */}
            <div
              className={`absolute inset-0 bg-gradient-to-${isEven ? "r" : "l"
                } from-transparent via-transparent to-black/60 hidden lg:block`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

            {/* Hover overlay with View button */}
            <motion.div
              variants={overlayVariants}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
            >
              <a
                href={project.projectUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 rounded-full bg-gradient-to-r ${project.accent} text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                View Live →
              </a>
            </motion.div>

            {/* Type badge */}
            <div className="absolute top-4 left-4 z-10">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${project.accent} text-white shadow-lg`}
              >
                {project.type}
              </span>
            </div>
          </motion.div>

          {/* ─── Content Side ─── */}
          <div
            className={`p-8 lg:p-10 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""
              }`}
          >
            {/* Number */}
            <span
              className={`text-7xl font-black bg-gradient-to-br ${project.accent} bg-clip-text text-transparent opacity-30 leading-none mb-4 select-none`}
            >
              {(index + 1).toString().padStart(2, "0")}
            </span>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500"
              style={hovered ? {
                backgroundImage: `linear-gradient(to right, white, var(--tw-gradient-stops, #a78bfa))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              } : {}}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6 text-base lg:text-lg">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="px-3 py-1.5 bg-white/[0.06] border border-white/[0.08] text-gray-300 rounded-lg text-xs font-medium hover:bg-white/[0.12] hover:text-white hover:border-white/[0.2] transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* CTA Button (visible on mobile/always) */}
            <a
              href={project.projectUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r text-white font-semibold transition-all duration-300 hover:shadow-lg w-fit"
              style={{
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-from, #8b5cf6), var(--tw-gradient-to, #3b82f6))`,
              }}
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Projects Page ─── */
export default function ProjectsPage() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* ─── Background Effects ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-5 py-2 mb-6 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm font-medium text-gray-400 tracking-widest uppercase"
          >
            Selected Work
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A showcase of my work — from AI-powered applications to beautiful
            design case studies.
          </p>

          {/* Decorative line */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-500/50" />
            <div className="w-2 h-2 rounded-full bg-violet-500/60" />
            <div className="w-24 h-px bg-gradient-to-r from-violet-500/50 to-blue-500/50" />
            <div className="w-2 h-2 rounded-full bg-blue-500/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
        </motion.div>

        {/* ─── Project Cards ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12 lg:gap-16"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}