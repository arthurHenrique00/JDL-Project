import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  latitude: number
  longitude: number
}

const MapComponent: React.FC<MapProps> = ({ latitude, longitude }) => {
  const position: LatLngExpression = [latitude, longitude]

  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ height: '350px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Localização específica.</Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent
