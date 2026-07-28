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
    }, 1000); // Thoda time badhaya hai taaki text easily padha ja sake
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-12 overflow-hidden bg-[#0b0b0b]">
      
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main 3D Interactive Hero Card */}
      <div 
        className="relative w-full max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#121212]/90 border border-slate-800/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out group hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_30px_70px_rgba(249,115,22,0.25)] flex flex-col items-center text-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Top Small Badge */}
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700/80 bg-[#1a1a1a] text-slate-300 text-xs tracking-wider shadow-md">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Hello World! 👋
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          I&apos;m <span className="text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]">Raghuveer Kumawat</span>
        </h1>

        {/* Sliding Role Subtitle */}
        <div className="h-12 sm:h-16 flex items-center justify-center overflow-hidden mb-6">
          <h2 
            key={animateKey}
            className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-200 transition-all duration-500 transform translate-y-0 opacity-100"
          >
            Passionate <span className="text-orange-400 border-b-2 border-orange-500 pb-1">
              {roles[currentRoleIndex]}
            </span>
          </h2>
        </div>

        {/* Short Bio / Intro */}
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
          Computer Science Engineering graduate focused on building robust backend systems, scalable web applications, and core technical solutions.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 z-20">
          <a 
            href="#projects" 
            className="px-7 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-lg shadow-orange-900/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-7 py-3 rounded-xl border border-slate-700 hover:border-orange-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Let&apos;s Connect
          </a>
        </div>

        {/* Center Orange Arc & Rich Doodles Container inside the Card */}
        <div className="relative mt-2 w-full max-w-sm h-32 sm:h-40 flex items-end justify-center">
          
          {/* Background Orange Semi-circle Arc with 3D Glow */}
          <div className="absolute bottom-0 w-60 h-30 sm:w-72 sm:h-36 bg-gradient-to-t from-orange-600/90 to-orange-400/40 rounded-t-full z-0 shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-transform duration-500 group-hover:scale-105"></div>

          

          {/* Rich Doodles (Visible on Card Hover) */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            <svg className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 text-orange-400/80 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path></svg>
            <svg className="absolute top-2 left-4 w-7 h-7 text-orange-400/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            <svg className="absolute top-2 right-4 w-7 h-7 text-orange-400/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle></svg>
          </div>

        </div>

      </div>

    </section>
  );
}