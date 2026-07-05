"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      id: 1,
      type: "work",
      title: "Full Stack Developer Intern",
      company: "Site Guru Pvt. Ltd. · Remote",
      date: "Jun 2026 – Present",
      desc: "Built and enhanced 3+ full-stack web applications using Vue.js, JavaScript, Node.js, and MySQL. Integrated the Razorpay payment gateway (eliminating manual payment handling for 2 client apps) and shipped real-time features with WebSockets and LiveKit for live chat, video, and meetings at sub-200ms latency.",
    },
    {
      id: 2,
      type: "work",
      title: "Competitive Programming Co-Lead",
      company: "Google Developer Group (GDG), SISTec Bhopal",
      date: "Jan 2023 – Present",
      desc: "Organized 10+ coding contests and full-stack development workshops, mentoring 50+ students in DSA, AI/ML, and web technologies. Grew chapter participation by 40% through technical events and speaker sessions.",
    },
    {
      id: 3,
      type: "education",
      title: "B.Tech in Computer Science (AI & Data Science)",
      company: "Sagar Institute of Science and Technology (SISTec), Bhopal",
      date: "Aug 2023 – Jun 2027",
      desc: "CGPA: 7.6. Selected in the institute-wide Top 50 (Super 50). Coursework in Machine Learning, NLP, Computer Vision, Operating Systems, DBMS, and Computer Networks. 300+ DSA problems solved, including the GFG 160-Day Coding Challenge.",
    }
  ];

  return (
    <section id="experience" className="py-12 w-full relative">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4 mb-4">
          <span className="w-2 h-10 bg-neon-blue rounded-full block shadow-[0_0_15px_rgba(0,243,255,0.5)]"></span>
          Experience
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Real-world work, leadership, and academic milestones.
        </p>
      </div>

      <div className="relative pl-8 md:pl-12 border-l-2 border-white/10 max-w-4xl">
        {/* Glowing line overlay */}
        <motion.div 
          className="absolute top-0 left-[-2px] w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="flex flex-col gap-12 md:gap-16">
          {timeline.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 rounded-full bg-black border-2 border-neon-blue flex items-center justify-center shadow-[0_0_15px_rgba(0,243,255,0.5)] z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-neon-blue/50 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  {item.type === "work" ? <Briefcase size={80} /> : <GraduationCap size={80} />}
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{item.title}</h3>
                    <h4 className="text-sm md:text-base text-gray-400 font-medium">{item.company}</h4>
                  </div>
                  <div className="text-xs md:text-sm text-neon-blue font-bold tracking-widest uppercase bg-neon-blue/10 px-4 py-1.5 rounded-full inline-block border border-neon-blue/20">
                    {item.date}
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
