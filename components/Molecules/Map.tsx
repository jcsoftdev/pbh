import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { MapType } from "./types";
import { MapContext } from "@context/useMapContext";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamNzb2Z0aWEiLCJhIjoiY2s3cjBsbzk5MDFvcTNlbXBpeHVhN3B4dSJ9.e8U2_Nao4uub_Qa7gtSoIA";

const Map = ({ children, center, zoom }: MapType) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [center.lng, center.lat],
      zoom: zoom,
    });
  });
  return (
    <div ref={mapContainer} className="map-container">
      {map.current ? (
        <MapContext.Provider value={{ map: map.current, zoom, center }}>
          {children}
        </MapContext.Provider>
      ) : (
        <div>
          <h2 >Loading map...</h2>
        </div>
      )}
    </div>
  );
};

export default React.memo(Map);
