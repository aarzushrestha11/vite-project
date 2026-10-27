import React, { useState } from "react";

const Contact = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  
  // Kept your original state keys so it doesn't break your backend API
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    setStatusType("");

    try {
      const response = await fetch(`${BACKEND_URL}contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Backend error:", data);
        throw new Error(data.error || "Failed to send message");
      }

      setStatusMessage(data.message || "Message sent successfully!");
      setStatusType("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      setStatusMessage(error.message || "Something went wrong. Please try again.");
      setStatusType("error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#05050A] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#b19ffb] selection:text-black">
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* ================= LEFT COLUMN: TEXT CONTENT ================= */}
        <div className="flex flex-col">
          
          {/* Main Header */}
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">
            Let's Connect
          </p>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] mb-6 tracking-tight">
            What's on<br />
            <span className="text-[#b19ffb]">your horizon?</span>
          </h1>
          <p className="text-gray-400 text-sm mb-16">
            Tell us about a challenge, an idea, or something you would like to build.
          </p>

          {/* Secondary Section */}
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-4">
            Every possibility starts<br />
            with a conversation.
          </h2>
          <p className="text-gray-400 text-sm mb-10">
            Share a little context about your business and what you're looking to change.
          </p>

          {/* Sub-sections with Dividers */}
          <div className="border-t border-white/10 pt-6 mb-8">
            <h3 className="text-xl font-normal mb-2 text-gray-100">Exploring AI?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Start with your current workflow and the problem you want to solve.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="text-xl font-normal mb-2 text-gray-100">Interested in ChatNHS?</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Visit the project directly to explore the live experience.
            </p>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors inline-flex items-center">
              Visit ChatNHS /
            </a>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: FORM ================= */}
        <div className="bg-[#0A0A11] border border-white/5 rounded-2xl p-8 md:p-10 w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs text-gray-300 mb-2">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex Taylor"
                required
                className="w-full bg-[#05050A] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#b19ffb] transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs text-gray-300 mb-2">Work email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                required
                className="w-full bg-[#05050A] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#b19ffb] transition-colors"
              />
            </div>

            {/* Subject/Interest Input */}
            <div>
              <label htmlFor="subject" className="block text-xs text-gray-300 mb-2">What are you interested in?</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="AI chatbots"
                required
                className="w-full bg-[#05050A] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#b19ffb] transition-colors"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-xs text-gray-300 mb-2">A little about your project</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="What would you like to make possible?"
                required
                className="w-full bg-[#05050A] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#b19ffb] transition-colors resize-none"
              />
            </div>

            {/* Status Message */}
            {statusMessage && (
              <p className={`text-sm ${statusType === "success" ? "text-green-400" : "text-red-400"}`}>
                {statusMessage}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#b19ffb] text-[#05050A] font-semibold text-sm px-6 py-3 rounded-md hover:bg-[#9d89f5] transition-colors disabled:opacity-50 inline-block"
              >
                {loading ? "Saving..." : "Save inquiry draft "}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;