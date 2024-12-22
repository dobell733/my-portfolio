import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, activeSection, setActiveSection }) => {
  if (!isMenuOpen) return null;

  return (
    <motion.div 
      className="md:hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <motion.button
            key={section}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium 
              ${activeSection === section ? 'bg-gray-900 text-white' : 'text-gray-700'}`}
            onClick={() => {
              setActiveSection(section);
              setIsMenuOpen(false);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default MobileMenu;