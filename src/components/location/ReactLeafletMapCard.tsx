"use client"
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMapEvents,
} from "react-leaflet";

import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { useGeoLocation } from "@/utils/hooks/useGeoLocation";

interface ReactLeafletMapCardProps {
  coords: { lat?: number; lng?: number };
  display_only: boolean;
  setMapLocation?: (lat: number, lng: number) => void;
}

interface LatLngExp {
  lat: number;
  lng: number;
}

const ReactLeafletMapCard = ({
  coords,
  display_only,
  setMapLocation,
}: ReactLeafletMapCardProps) => {
  const { position } = useGeoLocation();
  const [pos, setPos] = useState(() => coords ?? position);
  const [zoom, SetZoom] = useState(15);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center select-none">
      <MapContainer
        style={{ width: "90%", height: "500px" }}
        center={{
          lat: pos.lat ?? position.lat,
          lng: pos.lng ?? position.lng,
        }}
        zoom={zoom}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* <Popup>Popup in FeatureGroup</Popup> */}
        <button
          type="button"
          className="leaflet-top leaflet-right text-white
                bg-purple-900 p-2 m-2 z-50 rounded-lg hover:bg-slate-700"
          onClick={() => setPos(coords ?? position)}>
          Recenter Map
        </button>

        <MapChild
          draggable={!display_only}
          position={{
            lat: pos.lat ?? position.lat,
            lng: pos.lng ?? position.lng,
          }}
          setMapLocation={setMapLocation}
        />
      </MapContainer>
    </div>
  );
};
export default ReactLeafletMapCard;

interface MapChildProps {
  draggable: boolean;
  position: LatLngExp;
  setMapLocation: ((lat: number, lng: number) => void) | undefined;
}
function MapChild({ draggable, position, setMapLocation }: MapChildProps) {
  // console.log("draggable ",draggable)
  // const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      // setPosition(e.latlng)
      setMapLocation && setMapLocation(e.latlng.lat, e.latlng.lng);
      map.flyTo(position, map.getZoom());
    },
    dragend(e) {
      setMapLocation &&
        setMapLocation(e.target._latlng.lat, e.target._latlng.lng);
    },
  });

  return position === null ? null : (
    <Marker position={position} draggable={draggable}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
