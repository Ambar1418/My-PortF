"use client";

import { Home, User, FolderGit2, Mail, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "projects", icon: FolderGit2, label: "Projects" },
    { id: "certificates", icon: Award, label: "Certs" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(t => document.getElementById(t.id));
      const scrollPos = window.scrollY;
      
      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top - 300 && scrollPos < top + height - 300) {
            setActiveTab(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div className="glass px-2 py-2 md:px-4 md:py-3 rounded-full flex gap-2 md:gap-4 items-center shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-auto border border-white/10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleScrollTo(tab.id)}
              className="relative flex flex-col items-center justify-center w-16 h-14 md:w-20 md:h-16 rounded-full overflow-hidden group"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <tab.icon
                size={20}
                className={`relative z-10 transition-colors duration-300 md:mb-1 ${
                  isActive ? "text-neon-cyan drop-shadow-[0_0_8px_rgba(15,240,252,0.6)]" : "text-gray-400 group-hover:text-white"
                }`}
              />
              <span className={`relative z-10 text-[9px] md:text-[10px] font-bold tracking-wide transition-colors duration-300 ${isActive ? "text-white" : "text-transparent group-hover:text-gray-400"}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
