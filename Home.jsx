import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  // Ride options
  const rides = [
    { type: "Cab", icon: "🚖", path: "/Cab" },
    { type: "Bike", icon: "🏍️", path: "/Bike" },
    { type: "Auto", icon: "🛺", path: "/Auto" },
    { type: "Rental", icon: "🚗", path: "/Rental" },
    { type: "Reserve", icon: "📅", path: "/activity" },
  ];

  return (
    <div className="home-container">
      {/* Top Tabs */}
      <div className="tab-switch">
        <button className="tab active">🚖 Uber</button>
        <Link to="/Courier">
          <button className="tab">📦 Courier</button>
        </Link>
      </div>

      {/* Search Section */}
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Where to?"
        />
        <button className="schedule-btn">Later</button>
      </div>

      {/* Suggestions */}
      <section>
        <h3 className="section-heading">Suggestions</h3>
        <div className="ride-grid">
          {rides.map((ride, idx) => (
            <div
              key={idx}
              className="ride-card"
              onClick={() => navigate(ride.path)}
            >
              <span className="ride-icon">{ride.icon}</span>
              <span className="ride-label">{ride.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Offer */}
      <div className="promo-banner">
        <p>🎉 Flat 50% off on select rides. Hurry up!</p>
      </div>
    </div>
  );
};

export default Home;
