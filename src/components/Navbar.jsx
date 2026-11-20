import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaArrowUp, FaPaperPlane, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // <-- El hook va aquí ADENTRO de Navbar
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowScrollTop(scrollY > 350);

      // Detectar sección activa
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth',
      });

      if (targetId === 'contact') {
        const contactCard = element.querySelector('.contact-info');
        if (contactCard) {
          contactCard.classList.remove('highlight-contact');
          void contactCard.offsetWidth;
          contactCard.classList.add('highlight-contact');
        }
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => scrollToSection(e, '#home')}
            aria-label="Ir al inicio"
          >
            <span className="nav-logo-bracket">&lt;</span>
            David
            <span className="nav-accent">.dev</span>
            <span className="nav-logo-bracket"> /&gt;</span>
          </a>

          {/* Botón hamburguesa móvil */}
          <button
            className="nav-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Links de navegación */}
          <ul className={`nav-links ${isMobileOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="nav-btn-contact"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                <FaPaperPlane style={{ fontSize: '0.8rem' }} /> Contáctame
              </a>
            </li>
            {/* Botón de cambio de tema */}
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Botón flotante para volver arriba */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Volver al inicio"
        title="Volver al inicio"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Navbar;