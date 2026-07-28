import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Internship from "../components/Internship";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Floating Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills & Technologies Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Resume & Connections Section */}
      <Resume />

      {/* Education Section */}
      <Education />

      {/* Internship Experience Section */}
      <Internship />

      {/* Certifications Section */}
      <Certificates />

      {/* Contact Form Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

    </div>
  );
}