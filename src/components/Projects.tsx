import React from 'react';
import { Github, Globe } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Question Paper Generation using NLP',
      period: 'Oct 2024 - Jan 2024',
      description: 'This project uses AI and NLP to automate question paper creation, extracting key concepts from educational materials for diverse, customizable assessments. It streamlines the process, saving time and boosting efficiency for educators.',
      technologies: ['Python', 'JavaScript', 'Node.js', 'React.js', 'AWS', 'Google Cloud Storage', 'MongoDB', 'Jupyter Notebooks'],
      links: {
        website: 'https://kiranrajbadakambi.vercel.app/',
        github: 'https://github.com/KiranRaj-B'
      }
    },
    {
      title: 'Ravi Badakambi Portfolio',
      period: 'Jan 2025 - Jan 2025',
      description: 'Designed and Developed a portfolio website for Ravi Badakambi, a Youth President in Athani and business owner. The project was built using React, TypeScript, and Node.js, ensuring a modern and dynamic user experience.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Canva'],
      links: {
        website: 'https://www.ravibadakambi.com/',
        github: 'https://github.com/KiranRaj-B'
      }
    },
    {
      title: 'Online Examination System',
      period: 'Jun 2023 - Oct 2023',
      description: 'Developed a feature-rich platform for learning programming languages and conducting subject-specific tests with certificate issuance. Utilized HTML, CSS, Bootstrap, PHP, and MySQL for a robust and efficient design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL', 'PHP', 'Figma'],
      links: {
        website: 'https://kiranrajbadakambi.vercel.app/',
        github: 'https://github.com/KiranRaj-B'
      }
    },
    {
      title: 'Tours and Travels UI',
      period: '2023',
      description: 'Designed and developed user-friendly UI/UX for a tours and travel platform, enhancing customer engagement and navigation. Assisted developers by creating intuitive website layouts and interactive components, ensuring seamless integration and a responsive user experience.',
      technologies: ['Figma', 'Canva', 'Adobe ', 'InVision', 'Magic UI'],
      links: {
        website: 'https://kiranrajbadakambi.vercel.app/',
        github: 'https://github.com/KiranRaj-B'
      }
    }
  ];

  return (
    <section className="py-20">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-8 rounded-xl transition-all hover:scale-[1.02] cursor-pointer flex flex-col justify-between items-start space-y-4 ${
                darkMode
                  ? 'bg-blue-500/5 ring-1 ring-blue-500/20'
                  : 'bg-white shadow-xl shadow-blue-100'
              }`}
            >
              {/* Project Details */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.period}</p>
                <p className={`text-justify mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* GitHub and Website Icons */}
              <div className="flex gap-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors`}
                >
                  <Github size={24} />
                </a>
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors`}
                >
                  <Globe size={24} />
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
