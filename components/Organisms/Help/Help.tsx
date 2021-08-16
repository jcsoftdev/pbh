import React, { useState, useEffect } from "react";

import Map from "components/Molecules/Map";
import FormHelp from "./FormHelp";
import LoadingSpinner from "components/Atoms/LoadingSpinner";
// import { Marker } from '@react-google-maps/api';

import {images} from './data'
import { CoordinatesType } from "@components/Molecules/types";
import CustomMarker from "@components/Atoms/CustomMarker/CustomMarker";
import useLocation from "hooks/useLocation";

const Help = () => {
  // const [longitude, setLongitude] = useState({});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pets, setPets] = useState([]);
  const {coordinates, setCoordinates } = useLocation()
  console.log('coo', coordinates)
  const handleLocation = (lat, lng) => {
    setCoordinates({ lat: lat, lng: lng });
  };
  useEffect(() => {
    (async() => {
      // try {
      //   const data = await getPets()
      //   console.log(data)
      //   setPets(data)
      //   setLoading(false)
      // } catch (error) {
      //   setLoading(false)
      //   setError({ ...error})
      // }
      
    })();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <h1>
        <br />
        <br />
        <br />
        Error
      </h1>
    );
  }
  if (loading && !error) {
    return <LoadingSpinner asOverlay/>;
  }
  if (!loading && !error && coordinates) {
    console.log('my coordinates', coordinates);
    return (
      <>
        <Map
          center={coordinates}
          zoom={10}
        >
          {/* <CustomMarker 
            position={coordinates}
            
            onLoad={()=>console.log('Cargué')}
            icon={images.helped}
            /> */}
        </Map>
        <FormHelp
          handleLocation={handleLocation}
        />
      </>
    );
  }
};

export default Help;
