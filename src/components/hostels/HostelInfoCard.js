import { useHostel } from "@/hooks/hostels";
import React from "react";
import { Loader } from "rsuite";
import AddHostel from "./AddHostel";
import AddRoom from "./AddRoom";

const HostelInfoCard = ({ hostelId }) => {
  const { isLoading, data } = useHostel({ id: hostelId, queryKey: ["HostelDetails", hostelId] });

  return (
    <div className="card border-0">
      {isLoading && (
        <div className="card-body">
          <Loader center />
        </div>
      )}

      {data && data?.data && (
        <div className="card-body">
          <img
            src={`/media/stock/600x600/img-${hostelId}.jpg`}
            style={{ borderRadius: "20px" }}
            className="img-fluid"
            alt=""
          />
          <h3 className="mt-4 fw-bolder">{data.data.name}</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad quasi molestias nulla. Velit dolore nihil
            esse unde! Quidem aliquid quo, eligendi nobis repudiandae vitae cumque. Dolorum perspiciatis officiis porro.
          </p>
          <div className="d-flex flex-wrap">
            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
              <div class="fw-bolder fs-6 text-gray-800">Rooms : {data.data.no_rooms}</div>
            </div>
            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
              <div class="fw-bolder fs-6 text-gray-800">
                {data.data.town}, {data.data.city}
              </div>
            </div>

            <button className="btn btn-dark btn-sm ">Room Request</button>
            <AddRoom hostelId={hostelId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HostelInfoCard;
