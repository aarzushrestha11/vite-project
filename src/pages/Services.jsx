import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaCogs,
  FaPlug,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import botImage from "../assets/contactHeroImage.png";

const services = [
  {
    icon: <FaRobot />,
    title: "AI Chatbot Development",
    description: "Custom AI chatbots for websites, apps and social platforms.",
    subtitle:
      "We design and develop custom AI chatbots to enhance customer engagement, automate support, and drive business.",
    bulletPoints: ["Website Chatbots", "Customer Support Bots"],
    popupFeatures: [
      {
        title: "Website Chatbots",
        desc: "Deploy intelligent chatbots on your website to engage visitors, answer queries, and convert leads 24/7.",
      },
      {
        title: "Messaging Bots",
        desc: "Build AI bots for WhatsApp, Messenger, Telegram, and other platforms.",
      },
      {
        title: "Customer Support Automation",
        desc: "Automate customer support with AI chatbots that provide instant responses.",
      },
      {
        title: "Lead Generation Bots",
        desc: "Capture and qualify leads automatically using conversational AI.",
      },
      {
        title: "Multilingual AI Bots",
        desc: "Serve global customers with multilingual chatbot support.",
      },
    ],
  },
  {
    icon: <FaCogs />,
    title: "Custom AI Software",
    description: "AI-powered solutions tailored to meet unique business needs.",
    subtitle:
      "We build intelligent AI software solutions designed specifically for your business workflows.",
    bulletPoints: ["Business Automation Tools", "AI-Powered Platforms"],
    popupFeatures: [
      {
        title: "AI Business Automation",
        desc: "Automate repetitive business processes using AI.",
      },
      {
        title: "Custom AI Platforms",
        desc: "Develop scalable AI platforms tailored to your business.",
      },
      {
        title: "Machine Learning Models",
        desc: "Design and deploy ML models that evolve with your data.",
      },
      {
        title: "Predictive Intelligence",
        desc: "Forecast trends and business outcomes using AI.",
      },
    ],
  },
  {
    icon: <FaPlug />,
    title: "AI Integration",
    description: "Integrate AI into your current systems and workflows.",
    subtitle:
      "Seamlessly integrate AI technologies into your existing infrastructure.",
    bulletPoints: ["Data-Driven Insights", "AI-Powered Dashboards"],
    popupFeatures: [
      {
        title: "System Integration",
        desc: "Integrate AI with CRM, ERP, and internal tools.",
      },
      {
        title: "API & Cloud Integration",
        desc: "Secure API and cloud-based AI integration.",
      },
      {
        title: "Data Pipelines",
        desc: "Build data pipelines for AI-driven insights.",
      },
      {
        title: "AI Dashboards",
        desc: "Visualize performance and insights using dashboards.",
      },
    ],
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics & Insights",
    description: "Advanced analytics to derive meaningful insights from your data.",
    subtitle:
      "Transform raw data into actionable insights using AI-powered analytics.",
    bulletPoints: ["Data-Driven Insights", "Powerful Dashboards"],
    popupFeatures: [
      {
        title: "Advanced Analytics",
        desc: "Analyze large datasets to uncover patterns and trends.",
      },
      {
        title: "Real-Time Dashboards",
        desc: "Track KPIs in real time with smart dashboards.",
      },
      {
        title: "Predictive Analytics",
        desc: "Predict customer behavior and market trends.",
      },
      {
        title: "Data Visualization",
        desc: "Present insights through intuitive visualizations.",
      },
    ],
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  const openModal = (service) => {
    setActiveService(service);
    setOpen(true);
  };

  const handleContact = () => {
    setOpen(false);
    navigate("/contact");
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="pt-16 pb-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Our <span className="text-indigo-400">AI Services</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Tailored solutions to empower your business with AI
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-8 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-indigo-800/30"
              >
                {/* CARD ICON */}
                <div className="w-14 h-14 mb-4 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl">
                  {s.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-white/80 text-sm mb-5">{s.description}</p>

                <ul className="space-y-2 mb-6">
                  {s.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-indigo-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(s)}
                  className="text-indigo-400 font-semibold inline-flex items-center hover:text-indigo-300 transition"
                >
                  Learn More <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative max-w-5xl w-full rounded-2xl bg-gradient-to-br from-[#3b1fa8] to-[#1a1140] border border-white/20 shadow-2xl">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
            >
              ✕
            </button>

            <div className="text-center px-8 pt-8 pb-4">
              <h2 className="text-3xl font-extrabold mb-2">
                {activeService.title}
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto text-sm">
                {activeService.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pb-8">
              <div className="flex items-center justify-center bg-indigo-900/30 rounded-xl p-6">
                <img
                  src={botImage}
                  alt="AI Illustration"
                  className="w-56 drop-shadow-[0_0_40px_rgba(99,102,241,0.8)]"
                />
              </div>

              <div className="space-y-5">
                {activeService.popupFeatures.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <FaCheckCircle className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold">{f.title}</h4>
                      <p className="text-white/70 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center pb-6">
              <button
                onClick={handleContact}
                className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-bold transition"
              >
                Contact Us
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
