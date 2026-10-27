import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Custom Hook for Scroll Reveal Animations
const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isInView];
};

// Reveal Wrapper Component
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#05050A] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#b19ffb] selection:text-black">
      
      {/* Keyframes for Planet & Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.08); }
          }
          @keyframes spin-slow {
            from { transform: translate(-50%, -50%) rotate(-12deg); }
            to { transform: translate(-50%, -50%) rotate(348deg); }
          }
          
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 45s linear infinite; }
        `}
      </style>

      {/* ================= TOP HERO SECTION ================= */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <Reveal delay={100}>
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-8 uppercase">
            About Pluto Analytics
          </p>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] mb-8 tracking-tight">
            Curiosity is our<br />
            <span className="text-[#b19ffb]">starting point.</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
            Pluto Analytics is an AI software company focused on intelligent automation, conversational experiences, and custom software.
          </p>
        </Reveal>
      </section>

      {/* ================= SPLIT SECTION (Planet & Content) ================= */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: CSS Planet Graphic */}
          <Reveal delay={200} className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center order-2 lg:order-1">
            
            {/* Animated Glow behind planet */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-[#4c3575] rounded-full blur-[80px] animate-[pulse-glow_6s_ease-in-out_infinite]"></div>

            {/* Rotating Orbit Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[140px] md:w-[600px] md:h-[200px] border border-white/20 rounded-[100%] animate-spin-slow z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[120px] md:w-[500px] md:h-[160px] border border-white/30 rounded-[100%] animate-spin-slow z-0" style={{ animationDirection: 'reverse', animationDuration: '35s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[100px] md:w-[400px] md:h-[120px] border border-white/40 rounded-[100%] animate-spin-slow z-0" style={{ animationDuration: '25s' }}></div>

            {/* The Floating Planet */}
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,#3d2b5a_0%,#1a112b_70%,#0a0514_100%)] shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(76,53,117,0.3)] z-10 animate-float">
              
              {/* Pulsing Green Moon/Satellite */}
              <div className="absolute top-[15%] -right-[15%] md:-right-[20%] w-2 h-2 md:w-3 md:h-3 bg-[#6ee7b7] rounded-full shadow-[0_0_10px_#6ee7b7] z-20 animate-pulse"></div>
            </div>
            
            {/* Decorative background stars */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-700"></div>
          </Reveal>

          {/* Right Column: Text Content */}
          <div className="order-1 lg:order-2 flex flex-col">
            <Reveal delay={100}>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#b19ffb] mb-6 uppercase">
                A Different Perspective
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-4xl md:text-5xl font-normal leading-[1.2] mb-8">
                Technology with<br />
                a human purpose.
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed mb-12">
                <p>
                  Our focus is on making complex technology useful. That begins with understanding the people, processes, and decisions behind a business challenge.
                </p>
                <p>
                  Whether the starting point is a customer conversation or a repetitive workflow, the goal is a clear, practical experience.
                </p>
              </div>
            </Reveal>

            {/* List Items with Dividers */}
            <Reveal delay={400}>
              <div className="space-y-8">
                <div className="border-t border-white/10 pt-6 group hover:border-[#b19ffb]/50 transition-colors duration-500">
                  <h3 className="text-xl font-normal mb-3 text-gray-100 group-hover:text-white transition-colors">
                    Built around the challenge
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    The business problem shapes the technology.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6 group hover:border-[#b19ffb]/50 transition-colors duration-500">
                  <h3 className="text-xl font-normal mb-3 text-gray-100 group-hover:text-white transition-colors">
                    Designed for people
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Clarity and usability guide the experience.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ================= PROJECT SPOTLIGHT SECTION ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col items-start">
            <Reveal delay={100}>
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">
                Project Spotlight
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <h2 className="text-5xl md:text-6xl font-normal leading-tight mb-6 tracking-tight">
                Meet <span className="text-[#b19ffb]">ChatNHS.</span>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                <p>
                  A Pluto Analytics project exploring data analysis and real-time conversation.
                </p>
                <p>
                  See where conversational AI and information discovery come together.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <Link
                to="/under-construction"
                className="bg-[#b19ffb] text-[#05050A] px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#c5b7ff] hover:scale-105 transition-all duration-300 inline-block shadow-[0_0_15px_rgba(177,159,251,0.2)] hover:shadow-[0_0_25px_rgba(177,159,251,0.4)]"
              >
                Explore ChatNHS
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Card */}
          <Reveal delay={300}>
            <div className="group bg-[#0A0A11] border border-white/5 rounded-2xl p-8 md:p-10 w-full hover:border-[#b19ffb]/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(177,159,251,0.15)] transition-all duration-500 cursor-default">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-4 h-4 text-[#b19ffb] group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} />
                </svg>
                <span className="text-sm font-medium text-gray-100">ChatNHS</span>
                <span className="text-[10px] tracking-wider text-gray-500 uppercase ml-1 group-hover:text-[#b19ffb]/70 transition-colors">Concept Preview</span>
              </div>

              {/* Card Body */}
              <div className="space-y-6">
                <p className="text-sm text-gray-200">
                  How could I explore information through conversation?
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Start with a question. A conversational interface can help make complex information easier to navigate.
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-10 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                <p className="text-[11px] text-gray-600">
                  Illustrative design only. Visit ChatNHS for the live product.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;