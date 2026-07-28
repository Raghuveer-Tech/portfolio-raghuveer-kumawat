export default function Skills() {
  const skillCategories = [
    {
      category: "MERN Stack & Frontend",
      skills: ["React", "Tailwind CSS", "Material UI", "HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "Redux Toolkit", "TanStack Router", "TanStack Query"]
    },
    {
      category: "Backend, APIs & Databases",
      skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "WebRTC", "JWT", "MongoDB", "Mongoose", "MySQL", "Cloudinary", "Swagger"]
    },
    {
      category: "Core Java & DSA",
      skills: ["Core Java", "Data Structures & Algorithms (DSA)", "Multithreading", "Concurrency", "Problem Solving"]
    },
    {
      category: "Computer Science Core (CS)",
      skills: ["Computer Networks (CN)", "Operating Systems (OS)", "Object-Oriented Programming (OOPs)", "Database Management System (DBMS)"]
    },
    {
      category: "Tools & Testing",
      skills: ["Postman", "Thunder Client", "Git", "GitHub", "Vercel", "Render", "Zod", "Joi", "Bcrypt", "Nodemailer"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Skills & Tech Stack</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Categories Layout with Flex Wrap */}
        <div className="space-y-8">
          {skillCategories.map((group, index) => (
            <div 
              key={index} 
              className="bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-500"
            >
              <h4 className="text-orange-500 font-bold text-lg mb-4 tracking-wide border-b border-slate-800 pb-2">
                {group.category}
              </h4>
              
              {/* Flex Wrap instead of horizontal scroll so all skills fit nicely */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl bg-[#1a1a1a] border border-slate-800 text-slate-300 font-medium text-xs sm:text-sm hover:border-orange-500 hover:text-white transition-all shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}