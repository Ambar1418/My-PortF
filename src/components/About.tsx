"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Server, TerminalSquare, Layers, Cpu } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React.js / Vue.js / Frontend", level: 85 },
    { name: "Python / FastAPI / Django", level: 85 },
    { name: "AI Agents, RAG & LLM Integration", level: 80 },
    { name: "Deep Learning / Computer Vision / NLP", level: 75 },
    { name: "REST API Design & Databases (MySQL, Redis)", level: 80 },
    { name: "DSA (300+ problems solved)", level: 75 },
  ];

  const floatingIcons = [
    { icon: BrainCircuit, color: "text-purple-400", delay: 0 },
    { icon: Database, color: "text-blue-400", delay: 0.2 },
    { icon: Server, color: "text-green-400", delay: 0.4 },
    { icon: TerminalSquare, color: "text-yellow-400", delay: 0.6 },
    { icon: Layers, color: "text-cyan-400", delay: 0.8 },
    { icon: Cpu, color: "text-red-400", delay: 1.0 },
  ];

  return (
    <section id="about" className="py-12 relative w-full">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4 mb-4">
          <span className="w-2 h-10 bg-neon-purple rounded-full block shadow-[0_0_15px_rgba(188,19,254,0.5)]"></span>
          About Me
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          I&apos;m Ambar Gupta, a B.Tech CSE (AI &amp; Data Science) student currently interning as a Full Stack Developer at Site Guru Pvt. Ltd., where I build production applications used by real users. I specialize in full stack development, AI agent &amp; RAG engineering, and applied machine learning — turning ideas into deployed, working software rather than just prototypes.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          I&apos;ve designed RAG pipelines and LLM integrations with Claude and Groq, trained deep learning models (including a 95%+ accuracy CNN with attention layers), and shipped multiple full stack apps with FastAPI, Django, React, and Vue. I was selected in my institute&apos;s Top 50 (Super 50), lead the Competitive Programming chapter at GDG SISTec Bhopal — mentoring 50+ students — and have solved 300+ DSA problems across LeetCode and GeeksforGeeks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Core Competencies */}
        <div className="glass p-8 md:p-10 rounded-[32px] border border-white/10 relative overflow-hidden group hover:border-neon-purple/50 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-neon-purple/10 transition-colors" />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8">Core Competencies</h3>
          
          <div className="flex flex-col gap-6 relative z-10">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm md:text-base font-bold text-gray-300 mb-2">
                  <span>{skill.name}</span>
                  <span className="text-neon-cyan">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Tech Stack & Tools</h3>
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {floatingIcons.map((item, idx) => (
                <motion.div
                  key={idx}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl glass flex items-center justify-center border border-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all cursor-pointer group"
                >
                  <item.icon size={32} className={`${item.color} group-hover:scale-110 transition-transform`} />
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {["React.js", "Vue.js", "Next.js", "Python", "FastAPI", "Django", "Node.js", "MySQL", "Redis", "FAISS", "LangChain", "LangGraph", "CrewAI", "Claude API", "Groq AI", "RAG", "n8n", "TensorFlow", "Keras", "Scikit-Learn", "Computer Vision", "Docker", "Git & GitHub Actions"].map((tech, idx) => (
              <span key={idx} className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/50 rounded-full transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
