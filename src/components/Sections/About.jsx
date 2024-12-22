import { motion } from 'framer-motion';
import { sectionVariants } from '../../utils/animations';
import { useImageAnimation } from '../../hooks/useImageAnimation';
import picture from '../../assets/my_picture.jpg';

const About = () => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useImageAnimation();

  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-24"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6" 
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            I&apos;m a results driven .NET/JS software developer with a passion for writing clean, elegant, and efficient code. Much of my professional experience has been in the administrative side of the health care field. However, I decided to pivot in early 2021 when I discovered my love for software development.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            I dedicated about a year to self-learning on Codecademy, immersing myself in various programming languages, concepts, and facets of software development. In March 2022, I decided to take my skills to the next level and officially enrolled in the Post-Baccalaureate Computer Science Program at Oregon State University where I gained a deeper understanding of things like data structures, algorithms, and software engineering principles. All of this led to an eventual internship and a full-time position as a full-stack software developer in 2023.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            I invite you to explore my portfolio and check out the projects I&apos;ve worked on. I&apos;m eager to connect with fellow enthusiasts and collaborate on exciting opportunities. I am open to contributing to open source and volunteering on projects that make the world a better place. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <motion.img 
            src={picture} 
            alt="Picture of Dominic"
            className="w-auto h-auto max-h-[400px] rounded-3xl shadow-xl"
            style={{ rotateX, rotateY }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 } 
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;