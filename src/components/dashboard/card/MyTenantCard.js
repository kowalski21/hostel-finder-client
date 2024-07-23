import React from "react";
import { Armchair } from "lucide-react";
import { Loader } from "rsuite";
import { useTenants } from "@/hooks/tenants";
const MyTenantCard = ({ user }) => {
  const query = {
    fields: "*,hostel.id,hostel.name,room.id,room.name",
    filter: {
      occupant: user.id,
    },
    sort: "-date_created",
    limit: 1,
  };
  const divStyle = {
    backgroundColor: "#7239EA",
    backgroundImage: "url('/media/svg/shapes/wave-bg-red.svg')",
  };

  const { data, isLoading } = useTenants(["CurrentTenant", user.id, query], query);

  return (
    <div className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100" style={divStyle}>
      <div className="card-header pt-5 mb-3">
        <div
          className="d-flex flex-center rounded-circle h-80px w-80px"
          style={{ border: "1px dashed rgba(255, 255, 255, 0.4)", backgroundColor: "#7239EA" }}
        >
          <i className="ki-duotone ki-call text-white fs-2qx lh-0">
            <Armchair />
          </i>
        </div>
      </div>

      {isLoading && <Loader center vertical />}

      {data && data?.data.length < 1 && (
        <div className="card-body d-flex align-items-end mb-3">
          <div className="d-flex align-items-center">
            <div className="fw-bold fs-6 text-white">
              <span className="d-block">You are not a tenant yet</span>
              <span className="">Book a room on this platform</span>
            </div>
          </div>
        </div>
      )}

      {data && data?.data.length > 0 && (
        <div className="card-body d-flex align-items-end mb-3">
          <div className="d-flex align-items-center">
            <span className="fs-4hx text-white fw-bold me-6">{data.data[0].room.name}</span>
            {/* <div className="fw-bold fs-6 text-white">
              <span className="d-block">Inbound</span>
              <span className="">Calls</span>
            </div> */}
          </div>
        </div>
      )}

      {data && data?.data.length > 0 && (
        <div
          className="card-footer"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            background: "rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="fw-bold text-white py-2">
            <span className="fs-1 d-block">{data.data[0].hostel.name}</span>
            <span className="opacity-50">Current Hostel</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTenantCard;
