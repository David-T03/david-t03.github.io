import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section container" id="contact">
      <h2 className="section-title">Contáctame</h2>
      <div className="contact-wrapper animate-fade-in">
        <div className="contact-info glass-card">
          <h3>¿Tienes un proyecto en mente?</h3>
          <p>Estoy disponible para ayudarte a impulsar tu empresa con soluciones innovadoras y eficientes, ¡no dudes en escribirme!</p>

          <div className="contact-links">
            <a href="mailto:davidmarin961@gmail.com" className="btn btn-primary">
              <FaEnvelope /> Email
            </a>
            <a href="https://wa.me/50660698086" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="https://github.com/David-T03" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaGithub /> GitHub
            </a>
            <a href="www.linkedin.com/in/david-marín-ruiz" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
