import React from "react";
import HostelModal from "./HostelModal";

const NewHostelCard = () => {
  return (
    <div class="card-body bg-white d-flex flex-column flex-center">
      <div class="mb-2">
        <h1 class="fw-semibold text-gray-800 text-center lh-lg">Create New Hostel</h1>

        <div class="py-10 text-center">
          <img src="/media/svg/illustrations/easy/4.svg" class="theme-light-show w-200px" alt="" />
        </div>
      </div>

      <div class="text-center mb-1">
        <HostelModal />

        <a class="btn btn-sm btn-light" href="apps/user-management/users/view.html">
          View Hostels
        </a>
      </div>
    </div>
  );
};

export default NewHostelCard;
