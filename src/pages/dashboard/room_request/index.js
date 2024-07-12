import RoomRequestsContainer from "@/components/dashboard/card/RoomRequestsContainer";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import React from "react";

const RoomRequestsPage = () => {
  return (
    <AppLayout>
      <h3>Room Requests</h3>

      <div className="row">
        <div className="col-12">
          <RoomRequestsContainer />
        </div>
      </div>
    </AppLayout>
  );
};

export default RoomRequestsPage;
