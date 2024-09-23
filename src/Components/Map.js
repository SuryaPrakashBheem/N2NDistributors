import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from '../Assets/marker.gif';

// Fix default marker icon issue
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

const customIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [70, 70],  // Adjust as necessary
    iconAnchor: [16, 32], // Adjust as necessary
    popupAnchor: [0, -28] // Adjust if you need the popup to appear correctly
  });

const MyMap = () => {
  const position = [15.3010, -61.3880]; // Default position [latitude, longitude]

  const locations = [
    { position: [15.3092, -61.3732], name: "Trafalgar Falls" },
    { position: [15.3832, -61.3532], name: "Mero Beach" },
    { position: [15.3073, -61.3667], name: "Cochrane" },
    { position: [15.3951, -61.3428], name: "Salisbury" },
  ];
  return (
    <MapContainer center={position} zoom={13} className='leaflet-map h-[200px] md:h-[400px] w-[100%]'>
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Roseau,Dominica.
        </Popup>
      </Marker>
      {locations.map((loc, index) => (
        <Marker key={index} position={loc.position} icon={customIcon}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MyMap;
