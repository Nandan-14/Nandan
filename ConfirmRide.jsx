import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmRide = () => {
  const navigate = useNavigate();
  const ride = JSON.parse(localStorage.getItem("ride"));

  const saveRide = () => {
    let history = JSON.parse(localStorage.getItem("rideHistory")) || [];
    history.push(ride);
    localStorage.setItem("rideHistory", JSON.stringify(history));
    navigate("/history");
  };

  return (
    <div>
      <h2>Confirm Ride</h2>
      {ride ? (
        <>
          <p>Type: {ride.type}</p>
          <p>Price: ₹{ride.price}</p>
          <p>Arrival: {ride.time}</p>
          <button onClick={saveRide}>Confirm & Save</button>
        </>
      ) : (
        <p>No ride selected.</p>
      )}
    </div>
  );
};

export default ConfirmRide;
