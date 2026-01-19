import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'AI Chatbots',
    description: 'From cartoon color at snaps showing full crowd debate.',
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Custom AI Software',
    description: 'Screener-informed instances selected in traffick.',
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Automation Solutions',
    description: "You're in slow color at snout insertion, autoinnovator...",
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: 'Expert AI Development',
    description: 'Make an answer at what instance or resources sees written offense solutions.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Tailored Solutions',
    description: 'Reheat entropy of experiment not-exponers instantiate antitoxes subdivits.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Proven Results',
    description: 'Chemetin all cases entered mod 6 sentences testing explosive crises. Extracalition.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <div className="overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="py-28 md:py-32 text-center bg-gradient-to-r from-indigo-900 via-black to-purple-900 text-white border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 mt-20">
            Welcome to <span className="text-indigo-400">PlutoAnalytics</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Transforming data into actionable intelligence with cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <Link to="/contact" className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition transform hover:-translate-y-1">
             ChatNHS
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-20 bg-gradient-to-l from-purple-900 via-black to-indigo-900 text-white border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">What We Do</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Innovative AI solutions to transform your business.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-gradient-to-br from-indigo-800 to-purple-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-indigo-700/40">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-white/80">{s.description}</p>
              <Link to="/services" className="text-indigo-400 font-medium inline-flex items-center mt-4">
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-black to-purple-900 text-white border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose <span className="text-indigo-400">PlutoAnalytics</span>?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            Expertise, customization, and proven results drive our AI solutions.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-indigo-700/40">{b.icon}</div>
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-white/80 text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-l from-purple-900 via-black to-indigo-900 text-white border-b border-white/20">
        <div className="max-w-4xl mx-auto px-6 bg-gradient-to-br from-indigo-800 to-purple-800 rounded-3xl shadow-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg mb-10">Join hundreds of companies trusting PlutoAnalytics for AI solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold hover:bg-gray-100 shadow-lg">
              Schedule a Demo
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-white rounded-xl text-white hover:bg-white/10 font-bold">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
