import React, { useState } from 'react';

export default function BookingForm({ showToast, initialService }) {
  const getMappedService = (serviceName) => {
    if (!serviceName) return 'Wheel Alignment & Balancing';
    if (serviceName.includes('Repair')) return 'Tyre Repair / Vulcanization';
    if (serviceName.includes('Balancing') || serviceName.includes('Alignment')) return 'Wheel Alignment & Balancing';
    if (serviceName.includes('Diagnostics') || serviceName.includes('Safety')) return 'Tread & Safety Diagnostics';
    return serviceName;
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    serviceType: getMappedService(initialService),
    preferredDate: '',
    preferredTime: '09:00 AM - 11:00 AM',
    notes: '',
  });
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceType: getMappedService(initialService) }));
    }
  }, [initialService]);

  // Replace with your Web3Forms Access Key: https://web3forms.com
  const ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        // Fallback simulated success
        console.log('Booking request details:', formData);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        showToast('Booking request received! (Dev Mode: Simulated Email Dispatch)', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicleType: '',
          serviceType: 'Wheel Alignment & Balancing',
          preferredDate: '',
          preferredTime: '09:00 AM - 11:00 AM',
          notes: '',
        });
      } else {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            subject: `New Service Appointment from ${formData.name}`,
            from_name: 'Ghole Tyres Bookings',
            ...formData,
          }),
        });

        const result = await response.json();
        if (result.success) {
          showToast('Service booking request sent successfully!', 'success');
          setFormData({
            name: '',
            email: '',
            phone: '',
            vehicleType: '',
            serviceType: 'Wheel Alignment & Balancing',
            preferredDate: '',
            preferredTime: '09:00 AM - 11:00 AM',
            notes: '',
          });
        } else {
          showToast('Failed to send booking. Please try again.', 'error');
        }
      }
    } catch (err) {
      showToast('An error occurred. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="glass-panel form-container" onSubmit={handleSubmit}>
      <h3 className="form-title">Schedule a Service</h3>
      <p className="form-subtitle">Pick a service and your preferred slot. We will confirm your appointment via email or call.</p>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="book-name">Full Name</label>
          <input
            type="text"
            id="book-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>

        <div className="form-grid-2-col">
          <div className="form-group">
            <label htmlFor="book-email">Email Address</label>
            <input
              type="email"
              id="book-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-phone">Phone Number</label>
            <input
              type="tel"
              id="book-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div className="form-grid-2-col">
          <div className="form-group">
            <label htmlFor="book-vehicle">Vehicle Make & Model</label>
            <input
              type="text"
              id="book-vehicle"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              required
              placeholder="e.g. Toyota Camry 2021"
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-service">Service Required</label>
            <select
              id="book-service"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="Tyre Repair / Vulcanization">Tyre Repair / Vulcanization</option>
              <option value="Wheel Alignment & Balancing">Wheel Alignment & Balancing</option>
              <option value="Tread & Safety Diagnostics">Tread & Safety Diagnostics</option>
              <option value="Full Tyre Replacement">Full Tyre Replacement</option>
            </select>
          </div>
        </div>

        <div className="form-grid-2-col">
          <div className="form-group">
            <label htmlFor="book-date">Preferred Date</label>
            <input
              type="date"
              id="book-date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-time">Preferred Time Window</label>
            <select
              id="book-time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            >
              <option value="07:00 AM - 09:00 AM">07:00 AM - 09:00 AM</option>
              <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
              <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
              <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
              <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
              <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
              <option value="07:00 PM - 09:00 PM">07:00 PM - 09:00 PM</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="book-notes">Additional Requests / Notes</label>
          <textarea
            id="book-notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Let us know if you have specific requests or questions..."
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-primary form-submit-btn" disabled={loading}>
          {loading ? 'Requesting booking...' : 'Request Appointment'}
        </button>
      </div>
    </form>
  );
}
