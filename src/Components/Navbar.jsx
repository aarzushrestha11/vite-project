import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [containerWidth, setContainerWidth] = useState("100%");
  const navRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Use Cases", path: "/usecases" },
    { name: "Contact", path: "/contact" },
  ];

  const scrollStateRef = useRef({
    ticking: false,
    lastScrollY: 0,
    lastScrolledState: false,
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find((item) => item.path === currentPath);
    if (activeItem) setActiveLink(activeItem.name);
  }, [location]);

  const handleLinkClick = (item) => {
    setActiveLink(item);
    if (window.innerWidth <= 768) setIsMenuOpen(false);
  };

  useEffect(() => {
    const SCROLL_THRESHOLD = 100;
    const BUFFER_ZONE = 20;

    const updateNavbar = () => {
      const scrollY = window.scrollY;

      let scrolled;
      if (scrollY >= SCROLL_THRESHOLD + BUFFER_ZONE) {
        scrolled = true;
      } else if (scrollY <= SCROLL_THRESHOLD - BUFFER_ZONE) {
        scrolled = false;
      } else {
        scrolled = scrollStateRef.current.lastScrolledState;
      }
      if (scrollStateRef.current.lastScrolledState !== scrolled) {
        setIsScrolled(scrolled);
        scrollStateRef.current.lastScrolledState = scrolled;
      }

      let newWidth = 100;
      if (scrolled) {
        const adjustedScroll = Math.min(scrollY - 100, 300);
        let percentage = 100 - (adjustedScroll / 300) * 20;
        percentage = Math.max(80, Math.min(100, percentage));
        newWidth = Math.round(percentage);
      }

      setContainerWidth(newWidth);

      scrollStateRef.current.ticking = false;
      scrollStateRef.current.lastScrollY = scrollY;
    };

    const handleScroll = () => {
      if (!scrollStateRef.current.ticking) {
        globalThis.requestAnimationFrame(updateNavbar);
        scrollStateRef.current.ticking = true;
      }
    };

    let timeoutId;
    const throttledHandleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 10); // Small delay to reduce frequency
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    updateNavbar();

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []); // <- no containerWidth dependency

  return (
    <nav className="sticky top-0 z-50 w-full bg-linear-to-br from-indigo-900 via-black to-purple-900">
      <div className="w-full flex justify-center py-3">
        <div
          style={{
            width: `${containerWidth}%`,
            transition: "width 0.3s ease",
          }}
        >
          <div
            className={`transition-all duration-500 ${
              isScrolled
                ? "backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl px-4 py-2 bg-white/10"
                : "px-5 py-3"
            }`}
          >
            <div className="flex items-center justify-between gap-4 transition-all duration-500">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 shrink-0">
                <div
                  className={`bg-linear-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                    isScrolled ? "w-9 h-9" : "w-10 h-10"
                  }`}
                >
                  <span
                    className={`text-white font-bold transition-all duration-500 ${
                      isScrolled ? "text-lg" : "text-xl"
                    }`}
                  >
                    P
                  </span>
                </div>

                <div>
                  <span
                    className={`font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500 ${
                      isScrolled ? "text-lg" : "text-xl"
                    }`}
                  >
                    {isScrolled ? "PLUTO" : "PLUTO ANALYTICS"}
                  </span>
                  {!isScrolled && (
                    <p className="text-xs text-indigo-400 -mt-1">
                      AI-Powered Intelligence
                    </p>
                  )}
                </div>
              </Link>

              {/* Desktop Links */}
              <div
                className={`hidden lg:flex items-center ${
                  isScrolled ? "space-x-4" : "space-x-6"
                }`}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => handleLinkClick(item.name)}
                    className={`relative font-medium transition-all duration-300 whitespace-nowrap ${
                      activeLink === item.name
                        ? isScrolled
                          ? "text-white font-semibold"
                          : "text-indigo-400 font-semibold"
                        : isScrolled
                          ? "text-white/90 hover:text-white"
                          : "text-gray-200 hover:text-indigo-400"
                    }`}
                  >
                    {item.name}
                    {activeLink === item.name && (
                      <span
                        className={`absolute -bottom-1 left-0 w-full rounded-full ${
                          isScrolled
                            ? "h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"
                            : "h-1 bg-gradient-to-r from-indigo-400 to-purple-500"
                        }`}
                      ></span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Desktop Button */}
              <div className="hidden lg:flex flex-shrink-0">
                <a
                  href="https://nhschat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`font-semibold transition-all duration-300 whitespace-nowrap ${
                      isScrolled
                        ? "px-4 py-2 bg-transparent border border-white/50 text-white rounded-full hover:bg-white/10 text-sm"
                        : "px-4 py-2 bg-indigo-400 border-2 border-purple-500 text-white rounded-full hover:bg-indigo-500"
                    }`}
                  >
                    ChatNHS
                  </button>
                </a>
              </div>

              <button
                onClick={toggleMenu}
                className={`md:hidden focus:outline-none w-10 h-10 flex items-center justify-center transition-all duration-500 ${
                  isScrolled
                    ? "text-white"
                    : "text-gray-200 hover:text-indigo-400"
                }`}
                aria-label="menu"
                aria-expanded={isMenuOpen}
                aria-haspopup="menu"
              >
                <div className="relative w-6 h-6">
                  {isMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`lg:hidden overflow-hidden transition-all duration-300 ${
                isMenuOpen
                  ? "max-h-screen opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col space-y-2 py-3 px-3 rounded-xl bg-indigo-900/80 backdrop-blur-md">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => handleLinkClick(item.name)}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      activeLink === item.name
                        ? "bg-white/20 text-white border-l-4 border-white"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
