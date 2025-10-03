import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Book.css";

const Book = () => {
  const [ride, setRide] = useState({
    pickup: "",
    dropoff: "",
    type: "UberX",
    time: "Now",
    rating: "", // new state for rating
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRide({ ...ride, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ride.pickup.trim() === ride.dropoff.trim()) {
      alert("Pickup and Drop-off cannot be the same!");
      return;
    }

    const newRide = {
      id: Date.now(),
      pickup: ride.pickup,
      dropoff: ride.dropoff,
      type: ride.type,
      time: ride.time,
      date: new Date().toISOString().split("T")[0],
      status: "Upcoming",
      rating: ride.rating || null, // save rating
    };

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem("rides")) || [];
    saved.unshift(newRide);
    localStorage.setItem("rides", JSON.stringify(saved));

    alert("🚖 Ride booked successfully!");
    navigate("/Activity");
  };

  return (
    <div className="bookpage">
      <h2 className="ride-title">🚖 Book Your Ride</h2>

      <form className="ride-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={ride.pickup}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="dropoff"
          placeholder="Drop-off Location"
          value={ride.dropoff}
          onChange={handleChange}
          required
        />

        <select name="type" value={ride.type} onChange={handleChange}>
          <option value="UberX">🚗 UberX</option>
          <option value="UberXL">🚙 UberXL</option>
          <option value="Intercity">🏙️ Intercity</option>
          <option value="Rentals">🕒 Rentals</option>
        </select>

        <select name="time" value={ride.time} onChange={handleChange}>
          <option value="Now">Now</option>
          <option value="Schedule">Schedule for later</option>
        </select>

        {/* ⭐ Rating Dropdown */}
        <select name="rating" value={ride.rating} onChange={handleChange}>
          <option value="">Rate your ride (optional)</option>
          <option value="1">⭐ 1</option>
          <option value="2">⭐⭐ 2</option>
          <option value="3">⭐⭐⭐ 3</option>
          <option value="4">⭐⭐⭐⭐ 4</option>
          <option value="5">⭐⭐⭐⭐⭐ 5</option>
        </select>

        <button type="submit" className="book-btn">
          Book Ride
        </button>
      </form>
    </div>
  );
};

export default Book;
