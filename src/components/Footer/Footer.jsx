// components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white text-center py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dominic Bell. All Rights Reserved.
        </p>
        <div className="mt-4">
          <a 
            href="https://github.com/dobell733" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/dominic-bell-a65200139" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:dominicbell30@outlook.com" 
            className="text-gray-400 hover:text-white mx-2"
          >
            Email Me
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
