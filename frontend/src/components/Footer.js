import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleHashLinkClick = (e, hash) => {
    e.preventDefault();
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
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo" onClick={(e) => handleHashLinkClick(e, '#home')}>
            <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeDasharray="6 4" />
              <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="6" />
              <path d="M50 10 L50 28 M50 72 L50 90 M10 50 L28 50 M72 50 L90 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <span className="logo-text">GHOLE <span className="highlight">TYRES</span></span>
          </Link>
          <p className="brand-desc">
            Your premium destination for pre-owned quality tyres, repairs, wheel balancing, and professional tyre diagnostics.
          </p>
          {/* <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">FB</a>
            <a href="#" className="social-icon" aria-label="Instagram">IG</a>
            <a href="#" className="social-icon" aria-label="Twitter">TW</a>
          </div> */}
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={(e) => handleHashLinkClick(e, '#home')}>Home</Link></li>
            <li><Link to="/services/tyre-repair">Tyre Repair & Vulcanization</Link></li>
            <li><Link to="/services/wheel-balancing">Wheel Balancing & Alignment</Link></li>
            <li><Link to="/services/safety-diagnostics">Tread & Safety Diagnostics</Link></li>
            <li><Link to="/history">Our History</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Business Hours</h3>
          <ul className="hours-list">
            <li><span>Monday - Sunday</span> <span>7:00 AM - 9:00 PM</span></li>
          </ul>
        </div>

        <div className="footer-col location-col">
          <h3>Location</h3>
          <p className="address">
            100 Industrial Parkway, Suite A<br />
            Detroit, MI 48201
          </p>
          {/* Stylized placeholder for Map */}
          <div className="map-placeholder">
            <div className="map-glow"></div>
            <span className="map-text">📍 Map Location</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {currentYear} Ghole Tyres. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
