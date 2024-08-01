import AppLayout from "@/components/layout/dashboard/AppLayout";
import GoogleMapView from "@/components/mapview/GoogleMapView";
import PlacesCompleteForm from "@/components/mapview/PlacesCompleteForm";
import { useHostels } from "@/hooks/hostels";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FormLabel } from "react-bootstrap";
import { Input, Loader } from "rsuite";

// on the mapview
// search by name
// location using google maps auto complete
// render the result on google maps
const MapViewPageHostels = () => {
  const query = { fields: "id,lat,lng,name,city,town,thumbnail" };
  const { data, isLoading } = useHostels(["MapViewHostels", query], query);

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
        {isLoading && <Loader vertical center />}
        <div className="col-md-12">
          {/* <PlacesCompleteForm /> */}
          {data && data?.data && <GoogleMapView items={data?.data ? data?.data : []} />}
        </div>
      </div>
    </AppLayout>
  );
};

export default MapViewPageHostels;
