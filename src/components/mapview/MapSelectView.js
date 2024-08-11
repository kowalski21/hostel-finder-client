import React, { useMemo, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
const MapSelectView = ({ handleLocation, coords = { lat: 6.714337, lng: -1.575629 } }) => {
  const [marker, setMarker] = useState(coords);
  const handleClick = (e) => {
    let payload = e.detail.latLng;
    console.log(payload);
    setMarker(payload);

    handleLocation(payload);
  };
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
      <Map
        style={{ width: "100%", height: "500px", marginTop: "20px" }}
        center={marker}
        // zoom={10}
        defaultCenter={marker}
        defaultZoom={10}
        gestureHandling={"greedy"}
        onClick={handleClick}
        onCameraChanged={(e) => setMarker(e.detail.center)}
      >
        <Marker position={marker} />
      </Map>
    </APIProvider>
  );
};

export default MapSelectView;
