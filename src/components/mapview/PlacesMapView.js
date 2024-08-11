import React, { useState, useCallback, useRef, useEffect, Fragment } from "react";
import { GoogleMap, useLoadScript, Marker, MarkerF } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { CheckPicker, Input, SelectPicker } from "rsuite";

import { useHostelDistance } from "@/hooks/hostels";
import HostelMarker from "./HostelMarker";
import { FormLabel } from "react-bootstrap";

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

const PlacesMapView = () => {
  const [items, setItems] = useState([]);
  const [itemRef, setItemRef] = useState();
  const [coord, setCoord] = useState(null);
  const { data, isLoading } = useHostelDistance(["HostelDistance", coord, 100], coord, {
    onSuccess: (data) => {
      setItems(data);
    },
  });
  const markersData = convertMarkers(MARKERS);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY,
    libraries: ["places"],
  });

  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);

  const onLoad = useCallback(
    (map) => {
      mapRef.current = map;
      fitBoundsToMarkers(map);
    },
    [items]
  );

  useEffect(() => {
    if (mapRef.current) {
      fitBoundsToMarkers(mapRef.current);
    }
  }, [items]);

  const fitBoundsToMarkers = (map) => {
    if (items.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();

      items.forEach((item) => {
        bounds.extend({ lat: item.lat, lng: item.lng });
      });

      map.fitBounds(bounds);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Fragment>
      {/* {JSON.stringify({ data })} */}
      {/* <SelectPicker data={data} block style={{ width: "50%" }} className="mb-5" /> */}
      <PlacesAutoComplete setLocation={setCoord} />
      {/* <CheckPicker
        data={markersData}
        value={markers}
        onChange={(val) => setMarkers(val)}
        labelKey="label"
        valueKey="value"
        block
        style={{ width: "50%" }}
        className="mb-5"
      /> */}

      <GoogleMap mapContainerStyle={mapContainerStyle} options={options} onLoad={onLoad}>
        {/* {markers.map(({ lat, lng }, index) => (
          <MarkerF key={index} position={{ lat, lng }} />
        ))} */}
        {items.map((item) => {
          return <HostelMarker key={item.id} item={item} mapRef={mapRef} position={{ lat: item.lat, lng: item.lng }} />;
        })}
      </GoogleMap>
    </Fragment>
  );
};

export default PlacesMapView;

const PlacesAutoComplete = ({ setLocation }) => {
  const [search, setSearch] = useState("");
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();
  const handleSelect = (item) => {
    console.log(item);
    getGeocode({ address: item.description })
      .then((results) => {
        // console.log(results);
        const { lat, lng } = getLatLng(results[0]);
        console.log({ lat, lng });
        setLocation({ lat, lng });

        setValue(item.description, false);
        clearSuggestions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* {JSON.stringify({ search })} */}
      {/* {JSON.stringify({ search, value })} */}
      <FormLabel>Search By Location</FormLabel>
      <Input value={value} onChange={(val) => setValue(val)} className="mb-1" style={{ width: "50%" }} />
      {data.length > 0 && (
        <div className="card mb-5" style={{ width: "50%" }}>
          <div className="card-body">
            {data.map((item) => {
              return (
                <div
                  class="cursor-pointer d-flex align-items-center mb-8"
                  key={item.place_id}
                  onClick={(e) => handleSelect(item)}
                >
                  <span class="bullet bullet-vertical h-40px bg-success"></span>

                  <div class="flex-grow-1 mx-5">
                    <a class="text-gray-800 text-hover-primary fw-bolder fs-6">{item.description}</a>
                  </div>

                  <span class="badge badge-light-warning fs-8 fw-bolder">google</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
