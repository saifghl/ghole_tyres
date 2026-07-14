import React, { useEffect } from 'react';
import '../css/history.css';

const HISTORY_MILESTONES = [
  {
    year: '2018',
    title: 'The Foundation',
    subtitle: 'A Humble Beginning in Detroit',
    image: '/images/shop_exterior.png',
    text: 'Ghole Tyres was established in 2018 with a simple vision: to offer premium-quality pre-owned and new tyres at fair prices, combined with unparalleled customer honesty. We started in a single garage bay with two active lifts and a passionate crew of mechanics.',
    accent: '#38bdf8'
  },
  {
    year: '2021',
    title: 'Precision Diagnostics',
    subtitle: 'Laser & Computer Engineering',
    image: '/images/shop_interior.png',
    text: 'In 2021, we invested in state-of-the-art computer wheel balancing and 3D laser-alignment technology. This transformed Ghole Tyres into a high-precision diagnostics hub, enabling us to detect wear factors down to a tenth of a millimeter and prolong tyre life.',
    accent: '#0066fe'
  },
  {
    year: '2024',
    title: 'Premium Client Lounge',
    subtitle: 'Hospitality Redefined',
    image: '/images/shop_lounge.png',
    text: 'We expanded our service lounge to create a premium glassmorphic client waiting area. Complete with luxury leather chairs, high-speed Wi-Fi, and a designer espresso station, customers can relax in comfort while watching our technicians work on their vehicles.',
    accent: '#10b981'
  }
];

export default function History() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - (rect.width / 2);
    const y = e.clientY - rect.top - (rect.height / 2);
    
    // Calculate rotation angles (max 15 degrees)
    const rotateX = -(y / (rect.height / 2)) * 12;
    const rotateY = (x / (rect.width / 2)) * 12;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    
    // Move reflection/glare effect
    const reflection = card.querySelector('.card-reflection');
    if (reflection) {
      const pctX = ((e.clientX - rect.left) / rect.width) * 100;
      const pctY = ((e.clientY - rect.top) / rect.height) * 100;
      reflection.style.background = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    
    const reflection = card.querySelector('.card-reflection');
    if (reflection) {
      reflection.style.background = 'transparent';
    }
  };

  return (
    <div className="history-page">
      <div className="history-hero">
        <div className="container hero-content">
          <span className="subtitle-badge">EST. 2018</span>
          <h1>Our History & Journey</h1>
          <p className="history-intro">
            From a tiny garage bay in Detroit to a premium state-of-the-art tyre diagnostics and wheel servicing center. Explore our timeline of engineering, customer excellence, and continuous growth.
          </p>
        </div>
      </div>

      <div className="container history-grid-container">
        <div className="history-cards-grid">
          {HISTORY_MILESTONES.map((milestone, index) => (
            <div 
              key={index} 
              className="history-card-wrapper"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="history-card glass-panel">
                <div className="card-reflection"></div>
                <div className="card-image-wrapper">
                  <img src={milestone.image} alt={milestone.title} className="card-image" />
                  <div className="card-year-tag" style={{ background: milestone.accent }}>
                    {milestone.year}
                  </div>
                </div>
                
                <div className="card-content">
                  <span className="card-subtitle">{milestone.subtitle}</span>
                  <h3 className="card-title">{milestone.title}</h3>
                  <p className="card-desc">{milestone.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
