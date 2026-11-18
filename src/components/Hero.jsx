import React from 'react';
import './Hero.css';
import profilePic from '../assets/Foto_perfil.jpeg';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const headerOffset = 70;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      const contactCard = contactEl.querySelector('.contact-info');
      if (contactCard) {
        contactCard.classList.remove('highlight-contact');
        void contactCard.offsetWidth;
        contactCard.classList.add('highlight-contact');
      }
    }
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const headerOffset = 70;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero section container" id="home">
      <div className="hero-content animate-fade-in">
        <span className="greeting">Hola, soy</span>
        <h1 className="name">David Marín Ruiz</h1>
        <h2 className="title">Estudiante de Informática Empresarial</h2>
        <p className="description">
          Diseño páginas web para pequeñas y medianas empresas, con la misión de mejorar su presencia en línea y facilitarles el contacto con sus clientes.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
            Ver Proyectos
          </a>
          <a href="#contact" className="btn btn-outline" onClick={scrollToContact}>
            Contáctame
          </a>
          <a href="/CV_David_Marín_Ruiz.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            CV
          </a>
        </div>
      </div>
      <div className="hero-graphic animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="glow-orb"></div>
        <div className="glow-orb orb-2"></div>
        {/* Imagen de perfil */}
        <img src={profilePic} alt="David Marín Ruiz" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
