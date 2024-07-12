import { assetUrl } from "@/lib/asset";
import React from "react";
import Link from "next/link";
const HostelCard = ({ imgUrl = "/media/stock/600x600/img-32.jpg", to, hostel }) => {
  return (
    <div class="card card-flush h-xl-100">
      <div class="card-body text-center pb-5">
        <a class="d-block overlay">
          <div
            class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded mb-7"
            style={{
              height: "280px",
              objectFit: "cover",
              backgroundImage: `url(${hostel?.thumbnail ? assetUrl(hostel?.thumbnail) : imgUrl})`,
            }}
          ></div>
        </a>

        <div class="d-flex align-items-end flex-stack mb-1">
          <div class="text-start">
            <span class="fw-bolder text-gray-800 cursor-pointer text-hover-primary fs-4 d-block">{hostel.name}</span>
            <span className="">
              {hostel.city}, {hostel.town}
            </span>
          </div>
        </div>
        <div className="d-flex align-items-start mt-2">
          <div class="symbol symbol-50px me-2">
            <span class="symbol-label">
              <img
                src={assetUrl(hostel?.manager?.avatar)}
                class=" img-fluid align-self-end"
                alt=""
                style={{
                  height: 40,
                  width: 40,
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "5px",
                }}
              />
            </span>
          </div>
          <div className="mx-2 mt-2 text-start">
            <span className="fs-7 fw-bolder text-gray-600">
              <span className="text-gray-800">Manager</span>
              <br />
              Hostel Manager
            </span>
          </div>
        </div>
      </div>

      <div class="card-footer d-flex flex-stack pt-0">
        {/* <a class="btn btn-sm btn-dark flex-shrink-0 me-2" data-bs-target="#kt_modal_bidding" data-bs-toggle="modal">
          Manage
        </a> */}
        <Link href={`/dashboard/hostels/${hostel.id}`} legacyBehavior>
          <a class="btn btn-sm btn-dark flex-shrink-0">View</a>
        </Link>
      </div>
    </div>
  );
};

export default HostelCard;
