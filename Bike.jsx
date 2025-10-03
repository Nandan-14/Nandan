import React from "react";
import { useNavigate } from "react-router-dom";

const Bike = () => {
  const navigate = useNavigate();

  const bikeOptions = [
    { id: 1, name: "Bike Ride", price: 80, time: "2 min", image: "https://placehold.co/200x120?text=Bike+Ride" },
    { id: 2, name: "Scooter Ride", price: 70, time: "3 min", image: "https://placehold.co/200x120?text=Scooter+Ride" },
  ];

  const handleConfirm = (ride) => {
    localStorage.setItem("ride", JSON.stringify(ride));
    navigate("/confirm");
  };

  return (
    <div>
      <h2>Book a Bike</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {bikeOptions.map((bike) => (
          <div key={bike.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "200px" }}>
            <img src={bike.image} alt={bike.name} style={{ width: "100%", borderRadius: "6px" }} />
            <h4>{bike.name}</h4>
            <p>₹{bike.price}</p>
            <p>{bike.time} away</p>
            <button onClick={() => handleConfirm({ type: bike.name, price: bike.price, time: bike.time })}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bike;
