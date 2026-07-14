import React, { useEffect } from 'react';

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const toastStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    padding: '16px 24px',
    borderRadius: '8px',
    backgroundColor: type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '0.95rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 2000,
    animation: 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    opacity: '0.7',
    padding: '0 4px',
  };

  // Add dynamic keyframes to head if not present
  if (typeof document !== 'undefined' && !document.getElementById('toast-animation-style')) {
    const style = document.createElement('style');
    style.id = 'toast-animation-style';
    style.innerHTML = `
      @keyframes slideIn {
        from { transform: translateX(120%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  return (
    <div style={toastStyle}>
      <span>{type === 'success' ? '✓' : '✗'}</span>
      <span>{message}</span>
      <button style={closeButtonStyle} onClick={onClose} aria-label="Close message">×</button>
    </div>
  );
}
