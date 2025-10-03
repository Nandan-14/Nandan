import React from "react";

const LiveTracking = () => {
  return (
    <div>
      <h2>Live Tracking</h2>
      <iframe
        title="map"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?q=India&key=YOUR_GOOGLE_MAPS_API_KEY`}
      ></iframe>
    </div>
  );
};

export default LiveTracking;
