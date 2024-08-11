import React, { useState } from "react";
import { GoogleMap, LoadScript, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useLocation } from "@/store/location";
import { Map } from "lucide-react";
import HostelMarker from "./HostelMarker";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { SelectPicker } from "rsuite";
const convertMarkers = (markers) => {
  return markers.map((marker) => ({
    lat: marker[0],
    lng: marker[1],
  }));
};
const places = ["places"];
const GoogleMapView = ({ items = [] }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY,
    nonce: "map",
    libraries: ["places"],
  });
  //   const [name, setName] = useState("");
  const [mapRef, setMapRef] = useState();
  const containerStyle = { width: "100%", height: "100vh" };
  //   const location = useLocation();

  const center = { lat: 5.305706, lng: -1.990543 };
  const markers = [
    [5.306219, -1.988225],
    [5.314167, -1.984964],
    [5.305193, -1.996808],
    [5.319722, -1.992173],
  ];
  const newMarkers = convertMarkers(markers);
  const onLoad = (map) => {
    console.log(`Loaded`);
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    // newMarkers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    items?.forEach((item) => bounds.extend({ lat: item.lat, lng: item.lng }));
    map.fitBounds(bounds);
  };

  return (
    <div>
      {/* {JSON.stringify(location)} */}

      {/* <LoadScript mapIds={["5dc42679a6136f71"]} libraries={places} googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY}> */}
      {isLoaded && (
        <GoogleMap
          onLoad={onLoad}
          options={{ mapId: "5dc42679a6136f71" }}
          //   center={center}
          //   zoom={14}
          mapContainerStyle={containerStyle}
        >
          {items.map((item) => {
            return (
              <HostelMarker key={item.id} item={item} mapRef={mapRef} position={{ lat: item.lat, lng: item.lng }} />
            );
          })}
        </GoogleMap>
      )}
      {/* </LoadScript> */}
    </div>
  );
};

export default GoogleMapView;
