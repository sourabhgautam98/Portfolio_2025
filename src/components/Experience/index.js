import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "WePitch",
    role: "UI/UX Developer Intern",
    period: "July 2024 – Oct 2024",
    location: "Onsite",
    skills: [
      "React",
      "HTML",
      "CSS",
      "UI/UX Design",
      "Figma",
      "Responsive Design",
    ],
    description:
      "Focused 75% on UI/UX design, including user research, wireframing, and prototyping, and 25% on frontend development using React to implement intuitive interfaces.",
    achievements: [
      "Designed user-centric interfaces for Sorting My College using Figma, focusing on clarity and ease of navigation.",
      "Developed responsive React components for the website, ensuring consistency across devices.",
      "Implemented filtering and functionalities for colleges (e.g., by location, courses, fees).",
      "Collaborated with developers to align designs with front-end implementation, ensuring pixel-perfect UI consistency.",
      "Created wireframes and high-fidelity UI designs in Figma for Rush App, focusing on intuitive workflows and visual consistency.",
    ],
    accent: "from-violet-500 to-blue-500",
    accentGlow: "rgba(139, 92, 246, 0.15)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const achievementVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Experience() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <section className="relative max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 mb-6 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm font-medium text-gray-400 tracking-widest uppercase">
            Career Path
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey building real-world products and collaborating with teams.
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-500/50" />
            <div className="w-2 h-2 rounded-full bg-violet-500/60" />
            <div className="w-24 h-px bg-gradient-to-r from-violet-500/50 to-blue-500/50" />
            <div className="w-2 h-2 rounded-full bg-blue-500/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-blue-500/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-16 md:pl-0 mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 z-10">
                <div className="relative">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/30" />
                  <div className="absolute inset-0 w-5 h-5 rounded-full bg-violet-500 animate-ping opacity-30" />
                </div>
              </div>

              {/* Card */}
              <div className="group relative md:w-[calc(50%-40px)] md:ml-auto">
                {/* Glow */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{ background: exp.accentGlow }}
                />

                <div className="relative bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 group-hover:border-white/[0.12] group-hover:bg-white/[0.05]">
                  {/* Header info */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-violet-400" />
                        <span
                          className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`}
                        >
                          {exp.company}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white">
                        {exp.role}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                      <span className="flex items-center gap-1.5 text-sm text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                      Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          custom={idx}
                          variants={tagVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="px-3 py-1.5 bg-white/[0.06] border border-white/[0.08] text-gray-300 rounded-lg text-xs font-medium hover:bg-white/[0.12] hover:text-white hover:border-white/[0.2] transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          custom={idx}
                          variants={achievementVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
