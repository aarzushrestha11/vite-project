import React, { useState } from "react";
import contactHeroImage from "../assets/contactHeroImage.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b1c77] via-[#1a1140] to-[#3b1fa8] text-white">

      {/* ================= TOP SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Contact <span className="text-indigo-400">Us</span>
            </h1>

            <p className="text-white/80 text-lg mt-2 mb-4">
              Let’s Build Something Intelligent.
            </p>

            <img
              src={contactHeroImage}
              alt="AI Assistant"
              className="w-64 md:w-72 mt-2 drop-shadow-[0_0_35px_rgba(99,102,241,0.6)]"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">

              {["name", "email", "subject"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Message"
                required
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 font-bold transition shadow-lg disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= GET IN TOUCH ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-20 pb-24">
        <h2 className="text-center text-3xl font-bold mb-10">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* EMAIL */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-lg flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-semibold">info@plutoanalytics.com</p>
          </div>

          {/* PHONE */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-lg flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="font-semibold">+1 (123) 456-7890</p>
          </div>

          {/* ADDRESS */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-lg flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="font-semibold text-center">
              123, AI Innovation Drive <br />
              Suite 101, Tech City, NY, USA
            </p>
          </div>

        </div>

        <div className="text-center">
          <button className="px-10 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 font-bold shadow-xl transition">
            Book a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
