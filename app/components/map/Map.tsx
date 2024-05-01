import React from "react";
import styles from "./map.module.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIcon from "@/public/pink_marker.png";
const customIcon = new L.Icon({
  iconUrl: markerIcon.src,
  iconSize: [35, 35],
});

const Map = () => {
  return (
    <MapContainer
      center={[59.3293, 18.0686]}
      zoom={12}
      scrollWheelZoom={true}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.3293, 18.0686]} icon={customIcon}>
        <Popup>Main Street 1</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
