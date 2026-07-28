import Navbar from "../components/Navbar";
// Baaki sections ke components yahan import karein jab aap unhe banayein:
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Internship from "../components/Internship";
// import Service from "../components/Service";
// import Resume from "../components/Resume";
//import Projects from "../components/projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Floating Navbar */}
      <Navbar />

        <Hero />
        <About/>
         <Skills/>
        <Project/>
        <Resume/>
        <Education/>
        <Internship/>
        <Certificates/>
        <Contact/>
        <Footer/>
       

    
     
    </div>
  );
}