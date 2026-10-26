import React, { useState } from 'react';
import './Projects.css';

const mainProjects = [
  {
    title: 'Restaurant API Core (Atenix)',
    description: 'Arquitectura base multicapa en Java Spring Boot y SQL Server. Motor backend diseñado para escalar sistemas de menú digital y e-commerce, con integración de seguridad y webhooks de pago.',
    tags: ['Java 21', 'Spring Boot', 'SQL Server', 'REST API', 'Arquitectura'],
    link: '/Backend Architecture.pdf',
    buttonText: '📄 Ver Arquitectura (PDF)',
    status: '🚧 En Desarrollo',
    gistLink: 'https://gist.github.com/David-T03/c71d779c73c6bff639083c61ad2c8fef',
    gistText: '💻 Ver Snippet (Java)'
  }
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
  <div className="project-card glass-card" style={{ '--delay': `${index * 0.1}s`, display: 'flex', flexDirection: 'column' }}>
    <div className="project-content" style={{ flexGrow: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <h3>{project.title}</h3>
        {project.status && (
          <span style={{
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem',
            background: 'rgba(255, 165, 0, 0.15)',
            color: '#ffa500',
            borderRadius: '4px',
            border: '1px solid rgba(255, 165, 0, 0.3)',
            whiteSpace: 'nowrap',
            marginLeft: '10px'
          }}>
            {project.status}
          </span>
        )}
      </div>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span className="tag" key={i}>{tag}</span>
        ))}
      </div>
    </div>

    {/* Contenedor de botones alineados */}
    <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem', flexWrap: 'wrap' }}>
      <a
        href={project.link}
        className="btn btn-outline"
        target="_blank"
        rel="noopener noreferrer"
        style={{ flex: 1, textAlign: 'center', padding: '0.5rem 1rem' }}
      >
        {project.buttonText || 'Ver Código'}
      </a>

      {project.gistLink && (
        <a
          href={project.gistLink}
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
          style={{ flex: 1, textAlign: 'center', padding: '0.5rem 1rem' }}
        >
          {project.gistText}
        </a>
      )}
    </div>
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
