import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Helper: auto-zoom to bounds
const FitBounds = ({ pickup, dropoff }) => {
  const map = useMap();
  useEffect(() => {
    if (pickup && dropoff) {
      const bounds = L.latLngBounds([pickup, dropoff]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [pickup, dropoff, map]);
  return null;
};

const CourierTracking = ({ selected }) => {
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);

  // Call OpenStreetMap Nominatim API
  const fetchCoordinates = async (place, setCoords) => {
    if (!place) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          place
        )}`
      );
      const data = await res.json();
      if (data.length > 0) {
        setCoords([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    } catch (err) {
      console.error("Geocoding error:", err);
    }
  };

  useEffect(() => {
    if (selected) {
      fetchCoordinates(selected.pickup, setPickupCoords);
      fetchCoordinates(selected.dropoff, setDropoffCoords);
    }
  }, [selected]);

  if (!selected) return <p className="tracking-placeholder">📦 Select a courier to track</p>;

  return (
    <div className="live-tracking">
      <h3>📍 Route: {selected.pickup} → {selected.dropoff}</h3>

      {pickupCoords && dropoffCoords ? (
        <MapContainer
          style={{ height: "300px", borderRadius: "14px" }}
          zoom={12}
          center={pickupCoords}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={pickupCoords}>
            <Popup>Pickup: {selected.pickup}</Popup>
          </Marker>

          <Marker position={dropoffCoords}>
            <Popup>Drop-off: {selected.dropoff}</Popup>
          </Marker>

          <Polyline positions={[pickupCoords, dropoffCoords]} color="blue" />

          <FitBounds pickup={pickupCoords} dropoff={dropoffCoords} />
        </MapContainer>
      ) : (
        <p className="tracking-placeholder">⏳ Fetching live location…</p>
      )}
    </div>
  );
};

export default CourierTracking;
