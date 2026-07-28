export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering (CSE)",
      institution: "NIMS University",
      location: "Jaipur, Rajasthan, India",
      period: "2022 – 2026",
      status: "Recently Graduated",
      description: "Focused on core computer science fundamentals, programming, software design concepts, operating systems (OS), data structures, and software engineering methodologies."
    },
    {
      degree: "Higher Secondary & Secondary (10th & 12th)",
      institution: "VPSSS",
      location: "Rajasthan, India",
      period: "2020 – 2022",
      status: "RBSE Board",
      description: "Completed my school studies focusing on core academics, building a strong analytical foundation, and scientific concepts under the RBSE board."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-4xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Academic Background</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Education</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Education 3D Cards Container */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="relative bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Top Row: Degree & Identical Year Badge */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 sm:max-w-[75%]">
                  {edu.degree}
                </h4>
                <div className="px-4 py-1.5 bg-[#1a1a1a] border border-slate-800 text-orange-400 text-xs font-semibold rounded-full whitespace-nowrap self-start">
                  {edu.period}
                </div>
              </div>

              {/* Institution Details */}
              <p className="text-sm font-medium text-slate-300 mb-3 flex flex-wrap items-center gap-2">
                <span>{edu.institution}</span> 
                <span className="text-slate-600">•</span> 
                <span className="text-slate-400">{edu.location}</span> 
                <span className="text-slate-600">•</span> 
                <span className="text-orange-500">{edu.status}</span>
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}