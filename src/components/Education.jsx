export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      institution: "NIMS University",
      location: "Jaipur, Rajasthan, India",
      duration: "2022 — 2026",
      description: "Studying core computer science subjects including Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, and DBMS. Building software applications and backend systems.",
      icon: (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      degree: "Senior Secondary (10th & 12th / RBSE)",
      institution: "VPSSS",
      location: "Sikar, Rajasthan, India",
      duration: "2020 — 2022",
      description: "Completed secondary and senior secondary education under the Rajasthan Board of Secondary Education (RBSE).",
      icon: (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-4xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Academic Background</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Education</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Education Timeline / Card Container */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl hover:border-orange-500/50 transition-all duration-500 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#1a1a1a] border border-slate-800 group-hover:border-orange-500/50 transition-colors">
                    {edu.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-wide">
                    {edu.degree}
                  </h4>
                </div>
                <span className="text-xs px-3 py-1 rounded-lg bg-[#1a1a1a] border border-slate-800 text-orange-500 font-semibold w-fit">
                  {edu.duration}
                </span>
              </div>

              <div className="text-slate-400 text-sm font-medium mb-4 flex items-center gap-2 pl-12">
                <span>{edu.institution}</span>
                <span>•</span>
                <span className="text-slate-500">{edu.location}</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed pl-12">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}