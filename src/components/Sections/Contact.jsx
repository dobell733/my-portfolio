import { motion } from 'framer-motion';
import { useState } from 'react';
import { sectionVariants } from '../../utils/animations';
import PropTypes from 'prop-types';

const Contact = () => {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-20"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center max-w-lg mx-auto">
        Get in Touch
      </h2>
      <div className="max-w-lg mx-auto">
        <ContactForm />
      </div>
    </motion.section>
  );
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const formData = new FormData(form);
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-50 p-6 rounded-lg text-center"
      >
        <h3 className="text-green-800 text-xl font-semibold mb-2">Thanks for reaching out!</h3>
        <p className="text-green-700">I will respond soon!</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-green-600 underline hover:text-green-700"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <FormField 
        label="Name" 
        inputType="text" 
        name="name"
      />
      <FormField 
        label="Email" 
        inputType="email"
        name="email"
      />
      <FormField 
        label="Message" 
        inputType="textarea" 
        name="message"
      />
      
      <motion.button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 rounded-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

const FormField = ({ label, inputType, name }) => {
  return (
    <div>
      <label className="block text-gray-700 mb-2" htmlFor={name}>{label}</label>
      {inputType === 'textarea' ? (
        <textarea
          name={name}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          rows="4"
          required
        />
      ) : (
        <input
          type={inputType}
          name={name}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          required
        />
      )}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'email', 'textarea']).isRequired,
  name: PropTypes.string.isRequired
};

export default Contact;