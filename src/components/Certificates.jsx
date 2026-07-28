export default function Certifications() {
  const certifications = [
    {
      title: "Alpha (DSA with Java)",
      issuer: "Apna College",
      date: "2025",
      description: "Validated proficiency in Data Structures, Algorithms, and problem-solving using Java.",
      image: "/ApnaCollageDsaJavaSigma06.jpg"
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google / Coursera",
      date: "2023",
      description: "Covered core data concepts, analytical thinking, data life cycles, and introductory data structures.",
      image: "/CourseraFoundationDataEverywhere.jpg"
    },
    {
      title: "Artificial Intelligence on Microsoft Azure",
      issuer: "Microsoft / Coursera",
      date: "2023",
      description: "Explored cloud-based AI concepts, machine learning models, and cognitive services on Microsoft Azure.",
      image: "/CourseraArtificialIntelligence.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Credentials</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Certifications</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`bg-[#121212]/90 border border-slate-800 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-between ${
                index === certifications.length - 1 && certifications.length % 2 !== 0 ? "md:col-span-2 md:max-w-md md:mx-auto w-full" : ""
              }`}
            >
              {/* Card Image Banner */}
              <div className="relative h-40 w-full overflow-hidden border-b border-slate-800/80">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#121212]/80 text-orange-500 border border-orange-500/20 backdrop-blur-md">
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {cert.title}
                  </h4>
                  
                  <p className="text-sm font-medium text-slate-400 mb-4">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}