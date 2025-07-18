import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile & Buttons */}
            <motion.div variants={itemVariants}>
              <div className="relative text-center">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl mb-6">
                  <img
                    src="/Portfolio/Profile.jpeg"
                    alt="Gauri Nagre - Professional Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">View My Work</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { label: 'Work Experience', id: 'experience' },
                    { label: 'Education', id: 'education' },
                    { label: 'Projects', id: 'projects' },
                    { label: 'Skills', id: 'skills' },
                    { label: 'Achievements', id: 'achievements' }
                  ].map(({ label, id }) => (
                    <motion.button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className="px-5 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:from-primary-200 hover:to-primary-300 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As a versatile professional combining <strong>business analytics</strong> and <strong>data science</strong> knowledge, I bring a unique perspective to solving complex business challenges with my experience across <strong>data analysis, machine learning, DevOps</strong> and <strong>strategic planning</strong> helping organizations make informed decisions based on data-driven insights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am passionate about the entire <strong>data lifecycle</strong> – from collection and processing to analysis and deployment. My background ensures that analytical solutions are not only insightful but also scalable, reliable, and efficiently deployed in production environments.
              </p>

              {/* Mission and Passion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Target className="text-primary-600 mb-3" size={32} />
                  <h4 className="font-semibold text-gray-900 mb-2">Mission</h4>
                  <p className="text-gray-600 text-sm">
                    To leverage data analytics and modern technology to drive strategic business decisions and create scalable solutions.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Heart className="text-accent-600 mb-3" size={32} />
                  <h4 className="font-semibold text-gray-900 mb-2">Passion</h4>
                  <p className="text-gray-600 text-sm">
                    Driven by data-driven insights, automation, and the intersection of business strategy with cutting-edge technology.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
