require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const TARGET_WHATSAPP_NUMBER = '918600802010';

app.use(cors());
app.use(express.json());

// Helper function to build WhatsApp URL
function buildWhatsAppUrl(phoneNumber, text) {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', message: 'Ghole Tyres Backend is running' });
});

app.post('/api/book', (req, res) => {
  try {
    const { name, email, phone, vehicleType, serviceType, preferredDate, preferredTime, notes } = req.body;

    console.log('Received booking request:', req.body);

    const messageText = `*New Service Booking Request - Ghole Tyres* \n\n` +
      `*Name:* ${name || 'N/A'}\n` +
      `*Phone:* ${phone || 'N/A'}\n` +
      `*Email:* ${email || 'N/A'}\n` +
      `*Vehicle:* ${vehicleType || 'N/A'}\n` +
      `*Service Required:* ${serviceType || 'N/A'}\n` +
      `*Preferred Date:* ${preferredDate || 'N/A'}\n` +
      `*Preferred Time:* ${preferredTime || 'N/A'}\n` +
      `*Notes:* ${notes || 'None'}`;

    const whatsappUrl = buildWhatsAppUrl(TARGET_WHATSAPP_NUMBER, messageText);

    res.status(200).json({
      success: true,
      message: 'Booking formatted successfully. Opening WhatsApp...',
      whatsappUrl,
      targetNumber: TARGET_WHATSAPP_NUMBER
    });
  } catch (error) {
    console.error('Error handling booking request:', error);
    res.status(500).json({ success: false, message: 'Internal server error: failed to process booking' });
  }
});

app.post('/api/sell', (req, res) => {
  try {
    const { name, email, phone, brand, rimSize, mfgYear, treadDepth, sidewallDamage, tyreType, notes } = req.body;

    console.log('Received tyre valuation offer:', req.body);

    const messageText = `*New Tyre Valuation Offer - Ghole Tyres* \n\n` +
      `*Seller Name:* ${name || 'N/A'}\n` +
      `*Phone:* ${phone || 'N/A'}\n` +
      `*Email:* ${email || 'N/A'}\n` +
      `*Tyre Brand:* ${brand || 'N/A'}\n` +
      `*Rim Size:* ${rimSize ? rimSize + '"' : 'N/A'}\n` +
      `*Mfg Year:* ${mfgYear || 'N/A'}\n` +
      `*Tread Depth:* ${treadDepth ? treadDepth + '%' : 'N/A'}\n` +
      `*Sidewall Damage:* ${sidewallDamage === 'yes' ? 'Yes' : 'No'}\n` +
      `*Tyre Type:* ${tyreType || 'N/A'}\n` +
      `*Notes:* ${notes || 'None'}`;

    const whatsappUrl = buildWhatsAppUrl(TARGET_WHATSAPP_NUMBER, messageText);

    res.status(200).json({
      success: true,
      message: 'Valuation offer formatted successfully. Opening WhatsApp...',
      whatsappUrl,
      targetNumber: TARGET_WHATSAPP_NUMBER
    });
  } catch (error) {
    console.error('Error handling tyre valuation request:', error);
    res.status(500).json({ success: false, message: 'Internal server error: failed to process tyre valuation' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
