import React from "react";

const CourierHistory = ({ history, onDelete, onTrack }) => {
  return (
    <div className="history-section">
      <h3>📜 Courier History</h3>
      {history.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        history.map((item) => (
          <div key={item.id} className="history-card">
            <div>
              <p>
                <strong>{item.packageType}</strong> from{" "}
                <b>{item.pickup}</b> → <b>{item.dropoff}</b>
              </p>
              <small>{item.date}</small>
            </div>
            <div className="history-actions">
              <button onClick={() => onTrack(item)}>📍 Track</button>
              <button className="delete-btn" onClick={() => onDelete(item.id)}>
                ❌ Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CourierHistory;
