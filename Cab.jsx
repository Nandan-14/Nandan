import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cab.css";

const Cab = () => {
  const navigate = useNavigate();

  const cabOptions = [
    {
      id: 1,
      name: "Mini Cab",
      price: 150,
      time: "3 min",
      image: "https://placehold.co/200x120?text=Mini+Cab",
    },
    {
      id: 2,
      name: "Sedan Cab",
      price: 250,
      time: "5 min",
      image: "https://placehold.co/200x120?text=Sedan+Cab",
    },
    {
      id: 3,
      name: "SUV Cab",
      price: 400,
      time: "7 min",
      image: "https://placehold.co/200x120?text=SUV+Cab",
    },
  ];

  const handleConfirm = (ride) => {
    localStorage.setItem("ride", JSON.stringify(ride));
    navigate("/confirm");
  };

  return (
    <div className="cab-container">
      <h2 className="cab-title">🚖 Book Your Cab</h2>
      <div className="cab-grid">
        {cabOptions.map((cab) => (
          <div key={cab.id} className="cab-card">
            <img src={cab.image} alt={cab.name} className="cab-image" />
            <div className="cab-info">
              <h3>{cab.name}</h3>
              <p className="cab-price">₹{cab.price}</p>
              <p className="cab-time">⏱ {cab.time} away</p>
              <button
                className="cab-btn"
                onClick={() =>
                  handleConfirm({
                    type: cab.name,
                    price: cab.price,
                    time: cab.time,
                  })
                }
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cab;
