import React from 'react';
import { Link } from 'react-router-dom';
import '../css/hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>

        <div className="rolling-tyres-container">
          <div className="rolling-tyre tyre-1">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeDasharray="6 4" />
              <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="6" />
              <path d="M50 10 L50 28 M50 72 L50 90 M10 50 L28 50 M72 50 L90 50 M22 22 L35 35 M65 65 L78 78 M78 22 L65 35 M35 65 L22 78" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="rolling-tyre tyre-2">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeDasharray="6 4" />
              <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="6" />
              <path d="M50 10 L50 28 M50 72 L50 90 M10 50 L28 50 M72 50 L90 50 M22 22 L35 35 M65 65 L78 78 M78 22 L65 35 M35 65 L22 78" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="container hero-container fade-in">
        <div className="hero-glass-card">
          <h1 className="hero-title">
            Expert Tyre Repairs & <br />
            <span className="highlight">Best Rates</span> for Your Used Tyres
          </h1>
          <p className="hero-subtitle">
            Professional vulcanization, computerized balancing, wheel alignment, and a hassle-free process to sell your 2nd-hand tyres.
          </p>
          <div className="hero-ctas">
            <Link to="/sell" className="btn btn-primary">
              Sell Your Tyres
            </Link>
            <Link to="/history" className="btn btn-secondary">
              Book a Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
