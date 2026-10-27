import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Use Cases', path: '/usecases' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { title: 'AI chatbots' },
    { title: 'Custom AI software' },
    { title: 'Intelligent automation' }
  ];

  const policies = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR', path: '/gdpr' }
  ];

  return (
    // Changed background to a deep purplish-black and added a purple-tinted top border
    <footer className="bg-[#0B0816] text-white pt-20 pb-10 border-t border-[#b19ffb]/20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 mb-6 group">
              {/* Adjusted logo background to blend with the new purple theme */}
              <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-md flex items-center justify-center group-hover:border-[#b19ffb] transition-colors">
                <span className="text-[#b19ffb] font-semibold text-sm">P</span>
              </div>
              <span className="text-sm font-medium tracking-wide text-gray-100 group-hover:text-white transition-colors">
                PLUTO ANALYTICS
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Focused on intelligent automation, conversational experiences, and custom software built around your next move.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#b19ffb] mb-6 uppercase">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 text-sm hover:text-[#b19ffb] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#b19ffb] mb-6 uppercase">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 text-sm hover:text-[#b19ffb] transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-400 text-sm hover:text-[#b19ffb] transition-colors duration-300 inline-flex items-center"
                >
                  All Services /
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#b19ffb] mb-6 uppercase">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <span className="block text-xs text-gray-500 mb-1">Email</span>
                <a href="mailto:contact@plutoanalytics.com" className="hover:text-[#b19ffb] transition-colors">
                  contact@plutoanalytics.com
                </a>
              </li>
              <li>
                <span className="block text-xs text-gray-500 mb-1">Phone</span>
                <a href="tel:+15551234567" className="hover:text-[#b19ffb] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <span className="block text-xs text-gray-500 mb-1">Location</span>
                <span className="leading-relaxed">
                  123 AI Street<br />
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Pluto Analytics. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-xs text-gray-500">
            {policies.map((policy) => (
              <Link 
                key={policy.name} 
                to={policy.path} 
                className="hover:text-[#b19ffb] transition-colors duration-300"
              >
                {policy.name}
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;