import AppLayout from "@/components/layout/dashboard/AppLayout";
import GoogleMapView from "@/components/mapview/GoogleMapView";
import ParmaMapView from "@/components/mapview/ParmaMapView";
import PlacesCompleteForm from "@/components/mapview/PlacesCompleteForm";
import PlacesMapView from "@/components/mapview/PlacesMapView";
import TestGoogleMap from "@/components/mapview/TestGoogleMap";
import { useHostelDistance, useHostels } from "@/hooks/hostels";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FormLabel } from "react-bootstrap";
import { Input, Loader } from "rsuite";

// on the mapview
// search by name
// location using google maps auto complete
// render the result on google maps
const MapViewPageHostels = () => {
  const [coord, setCoord] = useState({ lat: 6.675651299999999, lng: -1.5575674 });
  const [distance, setDistance] = useState(50);
  // const query = { fields: "id,lat,lng,name,city,town,thumbnail" };
  // const { data, isLoading } = useHostels(["MapViewHostels", query], query);
  // const { data, isLoading } = useHostelDistance(["HostelDistance", coord, distance], coord, {
  //   enabled: coord ? true : false,
  // });
  const handleCoord = (val) => {
    setCoord(val);
  };
  return (
    <AppLayout>
      <h3>Welcome to Map View </h3>
      <div className="row">
        {/* <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Filter By</div>
            </div>
            <div className="card-body">
              <FormLabel>Hostel Name</FormLabel>
              <Input />
            </div>
          </div>
        </div> */}
        {/* {JSON.stringify(data)} */}

        {/* {isLoading && <Loader vertical center />} */}
        <div className="col-md-12">
          <PlacesMapView />
          {/* <TestGoogleMap /> */}
          {/* <ParmaMapView /> */}
          {/* <PlacesCompleteForm handleCoord={handleCoord} /> */}
          {/* {data && <GoogleMapView items={data ? data : []} />} */}
        </div>
      </div>
    </AppLayout>
  );
};

export default MapViewPageHostels;
