import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Program Analyst Intern",
      company: "Wells Fargo",
      location: "Bangalore, India",
      period: "Apr 2025 - June 2025",
      type: "Full-time",
      summary: "Led assessment of enterprise data classification frameworks while driving AI-powered automation.",
      responsibilities: [
        "Defined classification criteria, AI/ML feature assessments, and integration strategies.",
        "Developed recommendations for AI-driven automation and future Gen AI integrations."
      ],
      achievements: [
        "Delivered a comprehensive comparative analysis using Pugh Matrix methodology.",
        "Demonstrated AI-powered data classification automation potential with regulatory audit readiness."
      ]
    },
    {
      title: "Senior BFS Consultant",
      company: "LTIMindtree",
      location: "Pune, India",
      period: "2021 - 2024",
      type: "Full-time",
      summary: "As a Senior Consultant I managed backend operations to ensure system reliability and performance.",
      responsibilities: [
        "Managed backend systems and resolved production issues using Java, Unix, SQL, and ServiceNow.",
        "Handled database operations across Oracle, PostgreSQL, MySQL, and coordinated deployments via OpenShift and Jira."
      ],
      achievements: [
        "Delivered critical fixes and downtime for high-impact banking systems at ABSA Bank.",
        "Recognized for streamlining incident management processes, improving resolution time by over 30%."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Little More Education Group",
      location: "Mumbai, India",
      period: "2020 - 2021",
      type: "Part-time",
      summary: "Assisted in teaching grammar and phonics to young learners, focusing on foundational language skills.",
      responsibilities: [
        "Supported lesson delivery in grammar and phonics for early learners.",
        "Helped students improve pronunciation and language comprehension."
      ],
      achievements: [
        "Improved student reading accuracy through targeted phonics support.",
        "Praised for creating engaging, student-friendly learning activities."
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-primary-600 font-medium mb-2">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-xs font-semibold">
                        {exp.type}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-gray-700 mt-4 leading-relaxed">{exp.summary}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-start">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
