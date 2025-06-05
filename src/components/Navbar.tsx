import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Ship, Menu, X, Phone, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 rounded-md transition ${
      isActive
        ? 'text-white bg-primary-600'
        : isScrolled
        ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600'
        : 'text-white hover:bg-white/10'
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-primary-900/50 backdrop-blur-sm py-5 md:py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Ship
              size={32}
              className={`transition-colors ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? 'text-primary-950' : 'text-white'
              }`}
            >
              OceanicShift
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-1">
              <NavLink to="/" className={navLinkClasses} end>
                {t('nav.home')}
              </NavLink>
              <NavLink to="/about" className={navLinkClasses}>
                {t('nav.about')}
              </NavLink>
              <NavLink to="/services" className={navLinkClasses}>
                {t('nav.services')}
              </NavLink>
              <NavLink to="/tracking" className={navLinkClasses}>
                {t('nav.tracking')}
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                {t('nav.contact')}
              </NavLink>
            </nav>

            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Globe2 size={18} />
              <span>{language.toUpperCase()}</span>
            </button>

            <Link
              to="/contact"
              className={`hidden lg:flex items-center space-x-2 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              } font-medium`}
            >
              <Phone size={18} />
              <span>+1 (888) 123-4567</span>
            </Link>

            <Link
              to="/contact"
              className={`btn ${
                isScrolled
                  ? 'bg-primary-600 hover:bg-primary-700 text-white'
                  : 'bg-white text-primary-900 hover:bg-white/90'
              }`}
            >
              {t('nav.getQuote')}
            </Link>
          </div>

          <button
            className={`md:hidden p-2 rounded-md ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen bg-white' : 'max-h-0'
        }`}
      >
        <div className="container-custom py-4 space-y-4">
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={navLinkClasses}
              end
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </NavLink>
            <NavLink
              to="/services"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.services')}
            </NavLink>
            <NavLink
              to="/tracking"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.tracking')}
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </NavLink>
          </nav>

          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <Globe2 size={18} />
            <span>{language.toUpperCase()}</span>
          </button>

          <div className="flex items-center space-x-2 text-primary-600 font-medium">
            <Phone size={18} />
            <span>+1 (888) 123-4567</span>
          </div>

          <Link
            to="/contact"
            className="btn-primary w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.getQuote')}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;