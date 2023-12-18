import { useEffect, useState } from "react";

export const useGeoLocation = () => {
  const [geoLocation, setGeoLoaction] = useState<
    GeolocationPosition | { code: number; message: string } | null
  >(null);
  const [position, setPosition] = useState(() => {
    if (geoLocation && "coords" in geoLocation) {
      return {
        lat: geoLocation.coords.latitude,
        lng: geoLocation.coords.longitude,
      };
    }

    return {
      lat: -1.290394,
      lng: 36.816583,
    };
  });
  useEffect(() => {
    const resolver = (
      resolve: PositionCallback,
      reject: (error: { code: number; message: string }) => void
    ) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    };
    const promise = new Promise(resolver);
    promise
      .then((position) => {
        // console.log("position ===>  ",position)
        setGeoLoaction(position);
      })
      .catch((error) => {
        console.log("error getting location ", error);
        setGeoLoaction(error);
      });
  }, []);
  return { position, geoLocation };
};
