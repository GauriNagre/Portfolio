import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Business Administration",
      specialization: "Business Analytics",
      institution: "Symbiosis Institute of Business Management (SIBM) Bengaluru",
      location: "Bengaluru, India",
      period: "2024 - 2026",
      type: "Full Time",
      highlights: [
        "Specializing in Business Analytics and Data-Driven Decision Making",
        "Focus on Strategic Management and Business Intelligence",
        "Advanced coursework in Machine Learning and Statistical Analysis"
      ]
    },
    {
      degree: "Bachelor of Science",
      specialization: "Information Technology",
      institution: "Vidyalankar Institute of Technology",
      location: "Mumbai, India",
      period: "2017 - 2020",
      type: "Full Time",
      highlights: [
        "Core subjects: Data Structures, Algorithms, Database Management",
        "Specialized in Software Development and System Analysis",
        "Strong foundation in Programming and Web Technologies"
      ]
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
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="text-primary-600 mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {edu.degree}
                      </h3>
                    </div>
                    
                    <h4 className="text-lg font-medium text-primary-600 mb-2">
                      {edu.specialization}
                    </h4>
                    
                    <h5 className="text-md font-medium text-gray-800 mb-3">
                      {edu.institution}
                    </h5>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm space-y-1 sm:space-y-0 sm:space-x-4 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center text-accent-600 font-medium">
                        <Award size={14} className="mr-1" />
                        {edu.type}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Key Highlights:</h5>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-gray-700 flex items-start">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;