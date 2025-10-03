import React from 'react';
import { Link } from 'react-router-dom';
import "./Account.css";

const Account = () => {
  return (
    <div className="page2">
      <h2>My Account</h2>
      <ul className="account-list">
        <li><Link to="/UpiPaymentPage" className="account-link">💳 Payment Methods</Link></li>
        <li><Link to="/Settings" className="account-link">⚙️ Settings</Link></li>
        <li><Link to="/Logout" className="account-link">🚪 Logout</Link></li>
      </ul>
    </div>
  );
};

export default Account;
