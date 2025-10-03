import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Courier.css";

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Courier = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    packageType: "Small",
  });

  const [history, setHistory] = useState([]);
  const [currentLocation, setCurrentLocation] = useState([28.6139, 77.209]); // Default: Delhi

  // Simulate live tracking (moves marker slightly every 2 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prev) => [
        prev[0] + (Math.random() - 0.5) * 0.001,
        prev[1] + (Math.random() - 0.5) * 0.001,
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now(),
      pickup: formData.pickup,
      dropoff: formData.dropoff,
      packageType: formData.packageType,
      date: new Date().toLocaleString(),
    };
    setHistory([newBooking, ...history]);
    setFormData({ pickup: "", dropoff: "", packageType: "Small" });
  };

  const deleteHistory = (id) => {
    setHistory(history.filter((item) => item.id !== id));
  };

  return (
    <div className="courier-page">
      <h2 className="courier-title">📦 Uber Courier Service</h2>
      <p className="courier-subtitle">Send packages with live tracking.</p>

      {/* Booking Form */}
      <form className="courier-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dropoff"
          placeholder="Drop-off Location"
          value={formData.dropoff}
          onChange={handleChange}
          required
        />
        <select
          name="packageType"
          value={formData.packageType}
          onChange={handleChange}
        >
          <option value="Small">📦 Small Package</option>
          <option value="Medium">📦 Medium Package</option>
          <option value="Large">📦 Large Package</option>
        </select>
        <button type="submit">Book Courier</button>
      </form>

      {/* History */}
      <div className="history-section">
        <h3>📜 Courier History</h3>
        {history.length === 0 ? (
          <p>No history yet.</p>
        ) : (
          history.map((item) => (
            <div key={item.id} className="history-card">
              <p>
                <strong>{item.packageType}</strong> from{" "}
                <b>{item.pickup}</b> → <b>{item.dropoff}</b>
              </p>
              <small>{item.date}</small>
              <button
                className="delete-btn"
                onClick={() => deleteHistory(item.id)}
              >
                ❌ Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Live Tracking */}
      <div className="live-tracking">
        <h3>📍 Live Tracking</h3>
        <MapContainer
          center={currentLocation}
          zoom={14}
          style={{ height: "300px", borderRadius: "14px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={currentLocation}>
            <Popup>Your courier is here 🚚</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Courier;
