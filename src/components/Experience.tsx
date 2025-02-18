import React from 'react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      company: 'NifTycoon',
      role: 'Associate Software Engineer',
      period: 'August 2022 - Present',
      description: 'At NifTycoon, I worked as a Associate Software Engineer and Designer. As a Software Engineer, I utilized PHP for server-side development and integrated front-end features using Bootstrap. Additionally, I designed user-friendly interfaces using tools like Figma, Canva, and Adobe, ensuring smooth integration between the front-end and back-end for high-performance web applications.',
      link: 'https://niftycoon.in'
    },
    {
      company: 'Angstromers',
      role: 'Trainee Engineer',
      period: 'June 2024 - Present',
      description: 'I am currently interning at Angstromers, working on AI-driven research and development projects. My responsibilities include coding in Python, contributing to algorithm development, and collaborating on project implementation. I actively use GitHub for version control and project management, gaining valuable hands-on experience in AI technologies.',
      link: 'https://www.linkedin.com/company/angstromers/'
    }
  ];

  const education = [
    {
      school: 'Cambridge Institute of Technology',
      degree: 'Bachelor of Engineering - BE, Computer Science',
      period: 'Dec 2022 - May 2025',
      score: '8.12 CGPA',
      link: 'https://engg.cambridge.edu.in/'
    },
    {
      school: 'Government Polytechnic Athani',
      degree: 'Diploma of Education, Electronics and Communication Engineering',
      period: 'May 2018 - Dec 2021',
      score: '83.16%',
      link: 'https://gpt.karnataka.gov.in/gptathani/public/en'
    }
  ];

  return (
    <section className="py-20">
      <div className="space-y-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
          Experience & Education
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-justify">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl transition-all hover:scale-[1.02] ${
                    darkMode 
                      ? 'bg-blue-500/5 ring-1 ring-blue-500/20' 
                      : 'bg-white shadow-xl shadow-blue-100'
                  }`}
                >
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'} hover:text-blue-500`}
                  >
                    {exp.company}
                  </a>
                  <p className="text-blue-500 dark:text-blue-400 mb-2">{exp.role}</p>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</p>
                  <p className={`${darkMode ? 'text-gray-300 text-justify' : 'text-gray-600'}`}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl transition-all hover:scale-[1.02] ${
                    darkMode 
                      ? 'bg-blue-500/5 ring-1 ring-blue-500/20' 
                      : 'bg-white shadow-xl shadow-blue-100'
                  }`}
                >
                  <a 
                    href={edu.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'} hover:text-blue-500`}
                  >
                    {edu.school}
                  </a>
                  <p className="text-blue-500 dark:text-blue-400 mb-2">{edu.degree}</p>
                  <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{edu.period}</p>
                  <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
