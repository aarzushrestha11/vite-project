import { useEffect, useState } from "react";
import Chatbot from "../assets/Chatbot.png";
export default function AboutPage() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}about/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched sections:", data);
        setSections(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter sections based on their type or any criteria
  const firstSectionCards = sections.filter((section) =>
    ["VISION"].includes(section.section_type),
  );

  const secondSectionCards = sections.filter((section) =>
    ["WHY"].includes(section.section_type),
  );

  // Static project cards
  const projectCards = [
    {
      id: 1,
      title: "ChatNHS",
      description: "Data Analysis and Real-time chat",
      image: Chatbot,
      extra_info: [
        "Customer Support Bots",
        "Website Integration",
        "Multi-platform",
      ],
    },
  ];

  const renderCards = (cards) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
      {cards.map((section, idx) => (
        <div
          key={section.id || idx}
          className="rounded-2xl p-8 bg-gradient-to-br from-indigo-700/30 to-purple-700/30 border border-white/10 shadow-xl hover:border-white/20 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">
            {section.title}
          </h3>

          {section.image && (
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-48 mb-6 rounded-xl object-contain bg-white/5 p-4"
            />
          )}

          <p className="text-white/70 leading-relaxed mb-4">
            {section.description}
          </p>

          {section.extra_info && Array.isArray(section.extra_info) && (
            <ul className="space-y-2 text-white/70">
              {section.extra_info.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white">
      {/* ================= FIRST SECTION HERO ================= */}
      <section className="py-36 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_65%)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            About <span className="text-indigo-400">Us</span>
          </h1>
          <p className="text-2xl text-indigo-300 mb-8">
            Pioneering the Future of AI-Powered Automation
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Pluto Analytics is an innovative AI software company dedicated to
            transforming businesses through intelligent, cutting-edge automation
            solutions.
          </p>
        </div>
      </section>

      {/* ================= FIRST SECTION CARDS ================= */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {renderCards(firstSectionCards)}
        </div>
      </section>

      {/* ================= SECOND SECTION HERO ================= */}
      <section className="py-22 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_65%)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            Why Pluto<span className="text-indigo-400">Analytics</span>
          </h1>
          <p className="text-2xl text-indigo-300 mb-8">
            Driving Innovation Through Intelligent Automation
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our team consists of seasoned AI specialists passionate about
            developing cutting-edge solutions that drive real business results.
          </p>
        </div>
      </section>

      {/* ================= SECOND SECTION CARDS ================= */}
      <section className="py-18">
        <div className="max-w-6xl mx-auto px-6">
          {renderCards(secondSectionCards)}
        </div>
      </section>

      {/* ================= PROJECTS HERO ================= */}
      <section className="py-22 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_65%)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            Projects <span className="text-indigo-400">We are Working On</span>
          </h1>
          <p className="text-2xl text-indigo-300 mb-8">
            Driving Innovation Through Intelligent Automation
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our team consists of seasoned AI specialists passionate about
            developing cutting-edge solutions that drive real business results.
          </p>
        </div>
      </section>

      {/* ================= PROJECT CARDS (STATIC) ================= */}
      <section className="py-18">
        <div className="max-w-6xl mx-auto px-6">
          {renderCards(projectCards)}
        </div>
      </section>
    </div>
  );
}
