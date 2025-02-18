import React from 'react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    'Introduction to Natural Language Certificate (Infosys Springboard) - 2024',
    'Full Stack Web Development using Python (Indian Tech-Keys) - 2023',
    'Artificial Intelligence Certificate (Infosys Springboard) - 2023',
    'Deep Learning Certificate (Infosys Springboard) - 2024',
    'Python Foundation Certificate (Infosys Springboard) - 2022'
  ];

  return (
    <section className="py-20">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
          Certifications
        </h2>
        <div className={`p-8 rounded-xl backdrop-blur-sm ${
          darkMode 
            ? 'bg-blue-500/5 ring-1 ring-blue-500/20' 
            : 'bg-white shadow-xl shadow-blue-100'
        }`}>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className={`p-4 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-blue-500/10 text-gray-300' 
                    : 'bg-blue-50 text-gray-700'
                }`}
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;