import { useGetPlaceDetails } from "@/hooks/places";
import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input, InputPicker, Slider } from "rsuite";
const PlacesCompleteForm = ({ handleCoord }) => {
  const [place, setPlace] = useState(null);
  const [coord, setCoord] = useState(null);
  const [distance, setDistance] = useState(50);

  const { data, isLoading, error } = useGetPlaceDetails(["PlaceDetails", place], place, {
    enabled: place ? true : false,
    onSuccess: (data) => {
      console.log(data.result.geometry.location);
      // setCoord(data.result.geometry.location);
      handleCoord(data.result.geometry.location);
    },
  });
  return (
    <div>
      PlacesCompleteForm
      <div className="row">
        <div className="col-md-6">
          <FormLabel>Enter the radius for selection (meters)</FormLabel>
          <Input type="number" min={50} value={distance} onChange={(val) => setDistance(val)} defaultValue={50} />
        </div>
        <div className="col-md-6">
          <FormLabel>Select Location</FormLabel>
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_MAP_KEY}
            selectProps={{
              onChange: (val, meta) => {
                // console.log(val);
                // console.log(val.value.place_id);
                setPlace(val.value.place_id);
                // console.log(meta);
              },
            }}
            autocompletionRequest={{
              componentRestrictions: {
                country: ["gh"],
              },
            }}
          />
        </div>
      </div>
      {/* {JSON.stringify({ info: data })} */}
      {JSON.stringify({ coord })}
      {coord && <button className="btn btn-dark btn-sm mt-5">Search !</button>}
    </div>
  );
};

export default PlacesCompleteForm;
