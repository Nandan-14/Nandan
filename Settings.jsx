import React, { useState } from "react";
import {
  Globe,
  CreditCard,
  Car,
  Accessibility,
  Mail,
  MessageSquare,
  Save,
  CheckCircle,
} from "lucide-react";
import "./UberSettings.css";

function UberSettings() {
  const [settings, setSettings] = useState({
    language: "English",
    paymentMethod: "Credit Card",
    rideType: "UberX",
    accessibility: false,
    emailNotifications: true,
    smsNotifications: false,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Saved Settings:", settings);
      setSuccessMessage("✅ Settings saved successfully!");
      setLoading(false);

      setTimeout(() => setSuccessMessage(""), 3000);
    }, 1200);
  };

  return (
    <div className="settings-page">
      <h1>Uber Settings</h1>

      {/* Success Banner */}
      {successMessage && (
        <div className="success-banner">
          <CheckCircle size={20} />
          <span>{successMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Ride Preferences Card */}
        <div className="card">
          <h2>
            <Car size={18} /> Ride Preferences
          </h2>
          <div className="form-group">
            <label>Ride Type</label>
            <select
              name="rideType"
              value={settings.rideType}
              onChange={handleChange}
            >
              <option value="UberX">UberX</option>
              <option value="UberXL">UberXL</option>
              <option value="Uber Comfort">Uber Comfort</option>
            </select>
          </div>

          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="accessibility"
                checked={settings.accessibility}
                onChange={handleChange}
              />
              Accessibility Required
            </label>
          </div>
        </div>

        {/* Payment Card */}
        <div className="card">
          <h2>
            <CreditCard size={18} /> Payment Method
          </h2>
          <div className="form-group">
            <label>Payment Method</label>
            <select
              name="paymentMethod"
              value={settings.paymentMethod}
              onChange={handleChange}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
        </div>

        {/* Notifications Card */}
        <div className="card">
          <h2>
            <Mail size={18} /> Notifications
          </h2>
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
              />
              Email Notifications
            </label>
          </div>
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                name="smsNotifications"
                checked={settings.smsNotifications}
                onChange={handleChange}
              />
              SMS Notifications
            </label>
          </div>
        </div>

        {/* Language Card */}
        <div className="card">
          <h2>
            <Globe size={18} /> Language
          </h2>
          <div className="form-group">
            <label>Language</label>
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
            >
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="French">Français</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <button className="b" type="submit" disabled={loading}>
          {loading ? (
            <span className="loading-spinner"></span>
          ) : (
            <>
              <Save size={18} /> Save Settings
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default UberSettings;
