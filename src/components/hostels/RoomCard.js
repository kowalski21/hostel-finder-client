import React from "react";
import { Divider } from "rsuite";
import TenantsDrawer from "./TenantsDrawer";

const RoomCard = ({ room }) => {
  return (
    <div className="card" style={{ minHeight: "80px" }}>
      <div className="card-body">
        <h4 className="fw-bolder fs-1 text-danger">{room.name}</h4>
        <Divider />
        <p className="fw-bolder text-uppercase">Rooms Type: {room.numOccupants} in a room </p>
        <p>{room?.description}</p>
        {/* <p className="fw-bolder">Rooms Available: 8</p> */}
        <p className="fw-bolder">Price: GHS {room.unitCost} per semester</p>
        <TenantsDrawer />
      </div>
    </div>
  );
};

export default RoomCard;
