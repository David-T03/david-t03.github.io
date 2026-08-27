import React, { useState } from 'react';
import './Projects.css';

// ─── Proyectos principales (agrégalos aquí cuando los tengas) ───────────────
const mainProjects = [
  // Ejemplo de cómo agregar un proyecto:
  // {
  //   title: 'Nombre del proyecto',
  //   description: 'Descripción breve del proyecto.',
  //   tags: ['React', 'Node.js'],
  //   link: 'https://github.com/tu-usuario/repo'
  // },
];

// ─── Proyectos adicionales (modal "Otros") ───────────────────────────────────
const otherProjects = [
  // Ejemplo:
  // {
  //   title: 'Otro proyecto',
  //   description: 'Descripción.',
  //   tags: ['Java'],
  //   link: '#'
  // },
];

// ─── Tarjeta de proyecto ─────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => (
  <div className="project-card glass-card" style={{ '--delay': `${index * 0.1}s` }}>
    <div className="project-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span className="tag" key={i}>{tag}</span>
        ))}
      </div>
    </div>
    <a
      href={project.link}
      className="btn btn-outline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ver Código
    </a>
  </div>
);

// ─── Estado vacío ────────────────────────────────────────────────────────────
const EmptyState = () => (
  <div className="empty-state glass-card">
    <div className="empty-icon">🚀</div>
    <h3>Proyectos en camino</h3>
    <p>Estoy trabajando en mis primeros proyectos. ¡Vuelve pronto para verlos!</p>
  </div>
);

// ─── Modal ───────────────────────────────────────────────────────────────────
const OtherProjectsModal = ({ onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-box glass-card" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
      <h3 className="modal-title">Otros Proyectos</h3>

      {otherProjects.length === 0 ? (
        <div className="modal-empty">
          <span>🛠️</span>
          <p>Aquí aparecerán más proyectos próximamente.</p>
        </div>
      ) : (
        <div className="modal-grid">
          {otherProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))}
        </div>
      )}
    </div>
  </div>
);

// ─── Componente principal ─────────────────────────────────────────────────────
const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="section container" id="projects">
      <h2 className="section-title">Mis Proyectos</h2>

      <div className="projects-grid animate-fade-in">
        {mainProjects.length === 0 ? (
          <EmptyState />
        ) : (
          mainProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))
        )}
      </div>

      {/* Botón "Otros" */}
      <div className="projects-footer">
        <button
          className="btn btn-outline btn-others"
          onClick={() => setShowModal(true)}
          id="btn-otros-proyectos"
        >
          <span>Otros proyectos</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>

      {showModal && <OtherProjectsModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Projects;
