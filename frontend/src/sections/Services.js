import React from 'react';
import { Link } from 'react-router-dom';
import '../css/services.css';
import '../css/history.css';

const HISTORY_MILESTONES = [
  {
    year: '2018',
    title: 'The Foundation',
    subtitle: 'A Humble Beginning',
    image: '/images/shop_exterior.png',
    text: 'Ghole Tyres began with a simple promise: fair rates, honest service, and dependable new and pre-owned tyres for everyday drivers.',
    accent: '#38bdf8'
  },
  {
    year: '2021',
    title: 'Precision Diagnostics',
    subtitle: 'Computer Balancing',
    image: '/images/shop_interior.png',
    text: 'We added advanced wheel balancing and alignment tools to improve tyre life, handling, and customer confidence.',
    accent: '#0066fe'
  },
  {
    year: '2024',
    title: 'Premium Service Lounge',
    subtitle: 'Comfort While You Wait',
    image: '/images/shop_lounge.png',
    text: 'The workshop experience expanded with a more comfortable waiting area and a smoother service flow for every visit.',
    accent: '#10b981'
  }
];

export default function Services({ showToast }) {
  const serviceList = [
    {
      id: 'tyre-repair',
      icon: '',
      title: 'Tyre Repair & Vulcanization',
      desc: 'Professional puncture fixes, valve stem replacements, and internal patch vulcanization for tubeless tyres.',
    },
    {
      id: 'wheel-balancing',
      icon: '',
      title: 'Wheel Balancing & Alignment',
      desc: 'State-of-the-art computer balancing and laser wheel alignment to prevent uneven tyre wear and ensure smooth rides.',
    },
    {
      id: 'safety-diagnostics',
      icon: '',
      title: 'Tread & Safety Diagnostics',
      desc: 'Complimentary 10-point check analyzing tread depth, sidewall cracks, tyre pressure settings, and overall wear patterns.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services & Repairs</h2>

        <div className="services-grid">
          <div className="services-info">
            <div className="cards-stack">
              {serviceList.map((service, idx) => (
                <Link to={`/services/${service.id}`} key={idx} className="service-card-link-wrapper">
                  <div className="glass-panel service-card">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-details">
                      <h4>{service.title}</h4>
                      <p>{service.desc}</p>
                      <span className="service-read-more">Read Details & Book &rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="services-history-panel reveal-up">
            <span className="subtitle-badge">EST. 2018</span>
            <h3>Our History & Journey</h3>
            <p>
              From a small service bay to a trusted tyre diagnostics and repair destination, our story is built on fair pricing, careful workmanship, and dependable customer service.
            </p>

            <div className="history-cards-grid">
              {HISTORY_MILESTONES.map((milestone, idx) => (
                <article key={idx} className="history-card glass-panel">
                  <div className="card-reflection"></div>
                  <div className="card-image-wrapper">
                    <img src={milestone.image} alt={milestone.title} className="card-image" />
                    <div className="card-year-tag" style={{ background: milestone.accent }}>
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
      </div>
    </section>
  );
}
