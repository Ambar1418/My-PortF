"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    id: "vk-bot",
    title: "VK Bot – AI Cricket Chatbot",
    desc: "Smart, interactive cricket chatbot with match insights and conversational responses.",
    fullDesc: "An AI-powered chatbot designed for cricket enthusiasts. It provides real-time match insights, player statistics, and engages in conversational queries using modern NLP techniques.",
    tech: ["AI", "Chatbot", "NLP"],
    link: "https://crickect-bot-newone-site.onrender.com/",
    image: "/img/vkbot.jpg",
    color: "from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
  },
  {
    id: "hair-detector",
    title: "Hair & Scalp Detector",
    desc: "AI-powered Analysis Tool for detecting hair and scalp diseases.",
    fullDesc: "A computer vision model that analyzes scalp images to detect potential hair diseases. Built to assist in dermatological assessments with high accuracy.",
    tech: ["Python", "TensorFlow", "Computer Vision"],
    link: "https://hair-scalp-disease-detector.onrender.com/",
    image: "/img/hair.png",
    color: "from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20",
    border: "border-purple-500/20 hover:border-purple-500/50",
    shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
  },
  {
    id: "film-fusion",
    title: "Film-Fusion",
    desc: "Discover movies, ratings, and film details in one place.",
    fullDesc: "A comprehensive movie discovery platform where users can search for films, view ratings, and get detailed synopses using external movie databases.",
    tech: ["Web", "API", "JavaScript"],
    link: "https://ambar1418.github.io/FilmWeb/",
    image: "/img/trailor.jpg",
    color: "from-red-500/10 to-orange-500/10 hover:from-red-500/20 hover:to-orange-500/20",
    border: "border-red-500/20 hover:border-red-500/50",
    shadow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
  },
  {
    id: "sistec-bot",
    title: "SISTec Bot",
    desc: "AI-powered college chatbot for SISTec.",
    fullDesc: "An intelligent chatbot built with Streamlit and advanced NLP techniques to provide instant, accurate answers about SISTec college. Features robust document retrieval and a sleek UI.",
    tech: ["Python", "Streamlit", "LLM", "RAG"],
    link: "https://sistecbot.streamlit.app/",
    github: "https://github.com/Ambar1418/SISTec_BOT",
    image: "/img/sistecbot.png",
    color: "from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20",
    border: "border-green-500/20 hover:border-green-500/50",
    shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  {
    id: "expense-iq",
    title: "ExpenseIQ",
    desc: "Full-stack personal finance and expense tracking.",
    fullDesc: "ExpenseIQ is a modern, responsive MERN-stack application that helps users effortlessly track their income, expenses, and overall budget with intuitive analytics and secure authentication.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://expenseiq-vite-3r2y.onrender.com/",
    github: "https://github.com/Ambar1418/ExpenseIQ",
    image: "/img/expenseiq.png",
    color: "from-yellow-500/10 to-amber-500/10 hover:from-yellow-500/20 hover:to-amber-500/20",
    border: "border-yellow-500/20 hover:border-yellow-500/50",
    shadow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
  },
  {
    id: "sistec-rag-demo",
    title: "SISTec RAG Demo",
    desc: "Advanced RAG-based AI Document Assistant.",
    fullDesc: "An advanced conversational AI assistant utilizing Retrieval-Augmented Generation (RAG) to provide grounded, accurate answers from specialized college documents. Built to demonstrate high-accuracy AI retrieval capabilities.",
    tech: ["Python", "Streamlit", "RAG", "LLM"],
    link: "https://ambar1418-sistec-rag-demo-app-dqopcn.streamlit.app/",
    github: "https://github.com/Ambar1418/SISTec_RAG_DEMO",
    image: "/img/sistec-rag.png",
    color: "from-blue-500/10 to-indigo-500/10 hover:from-blue-500/20 hover:to-indigo-500/20",
    border: "border-blue-500/20 hover:border-blue-500/50",
    shadow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projectsData.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-12 w-full">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4 mb-4">
          <span className="w-2 h-10 bg-neon-cyan rounded-full block shadow-[0_0_15px_rgba(0,243,255,0.5)]"></span>
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          A showcase of my recent work in AI, full-stack development, and system architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div
            layoutId={`card-${project.id}`}
            key={project.id}
            onClick={() => setSelectedId(project.id)}
            className={`rounded-[32px] cursor-pointer bg-gradient-to-br ${project.color} border ${project.border} backdrop-blur-md relative overflow-hidden group transition-all duration-500 ${project.shadow} flex flex-col min-h-[300px]`}
          >
            <div className="w-full h-40 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-1">{project.desc}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0,2).map((t, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-white/5 text-gray-400 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all shrink-0">
                  <ChevronRight size={20} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-lg p-4 md:p-6"
          >
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="w-full max-w-3xl max-h-[90vh] bg-[#0a0a0a] rounded-[32px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative"
            >
              {/* Header */}
              <div className="p-6 md:p-8 flex justify-between items-start border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent relative z-10">
                <div>
                  <span className="text-xs md:text-sm uppercase tracking-widest font-bold text-gray-500 mb-2 block">Project Details</span>
                  <h2 className="text-3xl md:text-4xl font-black text-white">{selectedProject.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedId(null)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors shrink-0"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-white/5 text-gray-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10">
                  {selectedProject.fullDesc}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex-1 py-4 rounded-2xl bg-neon-cyan text-black font-bold text-sm md:text-base flex items-center justify-center gap-3 hover:bg-white transition-colors">
                    <ExternalLink size={20} /> View Live Project
                  </a>
                  <a href={(selectedProject as any).github || "https://github.com/Ambar1418"} target="_blank" rel="noreferrer" className="flex-1 py-4 rounded-2xl glass border-white/10 text-white font-bold text-sm md:text-base flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                    <FaGithub size={20} /> View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
