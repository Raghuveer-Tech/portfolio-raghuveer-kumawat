export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Expert" },
        { name: "Vite", level: "Intermediate" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "REST APIs", level: "Intermediate" },
        { name: "Database Basics", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code", level: "Expert" },
        { name: "EmailJS", level: "Intermediate" },
        { name: "Vercel / Netlify", level: "Advanced" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-6xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Skills & Technologies</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <h4 className="text-xl font-bold text-white mb-6 pb-3 border-b border-slate-800 group-hover:text-orange-500 transition-colors duration-300">
                  {category.title}
                </h4>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#1a1a1a] border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-orange-600/10 text-orange-400 border border-orange-500/20">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}