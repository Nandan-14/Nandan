import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmRide1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ride } = location.state || {};

  const handleConfirm = () => {
    if (!ride) return;

    const newRide = {
      id: Date.now(),
      pickup: "Current Location",
      dropoff: "Destination",
      date: new Date().toISOString().split("T")[0],
      type: ride.type,
      status: "Upcoming",
      rating: null,
    };

    const saved = JSON.parse(localStorage.getItem("rides")) || [];
    saved.unshift(newRide);
    localStorage.setItem("rides", JSON.stringify(saved));

    navigate("/Activity");
  };

  if (!ride) return <p>⚠️ No ride selected.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Confirm Your Ride</h2>
      <p><strong>Ride Type:</strong> {ride.type}</p>
      <p><strong>ETA:</strong> {ride.time}</p>
      <p><strong>Price:</strong> {ride.price}</p>

      <button
        onClick={handleConfirm}
        style={{
          padding: "10px 20px",
          background: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Confirm Ride
      </button>
    </div>
  );
};

export default ConfirmRide1;
