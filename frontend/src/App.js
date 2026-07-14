import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import History from './pages/History';
import Sell from './pages/Sell';
import Footer from './components/Footer';
import Toast from './components/Toast';

function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home showToast={showToast} />} />
          <Route path="/services/:serviceId" element={<ServiceDetail showToast={showToast} />} />
          <Route path="/history" element={<History />} />
          <Route path="/sell" element={<Sell showToast={showToast} />} />
        </Routes>
      </main>
      <Footer />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
}

export default App;
