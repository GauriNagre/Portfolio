import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Gauri Nagre
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate software developer dedicated to creating innovative solutions 
              and exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/gaurinagre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/gauri-nagre-3b68551a0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:gaurinagre13@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm flex items-center justify-center">
              © {currentYear} 
              <motion.span
                className="mx-1 text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
              </motion.span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;