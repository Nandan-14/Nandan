import React, { useState, useEffect } from "react";
import "./Activity.css";

// Load saved rides from localStorage
const loadRides = () => {
  const saved = localStorage.getItem("rides");
  return saved ? JSON.parse(saved) : [];
};

const Activity = () => {
  const [rides, setRides] = useState(loadRides);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem("rides", JSON.stringify(rides));
  }, [rides]);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new ride
  const handleAdd = () => {
    const newRide = {
      id: Date.now(),
      pickup: "Current Location",
      dropoff: "Destination",
      date: new Date().toISOString().split("T")[0],
      type: "UberX",
      status: "Upcoming",
      rating: null,
    };
    setRides((prev) => [newRide, ...prev]);
    setEditingId(newRide.id);
    setFormData(newRide);
  };

  // Edit ride
  const handleEdit = (ride) => {
    setEditingId(ride.id);
    setFormData(ride);
  };

  // Save edited ride
  const handleSave = () => {
    setRides((prev) =>
      prev.map((r) => (r.id === editingId ? { ...formData } : r))
    );
    setEditingId(null);
  };

  // Delete ride
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ride?")) {
      setRides((prev) => prev.filter((r) => r.id !== id));
      if (editingId === id) setEditingId(null);
    }
  };

  // Rate ride
  const handleRate = (id, stars) => {
    setRides((prev) =>
      prev.map((r) => (r.id === id ? { ...r, rating: stars } : r))
    );
  };

  return (
    <div className="history-page">
      <h2 className="history-title">📊 My Rides</h2>
      <button className="add-btn" onClick={handleAdd}>
        ➕ Add Ride
      </button>

      {rides.length === 0 && (
        <p className="empty-msg">No rides yet. Book a ride to get started!</p>
      )}

      {rides.map((ride) => (
        <div key={ride.id} className="ride-card">
          {editingId === ride.id ? (
            <div className="ride-edit-form">
              <input
                type="text"
                name="pickup"
                placeholder="Pickup"
                value={formData.pickup}
                onChange={handleChange}
              />
              <input
                type="text"
                name="dropoff"
                placeholder="Drop-off"
                value={formData.dropoff}
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <select name="type" value={formData.type} onChange={handleChange}>
                <option>UberX</option>
                <option>UberXL</option>
                <option>Black</option>
                <option>Comfort</option>
              </select>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Upcoming</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <button onClick={handleSave}>💾 Save</button>
            </div>
          ) : (
            <>
              <div className="ride-info">
                <p>
                  <strong>{ride.pickup}</strong> → {ride.dropoff}
                </p>
                <p className="ride-meta">
                  {ride.date} • {ride.type}
                </p>
              </div>

              <div className="ride-actions">
                <span className={`status ${ride.status.toLowerCase()}`}>
                  {ride.status}
                </span>

                {/* Rating only when ride completed */}
                {ride.status === "Completed" && (
                  <div className="rating">
                    {ride.rating ? (
                      <p>⭐ {ride.rating}/5</p>
                    ) : (
                      [1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          className="star-btn"
                          onClick={() => handleRate(ride.id, star)}
                        >
                          ⭐
                        </button>
                      ))
                    )}
                  </div>
                )}

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(ride)}
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(ride.id)}
                  title="Delete"
                >
                ⛔️
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Activity;
