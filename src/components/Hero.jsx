import { useState, useEffect } from "react";

export default function Hero() {
  const roles = ["Software Engineer", "Full Stack Developer", "Backend Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setAnimateKey((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden bg-[#0b0b0b]">
      
      {/* Poora Hero Content ek 3D Interactive Card mein */}
      <div 
        className="relative w-full max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#121212]/80 border border-slate-800/80 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out group hover:-translate-y-3 hover:border-orange-500/50 hover:shadow-[0_25px_60px_rgba(249,115,22,0.25)] flex flex-col items-center text-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Top Small Badge */}
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-[#1a1a1a] text-slate-300 text-xs tracking-wider shadow-md">
          Hello! 👋
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          I&apos;m <span className="text-orange-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]">Raghuveer Kumawat</span>,
        </h1>

        {/* Sliding Role Subtitle */}
        <div className="h-12 sm:h-16 flex items-center justify-center overflow-hidden mb-6">
          <h2 
            key={animateKey}
            className="text-lg sm:text-3xl md:text-4xl font-semibold text-white animate-[slideIn_0.5s_ease-out]"
          >
            <span className="border-b-2 border-orange-500 pb-1">
              {roles[currentRoleIndex]}
            </span>
          </h2>
        </div>

        {/* Center Orange Arc & Rich Doodles Container inside the Card */}
        <div className="relative mt-2 w-full max-w-sm h-40 sm:h-52 flex items-end justify-center">
          
          {/* Background Orange Semi-circle Arc with 3D Glow */}
          <div className="absolute bottom-0 w-64 h-32 sm:w-80 sm:h-40 bg-gradient-to-t from-orange-600/95 to-orange-400/60 rounded-t-full z-0 shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-transform duration-500 group-hover:scale-105"></div>

          {/* 10-15 Rich Purple Doodles (Visible on Card Hover) */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            <svg className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-purple-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <svg className="absolute top-2 left-2 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
            <svg className="absolute top-0 right-4 w-10 h-10 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            <svg className="absolute top-8 -left-4 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle></svg>
            <svg className="absolute bottom-10 -left-2 w-10 h-10 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <svg className="absolute bottom-2 left-4 w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path></svg>
            <svg className="absolute top-8 -right-4 w-10 h-10 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <svg className="absolute bottom-10 -right-2 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
            <svg className="absolute bottom-2 right-4 w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>

        </div>

      </div>

    </section>
  );
}