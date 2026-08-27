import React from 'react';
import './Skills.css';
import { FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
// SVG personalizado para SQL Server
const SqlServerIcon = () => (
  <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm8 15.5c0 1.38-3.58 2.5-8 2.5s-8-1.12-8-2.5V15c1.56 1.1 4.6 1.8 8 1.8s6.44-.7 8-1.8v2.5zm0-5c0 1.38-3.58 2.5-8 2.5s-8-1.12-8-2.5V10c1.56 1.1 4.6 1.8 8 1.8s6.44-.7 8-1.8v2.5zm-8-2.2c-4.42 0-8-1.12-8-2.5 0-1.38 3.58-2.5 8-2.5s8 1.12 8 2.5c0 1.38-3.58 2.5-8 2.5z" />
  </svg>
);

// SVG personalizado para C#
const CSharpIcon = () => (
  <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C2.56 15.77 2 14.16 2 12.21c.05-2.31.72-4.08 2.01-5.32C5.3 5.64 6.96 5 8.98 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49-1.06-.34c-.4-.1-.86-.15-1.39-.15-1.16-.01-2.12.36-2.87 1.1-.76.73-1.15 1.85-1.18 3.34 0 1.36.37 2.42 1.08 3.2.71.77 1.71 1.17 2.99 1.18l1.33-.14c.43-.08.79-.19 1.06-.3zM13.89 19l.66-4H13l.34-2h1.55l.44-2.91h-1.56L14.11 8h1.56l.67-4h2l-.66 4h1.22l.66-4h2l-.66 4H22l-.33 2h-1.56l-.45 2.91h1.56L20.89 15h-1.55L18.68 19h-2zm2.67-6h1.22l.45-2.91h-1.22L16.56 13z" />
  </svg>
);

const categories = [
  {
    label: 'Backend',
    emoji: '⚙️',
    color: '#f89820',
    skills: [
      { name: 'Java', color: '#f89820', icon: <FaJava /> },
      { name: 'C#', color: '#68217a', icon: <CSharpIcon /> },
      { name: 'Node.js', color: '#3c873a', icon: <FaNodeJs /> },
    ],
  },
  {
    label: 'Frontend',
    emoji: '🎨',
    color: '#61dafb',
    skills: [
      { name: 'React', color: '#61dafb', icon: <FaReact /> },
      { name: 'HTML', color: '#e34c26', icon: <FaHtml5 /> },
      { name: 'CSS', color: '#264de4', icon: <FaCss3Alt /> },
      { name: 'JavaScript', color: '#f7df1e', icon: <FaJs /> },
    ],
  },
  {
    label: 'Bases de datos',
    emoji: '🗄️',
    color: '#00b4d8',
    skills: [
      { name: 'SQL', color: '#00b4d8', icon: <FaDatabase /> },
      { name: 'SQL Server', color: '#cc2927', icon: <SqlServerIcon /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="section container" id="skills">
      <h2 className="section-title">Mis Habilidades</h2>
      <div className="skills-categories animate-fade-in">
        {categories.map((cat, ci) => (
          <div
            className="skill-category glass-card"
            key={ci}
            style={{ '--cat-color': cat.color, '--delay': `${ci * 0.15}s` }}
          >
            <div className="category-header">
              <span className="category-emoji">{cat.emoji}</span>
              <h3 className="category-label">{cat.label}</h3>
            </div>
            <div className="skill-chips">
              {cat.skills.map((skill, si) => (
                <div
                  className="skill-chip"
                  key={si}
                  style={{ '--chip-color': skill.color }}
                >
                  <span className="chip-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="chip-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
