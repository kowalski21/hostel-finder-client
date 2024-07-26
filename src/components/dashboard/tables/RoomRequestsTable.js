import { assetUrl } from "@/lib/asset";
import React from "react";
import AddPaymentDrawer from "../drawer/AddPaymentDrawer";
import Link from "next/link";
import BookingCancel from "@/components/booking/BookingCancel";
import { usePerms } from "@/hooks/perm";
import { getStatusColor } from "@/lib/status";
import classNames from "classnames";

const RoomRequestsTable = ({ room_requests = [] }) => {
  const { IsOwner } = usePerms();
  const isValid = (status) => {
    if (["archived"].includes(status)) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="card mb-5 mb-xl-8">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Room Requests</span>
          <span className="text-muted mt-1 fw-semibold fs-7">New Room Requests for hostels</span>
        </h3>
        <div className="card-toolbar">
          {/* <a href="#" className="btn btn-sm btn-light-primary">
            <i className="ki-duotone ki-plus fs-2"></i>New Member
          </a> */}
        </div>
      </div>

      <div className="card-body py-3">
        <div className="table-responsive">
          <table className="table table-row-dashed align-middle gs-0 gy-4">
            <thead>
              <tr className="fw-bold text-dark">
                <th className="ps-4 min-w-200px rounded-start">Customer</th>
                <th className="min-w-125px">Hostel</th>
                <th className="min-w-125px">Room</th>
                <th className="min-w-125px">Hostel Manager</th>
                <th className="min-w-125px">Status</th>
                <th className="min-w-200px rounded-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {room_requests.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-50px me-5">
                          <img
                            src={assetUrl(item.customer?.avatar)}
                            className="img-fluid"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                        <div className="d-flex justify-content-start flex-column">
                          <a href="#" className="text-gray-900 fw-bold text-hover-primary mb-1 fs-8">
                            {item.customer?.first_name} {item.customer?.last_name}
                          </a>
                          <span className="text-muted fw-semibold text-muted d-block fs-8">
                            {item?.customer?.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-8">
                        {item.hostel?.name}
                      </a>
                      <span className="text-muted fw-semibold text-muted d-block fs-8">
                        {item?.hostel?.town} <span> </span>
                        {item?.hostel?.city}
                      </span>
                    </td>
                    <td>
                      <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-8">
                        {item?.room?.name}
                      </a>
                      <span className="text-muted fw-semibold text-muted d-block fs-8">GHS {item.room_price} </span>
                    </td>
                    <td>
                      <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-8">
                        {item.hostel.manager.first_name} {item.hostel.manager.last_name}
                      </a>
                      <span className="text-muted fw-semibold text-muted d-block fs-8">
                        {item.hostel.manager.email}
                      </span>
                    </td>
                    <td>
                      <span className={classNames("badge  fs-8 fw-bold", getStatusColor(item.status).bgCss)}>
                        {getStatusColor(item.status).label}
                      </span>
                    </td>
                    <td className="">
                      {/* <AddPaymentDrawer item={item} /> */}
                      {isValid(item.status) && (
                        <Link href={`/dashboard/room_request/${item.id}`}>
                          <button className="btn btn-sm btn-light mx-2 fs-8">View</button>
                        </Link>
                      )}
                      {!item.paid && isValid(item.status) && IsOwner(item.hostel.manager.id) && (
                        <BookingCancel id={item.id} />
                      )}
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

export default RoomRequestsTable;
