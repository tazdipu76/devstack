import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-slate-600 pt-16 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16">
          {/* Brand & Left Info Section */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev<span className="text-pink-500">Stack</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Links Section */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8 pt-2 md:pt-0">
            {/* PRODUCT */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-5">
                PRODUCT
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href="#home" className="text-slate-400 hover:text-slate-800 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-slate-400 hover:text-slate-800 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-slate-800 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-5">
                COMPANY
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-slate-800 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-slate-800 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-slate-400 hover:text-slate-800 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-5">
                LEGAL
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href="#privacy" className="text-slate-400 hover:text-slate-800 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-slate-400 hover:text-slate-800 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright with Privacy and Terms */}
        <div className="pt-8 border-t border-slate-100/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-slate-700 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-700 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;