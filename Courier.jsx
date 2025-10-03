import React, { useState } from "react";
import CourierForm from "../components/CourierForm";
import CourierTracking from "../components/CourierTracking";
import "./Courier.css";

const Courier = () => {
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState(null);

  const addBooking = (booking) => {
    setHistory([booking, ...history]);
    setSelected(booking);
  };

  const deleteBooking = (id) => {
    setHistory(history.filter((item) => item.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  return (
    <div className="courier-page">
      <h2 className="courier-title">🚚 Uber Courier Service</h2>
      <p className="courier-subtitle">Send packages with live map tracking.</p>

      <CourierForm onBook={addBooking} />

      {/* Horizontal Sliding History */}
      {history.length > 0 && (
        <div>
          <h3 className="section-title">📦 Your Courier History</h3>
          <div className="horizontal-slider">
            {history.map((item) => (
              <div key={item.id} className="slider-card">
                <h3>{item.pickup} ➝ {item.dropoff}</h3>
                <p>Type: {item.type}</p>
                <p>Time: {item.time}</p>
                <div className="card-actions">
                  <button onClick={() => setSelected(item)}>Track</button>
                  <button onClick={() => deleteBooking(item.id)}>Delete</button>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      )}

      <CourierTracking selected={selected} />
    </div>
  );
};

export default Courier;
