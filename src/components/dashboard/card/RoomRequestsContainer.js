import React from "react";
import RoomRequestsTable from "../tables/RoomRequestsTable";
import { useRoomRequests } from "@/hooks/room_request";
import { Loader } from "rsuite";

const RoomRequestsContainer = () => {
  const query = { fields: "*,customer.*,hostel.*,room.*,hostel.manager.*" };
  const { isLoading, data } = useRoomRequests(["RoomsRequest", query], query);
  return (
    <div className="row">
      <div className="col-12">
        {isLoading && <Loader vertical center />}
        {data && <RoomRequestsTable room_requests={data?.data} />}
      </div>
    </div>
  );
};

export default RoomRequestsContainer;
