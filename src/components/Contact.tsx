"use client";

import { useState } from "react";
import { Mail, Copy, CheckCircle2, ArrowRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "itsambar14@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 w-full">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4 mb-4">
          <span className="w-2 h-10 bg-neon-purple rounded-full block shadow-[0_0_15px_rgba(188,19,254,0.5)]"></span>
          Let&apos;s Connect
        </h2>
      </div>

      <div className="glass p-8 md:p-12 lg:p-16 rounded-[40px] relative overflow-hidden group border border-white/10 hover:border-white/20 transition-colors duration-500">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none transition-transform group-hover:scale-150 duration-1000" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none transition-transform group-hover:scale-150 duration-1000" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 items-center">
          
          {/* Left Side: Info & Copy Email */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Open to Full Stack, AI Agent & ML Roles</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I&apos;m currently open to Full Stack Developer, AI Agent/RAG Engineer, and ML Engineer internships and roles. Whether you have an opportunity, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="bg-black/40 border border-white/10 rounded-3xl p-4 flex items-center justify-between hover:border-white/20 transition-colors group/copy">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover/copy:bg-white/10 transition-colors">
                  <Mail size={20} className="text-gray-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">Email Me At</span>
                  <span className="text-sm md:text-base font-mono text-white truncate">{email}</span>
                </div>
              </div>
              <button 
                onClick={handleCopy}
                className="w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center shrink-0 transition-all hover:scale-105 active:scale-95"
              >
                {copied ? <CheckCircle2 size={20} className="text-neon-cyan" /> : <Copy size={20} className="text-white" />}
              </button>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="flex flex-col gap-5 bg-black/20 p-6 md:p-8 rounded-[32px] border border-white/5">
            <h4 className="text-xl font-bold text-white mb-2">Send a Message</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all resize-none"
            ></textarea>
            
            <button 
              type="button"
              className="w-full py-5 mt-2 rounded-2xl bg-white text-black font-bold text-base flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors active:scale-95"
            >
              <span>Send Message</span> <ArrowRight size={18} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
