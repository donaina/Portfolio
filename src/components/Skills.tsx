import React, { useState } from 'react';
import { skills } from '../data/portfolioData';

const SkillCategories = ['All', 'Business', 'Technical', 'Management', 'Soft Skills', 'Tools', 'Methodology'];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-500 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 mb-6"></div>
          <p className="text-primary-400 dark:text-primary-200 max-w-2xl mx-auto">
            Core competencies and professional skills I've developed throughout my career.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SkillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-accent-500 text-primary-700 shadow-md'
                  : 'bg-primary-100 dark:bg-primary-700 text-primary-500 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.id} 
              className="bg-primary-50 dark:bg-primary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slideInUp"
            >
              <div className="flex justify-between mb-3">
                <h3 className="text-lg font-bold text-primary-500 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium px-2 py-1 bg-primary-100 dark:bg-primary-700 text-primary-500 dark:text-primary-200 rounded-full">
                  {skill.category}
                </span>
              </div>
              <div className="w-full bg-primary-200 dark:bg-primary-700 rounded-full h-2.5">
                <div 
                  className="bg-accent-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-sm text-primary-400 dark:text-primary-300">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;