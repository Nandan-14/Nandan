// RideMap.js
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, Polyline, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 28.6139, // default latitude
  lng: 77.2090  // default longitude
};

const RideMap = ({ pickup, dropoff }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // replace with your key
  });

  const [marker, setMarker] = useState(center);

  // Simulate ride movement
  useEffect(() => {
    if (!pickup || !dropoff) return;

    const route = [
      { lat: pickup.lat, lng: pickup.lng },
      { lat: dropoff.lat, lng: dropoff.lng }
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < route.length) {
        setMarker(route[i]);
        i++;
      } else clearInterval(interval);
    }, 2000); // move every 2 seconds

    return () => clearInterval(interval);
  }, [pickup, dropoff]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={marker}
      zoom={14}
    >
      <Marker position={marker} />
      {pickup && dropoff && (
        <Polyline
          path={[{ lat: pickup.lat, lng: pickup.lng }, { lat: dropoff.lat, lng: dropoff.lng }]}
          options={{ strokeColor: "#FF0000", strokeWeight: 2 }}
        />
      )}
    </GoogleMap>
  );
};

export default RideMap;
