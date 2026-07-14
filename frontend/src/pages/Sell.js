import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SellForm from '../components/SellForm';
import '../css/sellSection.css';

export default function Sell({ showToast }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sell-page">
      <div className="sell-page-hero">
        <div className="container hero-content-wrapper">
          <Link to="/" className="back-link">← Back to Home</Link>
          {/* <span className="subtitle-badge">TOP VALUATION</span> */}
          <h1>Sell Your Used Tyres</h1>
          <p className="sell-intro">
            Get the best rates for your quality pre-owned tyres. Fill in the specifications below and our technicians will send you an estimated offer.
          </p>
        </div>
      </div>

      <div className="container sell-content-layout">
        <div className="sell-content-grid">
          <div className="sell-info fade-in">
            <h3>Get Instant Cash for Quality Used Tyres</h3>
            <p>
              Have old tyres sitting in your garage? We purchase safety-tested and reusable second-hand tyres at competitive prices.
            </p>

            <div className="sell-benefits">
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <div>
                  <h4>Safety Audited</h4>
                  <p>We verify structural integrity and tread quality for passenger vehicle tyres.</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <div>
                  <h4>Best Valuation</h4>
                  <p>Get the highest market trade-in or cash rates based on tread depth and brand.</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <div>
                  <h4>Fast Pick-up</h4>
                  <p>Drop them off at our shop or arrange a quick inspection and pick-up service.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sell-form-wrapper">
            <SellForm showToast={showToast} />
          </div>
        </div>
      </div>
    </div>
  );
}
