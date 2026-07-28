export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-4xl w-full">
        
        {/* 3D Card Container */}
        <div className="bg-[#121212]/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-500 flex flex-col items-center text-center">
          
          {/* Brand / Name */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-orange-500 transition-colors duration-300">
              Raghuveer <span className="text-orange-500">Kumawat</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1.5 uppercase tracking-widest font-semibold">
              Computer Science Engineer & Developer
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/raghuveerkumawat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#1a1a1a] border border-slate-800 text-slate-300 hover:text-white hover:border-orange-500 hover:bg-orange-600/20 text-xs sm:text-sm font-medium transition-all duration-300"
            >
              LinkedIn
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/raghuveerkumawat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#1a1a1a] border border-slate-800 text-slate-300 hover:text-white hover:border-orange-500 hover:bg-orange-600/20 text-xs sm:text-sm font-medium transition-all duration-300"
            >
              GitHub
            </a>

            {/* LeetCode */}
            <a 
              href="https://leetcode.com/raghuveerkumawat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#1a1a1a] border border-slate-800 text-slate-300 hover:text-white hover:border-orange-500 hover:bg-orange-600/20 text-xs sm:text-sm font-medium transition-all duration-300"
            >
              LeetCode
            </a>
          </div>

          {/* Divider line */}
          <div className="w-full h-px bg-slate-800/80 mb-6"></div>

          {/* Bottom copyright & Back to top */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Raghuveer Kumawat. All rights reserved.
            </p>

            <button 
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-[#1a1a1a] border border-slate-800 text-slate-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-300 cursor-pointer font-medium"
            >
              Back to top ↑
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}