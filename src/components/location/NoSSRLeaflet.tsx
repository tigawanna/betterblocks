"use client";
import dynamic from "next/dynamic";

interface ReactLeafletMapCardProps {
  coords: { lat?: number; lng?: number };
  display_only: boolean;
  setMapLocation?: (lat: number, lng: number) => void;
}

const DynamicComponentWithNoSSR = dynamic(() => import("./ReactLeafletMapCard"), {
  ssr: false,
});

export default ({ coords, display_only, setMapLocation }: ReactLeafletMapCardProps) => (
  <DynamicComponentWithNoSSR
    coords={coords}
    display_only={display_only}
    setMapLocation={setMapLocation}
  />
);
