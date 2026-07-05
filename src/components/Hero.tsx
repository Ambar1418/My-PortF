"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Download, Code2, BarChart3 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left relative min-h-[85vh] gap-12 md:gap-8">
      
      {/* Abstract glowing orb behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-neon-blue/20 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Left Content (Text) */}
      <div className="flex-1 flex flex-col items-center md:items-start z-10 w-full">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl font-medium text-neon-cyan mb-2 tracking-wide"
        >
          Hello, I am
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter"
        >
          Ambar <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Gupta</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-[40px] text-xl md:text-3xl font-medium text-gray-300 mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-bold glow-text">
            <Typewriter
              words={[
                "Full Stack Developer",
                "AI Agent & RAG Engineer",
                "ML Engineer",
                "B.Tech CSE (AI & DS)"
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
        >
          Full Stack Developer Intern at Site Guru Pvt. Ltd., building production apps and AI agents — RAG pipelines, LLM integrations (Claude &amp; Groq), and end-to-end deep learning systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="relative group px-10 py-4 rounded-full bg-white text-black font-bold text-base flex items-center justify-center gap-3 overflow-hidden transition-transform active:scale-95 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <Download size={20} className="relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </a>

          <div className="flex items-center gap-4">
            {[
              { icon: FaGithub, href: "https://github.com/Ambar1418" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/ambar-gupta-095347291/" },
              { icon: Code2, href: "https://leetcode.com/u/cqh92hexfD/" },
              { icon: BarChart3, href: "https://codolio.com/profile/Steve" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:border-white/30 transition-all active:scale-90"
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Content (Image) */}
      <div className="flex-1 flex justify-center md:justify-end z-10 w-full relative pt-4 md:pt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-64 md:w-72 lg:w-80"
        >
          {/* Clipped image with rounded-bottom cut shape */}
          <div
            className="w-full overflow-hidden"
            style={{ borderRadius: "0 0 50% 50% / 0 0 35% 35%" }}
          >
            <img
              src="/img/canvas.png"
              alt="Ambar Avatar"
              className="w-full h-auto"
            />
          </div>

          {/* Floating Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-0 right-0 md:-right-4 bg-black rounded-full p-3 border-2 border-[#1a1a1a] shadow-[0_0_30px_rgba(0,243,255,0.5)] z-20"
          >
            <Code2 size={22} className="text-neon-cyan" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
