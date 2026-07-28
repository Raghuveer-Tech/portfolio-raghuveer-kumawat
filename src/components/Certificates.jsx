export default function Certificates() {
  const certificates = [
    {
      title: "Golcha Group Internship Certificate",
      issuer: "Golcha Group",
      date: "March 2026",
      description: "Successfully completed professional internship working on industrial workflows and technical tasks.",
      image: "/Experience Letter - Mr. Raghuveer.jpg",
      credentialLink: "/Experience Letter - Mr. Raghuveer.jpg"
    },
    // Aap yahan apne aur bhi certificates add kar sakte hain
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-5xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Credentials</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Certificates & Letters</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Certificates Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Image (Proper normal/large size) */}
                <div className="w-full h-52 overflow-hidden rounded-2xl border border-slate-800 bg-[#1a1a1a] mb-6 relative group/img">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                </div>

                {/* Title & Issuer */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm font-medium text-slate-400">{cert.issuer}</p>
                    <span className="text-xs font-semibold px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-500/20 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* View Button */}
              <div>
                <a 
                  href={cert.credentialLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#1a1a1a] hover:bg-orange-600 border border-slate-700 hover:border-orange-600 text-white font-semibold text-xs uppercase tracking-wider text-center block transition-all duration-300 shadow-lg"
                >
                  View Full Document
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}