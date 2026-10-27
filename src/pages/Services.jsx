import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaCogs, FaPlug, FaCheckCircle } from "react-icons/fa";
import botImage from "../assets/contactHeroImage.png";

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

// Data for the 3 services
const services = [
  {
    title: "AI chatbots",
    description:
      "Give people a more natural way to find answers, explore information, and connect with your business.",
    icon: <FaRobot />,
    subtitle: "We design and develop custom AI chatbots to enhance customer engagement and automate support.",
    popupFeatures: [
      { title: "Website Chatbots", desc: "Deploy intelligent chatbots on your website to engage visitors and convert leads 24/7." },
      { title: "Messaging Bots", desc: "Build AI bots for WhatsApp, Messenger, Telegram, and other platforms." },
      { title: "Customer Support Automation", desc: "Automate customer support with AI chatbots that provide instant responses." },
    ],
  },
  {
    title: "Custom AI software",
    description:
      "Build around your business challenges, with software shaped to fit your workflows and goals.",
    icon: <FaCogs />,
    subtitle: "We build intelligent AI software solutions designed specifically for your business workflows.",
    popupFeatures: [
      { title: "AI Business Automation", desc: "Automate repetitive business processes using AI." },
      { title: "Custom AI Platforms", desc: "Develop scalable AI platforms tailored to your business." },
      { title: "Machine Learning Models", desc: "Design and deploy ML models that evolve with your data." },
    ],
  },
  {
    title: "Intelligent automation",
    description:
      "Connect repetitive tasks into thoughtful workflows so your team can focus on work that matters.",
    icon: <FaPlug />,
    subtitle: "Seamlessly integrate AI technologies into your existing infrastructure to automate workflows.",
    popupFeatures: [
      { title: "System Integration", desc: "Integrate AI with CRM, ERP, and internal tools." },
      { title: "API & Cloud Integration", desc: "Secure API and cloud-based AI integration." },
      { title: "Data Pipelines", desc: "Build data pipelines for AI-driven insights." },
    ],
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (service) => {
    setActiveService(service);
    setOpen(true);
  };

  const handleContact = () => {
    setOpen(false);
    navigate("/contact");
  };

  return (
    <div className="bg-[#05050A] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#b19ffb] selection:text-black">
      
      {/* Keyframes for Animations */}
      <style>
        {`
          @keyframes sweep {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scale-up {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
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

          .animate-modal-overlay { animation: fade-in 0.3s ease-out forwards; }
          .animate-modal-content { animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        `}
      </style>

      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <Reveal delay={100}>
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-8 uppercase">
            Our Services
          </p>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] mb-8 tracking-tight">
            Your ambition.<br />
            <span className="text-[#b19ffb]">Our starting point.</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            Explore three ways to bring AI into the way your business works, communicates, and grows.
          </p>
        </Reveal>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-12 px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <div
                onClick={() => openModal(s)}
                className="group relative bg-[#0A0A11] border border-white/5 rounded-2xl p-8 hover:border-[#b19ffb]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(177,159,251,0.15)] cursor-pointer"
              >
                {/* Shimmer Sweep Effect */}
                <div className="card-sweep absolute inset-0 z-0 pointer-events-none"></div>

                {/* Hover Gradient Effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b19ffb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Box */}
                  <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-lg bg-[#14141F] border border-white/10 group-hover:bg-[#1A1A28] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-[#b19ffb] text-xl">
                    {s.icon}
                  </div>

                  <h3 className="text-xl font-normal mb-4 text-gray-100 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                    {s.description}
                  </p>

                  <span className="text-sm font-medium text-gray-500 group-hover:text-[#b19ffb] transition-colors inline-flex items-center mt-auto">
                    Explore the possibilities
                   
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm animate-modal-overlay">
          <div className="relative max-w-4xl w-full rounded-2xl bg-[#0A0A11] border border-white/10 shadow-2xl overflow-hidden animate-modal-content">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl z-10 transition-colors"
            >
              ✕
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-normal mb-4 text-white">
                  {activeService.title}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
                  {activeService.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Image Container */}
                <div className="flex items-center justify-center bg-[#14141F] border border-white/5 rounded-xl p-8">
                  <img
                    src={botImage}
                    alt="AI Illustration"
                    className="w-48 md:w-64 drop-shadow-[0_0_30px_rgba(177,159,251,0.2)]"
                  />
                </div>

                {/* Features List */}
                <div className="space-y-6">
                  {activeService.popupFeatures.map((f, i) => (
                    <div key={i} className="flex gap-4 group/modal">
                      <div className="mt-1 shrink-0 group-hover/modal:scale-110 transition-transform">
                        <FaCheckCircle className="text-[#b19ffb] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-100 mb-1 group-hover/modal:text-white transition-colors">{f.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-12 pt-8 border-t border-white/10">
                <button
                  onClick={handleContact}
                  className="px-8 py-3 bg-[#b19ffb] text-[#05050A] rounded-md font-semibold text-sm hover:bg-[#c5b7ff] hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(177,159,251,0.2)] hover:shadow-[0_0_25px_rgba(177,159,251,0.4)]"
                >
                  Start a conversation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Services;