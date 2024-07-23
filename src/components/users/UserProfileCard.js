import { useUser } from "@/hooks/users";
import { assetUrl } from "@/lib/asset";
import { Layers3, LayoutDashboard, UserRoundCog } from "lucide-react";
import React from "react";
import { Loader } from "rsuite";
import Link from "next/link";
import { useRouter } from "next/router";
import UserLinkItem from "./UserLinkItem";
const UserProfileCard = ({ userId }) => {
  const query = { fields: "*,role.id,role.name" };
  const { data: user, isLoading } = useUser(userId, ["UserProfile", userId, query], query);
  const router = useRouter();
  return (
    <div className="card mb-5 mb-xl-8">
      {isLoading && <Loader center vertical />}
      {user && (
        <div className="card-body pt-15 px-0">
          <div className="d-flex flex-column text-center mb-9 px-9">
            <div className="symbol symbol-80px symbol-lg-150px mb-4">
              <img src={assetUrl(user?.avatar)} className="img-center" alt="" />
            </div>

            {/* {JSON.stringify({ router })} */}
            <div className="text-center">
              <a className="text-gray-800 fw-bold text-hover-primary fs-4">
                {user?.first_name} {user?.last_name}
              </a>
              <span className="text-muted d-block fw-semibold">{user?.email}</span>
              <span className="text-dark d-block fw-bolder">{user?.role?.name}</span>
            </div>
          </div>

          <div className="m-0">
            <ul className="nav nav-pills nav-pills-custom flex-column border-transparent fs-5 fw-bold">
              <li className="nav-item mt-5">
                <Link href={`/dashboard/profile/${user.id}`} legacyBehavior>
                  <a className="nav-link text-muted text-active-dark ms-0 py-0 me-10 ps-9 border-0 cursor-pointer active">
                    <UserRoundCog className="text-dark me-2" size={20} />
                    My Profile
                    {router.asPath === `/dashboard/profile/${user.id}` && (
                      <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-dark rounded-end"></span>
                    )}
                  </a>
                </Link>
              </li>
              <li className="nav-item mt-5">
                <Link href={`/dashboard/profile/${user.id}/hostels`} legacyBehavior>
                  <a className="nav-link text-muted text-active-dark ms-0 py-0 me-10 ps-9 border-0 cursor-pointer active">
                    <Layers3 className="text-dark me-2" size={20} />
                    My Hostels
                    {router.asPath === `/dashboard/profile/${user.id}/hostels` && (
                      <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-dark rounded-end"></span>
                    )}
                  </a>
                </Link>
              </li>

              <UserLinkItem
                icon={<LayoutDashboard className="text-dark  me-2" size={20} />}
                title={`Room Requests`}
                url={`/dashboard/profile/${user.id}/room_request`}
              />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
