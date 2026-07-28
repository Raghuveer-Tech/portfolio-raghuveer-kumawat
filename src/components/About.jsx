export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-4xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Get to Know</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Me</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Main 3D Card Container */}
        <div className="relative bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-orange-500/50 transition-all duration-500">
          
          {/* Left Side: 3D Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-800 shadow-2xl group-hover:scale-[1.02] group-hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)] transition-all duration-500">
              
              {/* Profile Image */}
              <img 
                src="/About01.png" 
                alt="Raghuveer Kumawat" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Subtle Gradient Overlay for 3D Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/80 via-transparent to-transparent"></div>

            </div>
          </div>

          {/* Right Side: Professional Details */}
          <div className="lg:col-span-7 space-y-5 text-slate-300">
            
            <div className="space-y-3">
              <h4 className="text-2xl sm:text-3xl font-bold text-white">
                Hello, I&apos;m <span className="text-orange-500">Raghuveer Kumawat</span>
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                I am a recently graduated student from NIMS University, Jaipur, Rajasthan, India, holding a Bachelor&apos;s in Computer Science and Engineering (2026). I have a strong interest in Software Engineering roles. I also have experience working in the IT department at Golcha Group, Rajasthan, India, focusing on Microsoft Dynamics NAV ERP, and I am passionate about building software applications.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center gap-4">
              <a 
                href="#contact" 
                className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-lg shadow-orange-900/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Let&apos;s Connect
              </a>
              <a 
                href="#projects" 
                className="px-6 py-2.5 rounded-xl border border-slate-700 hover:border-orange-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-300"
              >
                View Work
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}