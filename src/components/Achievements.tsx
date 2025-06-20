import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Users, Target, Award, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Award size={32} />,
      title: "Certificate of Appreciation - LTI",
      description: "Recognized for outstanding performance and continuous contributions to AMS Digital L2 Support",
      year: "2022",
      category: "Professional Excellence",
      image: "/public/WhatsApp Image 2025-06-19 at 4.38.14 PM.jpeg"
    },
    {
      icon: <Trophy size={32} />,
      title: "2nd Position - INQUISTA Analytics Competition",
      description: "Secured 2nd position in analytics case competition hosted by Symbiosis Centre for Management Studies, Bengaluru",
      year: "2025",
      category: "Academic Achievement",
      image: "/public/WhatsApp Image 2025-06-19 at 4.38.13 PM.jpeg"
    },
    {
      icon: <Star size={32} />,
      title: "Certificate of Merit - National College",
      description: "Achieved 1st position in IoT Projects event at the 7th Annual Inter-Collegiate Computer Science Festival",
      year: "2020",
      category: "Technical Excellence",
      image: "/public/WhatsApp Image 2025-06-19 at 4.38.13 PM (1).jpeg"
    },
    {
      icon: <Users size={32} />,
      title: "1st Runner Up - Team Techno Divas",
      description: "Led team to secure 1st Runner Up position in technical competition, demonstrating leadership and technical skills",
      year: "2020",
      category: "Team Leadership",
      image: "/public/WhatsApp Image 2025-06-19 at 4.34.40 PM (1).jpeg"
    },
    {
      icon: <Zap size={32} />,
      title: "Certificate of Appreciation - ABSA Digital Support",
      description: "Recognized for outstanding performance and continuous contributions to AMS Digital Support operations",
      year: "2022",
      category: "Professional Recognition",
      image: "/public/WhatsApp Image 2025-06-19 at 4.38.14 PM.jpeg"
    },
    {
      icon: <Zap size={32} />,
      title: "Certificate of Participation - Avishkar Research Convention",
      description: "Cleared first round of National Level technical research competition",
      year: "2020",
      category: "Academic Achievement",
      image: "/public/BSCIT_Inter_College_Project_certificate.jpg"
    }
  ];

  const stats = [
    { number: "5+", label: "Professional Certifications", icon: <Award size={24} /> },
    { number: "3+", label: "Years Experience", icon: <Target size={24} /> },
    { number: "2", label: "Major Projects Completed", icon: <Star size={24} /> },
    { number: "5+", label: "Technical Achievements", icon: <Trophy size={24} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Highlights of my professional journey and the recognition I've received for my contributions in data science, analytics, and technical excellence.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-primary-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg mr-4 flex-shrink-0">
                    <div className="text-primary-600">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary-600 font-medium">
                        {achievement.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {achievement.image && (
                  <div className="mt-4">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Drive Data-Driven Success Together?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Let's collaborate and leverage data analytics to solve complex business challenges. I bring expertise in data science, business analysis, and a proven track record of delivering results.
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;