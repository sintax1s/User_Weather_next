import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'
import { Icon } from 'leaflet';


const Map = ({users}) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom scrollWheelZoom={true} className='leafletContainer relative z-0'>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {users.map((user) => {
        const customIcon = new Icon({
          iconUrl: user.picture?.medium || user.profileImage,
          iconSize: [38, 38],
        });

        const id = user.login?.uuid || user.id;

        return (
          <Marker position={user.coordinates} icon={customIcon} key={id}>
            <Popup>
              {`${user.name.title} ${user.name.first} ${user.name.last}`}
            </Popup>
          </Marker>
        );
      })} 
    </MapContainer>
  )
}

export default Map;