import { useRoomRequests } from "@/hooks/room_request";
import React from "react";
import { MailCheck, School } from "lucide-react";
import { Loader } from "rsuite";
import Link from "next/link";
import classNames from "classnames";
import { getStatusColor } from "@/lib/status";
const MyBookingList = ({ user }) => {
  const query = { fields: "*,hostel.*,room.id,room.name", filter: { customer: user.id } };
  const { data, isLoading } = useRoomRequests(["MyRoomRequests", user.id, query], query);
  return (
    <div className="card ">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Room Requests</span>
          <span className="text-muted mt-1 fw-semibold fs-7">List of my room requests</span>
        </h3>
      </div>
      <div className="card-body py-3">
        <div className="table-responsive">
          <table className="table align-middle table-row-dashed gs-0 gy-3">
            <thead>
              <tr>
                <th class="p-0 w-50px"></th>
                <th class="p-0 min-w-150px"></th>
                <th class="p-0 min-w-150px"></th>
                <th class="p-0 min-w-140px"></th>
                <th class="p-0 min-w-120px"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <Loader center />}
              {data &&
                data?.data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <div class="symbol symbol-50px me-2">
                          <span class="symbol-label bg-light">
                            <School />
                          </span>
                        </div>
                      </td>
                      <td>
                        <a href="#" class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">
                          {item.room.name}
                        </a>
                        <span class="text-muted fw-bolder d-block fs-7">
                          {item.hostel.name},{item.hostel.town}
                        </span>
                      </td>
                      <td class="text-end">
                        <span class="text-dark mb-1 fw-bolder d-block fs-6">Room Price</span>
                        <span class="text-gray-900 fw-bold d-block fs-7">GHS {item.room_price}</span>
                      </td>
                      <td class="text-end">
                        <span class="text-dark mb-1 fw-bolder d-block fs-6">Request Date</span>
                        <span class="text-gray-900 fw-bold d-block fs-7">5 day ago</span>
                      </td>
                      <td class="text-end">
                        <span class="text-dark mb-1 fw-bolder d-block fs-6">Status</span>
                        <span class={classNames("badge fs-7 fw-bold", getStatusColor(item.status).bgCss)}>
                          {getStatusColor(item.status).label}
                        </span>
                      </td>
                      <td class="text-end">
                        <Link href={`/dashboard/room_request/${item.id}`} legacyBehavior>
                          <a className="btn btn-sm  btn-bg-light btn-active-color-primary">View</a>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookingList;
