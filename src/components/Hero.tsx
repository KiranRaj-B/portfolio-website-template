import React from 'react';
import { Mail, MapPin, Phone} from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="min-h-[90vh] flex items-center section-spacing">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-blue-500' : 'bg-blue-700'}`} />
              <img
                src="https://kiranrajbadakambi.vercel.app/kiru_raj.jpg"
                alt="Kiran Badakambi"
                className="relative rounded-full w-48 h-48 mx-auto md:w-64 md:h-64 object-cover shadow-2xl ring-4 ring-blue-500/20 glow"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
                  Hi, I'm Kiran 👋
                </h1>
                <div className="absolute -inset-1 blur-2xl opacity-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg -z-10" />
              </div>
              <h3 className={`text-xl text-justify ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Highly motivated and skilled individual with excellent time management and planning abilities. Currently in the final
              year of a Computer Science and Engineering degree, committed to continuous learning and growth. Known for
              maintaining a positive attitude and effective communication with individuals at all levels. Proven ability to address
              and resolve challenges in a professional and solution-oriented manner.
              </h3>
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start italic">
                <a
                  href="mailto:kiranrajbadakambi@gmail.com"
                  className={`flex items-center gap-2 ${
                    darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  } transition-colors`}
                >
                  <Mail size={20} />
                  <span>kiranrajbadakambi@gmail.com</span>
                </a>
                <a
                  href="tel:+91 9611929845"
                  className={`flex items-center gap-2 ${
                    darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  } transition-colors`}
                >
                  <Phone size={20} />
                  <span>9611929845</span>
                </a>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <MapPin size={20} />
                  <span>Bengaluru, India</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {['Full Stack Development', 'Data Science', 'AI/ML', 'UI/UX Design', 'Problem Solving'].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                      darkMode
                        ? 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;