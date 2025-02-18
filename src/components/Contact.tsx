import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section className="py-20">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <div className={`p-8 rounded-xl backdrop-blur-sm ${
          darkMode 
            ? 'bg-blue-500/5 ring-1 ring-blue-500/20' 
            : 'bg-white shadow-xl shadow-blue-100'
        }`}>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300 text-justify' : 'text-gray-600'}`}>
          Want to chat? If you’ve got any questions or something on your mind, just DM me with a direct question, and I’ll get back to you as soon as I can!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:kiranrajbadakambi@gmail.com"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kiran-badakambi-7ba132234/?originalSubdomain=in"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:from-blue-800 hover:to-blue-900 transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;