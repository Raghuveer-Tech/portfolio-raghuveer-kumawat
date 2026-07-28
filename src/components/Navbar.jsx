import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("About");

  const leftLinks = [
    { name: "About", href: "#about" },
    { name: "Project", href: "#project" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  const rightLinks = [
    { name: "Resume", href: "#resume" },
    { name: "Internship", href: "#Internship" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      {/* Floating 3D Capsule Navbar */}
      <nav className="w-full max-w-5xl bg-[#121212]/90 backdrop-blur-md border border-slate-800 text-white rounded-full px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-between">
        
        {/* Left Side Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
          {leftLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`transition-all px-3 py-1.5 rounded-full ${
                activeTab === link.name
                  ? "bg-orange-500 text-white font-semibold shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Center 3D Mini Logo / Dot */}
        <div className="flex items-center justify-center mx-auto lg:mx-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 p-[2px] shadow-[0_0_15px_rgba(249,115,22,0.6)]">
            <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Right Side Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
          {rightLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`transition-all px-3 py-1.5 rounded-full ${
                activeTab === link.name
                  ? "bg-orange-500 text-white font-semibold shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 focus:outline-none p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#121212]/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 grid grid-cols-2 gap-2 lg:hidden shadow-2xl">
          {allLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setIsOpen(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium text-center transition ${
                activeTab === link.name
                  ? "bg-orange-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}