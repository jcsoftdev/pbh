import { createContext, useContext } from "react";

import { CoordinatesType } from "@components/Molecules/types";

export type MapTypes = {
  center: CoordinatesType
  zoom: number
  map: React.MutableRefObject<any>
};

export const MapContext = createContext<MapTypes>({center: {lng: 0, lat: 0}, zoom: 0, map: null});

export const useMapContext = () => useContext(MapContext);
