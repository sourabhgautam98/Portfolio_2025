import React from "react";
import { Github, Download, ChevronDown, Linkedin } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Home = () => {
  return (
    <div className="fixed inset-0 bg-black">
      {/* 3-D Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/w-aiDZWhODXvQIbT/scene.splinecode"
          className="w-full h-full"
        />
        {/* Gradient overlay to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-screen flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto w-full text-center mt-16 md:mt-24">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-block px-5 py-2 mb-6 rounded-full bg-white/[0.06] border border-white/[0.1] text-sm font-medium text-gray-300 tracking-widest uppercase backdrop-blur-md">
                Full-Stack AI Developer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Sourabh Gautam
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            >
              Building AI-powered apps with{" "}
              <span className="text-white font-medium">MERN</span> +{" "}
              <span className="text-white font-medium">GenAI</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://www.linkedin.com/in/sourabhgautam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group flex items-center justify-center gap-2 bg-white/[0.06] border border-white/[0.12] backdrop-blur-md text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/11qz8vHmFyXpkqVF94CC6O5uX_0tsRWT2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </button>
              </a>
              <a
                href="https://github.com/sourabhgautam98?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group flex items-center justify-center gap-2 bg-white/[0.06] border border-white/[0.12] backdrop-blur-md text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto">
                  <Github className="w-5 h-5" />
                  GitHub
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;