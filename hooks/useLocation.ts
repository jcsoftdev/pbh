import { CoordinatesType } from "@components/Molecules/types";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const useLocation = () => {
  const [coordinates, setCoordinates] = useState<CoordinatesType>();

  const getLocation = async () => {
    const currentLocation = await new Promise<CoordinatesType>(
      (resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            (e) => {
              // resolve(currentLocation;
            }
          );
        } else {
          reject();
        }
      }
    );
    setCoordinates(currentLocation);
  };

  useEffect(() => {
    getLocation();
  }, [coordinates?.lat, coordinates?.lng]);

  useCallback(() => {
    getLocation();
  }, [coordinates]);

  return { coordinates, setCoordinates };
};

export default useLocation;
