// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="uber-footer">
      <div className="footer-container">

        {/* Brand Info */}
        <div className="footer-section brand">
          <h2>RideYourDestination</h2>
          <p>Your trusted ride partner — anywhere, anytime.</p>
          <div className="app-buttons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-section links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ride Your Destination Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
