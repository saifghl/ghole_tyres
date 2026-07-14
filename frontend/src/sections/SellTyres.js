import React from 'react';
import SellForm from '../components/SellForm';
import '../css/sellSection.css'; // sharing the style sheet

export default function SellTyres({ showToast }) {
  return (
    <section id="sell-tyres" className="sell-section">
      <div className="container">
        <h2 className="section-title">Sell Your Used Tyres</h2>
        
        <div className="sell-content-grid">
          <div className="sell-info fade-in">
            <h3>
              Get Instant Cash for Quality Used Tyres
            </h3>
            <p>
              Have old tyres sitting in your garage? We purchase safety-tested and reusable second-hand tyres at competitive prices.
            </p>
            
            <div className="sell-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">🛡️</span>
                <div>
                  <h4>Safety Audited</h4>
                  <p>We verify structural integrity and tread quality for passenger vehicle tyres.</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💵</span>
                <div>
                  <h4>Best Valuation</h4>
                  <p>Get the highest market trade-in or cash rates based on tread depth and brand.</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">⚡</span>
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
    </section>
  );
}
