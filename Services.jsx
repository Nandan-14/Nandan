// Services.jsx
import React from "react";


import "./Services.css";

const serviceData = [
  {
    id: 1,
    title: "Uber Rides",
    description: "Fast, affordable everyday rides at your fingertips.",
    icon: "🚖",
  },
  {
    id: 2,
    title: "Uber Rentals",
    description: "Keep a ride with you for hours with flexible rental options.",
    icon: "🚙",
  },
  {
    id: 3,
    title: "Intercity",
    description: "Outstation rides made easy and comfortable.",
    icon: "🏙️",
  },
  {
    id: 4,
    title: "Courier Services",
    description: "Send and receive packages quickly across the city.",
    icon: "📦",
  },
  {
    id: 5,
    title: "Airport Transfers",
    description: "Pre-scheduled rides to and from the airport.",
    icon: "✈️",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {serviceData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
