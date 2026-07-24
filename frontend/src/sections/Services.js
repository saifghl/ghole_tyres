import React from 'react';
import '../css/services.css';
import '../css/history.css';

const HISTORY_MILESTONES = [
  {
    year: '1984',
    title: 'Founding & Legacy',
    subtitle: 'Mohammad Qasim Ghole',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    text: 'Established in 1984 by Mohammad Qasim Ghole as a small tyre repair shop. Built on honest and professional craftsmanship, the legacy is now carried forward by his sons, Mubeen Ghole and Moin Ghole.',
    accent: '#38bdf8'
  },
  {
    year: 'Growth',
    title: 'Modernization & Apollo Dealership',
    subtitle: 'Wheel Alignment & Balancing',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=800&q=80',
    text: 'Modernized with computerized wheel alignment, balancing, and advanced diagnostic equipment. Ghole Tyres also became an authorized dealer for Apollo Tyres in the region.',
    accent: '#0066fe'
  },
  {
    year: 'Expansion',
    title: 'Multi-Brand Authorized Agency',
    subtitle: 'CEAT, Goodyear, Yokohama & Bridgestone',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
    text: 'Continuously expanding with high-precision machinery and official dealership partnerships with leading global brands including CEAT, Goodyear, Yokohama, and Bridgestone.',
    accent: '#10b981'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-history-panel reveal-up">
          <div className="history-header">
            <span className="subtitle-badge">EST. 1984</span>
            <h2 className="section-title">Our History & Legacy</h2>
            <p className="history-intro-desc">
              Founded in 1984, Ghole Tyres has grown from a trusted local repair shop into a modern multi-brand dealership and high-precision service center.
            </p>
          </div>

          <div className="full-width-history">
            {HISTORY_MILESTONES.map((milestone, idx) => (
              <article key={idx} className="history-card glass-panel">
                <div className="card-image-wrapper">
                  <img src={milestone.image} alt={milestone.title} className="card-image" />
                  <div className="card-year-tag">
                    <span className="year-accent-dot" style={{ background: milestone.accent, boxShadow: `0 0 6px ${milestone.accent}` }}></span>
                    {milestone.year}
                  </div>
                </div>

                <div className="card-content">
                  <span className="card-subtitle">{milestone.subtitle}</span>
                  <h4 className="card-title">{milestone.title}</h4>
                  <p className="card-desc">{milestone.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
