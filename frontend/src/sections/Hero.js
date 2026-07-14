import React from 'react';
import { Link } from 'react-router-dom';
import '../css/hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>

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
