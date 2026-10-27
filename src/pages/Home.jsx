import React, { useState, useEffect, useRef } from 'react';
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

// Data for the "What We Do" section
const services = [
  {
    title: 'AI chatbots',
    description:
      'Give people a more natural way to find answers, explore information, and connect with your business.',
    icon: (
      <svg className="w-6 h-6 text-gray-300 group-hover:text-[#b19ffb] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} />
        <rect x="9" y="9" width="6" height="6" rx="1" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: 'Custom AI software',
    description:
      'Build around your business challenges, with software shaped to fit your workflows and goals.',
    icon: (
      <svg className="w-6 h-6 text-gray-300 group-hover:text-[#b19ffb] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 6L8 18" />
      </svg>
    ),
  },
  {
    title: 'Intelligent automation',
    description:
      'Connect repetitive tasks into thoughtful workflows so your team can focus on work that matters.',
    icon: (
      <svg className="w-6 h-6 text-gray-300 group-hover:text-[#b19ffb] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
];

// Data for the "Approach" section
const approachSteps = [
  {
    title: 'Find the right starting point',
    description:
      'Map the challenge, understand the workflow, and identify where AI can add value.',
  },
  {
    title: 'Make the complex feel simple',
    description:
      'Define the experience, explore the solution, and align on a practical direction.',
  },
  {
    title: 'Bring the idea into focus',
    description:
      'Develop, evaluate, and refine the experience around real business needs.',
  },
];

// Data for the FAQ section
const faqs = [
  {
    question: "Where should we start with AI?",
    answer: "Start by identifying a specific bottleneck or repetitive task in your workflow. We can help you map this out during an initial consultation."
  },
  {
    question: "Can a solution fit our existing tools?",
    answer: "Yes. We specialize in custom software and integrations that plug directly into your current CRM, ERP, or internal tools without disrupting your team."
  },
  {
    question: "Is ChatNHS available to explore?",
    answer: "ChatNHS is currently in active development. You can view a concept preview on our About page, or contact us for early access."
  }
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // --- FIX: Scroll to top on page load/reload ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // ----------------------------------------------

  return (
    <div className="bg-[#05050A] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#b19ffb] selection:text-black">
      
      {/* Extended Keyframes for Advanced Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          @keyframes drift {
            0% { transform: translate(0, 0); }
            50% { transform: translate(10px, 15px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.08); }
          }
          @keyframes spin-slow {
            from { transform: rotate(-12deg); }
            to { transform: rotate(348deg); }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes sweep {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
          @keyframes breathe {
            0%, 100% { box-shadow: 0 0 0 0 rgba(177, 159, 251, 0.4); }
            50% { box-shadow: 0 0 0 10px rgba(177, 159, 251, 0); }
          }
          
          .bg-grid-pattern {
            background-size: 50px 50px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          }
          
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-drift { animation: drift 15s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 45s linear infinite; }
          
          .btn-shimmer {
            background-image: linear-gradient(110deg, #b19ffb 45%, #d4c9ff 55%, #b19ffb 65%);
            background-size: 200% 100%;
            animation: shimmer 3s infinite linear;
          }
          
          .btn-breathe { animation: breathe 3s ease-in-out infinite; }
          
          /* Card Sweep Effect */
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

          /* Rotating CTA Glow */
          @keyframes rotate-glow {
            0% { transform: translate(50%, -50%) rotate(0deg); }
            100% { transform: translate(50%, -50%) rotate(360deg); }
          }
          .cta-glow {
            background: conic-gradient(from 0deg, transparent 0 340deg, #b19ffb 360deg);
            animation: rotate-glow 10s linear infinite;
          }
        `}
      </style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex items-center justify-center min-h-[90vh] p-6 md:p-12 lg:p-20 border-b border-white/10 overflow-hidden">
        
        {/* Drifting Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern animate-drift [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
        
        {/* Twinkling Stars */}
        <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-white rounded-full opacity-50 shadow-[0_0_10px_white] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-30 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/5 w-0.5 h-0.5 bg-[#b19ffb] rounded-full opacity-60 animate-pulse delay-1000 shadow-[0_0_8px_#b19ffb]"></div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 relative">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start pt-10 lg:pt-0">
            <Reveal delay={100}>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#b19ffb] mb-8 uppercase">
                AI-Powered Intelligence
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-8 tracking-tight">
                A new orbit<br />
                for your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b19ffb] to-[#8a6df1]">business.</span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mb-10">
                Turn complex data into clear direction. Discover AI chatbots, custom software, and automation built around your next move.
              </p>
            </Reveal>

            <Reveal delay={400} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link 
                  to="/services"
                  className="btn-breathe bg-[#b19ffb] text-[#05050A] font-semibold text-sm px-8 py-4 rounded-md hover:bg-[#c5b7ff] transition-all duration-300 w-full sm:w-auto text-left flex justify-between items-center group"
                >
                  Explore our services 
                  <span className="ml-4 opacity-70 group-hover:translate-x-1 transition-transform"></span>
                </Link>
                <Link 
                  to="/contact"
                  className="bg-transparent border border-gray-600 text-white font-semibold text-sm px-8 py-4 rounded-md hover:bg-white/5 hover:border-gray-400 transition-all duration-300 w-full sm:w-auto text-left flex justify-between items-center group"
                >
                  Let's talk
                  <span className="ml-4 opacity-70 group-hover:translate-x-1 transition-transform"></span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: CSS Planet Graphic */}
          <Reveal delay={500} className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0">
            
            {/* Animated Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-[#4c3575] rounded-full blur-[80px] animate-[pulse-glow_6s_ease-in-out_infinite]"></div>

            {/* Rotating Orbit Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[140px] md:w-[700px] md:h-[240px] border border-white/10 rounded-[100%] animate-spin-slow z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[120px] md:w-[600px] md:h-[200px] border border-white/20 rounded-[100%] animate-spin-slow z-0" style={{ animationDirection: 'reverse', animationDuration: '35s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[100px] md:w-[500px] md:h-[160px] border border-white/30 rounded-[100%] animate-spin-slow z-0" style={{ animationDuration: '25s' }}></div>

            {/* The Planet */}
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4a3375_0%,#1a112b_70%,#0a0514_100%)] shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.9),0_0_60px_rgba(76,53,117,0.4)] z-10 animate-float">
              {/* Pulsing Green Moon */}
              <div className="absolute top-[15%] -right-[15%] md:-right-[20%] w-2 h-2 md:w-3 md:h-3 bg-[#6ee7b7] rounded-full shadow-[0_0_15px_#6ee7b7] z-20 animate-pulse"></div>
            </div>
            
          </Reveal>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#b19ffb] mb-6 uppercase">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-normal leading-tight">
              Complex technology.<br />
              <span className="text-gray-500">Clear possibilities.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="max-w-md">
              <p className="text-gray-400 text-sm leading-relaxed">
                From a first conversation to a smarter workflow, find a new way forward with AI.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <div
                className="group relative bg-[#0A0A11] border border-white/5 rounded-2xl p-8 hover:border-[#b19ffb]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(177,159,251,0.15)] cursor-pointer"
              >
                {/* Shimmer Sweep Effect */}
                <div className="card-sweep absolute inset-0 z-0 pointer-events-none"></div>

                {/* Hover Gradient Effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b19ffb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-lg bg-[#14141F] border border-white/10 group-hover:bg-[#1A1A28] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {s.icon}
                  </div>

                  <h3 className="text-xl font-normal mb-4 text-gray-100 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                    {s.description}
                  </p>

                  <div
                    className="text-sm font-medium text-gray-500 group-hover:text-[#b19ffb] transition-colors inline-flex items-center"
                  >
                    Explore the possibilities 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform"></span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= THE APPROACH ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#b19ffb] mb-6 uppercase">
              The Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-normal leading-tight">
              A clear path from<br />
              idea to impact.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="max-w-md">
              <p className="text-gray-400 text-sm leading-relaxed">
                Start with the problem. Design around the people. Build with a clear purpose.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {approachSteps.map((step, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="group relative pt-8 cursor-default">
                {/* Animated Top Border Draw */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 overflow-hidden">
                  <div className="w-full h-full bg-[#b19ffb] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                </div>

                {/* Large Faint Number */}
                <span className="absolute -top-6 right-0 text-7xl font-bold text-white/[0.03] group-hover:text-[#b19ffb]/10 group-hover:-translate-y-2 transition-all duration-500 select-none">
                  0{i + 1}
                </span>
                
                <h3 className="text-xl font-normal mb-4 text-gray-100 group-hover:text-white transition-colors relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= COMMON QUESTIONS ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <Reveal>
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#b19ffb] mb-6 uppercase">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-normal leading-tight mb-12">
            Before we begin.
          </h2>
        </Reveal>

        <div className="flex flex-col w-full border-t border-white/10">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 100}>
              <div 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="group border-b border-white/10 py-6 cursor-pointer hover:bg-white/[0.02] transition-colors px-2 md:px-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg md:text-xl font-normal text-gray-300 group-hover:text-white transition-colors">
                    {faq.question}
                  </p>
                  <span className={`text-[#b19ffb] text-2xl font-light transition-transform duration-300 ${openFaq === index ? 'rotate-45' : 'rotate-0'}`}>
                    +
                  </span>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="relative bg-[#0B0A14] border border-white/10 rounded-3xl p-10 md:p-16 overflow-hidden group">
            
            {/* Rotating Conic Gradient Glow Background */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none cta-glow"></div>

            <div className="relative z-10">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">
                Your Next Chapter
              </p>
              <h2 className="text-4xl md:text-5xl font-normal leading-tight mb-6">
                Big possibilities.<br />
                <span className="text-[#b19ffb]">Practical next steps.</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                Have an idea, a challenge, or a process that could work better?<br />
                Let's explore what AI could do for your business.
              </p>
              
              {/* Shimmering Button */}
              <Link
                to="/contact"
                className="btn-shimmer inline-block text-[#05050A] px-8 py-4 rounded-md font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(177,159,251,0.2)] hover:shadow-[0_0_30px_rgba(177,159,251,0.5)]"
              >
                Start a conversation 
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
};

export default Home;