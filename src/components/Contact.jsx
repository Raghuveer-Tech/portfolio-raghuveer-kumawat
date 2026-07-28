import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        "service_wrg6x8f",    // Service ID
        "template_qb919vh",   // Template ID
        formRef.current,
        "0SIvFbJ8as_CiF75N"   // EmailJS Public Key
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-[#0b0b0b] text-white flex justify-center items-center">
      <div className="max-w-4xl w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-orange-500 mb-2">Get In Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Contact Me</h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 3D Card Container */}
        <div className="relative bg-[#121212]/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-orange-500/50 transition-all duration-500">
          
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Your Name</label>
                <input 
                  type="text" 
                  name="from_name" 
                  required 
                  placeholder="Raghuveer"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Your Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  placeholder="abc@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Your Message</label>
              <textarea 
                name="message" 
                rows="5" 
                required 
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-lg shadow-orange-900/40 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success / Error Messages */}
            {success && (
              <p className="text-green-500 text-sm text-center font-medium">Your message has been sent successfully!</p>
            )}
            {error && (
              <p className="text-red-500 text-sm text-center font-medium">Something went wrong. Please try again later.</p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}