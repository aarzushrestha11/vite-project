import React, { useState, useEffect, useRef } from "react";
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

// Data structured to match the screenshot, reusing the 3 original icons
const useCasesData = [
  {
    category: "Conversation",
    title: "Customer questions",
    description:
      "Help visitors explore common questions through a conversational website experience.",
    icon: (
      <svg className="w-5 h-5 text-gray-300 group-hover:text-[#b19ffb] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M3 9l4 4 4-4 4 4 4-4" />
      </svg>
    ),
  },
  {
    category: "Automation",
    title: "Routine task handoffs",
    description:
      "Explore how recurring work can move between teams and tools with fewer manual steps.",
    icon: (
      <svg className="w-5 h-5 text-gray-300 group-hover:text-[#b19ffb] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7" />
      </svg>
    ),
  },
  {
    category: "Data",
    title: "Knowledge discovery",
    description:
      "Make internal information easier to navigate through a focused search or conversational interface.",
    icon: (
      <svg className="w-5 h-5 text-gray-300 group-hover:text-[#b19ffb] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm6 0a6 6 0 01-12 0" />
      </svg>
    ),
  },
  {
    category: "Conversation",
    title: "Guided exploration",
    description:
      "Support visitors as they explore services and decide where to go next.",
    icon: (
      <svg className="w-5 h-5 text-gray-300 group-hover:text-[#b19ffb] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M3 9l4 4 4-4 4 4 4-4" />
      </svg>
    ),
  },
  {
    category: "Automation",
    title: "Information intake",
    description:
      "Explore structured workflows for gathering and organizing incoming requests.",
    icon: (
      <svg className="w-5 h-5 text-gray-300 group-hover:text-[#b19ffb] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7" />
      </svg>
    ),
  },
  {
    category: "Data",
    title: "Data exploration",
    description:
      "Consider a tailored interface that helps people ask questions about relevant data.",
    icon: (
      <svg className="w-5 h-5 text-gray-300 group-hover:text-[#b19ffb] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm6 0a6 6 0 01-12 0" />
      </svg>
    ),
  },
];

const UseCases = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Conversation", "Automation", "Data"];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter logic
  const filteredUseCases =
    activeFilter === "All"
      ? useCasesData
      : useCasesData.filter((uc) => uc.category === activeFilter);

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
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <Reveal delay={100}>
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-8 uppercase">
            Use Cases
          </p>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] mb-8 tracking-tight">
            See the potential.<br />
            <span className="text-[#b19ffb]">Find your starting point.</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
            Illustrative applications of AI across everyday business challenges. These examples show possibilities, rather than verified client results.
          </p>
        </Reveal>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="px-6 max-w-7xl mx-auto mb-10">
        <Reveal delay={400}>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#b19ffb] text-[#05050A] font-medium shadow-[0_0_15px_rgba(177,159,251,0.3)] scale-105"
                    : "bg-transparent border border-white/20 text-gray-300 hover:border-[#b19ffb]/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= USE CASES GRID ================= */}
      <section className="py-6 px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUseCases.map((uc, i) => (
            // Using the activeFilter in the key forces React to re-mount the cards 
            // and replay the scroll animation when a new filter is selected.
            <Reveal key={`${activeFilter}-${i}`} delay={i * 100}>
              <div
                className="group relative bg-[#0A0A11] border border-white/5 rounded-2xl p-8 hover:border-[#b19ffb]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(177,159,251,0.15)] cursor-default"
              >
                {/* Shimmer Sweep Effect */}
                <div className="card-sweep absolute inset-0 z-0 pointer-events-none"></div>

                {/* Hover Gradient Effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b19ffb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Box */}
                  <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-[#14141F] border border-white/10 group-hover:bg-[#1A1A28] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {uc.icon}
                  </div>

                  {/* Category Tag */}
                  <p className="text-[11px] text-gray-500 mb-4 group-hover:text-[#b19ffb]/70 transition-colors">{uc.category}</p>

                  {/* Title */}
                  <h3 className="text-xl font-normal mb-4 text-gray-100 group-hover:text-white transition-colors">{uc.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                    {uc.description}
                  </p>

                  {/* Link */}
                  <Link
                    to="/contact"
                    className="text-sm font-medium text-gray-500 group-hover:text-[#b19ffb] transition-colors inline-flex items-center mt-auto"
                  >
                    Discuss an application
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

export default UseCases;