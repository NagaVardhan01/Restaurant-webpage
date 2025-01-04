// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Location</h3>
            <p>123 Foodie Street</p>
            <p>Culinary City, CC 12345</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@savorydelights.com</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;