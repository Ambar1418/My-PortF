"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Code2, Brain, Database, Cpu, Rocket, FlaskConical } from "lucide-react";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1NddHEng_cxw48nm5P34srgmiI7khLNij";

const certificates = [
  {
    title: "Samadhan 1.0 – AI Hackathon",
    subtitle: "National Level AI Innovation Hackathon",
    issuer: "SISTec, Bhopal • Nov 2024",
    image: "/certificates/Samadhan_1.0.jpeg",
    type: "Participation",
    icon: Rocket,
    accent: "from-purple-500 to-pink-500",
    border: "border-purple-500/40",
    glow: "shadow-[0_0_25px_rgba(168,85,247,0.25)]",
  },
  {
    title: "Samadhan 2.0 – AI in Education",
    subtitle: "National Level Hackathon – AI in Education",
    issuer: "SISTec, Bhopal • Sep 2025",
    image: "/certificates/Samadhan_2.0.png",
    type: "Participation",
    icon: Brain,
    accent: "from-blue-500 to-cyan-500",
    border: "border-cyan-500/40",
    glow: "shadow-[0_0_25px_rgba(6,182,212,0.25)]",
  },
  {
    title: "IDE Bootcamp – Edition 3",
    subtitle: "Innovation, Design & Entrepreneurship Bootcamp",
    issuer: "AICTE & Wadhwani Foundation • Apr 2026",
    image: "/certificates/ide_bootcamp.png",
    type: "Participation",
    icon: Cpu,
    accent: "from-orange-500 to-red-500",
    border: "border-orange-500/40",
    glow: "shadow-[0_0_25px_rgba(249,115,22,0.25)]",
  },
  {
    title: "Data Science",
    subtitle: "Data Science & Analytics Fundamentals",
    issuer: "Online Certification",
    image: "/certificates/data_Science.png",
    type: "Certificate",
    icon: Database,
    accent: "from-yellow-500 to-amber-500",
    border: "border-yellow-500/40",
    glow: "shadow-[0_0_25px_rgba(234,179,8,0.25)]",
  },
  {
    title: "RAG AI Workshop & Competition",
    subtitle: "Retrieval-Augmented Generation Workshop",
    issuer: "SISTec Gandhi Nagar • May 2026",
    type: "Workshop",
    icon: Brain,
    accent: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/40",
    glow: "shadow-[0_0_25px_rgba(16,185,129,0.25)]",
  },
  {
    title: "Claude Code in Action",
    subtitle: "AI-Assisted Software Development",
    issuer: "Anthropic",
    type: "Certificate",
    icon: FlaskConical,
    accent: "from-indigo-500 to-purple-500",
    border: "border-indigo-500/40",
    glow: "shadow-[0_0_25px_rgba(99,102,241,0.25)]",
  },
  {
    title: "Claude 101",
    subtitle: "Foundations of Working with Claude",
    issuer: "Anthropic",
    type: "Certificate",
    icon: Brain,
    accent: "from-purple-500 to-fuchsia-500",
    border: "border-purple-500/40",
    glow: "shadow-[0_0_25px_rgba(168,85,247,0.25)]",
  },
  {
    title: "Introduction to Modern AI",
    subtitle: "Modern AI Concepts & Applications",
    issuer: "Cisco Networking Academy",
    type: "Certificate",
    icon: Cpu,
    accent: "from-sky-500 to-blue-500",
    border: "border-sky-500/40",
    glow: "shadow-[0_0_25px_rgba(14,165,233,0.25)]",
  },
  {
    title: "Apply AI: Analyze Customer Reviews",
    subtitle: "Applied AI for Business Use Cases",
    issuer: "Cisco Networking Academy",
    type: "Certificate",
    icon: FlaskConical,
    accent: "from-rose-500 to-red-500",
    border: "border-rose-500/40",
    glow: "shadow-[0_0_25px_rgba(244,63,94,0.25)]",
  },
  {
    title: "Python Essentials 1 & 2",
    subtitle: "Core & Intermediate Python Programming",
    issuer: "Cisco Networking Academy",
    type: "Certificate",
    icon: Code2,
    accent: "from-green-500 to-lime-500",
    border: "border-green-500/40",
    glow: "shadow-[0_0_25px_rgba(132,204,22,0.25)]",
  },
  {
    title: "Full Stack Dev Internship",
    subtitle: "Full Stack Development Internship Program",
    issuer: "Internshala",
    type: "Internship",
    icon: Rocket,
    accent: "from-amber-500 to-orange-500",
    border: "border-amber-500/40",
    glow: "shadow-[0_0_25px_rgba(245,158,11,0.25)]",
  },
];

// Double the array for seamless infinite loop
const loopCerts = [...certificates, ...certificates];

export default function Certificates() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="certificates" className="py-12 relative w-full overflow-hidden">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4 mb-4">
          <span className="w-2 h-10 bg-neon-cyan rounded-full block shadow-[0_0_15px_rgba(0,243,255,0.5)]" />
          Certificates & Achievements
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          Verified credentials from hackathons, bootcamps, and online courses — showcasing continuous learning across AI, programming, and entrepreneurship.
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={trackRef}
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {loopCerts.map((cert, idx) => (
            <div
              key={idx}
              className={`relative flex-shrink-0 w-72 rounded-3xl overflow-hidden border ${cert.border} backdrop-blur-md bg-white/[0.03] transition-all duration-300 ${cert.glow} group`}
            >
              {/* Image or Gradient Placeholder */}
              {cert.image ? (
                <div className="w-full h-44 overflow-hidden relative flex items-center justify-center bg-black">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors" />
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className={`w-full h-44 bg-gradient-to-br ${cert.accent} opacity-20 flex items-center justify-center relative`}>
                  <cert.icon size={64} className="text-white opacity-60 drop-shadow-lg" />
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                {/* Type Badge */}
                <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-gradient-to-r ${cert.accent} text-black mb-3`}>
                  {cert.type}
                </span>

                <h3 className="text-white font-bold text-base leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-2">
                  {cert.subtitle}
                </p>
                <p className="text-gray-500 text-[11px] font-medium">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <a
          href={DRIVE_LINK}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-neon-cyan/40 text-neon-cyan font-bold text-base overflow-hidden hover:border-neon-cyan transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,243,255,0.3)]"
        >
          <div className="absolute inset-0 bg-neon-cyan/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 rounded-full" />
          <Award size={20} className="relative z-10" />
          <span className="relative z-10">View All Certificates on Drive</span>
          <ExternalLink size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
