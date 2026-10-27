
import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center justify-center border-b border-white/20 bg-gradient-to-r from-indigo-900 via-black to-purple-900 px-6 py-20 text-center">

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">

          {/* Icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-indigo-400/30 bg-gradient-to-br from-indigo-800/60 to-purple-800/60 shadow-xl shadow-indigo-900/20">
            <svg
              className="h-12 w-12 text-indigo-400"
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
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-indigo-400">
            ChatNHS
          </p>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
  Page Under
  <br />
  <span className="text-indigo-400">Construction</span>
</h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            We're working on something exciting! ChatNHS is currently under
            development as we build a smarter experience.
            Please check back soon.
          </p>

          {/* Status */}
          <div className="mx-auto mb-10 inline-flex items-center gap-3 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-indigo-400" />
            </span>

            <span className="text-sm font-medium text-indigo-300">
              Currently Under Development
            </span>
          </div>

          {/* Decorative line */}
          <div className="mx-auto mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

          {/* Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-900/30 transition duration-300 hover:-translate-y-1 hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl"
            >
              <svg
                className="h-5 w-5"
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
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-white/10"
            >
              Contact Our Team
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

          </div>

          {/* Footer */}
          <p className="mt-16 text-sm text-white/40">
            Thank you for your patience.
          </p>

          <p className="mt-3 text-xs tracking-widest text-white/30">
            © {new Date().getFullYear()} PlutoAnalytics. All rights reserved.
          </p>

        </div>
      </section>
    </div>
  );
};

export default UnderConstruction;
