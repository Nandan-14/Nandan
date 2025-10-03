import React, { useState } from "react";

const CourierForm = ({ onBook }) => {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    packageType: "Small",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleString(),
      status: "On the way 🚚",
    };
    onBook(newBooking);
    setFormData({ pickup: "", dropoff: "", packageType: "Small" });
  };

  return (
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
  );
};

export default CourierForm;
