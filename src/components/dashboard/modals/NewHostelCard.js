import React from "react";
import HostelModal from "./HostelModal";
import Link from "next/link";
import { usePerms } from "@/hooks/perm";

const NewHostelCard = () => {
  const { IsOwner, isManager } = usePerms();
  return (
    <div class="card-body bg-white d-flex flex-column flex-center">
      <div class="mb-2">
        <h1 class="fw-semibold text-gray-800 text-center lh-lg">Hostel</h1>

        <div class="py-10 text-center">
          <img src="/media/svg/illustrations/easy/4.svg" class="theme-light-show w-200px" alt="" />
        </div>
      </div>

      <div class="text-center mb-1">
        {isManager() && <HostelModal />}
        <Link href={`/dashboard/hostels`} legacyBehavior>
          <a class="btn btn-sm btn-light">View Hostels</a>
        </Link>
      </div>
    </div>
  );
};

export default NewHostelCard;
