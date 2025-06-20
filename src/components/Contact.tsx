import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_5y6rhjr',
        'template_49ks5y9',
        {
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'wxpCFmIEnrwBH0aS9'
      );

      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Something went wrong. Please try again later.');
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "gaurinagre13@gmail.com",
      href: "mailto:gaurinagre13@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Mumbai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/gaurinagre",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gauri-nagre-3b68551a0",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      href: "https://twitter.com/gaurinagre",
      color: "hover:text-blue-400"
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div className="bg-gray-50 rounded-xl p-8" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold ${
                    isSubmitting ? 'bg-gray-400' : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={20} className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a key={index} href={info.href} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-primary-600 mr-4">{info.icon}</div>
                      <div>
                        <div className="text-sm text-gray-600 font-medium">{info.label}</div>
                        <div className="text-gray-900">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-3 bg-gray-50 rounded-lg text-gray-600 ${social.color}`}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;