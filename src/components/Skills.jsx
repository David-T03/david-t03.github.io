import React from 'react';
import './Skills.css';
import { FaJava, FaNodeJs, FaReact, FaHtml5, FaJs } from 'react-icons/fa';

// SVG personalizado para C# (no disponible en react-icons)
const CSharpIcon = () => (
  <svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C2.56 15.77 2 14.16 2 12.21c.05-2.31.72-4.08 2.01-5.32C5.3 5.64 6.96 5 8.98 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49-1.06-.34c-.4-.1-.86-.15-1.39-.15-1.16-.01-2.12.36-2.87 1.1-.76.73-1.15 1.85-1.18 3.34 0 1.36.37 2.42 1.08 3.2.71.77 1.71 1.17 2.99 1.18l1.33-.14c.43-.08.79-.19 1.06-.3zM13.89 19l.66-4H13l.34-2h1.55l.44-2.91h-1.56L14.11 8h1.56l.67-4h2l-.66 4h1.22l.66-4h2l-.66 4H22l-.33 2h-1.56l-.45 2.91h1.56L20.89 15h-1.55L18.68 19h-2zm2.67-6h1.22l.45-2.91h-1.22L16.56 13z" />
  </svg>
);

const Skills = () => {
  const skills = [
    { name: 'Java', level: '90%', color: '#f89820', icon: <FaJava /> },
    { name: 'C#', level: '85%', color: '#68217a', icon: <CSharpIcon /> },
    { name: 'Node.js', level: '65%', color: '#3c873a', icon: <FaNodeJs /> },
    { name: 'React', level: '75%', color: '#61dafb', icon: <FaReact /> },
    { name: 'HTML/CSS', level: '95%', color: '#e34c26', icon: <FaHtml5 /> },
    { name: 'JavaScript', level: '70%', color: '#f7df1e', icon: <FaJs /> }
  ];

  return (
    <section className="section container" id="skills">
      <h2 className="section-title">Mis Habilidades</h2>
      <div className="skills-grid animate-fade-in">
        {skills.map((skill, index) => (
          <div className="skill-card glass-card" key={index} style={{ '--delay': `${index * 0.1}s` }}>
            <div className="skill-header">
              <h3 className="skill-name">
                <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                {skill.name}
              </h3>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.level, backgroundColor: skill.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
