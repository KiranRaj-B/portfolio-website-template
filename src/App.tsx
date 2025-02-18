import { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Globe } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="fixed inset-0 gradient-bg grid-bg -z-10" />
      
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-colors z-50 glow"
        aria-label="Toggle theme"
        style={{
          backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <footer className={`py-6 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/KiranRaj-B" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kiran-badakambi-7ba132234/?originalSubdomain=in" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://kiranrajbadakambi.vercel.app/" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              <Globe size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;