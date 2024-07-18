import { useHostel } from "@/hooks/hostels";
import { assetUrl } from "@/lib/asset";
import React from "react";
import Link from "next/link";
import UpdateHostelModal from "../modals/UpdateHostelModal";
import AddRoomDrawer from "../drawer/AddRoomDrawer";
import { usePerms } from "@/hooks/perm";

const HostelDetailCard = ({ hostelId, imgUrl = "/media/stock/600x600/img-32.jpg" }) => {
  const { IsOwner, isManager } = usePerms();
  const query = { fields: "*,manager.id,manager.first_name,manager.last_name,manager.avatar" };
  const { data: hostel, isLoading } = useHostel(hostelId, ["HostelDetail", hostelId, query], query);
  return (
    <div class="card ">
      {hostel && (
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
              <br />
              <span className="fw-bold">Contact : 0551882782</span>
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
          {IsOwner(hostel.manager.id) && <div className="separator mt-2"></div>}
          <div class=" d-flex flex-stack mt-5">
            {IsOwner(hostel.manager.id) && <UpdateHostelModal id={hostel.id} hostel={hostel} />}
            {IsOwner(hostel.manager.id) && <AddRoomDrawer hostelId={hostel.id} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default HostelDetailCard;
