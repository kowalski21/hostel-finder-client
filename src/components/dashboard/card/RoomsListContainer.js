import React from "react";
import RoomCard from "./RoomCard";
import { Loader } from "rsuite";
import { useRooms } from "@/hooks/room";

const RoomsListContainer = ({ hosteId }) => {
  const query = { fields: "*,hostel.id,hostel.manager.id", filter: { hostel: hosteId } };
  const queryKey = ["RoomsHostel", hosteId, query];
  const { data, isLoading } = useRooms(queryKey, query);
  return (
    <div className="row">
      {isLoading && (
        <div className="col-12">
          <Loader center vertical />
        </div>
      )}
      <div className="col-12">
        <h3>Rooms</h3>
      </div>
      {data &&
        data?.data.map((room) => {
          return (
            <div className="col-md-4 mb-5" key={room.id}>
              <RoomCard room={room} hostelId={room.hostel.id} manager={room.hostel.manager} />
            </div>
          );
        })}
    </div>
  );
};

export default RoomsListContainer;
