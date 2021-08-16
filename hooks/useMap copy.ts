import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "mapbox-gl/dist/mapbox-gl.css";
import { CoordinatesType } from '@components/Molecules/types';

mapboxgl.accessToken = "pk.eyJ1IjoiamNzb2Z0aWEiLCJhIjoiY2s3cjBsbzk5MDFvcTNlbXBpeHVhN3B4dSJ9.e8U2_Nao4uub_Qa7gtSoIA";


interface MapType {
  center: CoordinatesType
  zoom: number
  mapContainer: React.MutableRefObject<any>
}

const useMap = ({center, zoom=4, mapContainer}: MapType) => {
  const mapref = useRef(null);
  const [map] = useState(mapref);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    mapref.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [center.lng, center.lat],
      zoom: zoom,
    });
  });
  
  return [map];
};
export default useMap
