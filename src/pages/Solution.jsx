import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Custom Hook for Scroll Reveal Animations
const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
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

const solutions = [
  {
    title: "A clearer customer journey",
    description:
      "Explore conversational touchpoints that help visitors find information and take their next step.",
    // Kept original Predictive Analytics icon, updated color to match new theme
    icon: (
      <svg
        className="w-6 h-6 text-[#b19ffb]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 3v2m0 14v2m8-8h2M3 11h2m12.364-5.364l1.414 1.414M6.222 17.778l1.414 1.414M17.778 17.778l-1.414 1.414M6.222 6.222l-1.414 1.414"
        />
      </svg>
    ),
  },
  {
    title: "A more connected workflow",
    description:
      "Look at how information moves between your people and systems, and identify opportunities to simplify.",
    // Kept original Automation Workflows icon
    icon: (
      <svg
        className="w-6 h-6 text-[#b19ffb]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
  {
    title: "A better way to explore data",
    description:
      "Consider natural-language interfaces and focused software experiences for navigating complex information.",
    // Kept original AI Optimization icon
    icon: (
      <svg
        className="w-6 h-6 text-[#b19ffb]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m1-7a9 9 0 11-6.364 15.364"
        />
      </svg>
    ),
  },
];

const Solutions = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#05050A] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#b19ffb] selection:text-black">
      
      {/* Keyframes for Animations */}
      <style>
        {`
          @keyframes sweep {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
          
          .card-sweep::after {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 50%; height: 100%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%);
            transform: translateX(-100%) skewX(-15deg);
            z-index: 1;
          }
          .group:hover .card-sweep::after {
            animation: sweep 1s forwards;
          }
        `}
      </style>

      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <Reveal delay={100}>
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-8 uppercase">
            Solutions
          </p>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] mb-8 tracking-tight">
            Connect the dots.<br />
            <span className="text-[#b19ffb]">Open new possibilities.</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            Bring conversational AI, data, and automation together around a specific business challenge.
          </p>
        </Reveal>
      </section>

      {/* ================= SOLUTIONS GRID ================= */}
      <section className="py-12 px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <div
                className="group relative bg-[#0A0A11] border border-white/5 rounded-2xl p-8 hover:border-[#b19ffb]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(177,159,251,0.15)] cursor-default"
              >
                {/* Shimmer Sweep Effect */}
                <div className="card-sweep absolute inset-0 z-0 pointer-events-none"></div>

                {/* Hover Gradient Effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b19ffb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Box */}
                  <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-lg bg-[#14141F] border border-white/10 group-hover:bg-[#1A1A28] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {s.icon}
                  </div>

                  <h3 className="text-xl font-normal mb-4 text-gray-100 group-hover:text-white transition-colors">{s.title}</h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                    {s.description}
                  </p>

                  <Link
                    to="/contact"
                    className="text-sm font-medium text-gray-500 group-hover:text-[#b19ffb] transition-colors inline-flex items-center mt-auto"
                  >
                    Explore the possibilities
                    <span className="ml-2 group-hover:translate-x-1 transition-transform"></span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Solutions;