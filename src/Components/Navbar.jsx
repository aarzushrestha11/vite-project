import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Update active link based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.path === currentPath);
    if (activeItem) {
      setActiveLink(activeItem.name);
    } else {
      setActiveLink(''); // For routes like /under-construction
    }
  }, [location]);

  const handleLinkClick = (itemName) => {
    setActiveLink(itemName);
    if (window.innerWidth <= 768) setIsMenuOpen(false);
  };

  // Handle scroll effect for background blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#05050A]/90 backdrop-blur-md border-b border-white/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-[#14141F] border border-white/10 rounded-md flex items-center justify-center group-hover:border-[#b19ffb] transition-colors">
              <span className="text-[#b19ffb] font-semibold text-sm">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium tracking-wide text-gray-100 group-hover:text-white transition-colors">
                PLUTO ANALYTICS
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleLinkClick(item.name)}
                className={`relative text-sm transition-colors duration-300 py-1 ${
                  activeLink === item.name
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
                
                {/* Active Indicator (Small Purple Dot) */}
                {activeLink === item.name && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#b19ffb] rounded-full shadow-[0_0_8px_#b19ffb]"></span>
                )}
              </Link>
            ))}
          </div>

          {/* ================= CTA BUTTON ================= */}
          <div className="hidden md:flex items-center">
            <a href="https://nhschat.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#b19ffb] text-[#05050A] px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-[#c5b7ff] transition-colors duration-300">
                ChatNHS
              </button>
            </a>
          </div>

          {/* ================= MOBILE MENU TOGGLE ================= */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-colors"
            aria-label="menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU DROPDOWN ================= */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="bg-[#0A0A11] border border-white/10 rounded-xl p-4 flex flex-col space-y-2 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleLinkClick(item.name)}
                className={`px-4 py-3 rounded-lg text-sm transition-colors duration-300 ${
                  activeLink === item.name
                    ? 'bg-white/5 text-[#b19ffb] font-medium'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
          
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;