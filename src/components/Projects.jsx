export default function Projects() {
  const projects = [
    {
      title: "GetLink.ly — URL Shortener Application",
      description: "A full-stack URL shortener with authentication, click analytics, and QR code generation. Features user registration/login with JWT in HTTP-only cookies, custom slugs, duplicate short-code detection, click tracking dashboard, guest shortening, and centralized error handling.",
      tech: ["React", "Vite", "Redux Toolkit", "TanStack Router", "TanStack Query", "Tailwind CSS", "Material UI", "Axios", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "nanoid", "cookie-parser", "CORS"],
      liveLink: "https://get-link-ly-url-shortener-applicati.vercel.app", 
      githubLink: "https://github.com/Raghuveer-Tech/GetLink.ly---URL-Shortener-Application", 
      docsLink: "https://github.com/Raghuveer-Tech/GetLink.ly---URL-Shortener-Application/blob/main/README.md",
      image: "/GetLink.png"
    }, 
   {
      title: "Backend Ledger System",
      description: "A double-entry ledger backend for secure, auditable financial transactions featuring JWT auth with token blacklisting, immutable Mongoose ledger entries, dynamic aggregation balances, ACID transfers with snapshot isolation, optimistic locking, and Swagger API docs.",
      tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "Zod", "Helmet", "express-rate-limit", "Swagger", "Nodemailer", "OAuth2"],
      liveLink: "https://backend-ledger-system.onrender.com/api-docs", 
      githubLink: "https://github.com/Raghuveer-Tech/backend-ledger-system", 
      docsLink: "https://backend-ledger-system.onrender.com/api-docs",
      image: "/BackendLedger.png"
    },
    {
      title: "Orbit.io — Real-Time Video Conferencing Platform",
      description: "A real-time WebRTC video app with custom JWT implementation (Node crypto), peer-to-peer audio/video calling, Socket.io signaling, automatic host assignment, in-call text chat with history, screen sharing, meeting history, and custom rate limiting.",
      tech: ["React", "React Router", "Material UI", "Axios", "Socket.io", "WebRTC", "Node.js", "Express", "MongoDB", "Mongoose", "bcrypt", "Custom JWT"],
      liveLink: "https://orbit-io-real-time-video-conferenci.vercel.app", 
      githubLink: "https://github.com/Raghuveer-Tech/Orbit.io-Real-time-video-conferencing-platform", 
      docsLink: "https://github.com/Raghuveer-Tech/Orbit.io-Real-time-video-conferencing-platform/blob/main/Readme.md",
      image: "/OrbitProject.png"
    },
    {
      title: "PacketPulse — Deep Packet Inspection Engine",
      description: "A multi-threaded network traffic classification engine written in core Java with zero external dependencies. Features manual byte-level PCAP parsing, TLS/SNI & HTTP Host extraction, multi-threaded worker pipelines with flow-affinity hashing, caching, and a robust rule engine.",
      tech: ["Core Java", "Multithreading", "Thread", "LinkedBlockingQueue", "ReentrantReadWriteLock", "LongAdder", "Custom PCAP Parser", "TLS/SNI Extraction"],
      liveLink: "https://github.com/Raghuveer-Tech/PacketPulse-Deep-Packet-Inspection-Engine", 
      githubLink: "https://github.com/Raghuveer-Tech/PacketPulse-Deep-Packet-Inspection-Engine", 
      docsLink: "https://github.com/Raghuveer-Tech/PacketPulse-Deep-Packet-Inspection-Engine/blob/main/README.md",
      image: "/PacketPluse.png"
    },
     {
      title: "Wanderlust — Property Listing Web Application",
      description: "A server-rendered property listing platform featuring Passport.js session auth, Cloudinary image uploads, Mapbox geocoding, star-rating reviews, ownership-based authorization, cascading deletes, Joi validation, and MongoDB session persistence.",
      tech: ["Node.js", "Express", "EJS", "EJS-Mate", "MongoDB", "Mongoose", "Passport.js", "Cloudinary", "Multer", "Mapbox SDK", "Joi", "express-session", "connect-mongo", "connect-flash", "method-override"],
      liveLink: "https://wanderlust-app-yni0.onrender.com", 
      githubLink: "https://github.com/Raghuveer-Tech/Wanderlust---Accommodation-Listing-Web-Application", 
      docsLink: "https://github.com/Raghuveer-Tech/Wanderlust---Accommodation-Listing-Web-Application/blob/main/README.md",
      image: "/Wanderlust.png"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-7xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">My Work</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Projects</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-between w-full max-w-md"
            >
              <div>
                {/* Project Image / Thumbnail */}
                <div className="w-full h-48 overflow-hidden rounded-2xl border border-slate-800 bg-[#1a1a1a] mb-6 relative group/img">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Overlay with Quick GitHub Link on Hover */}
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

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
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

              {/* Action Links / Buttons */}
              <div className="space-y-3">
                {/* Primary Live Demo */}
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-900/40"
                >
                  Live App
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                {/* Secondary Links: GitHub & Docs (2-column layout) */}
                <div className="grid grid-cols-2 gap-2">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-2 rounded-lg bg-[#1a1a1a] border border-slate-800 text-slate-300 hover:text-white hover:border-orange-500 text-xs font-medium text-center transition-all truncate"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.docsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-2 rounded-lg bg-[#1a1a1a] border border-slate-800 text-slate-300 hover:text-white hover:border-orange-500 text-xs font-medium text-center transition-all truncate"
                  >
                    Docs
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}