import React, { useState, useCallback, useRef, useEffect, Fragment } from "react";
import { GoogleMap, useLoadScript, Marker, MarkerF } from "@react-google-maps/api";
import { CheckPicker } from "rsuite";
const MARKERS = [
  [6.714337, -1.575629],
  [6.723864, -1.588326],
  [6.717353, -1.574105],
  [6.718024, -1.573601],
  [6.679217, -1.569368],
];

const mapContainerStyle = {
  width: "50%",
  height: "500px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const convertMarkers = (markers) => {
  return markers.map((marker) => ({
    value: { lat: marker[0], lng: marker[1] },

    label: `New-${marker[0]}${marker[1]}`,
  }));
};

const ParmaMapView = () => {
  const data = convertMarkers(MARKERS);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY, // Replace with your API key
  });

  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);

  const onLoad = useCallback(
    (map) => {
      mapRef.current = map;
      fitBoundsToMarkers(map);
    },
    [markers]
  );

  useEffect(() => {
    if (mapRef.current) {
      fitBoundsToMarkers(mapRef.current);
    }
  }, [markers]);

  const fitBoundsToMarkers = (map) => {
    if (markers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();

      markers.forEach((item) => {
        bounds.extend({ lat: item.lat, lng: item.lng });
      });

      map.fitBounds(bounds);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Fragment>
      {JSON.stringify(markers)}
      <CheckPicker
        data={data}
        value={markers}
        onChange={(val) => setMarkers(val)}
        labelKey="label"
        valueKey="value"
        block
        style={{ width: "50%" }}
        className="mb-5"
      />

      <GoogleMap mapContainerStyle={mapContainerStyle} options={options} onLoad={onLoad}>
        {markers.map(({ lat, lng }, index) => (
          <MarkerF key={index} position={{ lat, lng }} />
        ))}
      </GoogleMap>
    </Fragment>
  );
};

export default ParmaMapView;
