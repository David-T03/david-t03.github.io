import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section container" id="about">
      <h2 className="section-title">Sobre Mí</h2>
      <div className="about-content glass-card animate-fade-in">
        <div className="about-text">
          <p>
            Hola, soy estudiante de Informática Empresarial apasionado por crear soluciones eficientes y escalables.
            Con experiencia en tecnologías backend como <strong>Java, C# y Node.js</strong>, y
            habilidades en frontend usando <strong>HTML, CSS, React y TypeScript</strong>, disfruto
            construyendo páginas web y aplicaciones completas de principio a fin.
          </p>
          <p>
            Mi enfoque principal es escribir código limpio, mantenible y centrado en el usuario.
            Siempre estoy aprendiendo nuevas tecnologías y buscando retos que me permitan crecer
            como profesional y como persona.
          </p>
          <p>
            Me gusta trabajar en equipo y colaborar con otros desarrolladores para crear soluciones innovadoras.
            Actualmente no cuento con experiencia laboral formal, pero me encuentro desarrollando mis habilidades
            a través de proyectos personales y académicos.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">0</span>
            <span className="stat-label">Años de Exp.</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Proyectos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
