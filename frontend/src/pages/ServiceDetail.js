import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import '../css/serviceDetail.css';

const SERVICES_DATA = {
  'tyre-repair': {
    icon: '',
    title: 'Tyre Repair & Vulcanization',
    price: '₹200 - ₹1000',
    time: '15 - 30 mins',
    tagline: 'Permanent, safe, and professional puncture repairs that restore your tyre to full highway standards.',
    longDesc: 'Our premium repair service goes far beyond simple external plug fixes. We perform full internal vulcanization repairs. This involves demounting the tyre from the wheel rim, examining the inner lining for structural damage, prep-buffing the puncture site, and applying a specialized patch that chemically vulcanizes (bonds) under heat and pressure with the tyre carcass. This restores the tyre to its original integrity and speed rating, keeping you and your family safe on the road.',
    benefits: [
      'Chemical-vulcanized internal patch for a lifetime seal',
      'Full safety inspection of the inner tyre lining and sidewall',
      // 'Accompanying wheel re-balancing included in the service',
      'Compliance with strict national road safety and tyre repair regulations',
      'Cost-effective alternative to purchasing a brand new tyre'
    ],
    steps: [
      { num: '1', title: 'Inspection & Demounting', desc: 'We take the wheel off and demount the tyre to inspect the internal liner for running-flat damage.' },
      { num: '2', title: 'Puncture Preparation', desc: 'The puncture channel is drilled clean at the correct angle, and the inner liner is buffed.' },
      { num: '3', title: 'Vulcanizing Agent Application', desc: 'A special vulcanizing cement is applied to trigger cross-linking rubber bonding.' },
      { num: '4', title: 'Patch Insertion & Curing', desc: 'A combi-patch (plug and patch combo) is pulled through, rolled down, and heat cured.' }
    ]
  },
  'wheel-balancing': {
    icon: '',
    title: 'Wheel Balancing & Alignment',
    price: '₹750 - ₹1100',
    time: '45 - 60 mins',
    tagline: 'High-precision laser alignment and computerized balancing for ultra-smooth driving and maximum tyre life.',
    longDesc: 'Even minor wheel misalignments or weight imbalances can lead to steering vibrations, accelerated tread wear, and added strain on suspension components. Using state-of-the-art computer balancers and 3D laser alignment bays, our technicians adjust your vehicle\'s suspension geometry (camber, caster, and toe settings) back to factory specifications. We guarantee a smoother ride, improved handling, and a noticeble reduction in fuel consumption.',
    benefits: [
      'Extends tyre tread life by up to 30% by preventing uneven wear',
      'Removes annoying steering wheel and cabin vibrations at highway speeds',
      'Corrects vehicle steering drift or pulling to one side',
      'Improves handling response, cornering grip, and braking safety',
      'Reduces rolling resistance to enhance overall fuel efficiency'
    ],
    steps: [
      { num: '1', title: 'Suspension Check', desc: 'We inspect ball joints, tie rods, and bushings to make sure your steering system is ready for alignment.' },
      { num: '2', title: 'Laser Target Mounting', desc: 'High-definition 3D laser targets are attached to all four wheels to map alignment angles.' },
      { num: '3', title: 'Computer Diagnosis', desc: 'Our computer compares your vehicle\'s current alignment geometry with OEM specifications.' },
      { num: '4', title: 'Precision Calibration', desc: 'Technicians manually adjust the toe, camber, and caster angles using precision tools.' },
      { num: '5', title: 'Computerized Dynamic Balancing', desc: 'Each wheel is spun on a digital balancer, and small weights are applied to eliminate radial imbalance.' }
    ]
  },
  'safety-diagnostics': {
    icon: '',
    title: 'Tread & Safety Diagnostics',
    price: 'Free (with any service)',
    time: '5 - 10 mins',
    tagline: 'A comprehensive 10-point diagnostic check of your tyres to identify issues before they cause road emergencies.',
    longDesc: 'Your tyres are the critical link between your car and the pavement. Our safety diagnostic check provides a rigorous visual and technical inspection of your tyres. We measure tread depth across multiple points, examine tread wear patterns for suspension warning signs, search for dry rot or aging cracks, check valve cores for pressure leaks, and verify TPMS sensor health. You will receive a color-coded safety assessment detailing the exact state of your tyres with transparent recommendations.',
    benefits: [
      'Complimentary 10-point digital tyre health assessment',
      'Accurate tread-depth tracking using digital gauges',
      'Early detection of suspension, alignment, or shock absorber wear',
      'Verification of tyre age and environmental dry rot hazards',
      'Free air pressure correction to optimal manufacturer specifications'
    ],
    steps: [
      { num: '1', title: 'Wear Pattern Analysis', desc: 'We diagnose wear anomalies (such as feathering, cupping, or camber wear) to locate suspension issues.' },
      { num: '2', title: 'Sidewall Structural Audit', desc: 'We inspect tyres inside and out for dangerous bulges, cuts, punctures, or dry rot cracks.' },
      { num: '3', title: 'Valve & TPMS Check', desc: 'We test valve stems for leaks and run a diagnostic check on tyre pressure monitoring sensors.' },
      { num: '4', title: 'Safety Consult & Assessment', desc: 'We present a complete assessment showing green (healthy), yellow (monitor), or red (replace).' }
    ]
  }
};

export default function ServiceDetail({ showToast }) {
  const { serviceId } = useParams();
  const service = SERVICES_DATA[serviceId];

  // Scroll to top when loading a service detail page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="service-not-found container">
        <h2>Service Not Found</h2>
        <p>The requested service page does not exist.</p>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="service-detail-hero">
        <div className="container hero-content-wrapper">
          <Link to="/" className="back-link">← Back to Home</Link>
          <div className="service-badge-icon">{service.icon}</div>
          <h1>{service.title}</h1>
          <p className="service-tagline">{service.tagline}</p>

          <div className="service-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Estimated Cost</span>
              <span className="meta-value">{service.price}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">{service.time}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container service-content-layout">
        <div className="service-info-column">
          <section className="detail-section glass-panel">
            <h3>Overview</h3>
            <p className="long-description">{service.longDesc}</p>
          </section>

          <section className="detail-section glass-panel">
            <h3>Service Benefits</h3>
            <ul className="benefits-list">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="benefit-item-detail">
                  <span className="benefit-bullet">✓</span>
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-section glass-panel">
            <h3>Our Step-by-Step Process</h3>
            <div className="process-timeline">
              {service.steps.map((step, idx) => (
                <div key={idx} className="timeline-step">
                  <div className="step-number">{step.num}</div>
                  <div className="step-text">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="service-booking-column">
          <div className="booking-sticky-card glass-panel">
            <h3>Book This Service</h3>
            <p>Schedule your visit online and skip the queue. Select a date and time that works for you.</p>
            <BookingForm showToast={showToast} initialService={service.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
