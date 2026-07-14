import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleHashLinkClick = (e, hash) => {
    e.preventDefault();
    closeMobileMenu();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={(e) => handleHashLinkClick(e, '#home')}>
          <img className="logo-image" src="/images/logo.png" alt="Ghole Tyres" />
        </Link>

        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={(e) => handleHashLinkClick(e, '#home')}>Home</Link>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle">
                Services & Repairs <span className="dropdown-caret">▼</span>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/services/tyre-repair" className="dropdown-item" onClick={closeMobileMenu}>
                    Tyre Repair & Vulcanization
                  </Link>
                </li>
                <li>
                  <Link to="/services/wheel-balancing" className="dropdown-item" onClick={closeMobileMenu}>
                    Wheel Balancing & Alignment
                  </Link>
                </li>
                <li>
                  <Link to="/services/safety-diagnostics" className="dropdown-item" onClick={closeMobileMenu}>
                    Tread & Safety Diagnostics
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/history" className="nav-link" onClick={closeMobileMenu}>Book Service</Link>
            </li>

            <li className="nav-item">
              <Link to="/sell" className="nav-link" onClick={closeMobileMenu}>Sell Your Tyres</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={(e) => handleHashLinkClick(e, '#contact')}>Contact</Link>
            </li>
            <li className="nav-item nav-cta">
              <a href="tel: +918600802010" className="btn btn-primary nav-phone-btn">
                Call Now: +91 8600802010
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
