export default function Internship() {
  const internships = [
    {
      role: "IT Intern",
      company: "Golcha Group",
      duration: "Dec 2025 — Mar 2026",
      description: "Worked in the IT department handling Microsoft Dynamics NAV ERP systems, providing IT support, managing system operations, and assisting with user-specific system operations and requirements at the head office in Jaipur, Rajasthan.",
      skills: ["Microsoft Dynamics NAV ERP", "IT Support", "System Operations", "Enterprise Systems"],
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
              {/* Responsive Grid: Details on Left, Certificate Preview on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Side: Role, Description, Skills */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
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

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skills / Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 rounded-lg bg-[#1a1a1a] border border-slate-800 text-slate-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Certificate Preview Card */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
                  <div className="w-full max-w-[200px] bg-[#1a1a1a] border border-slate-800 rounded-2xl p-3 shadow-xl group hover:border-orange-500/50 transition-all duration-300">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2 text-center lg:text-left">Certificate</p>
                    <div className="w-full h-36 overflow-hidden rounded-xl bg-slate-900 border border-slate-800 relative group/img cursor-pointer">
                      <a 
                        href={item.certificateImg} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Click to view full image"
                      >
                        <img 
                          src={item.certificateImg} 
                          alt="Golcha Group Internship Certificate" 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                        />
                      </a>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2 text-center">Click to preview</p>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}