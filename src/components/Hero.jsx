import React from 'react';
import './Hero.css';
import profilePic from '../assets/foto_perfil.jpg';

const Hero = () => {
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
          <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contact" className="btn btn-outline">Contáctame</a>
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">CV</a>
        </div>
      </div>
      <div className="hero-graphic animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {/* Placeholder for an image or 3D element */}
        <div className="glow-orb"></div>
        <div className="glow-orb orb-2"></div>
        {/*Imagen de perfil*/}
        <img src={profilePic} alt="David Marín Ruiz" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
