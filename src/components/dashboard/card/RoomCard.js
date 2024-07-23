import { Grid, Settings } from "lucide-react";
import React from "react";
import { Popover, Whisper, Button, Dropdown } from "rsuite";
import { LayoutGrid, ListTodo } from "lucide-react";
import RoomUpdateDrawer from "../drawer/RoomUpdateDrawer";
import NewRoomRequestDrawer from "../drawer/NewRoomRequestDrawer";
import { usePerms } from "@/hooks/perm";
import TenantsDrawer from "../drawer/TenantsDrawer";

const RoomCard = ({ room, hostelId, manager }) => {
  const { IsOwner } = usePerms();
  return (
    <div class="card card-flush h-lg-100 mb-5">
      <div class="card-header pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold text-gray-900">{room.name}</span>
          <span class="text-gray-500 mt-1 fw-semibold fs-6">{room.room_type} in a room</span>
        </h3>

        <div class="card-toolbar">
          {/* <button class="btn btn-icon btn-color-gray-800 btn-active-color-primary justify-content-end">
            <LayoutGrid size={16} />
          </button> */}
          {/* <button className="btn btn-dark btn-sm">
            <Settings size={9} /> Update
          </button> */}

          {IsOwner(manager.id) && <RoomUpdateDrawer room={room} hostelId={hostelId} />}
        </div>
      </div>
      <div className="separator"></div>
      {/* {JSON.stringify({ hostelId, room })} */}

      <div class="card-body pt-5">
        <div class="d-flex flex-stack">
          <div class="text-gray-700 fw-semibold fs-6 me-2">No of Occupants</div>

          <div class="d-flex align-items-senter">
            <span class="text-gray-900 fw-bolder fs-6">{room.tenant_no}</span>
          </div>
        </div>

        <div class="separator separator-dashed my-3"></div>

        <div class="d-flex flex-stack">
          <div class="text-gray-700 fw-semibold fs-6 me-2">Price Per Occupant</div>

          <div class="d-flex align-items-senter">
            <span class="text-gray-900 fw-bolder fs-6">GHS {room.price}</span>
          </div>
        </div>

        <div class="separator separator-dashed my-3"></div>

        {/* <div class="d-flex flex-stack">
          <div class="text-gray-700 fw-semibold fs-6 me-2">Room Status</div>

          <div class="d-flex align-items-senter">
            <span class="text-gray-900 fw-bold fs-6 text-uppercase">{room.status}</span>
          </div>
        </div> */}
      </div>
      <div className="separator"></div>
      <div className="card-footer d-flex flex-stack">
        <TenantsDrawer hostelId={hostelId} room={room} manager={manager} />

        {room.room_type > room.tenant_no && <NewRoomRequestDrawer hostelId={hostelId} room={room} manager={manager} />}
        {/* <button className="btn btn-dark btn-sm">
          <Settings size={9} /> Book Room
        </button> */}
      </div>
    </div>
  );
};

export default RoomCard;
