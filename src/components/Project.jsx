export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website V2",
      description: "Modern, responsive personal portfolio built with React, Vite, Tailwind CSS, and EmailJS for contact form.",
      tech: ["React.js", "Tailwind CSS", "Vite", "EmailJS"],
      liveLink: "#", 
      githubLink: "https://github.com/raghuveerkumawat", 
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "E-commerce Store UI",
      description: "Frontend interface for a modern online store with product filtering, cart functionality, and checkout flow.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-6xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">My Work</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Projects</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Project Image / Thumbnail */}
                <div className="w-full h-48 overflow-hidden rounded-2xl border border-slate-800 bg-[#1a1a1a] mb-6 relative group/img">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Overlay with GitHub Link on Hover */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.githubLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#1a1a1a] rounded-full text-white border border-slate-700 hover:bg-orange-600 hover:border-orange-600 transition-colors"
                      title="View Source Code"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h4>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((techItem, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-lg bg-[#1a1a1a] border border-slate-800 text-slate-300 font-medium"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Demo Button */}
              <div>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-900/40"
                >
                  Live Demo
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}