import React from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-500 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 mb-6"></div>
          <p className="text-primary-400 dark:text-primary-200 max-w-2xl mx-auto">
            Showcasing some of the key projects I've worked on throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary-50 dark:bg-primary-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col animate-slideInUp"
            >
              {project.imageUrl && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
              )}
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-primary-500 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-primary-400 dark:text-primary-200 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-700 text-primary-500 dark:text-primary-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.projectUrl && (
                <div className="px-6 pb-4">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;