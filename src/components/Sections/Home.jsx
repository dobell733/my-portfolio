import { motion } from 'framer-motion';
import { sectionVariants } from '../../utils/animations';
import PropTypes from 'prop-types';

const Home = ({ setActiveSection }) => {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-20"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-6xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I&apos;m Dominic
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        A passionate developer building amazing web experiences
      </motion.p>
      <motion.button
        className="bg-gray-900 text-white px-8 py-3 rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveSection('projects')}
      >
        View My Work
      </motion.button>
    </motion.section>
  );
};
Home.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

export default Home;