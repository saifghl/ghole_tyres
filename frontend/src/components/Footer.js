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
            <img className="logo-image" src="/images/logo.png" alt="Ghole Tyres" />
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
            <li><Link to="/history">Book Service</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Business Hours</h3>
          <ul className="hours-list">
            <li><span>Monday - Sunday</span></li>
            <li> <span>9:00 AM - 9:00 PM</span></li>
          </ul>
        </div>

        <div className="footer-col location-col">
          <h3>Location</h3>
          <p className="address">
            Mumbai-Goa Highway, Kemburli, Mahad<br />
            Raigad - 402301
          </p>
          {/* Google Maps Embed */}
          <div className="map-container">
            <iframe
              title="Ghole Tyres Location"
              src="https://maps.google.com/maps?q=Ghole%20Tyres,%20Kemburli,%20Mahad,%20Maharashtra%20402301&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {currentYear} Ghole Tyres. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
