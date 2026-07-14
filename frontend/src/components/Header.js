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
          {/* Custom SVG Tyre Tread Logo */}
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeDasharray="6 4" />
            <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="6" />
            <path d="M50 10 L50 28 M50 72 L50 90 M10 50 L28 50 M72 50 L90 50 M22 22 L35 35 M65 65 L78 78 M78 22 L65 35 M35 65 L22 78" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <span className="logo-text">GHOLE <span className="highlight">TYRES</span></span>
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
              <Link to="/history" className="nav-link" onClick={closeMobileMenu}>Our History</Link>
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
