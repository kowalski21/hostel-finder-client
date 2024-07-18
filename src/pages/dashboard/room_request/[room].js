import BookingCard from "@/components/booking/BookingCard";

import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useRoomRequest } from "@/hooks/room_request";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "rsuite";

const RoomRequestDetailPage = () => {
  const query = { fields: "*,customer.*,hostel.*,room.*" };
  const router = useRouter();
  const { room } = router.query;
  const { data, isLoading } = useRoomRequest(room, ["RoomRequestDetail", room], query, {
    enabled: room ? true : false,
  });
  return (
    <AppLayout>
      {/* <h3>Room Request Detail, {room}</h3> */}
      {isLoading && (
        <div className="row">
          <div className="col-12">
            <Loader vertical center />
          </div>
        </div>
      )}
      {data && (
        <div className="row mt-10">
          <div className="col-md-12 mb-5">
            <BookingCard item={data} customer={data.customer} hostel={data.hostel} room={data.room} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default RoomRequestDetailPage;
