import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const center = {
  lat: -3.745,
  lng: -38.523
};

function Map({children}) {
  return (
      <LoadScript
        googleMapsApiKey="AIzaSyAyJ821gbXvSLBEGuS0W51orqQq5YCZCLo"
        >
        <GoogleMap
          clickableIcons
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
          >
          {children}
          <></>
        </GoogleMap>
      </LoadScript>
  )
}

export default React.memo(Map)

