import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import '../css/services.css';

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

          <div className="booking-form-wrapper">
            <BookingForm showToast={showToast} />
          </div>
        </div>
      </div>
    </section>
  );
}
