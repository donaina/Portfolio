import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-primary-50 dark:bg-primary-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-500 dark:text-white">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 mb-6"></div>
          <p className="text-primary-400 dark:text-primary-200 max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="bg-white dark:bg-primary-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden animate-slideInUp"
            >
              <div className="bg-primary-500 p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <GraduationCap className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-lg font-bold text-white">
                    {edu.institution}
                  </h3>
                </div>
                <span className="text-sm text-white bg-primary-600 px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary-500 dark:text-white mb-3">
                  {edu.degree}
                </h4>
                
                {edu.description && (
                  <p className="text-primary-400 dark:text-primary-200">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;