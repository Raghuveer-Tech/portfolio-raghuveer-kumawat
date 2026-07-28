export default function Internship() {
  const internships = [
    {
      role: "Intern",
      company: "Golcha Group",
      duration: "17 Dec 2025 - 28 Mar 2026",
      description: "Completed professional internship at Golcha Group, gaining hands-on practical experience and working on assigned industrial tasks.",
      skills: ["Industrial Training", "Problem Solving", "Professional Workflow"],
      certificateImg: "/Experience Letter - Mr. Raghuveer.jpg" 
    },
  ];

  return (
    <section id="internship" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-4xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Professional Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Internship</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Internship Cards Container */}
        <div className="space-y-6">
          {internships.map((item, index) => (
            <div 
              key={index}
              className="relative bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                    {item.role}
                  </h4>
                  <p className="text-sm font-medium text-slate-400">{item.company}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-500/20 rounded-full w-fit">
                  {item.duration}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Skills / Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 rounded-lg bg-[#1a1a1a] border border-slate-800 text-slate-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Image Preview Box (Small Size) */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Certificate Preview</p>
                
                <div className="w-32 h-32 overflow-hidden rounded-xl border border-slate-800 bg-[#1a1a1a] p-1.5 shadow-inner group cursor-pointer">
                  <a 
                    href={item.certificateImg} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Click to view full image"
                  >
                    <img 
                      src={item.certificateImg} 
                      alt="Golcha Group Internship Certificate" 
                      className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                </div>
                <p className="text-xs text-slate-500 mt-2">Click image to open full size</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}