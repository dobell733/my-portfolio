import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import MobileMenu from './MobileMenu';
import logo from '../../assets/my_logo.svg';

const Navbar = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and Name */}
          <div className="flex items-center -ml-0.25">
            <motion.img 
              src={logo}
              alt="Logo" 
              className="h-16 w-auto block" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ margin: 0 }}
            />
            <motion.span 
              className="text-xl font-bold ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Dominic Bell
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 pr-4">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <motion.button
                key={section}
                className={`px-3 py-2 rounded-md text-sm font-medium 
                  ${activeSection === section ? 'bg-gray-900 text-white' : 'text-gray-700'}`}
                onClick={() => setActiveSection(section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <MobileMenu 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default Navbar;