import { MarkerF, OverlayView, OverlayViewF, InfoWindowF } from "@react-google-maps/api";
import React, { useState } from "react";
import { useBoolean } from "usehooks-ts";
import { Eye, X } from "lucide-react";
import { assetUrl } from "@/lib/asset";
import Link from "next/link";
const HostelMarker = ({ position, mapRef, item }) => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const handleMarkerClick = (position) => {
    // mapRef?.setZoom(20);
    mapRef?.panTo(position);
    // setInfoWindowData({ id, address });
    toggle();
  };
  return (
    <MarkerF
      onClick={() => handleMarkerClick(position)}
      position={position}
      // icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
      icon={"http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}
      // icon={{
      //   url: `/media/patterns/pattern-1.jpg`,

      //   scaledSize: {
      //     width: 20,
      //     height: 20,
      //   },
      // }}
    >
      {/* {value && (
        <InfoWindowF isOpen={value} onCloseClick={toggle}>
          <h3>User Information</h3>
        </InfoWindowF>
      )} */}
      {value && (
        <OverlayViewF position={position} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div className="card" style={{ width: "200px", height: "80px", borderRadius: "20px" }}>
            <div className="card-body px-3 py-3">
              <div className="d-flex gap-2">
                <img
                  src={assetUrl(item.thumbnail)}
                  style={{ height: "50px", width: "50px", borderRadius: "10px" }}
                  alt=""
                />
                <div>
                  <h3 className="fs-8 fw-bolder">{item.name}</h3>
                  <p className="fs-9 fw-bolder">
                    {item.town} ,{item.city}
                  </p>
                  <Link href={`/dashboard/hostels/${item.id}`}>
                    <Eye size={10} />
                  </Link>

                  {/* <p>{JSON.stringify({ position })}</p> */}
                </div>
                <X size={12} onClick={toggle} />
              </div>
            </div>
          </div>
        </OverlayViewF>
      )}
    </MarkerF>
  );
};

export default HostelMarker;
