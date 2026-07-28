export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-4xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Career Profile</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Resume & Connections</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col items-center text-center">
          
          <h4 className="text-2xl font-bold text-white mb-3">
            Let's Build Something Amazing Together
          </h4>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
            You can download my updated resume below to check out my complete academic background, technical skills, and detailed project experiences. Feel free to connect with me on my professional profiles!
          </p>

          {/* Resume Download / View Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-10">
            {/* View Resume */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 py-3 px-6 rounded-xl bg-[#1a1a1a] border border-slate-700 hover:border-orange-500 text-white font-semibold text-sm transition-all duration-300 text-center"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a 
              href="/resume.pdf" 
              download 
              className="w-full sm:w-1/2 py-3 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-orange-900/40 text-center"
            >
              Download CV
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-slate-800 mb-8"></div>

          {/* Social Profiles Links */}
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-5">
              Find Me Online
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/raghuveerkumawat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#1a1a1a] border border-slate-800 text-slate-200 hover:text-white hover:border-orange-500 hover:bg-orange-600/20 text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                LinkedIn Profile
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/raghuveerkumawat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#1a1a1a] border border-slate-800 text-slate-200 hover:text-white hover:border-orange-500 hover:bg-orange-600/20 text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                GitHub Profile
              </a>

              {/* LeetCode */}
              <a 
                href="https://leetcode.com/raghuveerkumawat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#1a1a1a] border border-slate-800 text-slate-200 hover:text-white hover:border-orange-500 hover:bg-orange-600/20 text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                LeetCode Profile
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}