"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Server, TerminalSquare, Layers, Cpu } from "lucide-react";

export default function About() {
  const skills = [
    { name: "HTML/CSS", level: 80 },
    { name: "Python", level: 75 },
    { name: "FastAPI / Django", level: 75 },
    { name: "C++", level: 65 },
    { name: "JavaScript", level: 60 },
    { name: "C / Java", level: 50 },
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
          Hi, I'm Ambar, a passionate B.Tech CSE (AI & DS) student with a keen interest in artificial intelligence and data science. I'm dedicated to learning and applying cutting-edge technologies to solve real-world problems.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Outside of academics, I enjoy exploring new technologies, working on personal projects, and continuously expanding my knowledge in the field of computer science. I'm proficient in various programming languages and frameworks, with a strong foundation in both frontend and backend development.
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
            {["React", "Next.js", "Python", "FastAPI", "Node.js", "MongoDB", "PostgreSQL", "LangChain", "OpenAI", "RAG", "TensorFlow", "PyTorch", "Docker", "AWS"].map((tech, idx) => (
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
