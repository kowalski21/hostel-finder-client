import { useUser } from "@/hooks/users";
import React from "react";
import { Loader } from "rsuite";
import UserBannerHeader from "./UserBannerHeader";

const UserBanner = ({ userId }) => {
  const { data, isLoading } = useUser({
    queryKey: ["UserInfo", userId],
    userId: userId,
  });
  return (
    <div class="card mb-5 mb-xl-10">
      {isLoading && <Loader vertical center />}
      {data && data?.data && (
        <div class="card-body pt-9 pb-0">
          <UserBannerHeader user={data?.data} />
          <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
            <li class="nav-item mt-2">
              <a class="nav-link text-active-primary ms-0 me-10 py-5 active">Overview</a>
            </li>

            <li class="nav-item mt-2">
              <a class="nav-link text-active-primary ms-0 me-10 py-5">Rooms Requests</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserBanner;
