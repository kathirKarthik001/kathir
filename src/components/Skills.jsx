import React from 'react';

const Skills = () => {
  // List of skills with icons (you can use any icon library or custom SVGs)
  const skills = [
    { name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png' },
    { name: 'Next.js', icon: 'https://img.icons8.com/color/48/000000/nextjs.png' },
    { name: 'Express', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' }, // Using Node.js icon for Express
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    { name: 'Postman', icon: 'https://img.icons8.com/color/48/000000/postman-api.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png' },
    { name: 'React Native', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/48/000000/figma.png' },
  ];

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;