import React, { useMemo, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { CheckPicker } from "rsuite";
const MARKERS = [
  [6.714337, -1.575629],
  [6.723864, -1.588326],
  [6.717353, -1.574105],
  [6.718024, -1.573601],
  [6.679217, -1.569368],
];

const convertMarkers = (markers) => {
  return markers.map((marker) => ({
    value: { lat: marker[0], lng: marker[1] },

    label: `New-${marker[0]}${marker[1]}`,
  }));
};
const TestGoogleMap = () => {
  const data = convertMarkers(MARKERS);
  const [markers, setMarkers] = useState([]);
  return (
    <div>
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
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
        <Map
          style={{ width: "50%", height: "600px" }}
          defaultCenter={{ lat: 6.714337, lng: -1.575629 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          onClick={(e) => console.log(e)}
          // onCameraChanged={}
        >
          {markers.map((marker, index) => {
            return <Marker key={index + 1} position={marker} onClick={(e) => console.log(e)} />;
          })}
        </Map>
      </APIProvider>
    </div>
  );
};

export default TestGoogleMap;
