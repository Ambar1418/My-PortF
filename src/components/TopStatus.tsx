"use client";

import { useEffect, useState } from "react";

export default function TopStatus() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full glass border-b border-white/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-3 flex items-center justify-between">
        {/* Left Side: Brand & Live Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-black text-white tracking-widest uppercase">AMBAR GUPTA</span>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute w-2 h-2 rounded-full bg-neon-cyan animate-ping opacity-75"></span>
              <span className="relative w-2 h-2 rounded-full bg-neon-cyan"></span>
            </div>
            <span className="text-[10px] text-neon-cyan font-bold tracking-widest uppercase glow-text">System Online</span>
          </div>
        </div>

        {/* Right Side: Clock & Mini Status */}
        <div className="flex items-center gap-4">
          <div className="text-[10px] font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-full uppercase tracking-wider hidden sm:block border border-white/5">
            Building AI Agents
          </div>
          <span className="text-xs font-mono font-bold text-white/80">{time || "00:00"}</span>
        </div>
      </div>
    </div>
  );
}
