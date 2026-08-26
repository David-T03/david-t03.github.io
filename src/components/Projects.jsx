import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'API RESTful',
      description: 'API desarrollada en Node.js y Express para la gestión de usuarios y autenticación segura con JWT.',
      tags: ['Node.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Sistema de Gestión (ERP)',
      description: 'Aplicación de escritorio conectada a base de datos para la gestión de inventario, desarrollada en C#.',
      tags: ['C#', '.NET', 'SQL Server'],
      link: '#'
    },
    {
      title: 'App de Tareas (React)',
      description: 'Una aplicación SPA moderna para la gestión de tareas con estado global y animaciones fluidas.',
      tags: ['React', 'CSS', 'Vite'],
      link: '#'
    }
  ];

  return (
    <section className="section container" id="projects">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid animate-fade-in">
        {projects.map((project, index) => (
          <div className="project-card glass-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <a href={project.link} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Ver Código</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
