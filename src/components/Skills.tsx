import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Database, Brain, Settings, Cloud, Code } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 size={24} />,
      color: "primary",
      skills: [
        { name: "Python", level: 95 },
        { name: "R Programming", level: 85 },
        { name: "Machine Learning", level: 90 },
        { name: "Statistical Analysis", level: 88 },
        { name: "Data Visualization", level: 92 },
        { name: "Pandas/NumPy", level: 90 }
      ]
    },
    {
      title: "Business Intelligence",
      icon: <Database size={24} />,
      color: "secondary",
      skills: [
        { name: "Tableau", level: 90 },
        { name: "Power BI", level: 88 },
        { name: "SQL", level: 92 },
        { name: "Excel Advanced", level: 95 },
        { name: "Business Analysis", level: 85 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain size={24} />,
      color: "accent",
      skills: [
        { name: "Scikit-learn", level: 88 },
        { name: "TensorFlow", level: 80 },
        { name: "Deep Learning", level: 78 },
        { name: "NLP", level: 75 },
        { name: "AutoML", level: 85 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={24} />,
      color: "primary",
      skills: [
        { name: "Azure", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "Linux", level: 82 },
        { name: "Powershell", level: 70 },
        { name: "Unix", level: 85}
      ]
    },
    {
      title: "Programming & Development",
      icon: <Code size={24} />,
      color: "secondary",
      skills: [
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Streamlit", level: 88 },
        { name: "React JS", level: 82 },
        { name: "Web Development", level: 78 }
      ]
    },
    {
      title: "Database Management",
      icon: <Settings size={24} />,
      color: "accent",
      skills: [
        { name: "Oracle", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "Data Warehousing", level: 80 },
        { name: "ETL Processes", level: 82 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Machine Learning Masters",
      issuer: "iNeuron.ai",
      date: "June 2020 - Feb 2021",
      image: "/public/Machine Learning certificate .jpg",
      link: "https://drive.google.com/file/d/1wOWH0gpYmEcWit3ez8hFbiFTox3RsUBu/view?usp=drive_link"
    },
    {
      name: "Statistics for Data Science",
      issuer: "iNeuron.ai",
      date: "June 2020 - July 2020",
      image: "/public/Statistics_certificate.jpg",
      link: "https://drive.google.com/file/d/1BMjJqalS-MAL5S9GG4-o4sq7D5YjQgeB/view?usp=drive_link"
    },
    {
      name: "Tableau Data Analyst",
      issuer: "LinkedIn Learning",
      date: "June 2025",
      image: "/public/Tableau Certified Data Analyst_page-0001.jpg",
      link: "https://drive.google.com/file/d/1mXn2F9xAb3OVwt-fgoNwPnBFsm9UmlKQ/view?usp=drive_link"
    },
    {
      name: "Visualizing Data with Microsoft Power BI",
      issuer: "iNeuron.ai",
      date: "April 2020 - May 2020",
      image: "/public/Power BI certificate .jpg",
      link: "https://drive.google.com/file/d/1peYKO7-ZUe2i0wf5WlBwo6k93p6pmrVD/view?usp=drive_link"
    },
    {
      name: "Python Programming",
      issuer: "Microsoft",
      date: "March 2019 - April 2019",
      image: "/public/Microsoft_Python.jpg",
      link: "https://drive.google.com/file/d/1Gx7tXWfdgdV8sS9HKyK9XM3qkhLM-UuT/view?usp=drive_link"
    },
    {
      name: "Excel Forumulas and Functions",
      issuer: "LinkedIn Learning",
      date: "August 2024",
      image: "/public/Excel Formulas and Functions Certificate_page-0001.jpg",
      link: "https://drive.google.com/file/d/1mCz0yJhR8FiPWGVQtpA8SIzxiWBowJHH/view?usp=drive_link"
    }
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

  const getColorClass = (color: string, type: string) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-50',
        text: 'text-primary-600',
        border: 'border-primary-200',
        progress: 'bg-primary-600'
      },
      secondary: {
        bg: 'bg-secondary-50',
        text: 'text-secondary-600',
        border: 'border-secondary-200',
        progress: 'bg-secondary-600'
      },
      accent: {
        bg: 'bg-accent-50',
        text: 'text-accent-600',
        border: 'border-accent-200',
        progress: 'bg-accent-600'
      }
    };
    return colorMap[color as keyof typeof colorMap][type as keyof typeof colorMap.primary];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills in data science, business analytics, and professional certifications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className={`${getColorClass(category.color, 'bg')} ${getColorClass(category.color, 'border')} border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`${getColorClass(category.color, 'text')} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${getColorClass(category.color, 'progress')}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-8 h-8 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-primary-600 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-500">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;