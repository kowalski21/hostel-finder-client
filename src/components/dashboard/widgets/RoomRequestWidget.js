import React from "react";
import Link from "next/link";
import { Loader } from "rsuite";

import { BriefcaseBusiness, LayoutPanelLeft, ShoppingBag } from "lucide-react";
import { useRoomRequests } from "@/hooks/room_request";

const RoomRequestWidget = () => {
  const { data, isLoading } = useRoomRequests(["TotalRoomRequests"], {
    aggregate: {
      count: "*",
    },
  });
  return (
    <Link href={`/dashboard/room_request`} legacyBehavior>
      <a className="card bg-white  card-xl-stretch mb-xl-8">
        {isLoading && <Loader vertical center />}
        {data && data?.data.length > 0 && (
          <div className="card-body">
            <span className="svg-icon svg-icon-gray-800 svg-icon-3x ms-n1">
              <ShoppingBag />
            </span>

            <div className="text-gray-800 fw-bolder fs-2 mb-2 mt-5">{data?.data[0].count}</div>
            <div className="fw-bold text-muted text-gray-800">Room Request(s)</div>
          </div>
        )}
      </a>
    </Link>
  );
};

export default RoomRequestWidget;
