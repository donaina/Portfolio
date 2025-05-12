import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Add a hidden form to the DOM for Netlify to detect
    const form = document.createElement('form');
    form.setAttribute('name', 'contact');
    form.setAttribute('data-netlify', 'true');
    form.setAttribute('data-netlify-honeypot', 'bot-field');
    form.setAttribute('hidden', 'true');
    
    const formName = document.createElement('input');
    formName.setAttribute('type', 'hidden');
    formName.setAttribute('name', 'form-name');
    formName.setAttribute('value', 'contact');
    
    const botField = document.createElement('input');
    botField.setAttribute('type', 'hidden');
    botField.setAttribute('name', 'bot-field');
    
    form.appendChild(formName);
    form.appendChild(botField);
    document.body.appendChild(form);
    
    return () => {
      document.body.removeChild(form);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus('success');
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
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
            
            {status === 'success' ? (
              <div className="bg-green-100 dark:bg-green-900 border border-green-500 text-green-700 dark:text-green-300 rounded-md p-4">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                {status === 'error' && (
                  <div className="bg-red-100 dark:bg-red-900 border border-red-500 text-red-700 dark:text-red-300 rounded-md p-4">
                    <p>{errorMessage}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-500 dark:text-primary-200 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
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
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-primary-200 dark:border-primary-600 bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full flex items-center justify-center px-6 py-3 bg-accent-500 text-white rounded-md transition-colors duration-300 ${
                    status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent-600'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;