import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="bg-[#05050A] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#b19ffb] selection:text-black flex items-center justify-center relative">
      
      {/* Subtle background glow to replace the heavy gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4c3575] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <section className="relative z-10 w-full max-w-3xl px-6 py-20 text-center flex flex-col items-center">
        
        {/* Minimalist Icon Box */}
        <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-lg bg-[#14141F] border border-white/10">
          <svg
            className="w-6 h-6 text-[#b19ffb]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            />
          </svg>
        </div>

        {/* Label */}
        <p className="mb-6 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
          ChatNHS
        </p>

        {/* Heading */}
        <h1 className="mb-8 text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight">
          Page Under<br />
          <span className="text-[#b19ffb]">Construction.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-lg text-sm md:text-base leading-relaxed text-gray-400">
          We're working on something exciting. ChatNHS is currently under development as we build a smarter, more intuitive experience. Please check back soon.
        </p>

        {/* Status Badge */}
        <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0A0A11] px-5 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b19ffb] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b19ffb]" />
          </span>
          <span className="text-xs font-medium text-gray-300">
            Currently Under Development
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-[#b19ffb] px-8 py-3.5 text-sm font-semibold text-[#05050A] hover:bg-[#9d89f5] transition-colors duration-300 w-full sm:w-auto"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10.5L12 3l9 7.5M5.25 9v11.25h13.5V9M9 20.25v-6h6v6"
              />
            </svg>
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-md border border-white/20 bg-transparent px-8 py-3.5 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto"
          >
            Contact Our Team
            <span className="opacity-70 group-hover:translate-x-1 transition-transform"></span>
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-20 text-xs text-gray-600">
          Thank you for your patience.
        </p>
        <p className="mt-2 text-[10px] tracking-widest text-gray-700 uppercase">
          © {new Date().getFullYear()} PlutoAnalytics. All rights reserved.
        </p>

      </section>
    </div>
  );
};

export default UnderConstruction;