import React from "react";
import { Link } from "react-router-dom";


const solutions = [
  {
    title: "Predictive Analytics",
    description: "Leverage AI to forecast trends and make data-driven decisions.",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3v2m0 14v2m8-8h2M3 11h2m12.364-5.364l1.414 1.414M6.222 17.778l1.414 1.414M17.778 17.778l-1.414 1.414M6.222 6.222l-1.414 1.414"
        />
      </svg>
    ),
  },
  {
    title: "Automation Workflows",
    description: "Streamline processes and save time with AI-driven automation.",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
  {
    title: "AI Optimization",
    description: "Enhance efficiency and performance using intelligent AI models.",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m1-7a9 9 0 11-6.364 15.364"
        />
      </svg>
    ),
  },
];

const Solutions = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white min-h-screen overflow-x-hidden">
      {/* ================= NAVBAR ================= */}


      {/* ================= HERO ================= */}
      <section className="pt-20 pb-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-indigo-400">Solutions</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Discover AI solutions designed to optimize your business processes.
          </p>
        </div>
      </section>

      {/* ================= SOLUTIONS GRID ================= */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-gradient-to-br from-indigo-800 to-purple-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-indigo-700/40">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-white/80">{s.description}</p>
              <Link
                to="/contact"
                className="text-indigo-400 font-medium inline-flex items-center mt-4"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 bg-gradient-to-br from-indigo-800 to-purple-800 rounded-3xl shadow-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Business with AI?
          </h2>
          <p className="text-lg mb-10">
            Join hundreds of companies trusting PlutoAnalytics for AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold hover:bg-gray-100 shadow-lg"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white rounded-xl text-white hover:bg-white/10 font-bold"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
