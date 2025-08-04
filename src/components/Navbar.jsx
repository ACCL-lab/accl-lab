import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import accLogo from '../assets/images/Logos/logofinal.png';
import iitbhLogo from '../assets/images/Logos/iitbh_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section by scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links with active class
  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about-section' },
    { name: 'News', id: 'news-section' },
    { name: 'Research', id: 'research-section' },
    { name: 'Publications', id: 'publications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      id="mainNavbar"
      className={`navbar navbar-expand-lg custom-navbar fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#/">
          <img src={accLogo} alt="ACCL Logo" width="55" height="55" className="rounded-circle me-2 zoomed-logo" />
          <span><strong>ACCL</strong></span>
        </a>

        <div className="d-flex align-items-center ms-auto d-lg-none">
          <a href="https://www.iitbhilai.ac.in" target="_blank" rel="noopener noreferrer">
            <img src={iitbhLogo} alt="IIT Bhilai Logo" style={{ height: '55px' }} />
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {navLinks.map(link => (
              <li className="nav-item" key={link.id}>
                <HashLink
                  className={`nav-link ${activeSection === link.id ? 'active-link' : ''}`}
                  to={`/#${link.id}`}
                >
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
          <div className="d-none d-lg-block ms-3">
            <a href="https://www.iitbhilai.ac.in" target="_blank" rel="noopener noreferrer">
              <img src={iitbhLogo} alt="IIT Bhilai Logo" style={{ height: '55px' }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
