import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MultiCarousel = ({category}) => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDmjw0ZtbyJ21izl8SHcFIGrL_5qUEj8r0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add markers, polygons, etc. here */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MultiCarousel
