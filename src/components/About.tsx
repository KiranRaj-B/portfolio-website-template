import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section className="section-spacing">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
          About Me
        </h2>
        <div className={`p-8 rounded-xl transition-all hover-glow ${
          darkMode 
            ? 'bg-blue-500/5 ring-1 ring-blue-500/20' 
            : 'bg-white/80 shadow-xl shadow-blue-100'
        }`}>
          <div className="space-y-6 text-justify">
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a Computer Science and Engineering student at Cambridge Institute of Technology, 
              Bangalore, graduating in 2025. Currently, I'm exploring the fascinating intersection 
              of AI and web development through my roles at Angstromers and NifTycoon.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My journey in tech has been driven by a passion for creating innovative solutions 
              that make a real impact. From developing AI-powered applications to designing 
              intuitive user interfaces, I'm constantly pushing the boundaries of what's possible 
              in software development.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              When I'm not coding, you'll find me participating in hackathons, exploring new 
              technologies, or collaborating with fellow developers on exciting projects. I believe 
              in the power of continuous learning and am always eager to take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;