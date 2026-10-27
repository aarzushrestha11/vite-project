import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [containerWidth, setContainerWidth] = useState('100%');
  const navRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Use Cases', path: '/usecases' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.path === currentPath);
    if (activeItem) setActiveLink(activeItem.name);
  }, [location]);

  const handleLinkClick = (item) => {
    setActiveLink(item);
    if (window.innerWidth <= 768) setIsMenuOpen(false);
  };

  // Original Scroll Animation Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);

      if (scrolled) {
        const scrollY = Math.min(window.scrollY - 100, 300);
        const percentage = 100 - (scrollY / 300) * 20;
        setContainerWidth(`${percentage}%`);
      } else {
        setContainerWidth('100%');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'py-2' : 'py-0'
      }`}
      style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div
        className="mx-auto transition-all duration-500 ease-out"
        style={{ width: containerWidth, maxWidth: '80rem' }} // max-w-7xl
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              // Lighter color (#1A142E), more transparent (/75), softer blur
              ? 'bg-[#1A142E]/75 backdrop-blur-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] border border-[#b19ffb]/30 rounded-full px-6 py-2'
              : 'bg-transparent border border-transparent px-6 py-4'
          }`}
        >
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'}`}>
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div
                className={`bg-[#14141F] border border-white/10 flex items-center justify-center group-hover:border-[#b19ffb] transition-all duration-500 ${
                  isScrolled ? 'w-8 h-8 rounded-md' : 'w-9 h-9 rounded-lg'
                }`}
              >
                <span className={`text-[#b19ffb] font-semibold transition-all duration-500 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                  P
                </span>
              </div>
              <div className={`transition-all duration-500 ${isScrolled ? 'hidden sm:block' : ''}`}>
                <span
                  className={`font-medium tracking-wide text-gray-100 group-hover:text-white transition-all duration-500 ${
                    isScrolled ? 'text-sm' : 'text-base'
                  }`}
                >
                  {isScrolled ? 'PLUTO' : 'PLUTO ANALYTICS'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleLinkClick(item.name)}
                  className={`relative text-sm font-medium transition-all duration-300 py-1 ${
                    activeLink === item.name
                      ? 'text-[#b19ffb]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {/* Active Indicator (Small Purple Dot) */}
                  {activeLink === item.name && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#b19ffb] rounded-full shadow-[0_0_8px_#b19ffb] transition-all duration-300"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className={`md:hidden focus:outline-none w-10 h-10 flex items-center justify-center transition-all duration-500 text-gray-300 hover:text-white`}
              aria-label="menu"
            >
              <div className="relative w-6 h-6">
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
              isMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <div
              // Updated mobile menu to match the lighter transparent theme
              className={`flex flex-col space-y-2 py-3 px-4 rounded-xl border border-[#b19ffb]/20 bg-[#1A142E]/90 backdrop-blur-xl shadow-2xl`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleLinkClick(item.name)}
                  className={`px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                    activeLink === item.name
                      ? 'bg-white/10 text-[#b19ffb] font-medium'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;