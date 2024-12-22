import { motion } from 'framer-motion';
import { sectionVariants } from '../../utils/animations';
import { projectsData } from '../../data/projects';
import PropTypes from 'prop-types';

const Projects = () => {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-20"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" // Maintain flex column layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -10 }}
  >
    <div className="bg-gray-200 h-48 flex items-center justify-center">
      <img 
        src={project.image} 
        alt={project.title} 
        className="object-cover h-full w-full"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow"> {/* flex-grow ensures full height usage */}
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <div 
        className="text-gray-600 overflow-y-auto mb-4" // Scrollable content
        style={{ maxHeight: '150px' }} // Fixed height for scrollable description
      >
        {project.description}
      </div>
      <div className="mt-auto space-x-4 flex">
        {project.link && (
          <a 
            href={project.link} 
            className="inline-block text-gray-500 hover:text-blue-500 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Project
          </a>
        )}
        {project.github && (
          <a 
            href={project.github} 
            className="inline-block text-gray-500 hover:text-blue-500 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
);



ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};



export default Projects;