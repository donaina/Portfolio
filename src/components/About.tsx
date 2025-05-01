import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-500 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 mb-6"></div>
          <p className="text-primary-400 dark:text-primary-200 max-w-2xl mx-auto">
            Learn more about my background, skills, and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold text-primary-500 dark:text-white mb-4">
              Professional Overview
            </h3>
            <p className="text-primary-400 dark:text-primary-200 mb-6 leading-relaxed">
              I am a results-oriented IT professional with over 7 years of progressive experience in core banking systems, digital transformation, and financial technology integration. Currently serving as the Core Banking Platform Lead at KATSU Network Limited (SABI Africa), I specialize in managing mission-critical banking applications, optimizing system performance, and driving strategic initiatives that enhance operational efficiency and customer satisfaction.
            </p>
            <p className="text-primary-400 dark:text-primary-200 mb-6 leading-relaxed">
              My expertise spans core banking platforms such as MIFOS and EazyBankAX, database administration (MSSQL & MySQL), disaster recovery planning, and fintech service integration for microfinance institutions. I have successfully led cross-functional teams, implemented ISO27001 strategies, and orchestrated digital transformation projects that scale financial services across SMEs and underserved markets.
            </p>
            <p className="text-primary-400 dark:text-primary-200 leading-relaxed">
              With a strong foundation in transaction analysis, IT service management (ITIL V4), AWS data processing, and firewall administration, I bring a blend of technical depth and business acumen to deliver innovative, secure, and scalable solutions in the financial services space.
            </p>
          </div>

          <div className="bg-primary-50 dark:bg-primary-800 rounded-lg p-8 shadow-md animate-slideInRight">
            <h3 className="text-2xl font-bold text-primary-500 dark:text-white mb-6">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 text-accent-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-primary-500 dark:text-white">Email</h4>
                  <p className="text-primary-400 dark:text-primary-200">{personalInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 text-accent-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-primary-500 dark:text-white">Phone</h4>
                  <p className="text-primary-400 dark:text-primary-200">{personalInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 text-accent-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-primary-500 dark:text-white">Location</h4>
                  <p className="text-primary-400 dark:text-primary-200">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary-200 dark:border-primary-700">
              <h4 className="font-semibold text-lg text-primary-500 dark:text-white mb-3">
                My Approach
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-primary-400 dark:text-primary-200">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Collaborative problem-solving
                </li>
                <li className="flex items-center text-primary-400 dark:text-primary-200">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  User-centered design thinking
                </li>
                <li className="flex items-center text-primary-400 dark:text-primary-200">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Data-driven decision making
                </li>
                <li className="flex items-center text-primary-400 dark:text-primary-200">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Continuous improvement mindset
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;