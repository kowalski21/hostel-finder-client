import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { SelectPicker } from "rsuite";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
const PlacesCompleteForm = () => {
  const isLoaded = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY, libraries: ["places"] });
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  return (
    <div>
      {JSON.stringify({ status, data, value })}
      {/* <input type="text" className="form-control" value={value} onChange={(e) => setValue(e.target.value)} /> */}
      {isLoaded && (
        <SelectPicker
          value={value}
          //   onChange={(val) => setValue(val)}
          onSearch={(item) => setValue(item)}
          data={data}
          labelKey="description"
          valueKey="place_id"
          block
        />
      )}
      {/* {JSON.stringify({ data })} */}
    </div>
  );
};
export default PlacesCompleteForm;
