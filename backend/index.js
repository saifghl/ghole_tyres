const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', message: 'Ghole Tyres Backend is running' });
});

app.post('/api/book', (req, res) => {
  console.log('Received booking request:', req.body);
  // Forward to email service or database here
  res.status(200).json({ success: true, message: 'Booking received successfully' });
});

app.post('/api/sell', (req, res) => {
  console.log('Received tyre valuation offer:', req.body);
  // Forward to email service or database here
  res.status(200).json({ success: true, message: 'Tyre valuation enquiry received successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
