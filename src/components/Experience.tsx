import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, CalendarDays } from 'lucide-react';

// Experience component with timeline layout
const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-20 bg-primary-50 dark:bg-primary-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary-500 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-16 md:w-20 h-1 bg-accent-500 mx-auto mt-3 md:mt-4 mb-4 md:mb-6"></div>
          <p className="text-sm md:text-base text-primary-400 dark:text-primary-200 max-w-2xl mx-auto">
            My professional journey and career achievements.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-600 z-0"></div>
          
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline content */}
                <div className={`w-full md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                  <div 
                    className={`bg-white dark:bg-primary-700 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                      index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
                    }`}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-primary-500 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="flex items-center text-base md:text-lg font-medium text-accent-500 mb-2 md:mb-3">
                      <Briefcase size={16} className="mr-2 inline" />
                      {exp.company}
                    </h4>
                    <div className="flex items-center text-xs md:text-sm text-primary-400 dark:text-primary-300 mb-3 md:mb-4">
                      <CalendarDays size={14} className="mr-2 inline" />
                      {exp.period}
                    </div>
                    <ul className="space-y-2 text-sm md:text-base text-primary-400 dark:text-primary-200">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                    {exp.technologies && (
                      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-primary-100 dark:border-primary-600">
                        <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                          {exp.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className="inline-block px-2 md:px-3 py-1 bg-primary-100 dark:bg-primary-600 text-primary-500 dark:text-primary-200 text-xs font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 rounded-full bg-accent-500 shadow-md items-center justify-center z-10">
                  <span className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-white"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;