import React from "react";
import { useNavigate } from "react-router-dom";

const Auto = () => {
  const navigate = useNavigate();

  const autoOptions = [
    { id: 1, name: "Standard Auto", price: 100, time: "2 min", image: "https://placehold.co/200x120?text=Auto+Rickshaw" },
    { id: 2, name: "Shared Auto", price: 50, time: "4 min", image: "https://placehold.co/200x120?text=Shared+Auto" },
  ];

  const handleConfirm = (ride) => {
    localStorage.setItem("ride", JSON.stringify(ride));
    navigate("/confirm");
  };

  return (
    <div>
      <h2>Book an Auto</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {autoOptions.map((auto) => (
          <div key={auto.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "200px" }}>
            <img src={auto.image} alt={auto.name} style={{ width: "100%", borderRadius: "6px" }} />
            <h4>{auto.name}</h4>
            <p>₹{auto.price}</p>
            <p>{auto.time} away</p>
            <button onClick={() => handleConfirm({ type: auto.name, price: auto.price, time: auto.time })}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auto;
