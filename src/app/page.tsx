"use client";

import TopStatus from "@/components/TopStatus";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence for that "OS Boot" feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
          >
            <div className="relative flex items-center justify-center w-24 h-24 mb-8">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-neon-blue border-r-2 border-r-transparent"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-b-2 border-neon-purple border-l-2 border-l-transparent"
              />
              <span className="text-xl">⚡</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="font-mono text-xs text-neon-cyan tracking-[0.2em] uppercase"
            >
              Initializing System
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <TopStatus />
      
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 flex flex-col gap-24 pb-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </div>

      <BottomNav />
    </div>
  );
}
