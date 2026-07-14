import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import '../css/history.css';

export default function History({ showToast }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="booking-page">
      <div className="booking-page-hero">
        <div className="container hero-content-wrapper reveal-up">
          <Link to="/" className="back-link">Back to Home</Link>
          <span className="subtitle-badge">FAST APPOINTMENTS</span>
          <h1>Book a Service</h1>
          <p className="booking-intro">
            Choose your tyre service, preferred time slot, and vehicle details. Our team will confirm your visit by call or email.
          </p>
        </div>
      </div>

      <div className="container booking-page-layout">
        <div className="booking-copy glass-panel reveal-up">
          <h2>Service with less waiting</h2>
          <p>
            Send your appointment request before you arrive so we can prepare the bay, tools, and technician for your vehicle.
          </p>
          <div className="booking-motion-track" aria-hidden="true">
            <span className="booking-track-line"></span>
            <span className="booking-rolling-wheel"></span>
          </div>
        </div>

        <div className="booking-form-shell reveal-up">
          <BookingForm showToast={showToast} />
        </div>
      </div>
    </div>
  );
}
