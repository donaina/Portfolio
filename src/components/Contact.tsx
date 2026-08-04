import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, CheckCircle2, XCircle } from 'lucide-react';
import Section from './ui/Section';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setNotification({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setTimeout(() => {
          setNotification({ type: null, message: '' });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
      setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 5000);
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
    <Section
      id="contact"
      eyebrow="// 06 — CONTACT"
      title="Get in touch"
      description="Building or operating payment infrastructure? I'm open to senior engineering and payments roles, and to building things worth talking about."
    >
      {/* Notification Toast */}
      {notification.type && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 p-4 rounded-sm shadow-lg transition-all duration-500 ${
          notification.type === 'success' ? 'bg-success-500' : 'bg-error-500'
        } text-white`}>
          {notification.type === 'success' ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : (
            <XCircle className="w-6 h-6" />
          )}
          <p className="text-sm">{notification.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="border border-night-500 bg-night-800 rounded-sm p-8 frame-corners">
          <h3 className="font-heading text-xl font-medium text-ink mb-8">Contact information</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-champagne-400 mt-1 shrink-0" />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-3 mb-1">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-ink-2 hover:text-champagne-300 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-champagne-400 mt-1 shrink-0" />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-3 mb-1">Phone</p>
                <a href={`tel:${personalInfo.phone}`} className="text-ink-2 hover:text-champagne-300 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-champagne-400 mt-1 shrink-0" />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-3 mb-1">Location</p>
                <p className="text-ink-2">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-line">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-3 mb-4">Elsewhere</p>
            <div className="flex gap-3">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-night-500 rounded-sm text-ink-2 hover:border-champagne-500/50 hover:text-champagne-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              {personalInfo.socialLinks.twitter && (
                <a
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-night-500 rounded-sm text-ink-2 hover:border-champagne-500/50 hover:text-champagne-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              )}
              {personalInfo.socialLinks.github && (
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-night-500 rounded-sm text-ink-2 hover:border-champagne-500/50 hover:text-champagne-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border border-night-500 bg-night-800 rounded-sm p-8">
          <h3 className="font-heading text-xl font-medium text-ink mb-8">Send a message</h3>

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
                <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-ink-3 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-sm border border-night-500 bg-night-900 text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-champagne-400/60"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-ink-3 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-sm border border-night-500 bg-night-900 text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-champagne-400/60"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-wider text-ink-3 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-sm border border-night-500 bg-night-900 text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-champagne-400/60"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-ink-3 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-sm border border-night-500 bg-night-900 text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-champagne-400/60"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-champagne-400 text-night-950 font-medium text-sm hover:bg-champagne-300 transition-colors"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
