import { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import Home from '../components/Sections/Home';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Footer/Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="pt-20 flex-grow">
        {activeSection === 'home' && <Home setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;