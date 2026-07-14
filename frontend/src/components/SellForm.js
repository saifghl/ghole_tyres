import React, { useState } from 'react';

export default function SellForm({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    rimSize: '16',
    mfgYear: '',
    treadDepth: '80',
    sidewallDamage: 'no',
    tyreType: 'tubeless',
    notes: '',
  });
  const [loading, setLoading] = useState(false);

  // Replace with your Web3Forms Access Key: https://web3forms.com
  const ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate Manufacturing Year
    const currentYear = new Date().getFullYear();
    const mfg = parseInt(formData.mfgYear, 10);
    if (isNaN(mfg) || mfg < 1990 || mfg > currentYear + 1) {
      showToast('Please enter a valid manufacturing year (e.g. 2018 - 2026)', 'error');
      setLoading(false);
      return;
    }

    try {
      if (ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        // Fallback simulated success if user has not set their key yet
        console.log('Form data to send to email:', formData);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        showToast('Enquiry received! (Dev Mode: Simulated Email Dispatch)', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          brand: '',
          rimSize: '16',
          mfgYear: '',
          treadDepth: '80',
          sidewallDamage: 'no',
          tyreType: 'tubeless',
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
            subject: `New Second-Hand Tyre Offer from ${formData.name}`,
            from_name: 'Ghole Tyres Portal',
            ...formData,
          }),
        });

        const result = await response.json();
        if (result.success) {
          showToast('Your tyre selling offer has been sent successfully!', 'success');
          setFormData({
            name: '',
            email: '',
            phone: '',
            brand: '',
            rimSize: '16',
            mfgYear: '',
            treadDepth: '80',
            sidewallDamage: 'no',
            tyreType: 'tubeless',
            notes: '',
          });
        } else {
          showToast('Failed to send email. Please try again.', 'error');
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
      <h3 className="form-title">Tyre Valuation Form</h3>
      <p className="form-subtitle">Fill in the tyre specifications below, and we'll send you an estimated offer.</p>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="sell-name">Full Name</label>
          <input
            type="text"
            id="sell-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Ankit Kumar"
          />
        </div>

        <div className="form-grid-2-col">
          <div className="form-group">
            <label htmlFor="sell-email">Email Address</label>
            <input
              type="email"
              id="sell-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="[EMAIL_ADDRESS]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sell-phone">Phone Number</label>
            <input
              type="tel"
              id="sell-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 999999999"
            />
          </div>
        </div>

        <div className="form-grid-3-col">
          <div className="form-group">
            <label htmlFor="sell-brand">Tyre Brand</label>
            <input
              type="text"
              id="sell-brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              placeholder="e.g. Michelin, Bridgestone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sell-rim">Rim Size (Inches)</label>
            <select
              id="sell-rim"
              name="rimSize"
              value={formData.rimSize}
              onChange={handleChange}
            >
              {['13', '14', '15', '16', '17', '18', '19', '20', '21', '22'].map((size) => (
                <option key={size} value={size}>{size}"</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sell-mfg">Mfg. Year</label>
            <input
              type="number"
              id="sell-mfg"
              name="mfgYear"
              value={formData.mfgYear}
              onChange={handleChange}
              required
              placeholder="e.g. 2023"
            />
          </div>
        </div>

        <div className="form-grid-2-col">
          <div className="form-group">
            <label htmlFor="sell-tread">Tread Depth (Approx. % Remaining)</label>
            <div className="slider-container">
              <input
                type="range"
                id="sell-tread"
                name="treadDepth"
                min="10"
                max="100"
                step="10"
                value={formData.treadDepth}
                onChange={handleChange}
              />
              <span className="slider-value">{formData.treadDepth}%</span>
            </div>
          </div>
          <div className="form-group">
            <label>Sidewall Damage / Patches?</label>
            <div className="radio-group">
              <label className={`radio-label ${formData.sidewallDamage === 'no' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="sidewallDamage"
                  value="no"
                  checked={formData.sidewallDamage === 'no'}
                  onChange={handleChange}
                />
                No Damage
              </label>
              <label className={`radio-label ${formData.sidewallDamage === 'yes' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="sidewallDamage"
                  value="yes"
                  checked={formData.sidewallDamage === 'yes'}
                  onChange={handleChange}
                />
                Has Damage
              </label>
            </div>
          </div>
        </div>

        <div className="form-grid-2-col">
          <div className="form-group">
            <label>Tube / Tubeless</label>
            <div className="radio-group">
              <label className={`radio-label ${formData.tyreType === 'tubeless' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="tyreType"
                  value="tubeless"
                  checked={formData.tyreType === 'tubeless'}
                  onChange={handleChange}
                />
                Tubeless
              </label>
              <label className={`radio-label ${formData.tyreType === 'tube' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="tyreType"
                  value="tube"
                  checked={formData.tyreType === 'tube'}
                  onChange={handleChange}
                />
                Tube Type
              </label>
            </div>
          </div>
          <div className="form-group" />
        </div>

        <div className="form-group">
          <label htmlFor="sell-notes">Additional Details (Condition details, set of 2 or 4, etc.)</label>
          <textarea
            id="sell-notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Describe the usage condition, tire storage details..."
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-primary form-submit-btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Sell Enquiry'}
        </button>
      </div>
    </form>
  );
}
