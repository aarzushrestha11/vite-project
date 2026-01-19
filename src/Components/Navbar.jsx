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
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'py-0' : 'py-0'
      }`}
      style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div
        className="mx-auto transition-all duration-500 ease-out"
        style={{ width: containerWidth, maxWidth: '7xl' }}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? 'bg-gradient-to-r from-indigo-900/90 via-black/70 to-purple-900/90 backdrop-blur-xl shadow-2xl border border-white/20 rounded-4xl px-5 py-2'
              : 'bg-gradient-to-br from-indigo-900 via-black to-purple-900 px-5 py-2 '
          }`}
        >
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-12' : 'h-14'}`}>
            <Link to="/" className="flex items-center space-x-2">
              <div
                className={`bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                  isScrolled ? 'w-9 h-9 rounded-lg' : 'w-10 h-10'
                }`}
              >
                <span className={`text-white font-bold transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                  P
                </span>
              </div>
              <div className={`transition-all duration-500 ${isScrolled ? 'hidden md:block' : ''}`}>
                <span
                  className={`font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500 ${
                    isScrolled ? 'text-lg' : 'text-xl'
                  }`}
                >
                  {isScrolled ? 'PLUTO' : 'PLUTO ANALYTICS'}
                </span>
                {!isScrolled && <p className="text-xs text-indigo-400 -mt-1">AI-Powered Intelligence</p>}
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleLinkClick(item.name)}
                  className={`relative font-medium transition-all duration-300 ${
                    activeLink === item.name
                      ? isScrolled
                        ? 'text-white font-semibold'
                        : 'text-indigo-400 font-semibold'
                      : isScrolled
                      ? 'text-white/90 hover:text-white'
                      : 'text-gray-200 hover:text-indigo-400'
                  }`}
                >
                  {item.name}
                  {activeLink === item.name && (
                    <span
                      className={`absolute -bottom-1 left-0 w-full rounded-full transition-all duration-300 ${
                        isScrolled
                          ? 'h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400'
                          : 'h-1 bg-gradient-to-r from-indigo-400 to-purple-500'
                      }`}
                    ></span>
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
             <a href="https://nhschat.com/" target="_blank" rel="noopener noreferrer">
  <button
    className={`font-semibold transition-all duration-500 ${
      isScrolled
        ? 'px-5 py-2 bg-transparent border border-white/50 text-white rounded-full hover:bg-white/10 text-sm'
        : 'px-4 py-2 bg-indigo-400 border-2 border-purple-500 text-white rounded-full hover:bg-indigo-500 hover:border-purple-600 hover:text-white'
    }`}
  >
    ChatNHS
  </button>
</a>

            </div>

            <button
              onClick={toggleMenu}
              className={`md:hidden focus:outline-none w-10 h-10 flex items-center justify-center transition-all duration-500 ${
                isScrolled ? 'text-white' : 'text-gray-200 hover:text-indigo-400'
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

          <div
            className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
              isMenuOpen ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <div
              className={`flex flex-col space-y-2 py-3 px-3 rounded-xl ${
                isScrolled
                  ? 'bg-indigo-900/80 backdrop-blur-md'
                  : 'bg-gradient-to-br from-indigo-900 via-black to-purple-900/95 backdrop-blur-sm'
              }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleLinkClick(item.name)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeLink === item.name
                      ? isScrolled
                        ? 'bg-white/20 text-white border-l-4 border-white'
                        : 'bg-indigo-400/20 text-indigo-400 border-l-4 border-indigo-400'
                      : isScrolled
                      ? 'text-white/90 hover:bg-white/10'
                      : 'text-gray-200 hover:text-indigo-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-white/30">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button
                    className={`w-full py-2 font-semibold rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? 'bg-transparent border border-white text-white hover:bg-white/10'
                        : 'bg-indigo-400 border-2 border-purple-500 text-white hover:bg-indigo-500'
                    }`}
                  >
                    Talk to Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
