import React, { useState } from 'react';
import { ChevronRight, Code, Bot, PenTool } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description, color }) => (
  <div className={`bg-blue-50 dark:bg-zinc-900 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-4 ${color.border}`}>
    <div className="flex justify-between items-start mb-4">
      <Icon className={`${color.icon} w-12 h-12`} />
      <div className={`${color.text} text-xs font-semibold px-2 py-1 rounded-full bg-opacity-20 ${color.bgOpacity}`}>
        Expert
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <button className={`${color.text} flex items-center hover:underline group`}>
      Learn More 
      <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  </div>
);

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    {
      icon: Code,
      title: "Front-end Web Developer",
      description: "Building responsive and dynamic websites with modern frameworks.",
      color: {
        border: "border-blue-500",
        icon: "text-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        bgOpacity: "bg-blue-500"
      }
    },
    {
      icon: Bot,
      title: "Prompt Engineer",
      description: "Crafting and optimizing prompts for cutting-edge AI models.",
      color: {
        border: "border-green-500",
        icon: "text-green-500",
        text: "text-green-600 dark:text-green-400",
        bgOpacity: "bg-green-500"
      }
    },
    {
      icon: PenTool,
      title: "Copywriter",
      description: "Creating compelling and persuasive content that converts.",
      color: {
        border: "border-purple-500",
        icon: "text-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        bgOpacity: "bg-purple-500"
      }
    }
  ];

  return (
    <section className="skills-section py-16">
      <h2 className="h2-text heading-text text-4xl font-bold text-center mb-12 pb-2 relative">
                    Skills

              <span
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-current to-transparent"
              >
              </span>
      </h2>
      <div className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`transform transition-all duration-300 ${
                  hoveredIndex === index ? 'scale-105 z-20' : hoveredIndex !== null ? 'scale-95 opacity-75' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;