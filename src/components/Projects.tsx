import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Semi-AutoML WebApp for Learning Data Science",
      description: "Developed an interactive web app that simplifies the learning of data science concepts through a Semi-AutoML approach, enabling users to run ML models and visualize outputs without deep coding knowledge.",
      technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      category: "Web Application",
      icon: <Code size={24} />,
      features: [
        "Simplified ML learning for beginners through guided automation",
        "Enabled interactive visualizations and end-to-end ML workflows",
        "User-friendly interface for non-technical users",
        "Real-time model training and evaluation"
      ],
      demo: "#",
      github: "https://github.com/GauriNagre/EZYML"
    },
    {
      title: "Smart Sewage Cleaning System",
      description: "Designed an IoT-based solution using embedded sensors to detect rising sewage levels in manholes and alert cleaners via a mobile app, triggering automated cleaning trucks for immediate action.",
      technologies: ["Arduino", "Embedded C", "IoT Sensors", "Android App", "Firebase"],
      category: "IoT Application",
      icon: <Smartphone size={24} />,
      features: [
        "Enabled real-time alerts for efficient sewage management",
        "Reduced manual labor risks and improved sanitation response time",
        "Automated notification system for cleaning crews",
        "Real-time monitoring dashboard for city management"
      ],
      demo: "#",
      github: "https://github.com/GauriNagre/SSCS"
    }
  ];

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

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills in data science, machine learning, and IoT development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-primary-100 rounded-lg mr-4">
                        <div className="text-primary-600">
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <span className="text-sm text-primary-600 font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;