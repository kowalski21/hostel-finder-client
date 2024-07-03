import React from "react";
import RoomCard from "./RoomCard";
import { useHostelRooms } from "@/hooks/hostels";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";

const RoomsListCard = ({ hostelId }) => {
  const router = useRouter();
  const { isLoading, data } = useHostelRooms({ queryKey: ["HostelRooms", hostelId], hostelId });
  return (
    <div className="row">
      {/* {JSON.stringify(data)} */}

      {data && data.data.length < 1 && (
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h3 className="fs-2 fw-bolder text-gray-600">No rooms created yet for this hostel</h3>
              <p className="text-muted">Please check at later time for room availability</p>
              <button className="btn btn-dark btn-sm" onClick={() => router.push(`/hostels`)}>
                <ArrowLeft size={18} />
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {data &&
        data.data &&
        data.data.map((room) => {
          return (
            <div className="col-md-4 mb-4" key={room.id}>
              <RoomCard room={room} />
            </div>
          );
        })}
    </div>
  );
};

export default RoomsListCard;
