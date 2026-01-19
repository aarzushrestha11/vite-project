import React from "react";
import { Link } from "react-router-dom";
 // Make sure Navbar.jsx is in the same folder

const useCases = [
  {
    title: "Sales Forecasting",
    description: "Predict future sales trends and optimize inventory using AI insights.",
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
          d="M3 3v18h18M3 9l4 4 4-4 4 4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Customer Segmentation",
    description: "Group your customers intelligently to improve marketing strategies.",
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
          d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7"
        />
      </svg>
    ),
  },
  {
    title: "Fraud Detection",
    description: "Detect anomalies and prevent fraudulent activities with AI monitoring.",
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
          d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm6 0a6 6 0 01-12 0"
        />
      </svg>
    ),
  },
];

const UseCases = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white min-h-screen overflow-x-hidden">
  

      {/* ================= HERO ================= */}
      <section className="pt-20 pb-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-indigo-400">Use Cases</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Explore real-world applications of AI that drive measurable business results.
          </p>
        </div>
      </section>

      {/* ================= USE CASES GRID ================= */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((u, i) => (
            <div
              key={i}
              className="p-8 bg-gradient-to-br from-indigo-800 to-purple-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-indigo-700/40">
                {u.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{u.title}</h3>
              <p className="text-white/80">{u.description}</p>
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
            Ready to Apply AI to Your Business?
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

export default UseCases;
