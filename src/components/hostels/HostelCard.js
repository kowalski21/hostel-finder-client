import React from "react";
import UpdateHostel from "./UpdateHostel";
import Link from "next/link";
const HostelCard = ({ hostel }) => {
  return (
    <div className="card card-flush border-0 h-xl-100 round mb-2">
      <div className="card-body">
        <div className="row gx-6 h-100">
          <div class="col-sm-6 mb-10 mb-sm-0">
            <img
              src={`/media/stock/600x600/img-${hostel.id}.jpg`}
              style={{ borderRadius: "20px" }}
              className="img-fluid"
              alt="Hostel Image"
            />
          </div>
          <div className="col-sm-6">
            <h3 className="fs-6 fw-bolder">{hostel.name}</h3>
            <p className="text-muted fs-8 fw-bolder">
              {hostel.city} {hostel.town}{" "}
            </p>
            <p className="text-dark fw-bolder fs-8">Available Rooms: {hostel.no_rooms}</p>
            <div className="row">
              <div className="col">
                <Link href={`/hostels/view/${hostel.id}`}>
                  <button className="btn btn-dark btn-sm fs-8">View</button>
                </Link>
              </div>
              <div className="col">
                <UpdateHostel hostel={hostel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelCard;
