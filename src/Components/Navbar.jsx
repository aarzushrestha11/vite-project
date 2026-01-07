import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [containerWidth, setContainerWidth] = useState('100%');
  const navRef = useRef(null);

  // Navigation items for both states
  const navItems = ['Home', 'About', 'Services', 'Solutions', 'Use Cases', 'Contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (item) => {
    setActiveLink(item);
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  // Scroll effect with width animation
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      
      if (scrolled) {
        // Calculate width based on scroll position (from 100% to 80%)
        const scrollY = Math.min(window.scrollY - 100, 300);
        const percentage = 100 - (scrollY / 300) * 20; // Go from 100% to 80%
        setContainerWidth(`${percentage}%`);
      } else {
        setContainerWidth('100%');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      title: 'AI Chatbots',
      description: 'From cartoon color at snaps showing full crowd debate.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Custom AI Software',
      description: 'Screener-informed instances selected in traffick.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Automation Solutions',
      description: 'You\'re in slow color at snout insertion, autoinnovator...',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: 'Expert AI Development',
      description: 'Make an answer at what instance or resources sees written offense solutions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Tailored Solutions',
      description: 'Reheat entropy of experiment not-exponers instantiate antitoxes subdivits.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: 'Proven Results',
      description: 'Chemetin all cases entered mod 6 sentences testing explosive crises. Extracalition.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800" style={{ 
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    }}>
      {/* Main Navbar with Scroll Effects */}
      <nav 
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'py-2' 
            : 'py-4'
        }`}
        style={{ 
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="mx-auto transition-all duration-500 ease-out" style={{ 
          width: containerWidth,
          maxWidth: '7xl',
        }}>
          {/* Main Container - Changes when scrolled */}
          <div className={`transition-all duration-500 ${
            isScrolled 
              ? 'bg-gradient-to-r from-indigo-400/90 to-blue-600/90 backdrop-blur-xl shadow-2xl border border-white/20 rounded-4xl px-6 py-3' 
              : 'px-4'
          }`}>
            <div className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? 'h-12' : 'h-20'
            }`}>
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className={`bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                  isScrolled 
                    ? 'w-9 h-9 rounded-lg' 
                    : 'w-12 h-12'
                }`}>
                  <span className={`text-white font-bold transition-all duration-500 ${
                    isScrolled ? 'text-lg' : 'text-2xl'
                  }`}>P</span>
                </div>
                <div className={`transition-all duration-500 ${isScrolled ? 'hidden md:block' : ''}`}>
                  <span className={`font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent transition-all duration-500 ${
                    isScrolled ? 'text-lg' : 'text-2xl'
                  }`}>
                    {isScrolled ? 'PLUTO' : 'PLUTO ANALYTICS'}
                  </span>
                  {!isScrolled && (
                    <p className="text-xs text-blue-500 -mt-1">AI-Powered Intelligence</p>
                  )}
                </div>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item);
                    }}
                    className={`relative font-medium transition-all duration-300 ${
                      activeLink === item 
                        ? `${isScrolled ? 'text-white font-semibold' : 'text-blue-600 font-semibold'}` 
                        : `${isScrolled ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-blue-500'}`
                    }`}
                  >
                    {item}
                    {activeLink === item && (
                      <span className={`absolute -bottom-1 left-0 w-full rounded-full transition-all duration-300 ${
                        isScrolled 
                          ? 'h-0.5 bg-gradient-to-r from-blue-300 to-white' 
                          : 'h-1 bg-gradient-to-r from-blue-400 to-blue-600'
                      }`}></span>
                    )}
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <button className={`font-semibold transition-all duration-500 ${
                  isScrolled 
                    ? 'px-5 py-2 bg-white text-indigo-600 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 text-sm' 
                    : 'px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:from-blue-600 hover:to-blue-700'
                }`}>
                  {isScrolled ? 'Get Demo' : 'Get a Demo'}
                </button>
                <button className={`font-semibold transition-all duration-500 ${
                  isScrolled 
                    ? 'px-5 py-2 bg-transparent border border-white/50 text-white rounded-full hover:bg-white/10 text-sm' 
                    : 'px-6 py-3 bg-white border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600'
                }`}>
                  {isScrolled ? 'Contact' : 'Talk to Us'}
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className={`md:hidden focus:outline-none w-10 h-10 flex items-center justify-center transition-all duration-500 ${
                  isScrolled ? 'text-white' : 'text-gray-700 hover:text-blue-500'
                }`}
                aria-label="menu"
                aria-expanded={isMenuOpen}
                aria-haspopup="menu"
              >
                <div className="relative w-6 h-6">
                  {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </div>
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div 
              className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
                isMenuOpen 
                  ? 'max-h-screen opacity-100 mt-3' 
                  : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              <div className={`flex flex-col space-y-3 py-4 px-3 rounded-xl ${
                isScrolled ? 'bg-indigo-600/80 backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm'
              }`}>
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item);
                    }}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 ${activeLink === item 
                      ? isScrolled 
                        ? 'bg-white/20 text-white border-l-4 border-white' 
                        : 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                      : isScrolled 
                        ? 'text-white/90 hover:bg-white/10' 
                        : 'text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    {item}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-white/30">
                  <button className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-white text-indigo-600 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg'
                  }`}>
                    Get a Demo
                  </button>
                  <button className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-transparent border border-white text-white hover:bg-white/10' 
                      : 'bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
                  }`}>
                    Talk to Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                AI-Powered Software
              </span>
              <br />
              <span className="text-gray-800">for Smarter Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              We build intelligent AI solutions—from chatbots to custom automation—that help businesses work faster and smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center space-x-2">
                <span>Get a Demo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Talk to Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Blue gradient shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Spacer content to enable scrolling */}
     

      {/* Divider */}
     

      {/* What We Do Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-blue-600 font-medium mb-2">Innovative AI solutions to transform your business</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of AI-powered solutions designed specifically for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-blue-100 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <div className="text-blue-600">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Pluto Analytics</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through our expertise, customization, and proven track record
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that trust Pluto Analytics for their AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule a Demo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-xl font-bold">PLUTO ANALYTICS</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Leading the AI revolution with innovative solutions that transform businesses and enhance customer experiences worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300 block"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.title}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300 block"
                      onClick={(e) => e.preventDefault()}
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300 block"
                    onClick={(e) => e.preventDefault()}
                  >
                    All Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 AI Street, San Francisco, CA</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@plutoanalytics.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Pluto Analytics. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>GDPR</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Focus state style for keyboard navigation */
        *[tabindex]:focus-visible,
        input[type="file"]:focus-visible,
        button:focus-visible {
          outline: 0.125rem solid #4465ff;
          outline-offset: 0.125rem;
        }
        
        /* Smooth transitions */
        .transition-all {
          transition-property: all;
        }
        
        /* Better focus for keyboard users */
        @media (prefers-reduced-motion: no-preference) {
          .focus-visible {
            transition: outline 0.2s ease;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;