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
            Destaco por tener facilidad para comunicarme, trabajar en equipo y bajo presión y aprender rápido. Soy una persona
            tolerante, paciente y proactiva, disfruto
            desarrollando páginas web y aplicaciones completas de principio a fin.
          </p>
          <p>
            Mi enfoque principal es escribir código limpio, mantenible y centrado en el usuario.
            Constantemente estoy aprendiendo nuevas tecnologías y buscando retos que me permitan crecer
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
            <span className="stat-number">0</span>
            <span className="stat-label">Proyectos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
