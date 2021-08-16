// import { Marker, OverlayView } from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "utils/mapboxgl";
import { CustomMarkerTypes } from "./types";
import { useMapContext } from "@context/useMapContext";
import PopUp from "../PopUp";

const CustomMarker = ({ position, icon, onLoad, data, cellphone }: CustomMarkerTypes) => {
  const markerRef = useRef(null);
  const { map } = useMapContext();

  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (markerRef.current) {
      new mapboxgl.Marker(markerRef.current)
        .setLngLat([position.lng, position.lat])
        .addTo(map);
    }
  }, [markerRef]);

  const handleCLick = () => {
    console.log("click");
    setShowPopUp(!showPopUp);
  };

  console.log("t", cellphone);
  return (
    <div className="marke-container">
      <div
        ref={markerRef}
        className={`marker ${data.find((pet=>pet.state))?'isPending':''}`}
        onClick={handleCLick}
      />
      {showPopUp ? (
        <PopUp coordinates={position} setShowPopUp={setShowPopUp} data={data} cellphone={cellphone}/>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CustomMarker;
