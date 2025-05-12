import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(window.location.pathname, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        // Clear form data
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        alert('Message sent successfully!');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-primary-50 dark:bg-primary-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-500 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 mb-6"></div>
          <p className="text-primary-400 dark:text-primary-200 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-primary-700 rounded-lg shadow-md p-8 animate-slideInLeft">
            <h3 className="text-2xl font-bold text-primary-500 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-primary-500 dark:text-white">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-primary-400 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-accent-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-primary-500 dark:text-white">Phone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-primary-400 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-primary-500 dark:text-white">Location</h4>
                  <p className="text-primary-400 dark:text-primary-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-primary-500 dark:text-white mb-4">
              Follow Me
            </h4>
            <div className="flex space-x-4">
              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary-100 dark:bg-primary-600 rounded-full text-primary-500 dark:text-white hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {personalInfo.socialLinks.twitter && (
                <a 
                  href={personalInfo.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-100 dark:bg-primary-600 rounded-full text-primary-500 dark:text-white hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              )}
              {personalInfo.socialLinks.github && (
                <a 
                  href={personalInfo.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-100 dark:bg-primary-600 rounded-full text-primary-500 dark:text-white hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>
          
          <div className="bg-white dark:bg-primary-700 rounded-lg shadow-md p-8 animate-slideInRight">
            <h3 className="text-2xl font-bold text-primary-500 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-500 dark:text-primary-200 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-primary-200 dark:border-primary-600 bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-500 dark:text-primary-200 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-primary-200 dark:border-primary-600 bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-500 dark:text-primary-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-primary-200 dark:border-primary-600 bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-500 dark:text-primary-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-primary-200 dark:border-primary-600 bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-accent-500 text-white rounded-md transition-colors duration-300 hover:bg-accent-600"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;