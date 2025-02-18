import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'PHP', 'Python', 'MySQL', 'MongoDB']
    },
    {
      title: 'AI/ML',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'TensorFlow', 'OpenCV']
    },
    {
      title: 'Tools & Others',
      skills: ['Git & GitHub', 'Figma', 'Canva', 'Adobe XD', 'VS Code']
    }
  ];

  return (
    <section className="py-20">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl backdrop-blur-sm ${
                darkMode 
                  ? 'bg-blue-500/5 ring-1 ring-blue-500/20' 
                  : 'bg-white shadow-xl shadow-blue-100'
              }`}
            >
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full text-sm ${
                      darkMode
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;