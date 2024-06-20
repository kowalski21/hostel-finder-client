import { renderImage } from "@/actions/utils";
import { client } from "@/sdk";
import { useAuthActions, useAuthUser } from "@/store/auth";
import { formatDistance, formatDistanceToNow } from "date-fns";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Dropdown, Avatar } from "rsuite";

const AvatarWidget = () => {
  const router = useRouter();
  const authUser = useAuthUser();
  const actions = useAuthActions();
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  const handleLogout = () => {
    router.push("/login");
    client.removeToken();
    actions.clearUser();
  };
  return (
    authUser && (
      <div className="">
        <div className="d-flex align-items-center ms-1 ms-lg-3 avatar__widget">
          <div className="cursor-pointer symbol symbol-30px symbol-md-40px" onClick={toggle}>
            {authUser?.avatar ? (
              <img src={renderImage(authUser.avatar)} className="" alt="" />
            ) : (
              <img src={`/media/avatars/300-${authUser.id}.jpg`} className="" alt="" />
            )}
          </div>
        </div>
        <div
          className={`avatar__menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px ${
            show && "show"
          }`}
        >
          <div className="menu-item px-3">
            <div className="menu-content d-flex align-items-center px-3">
              <div className="symbol symbol-50px me-5">
                {authUser?.avatar ? (
                  <img src={renderImage(authUser.avatar)} className="" alt="" />
                ) : (
                  <img src={`/media/avatars/300-${authUser.id}.jpg`} className="" alt="" />
                )}
              </div>

              <div className="d-flex flex-column">
                <div className="fw-bolder text-dark d-flex align-items-center fs-5">
                  {authUser.firstName} {authUser.lastName}
                  <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Admin</span>
                </div>
                <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
                  Username: {authUser.username}
                  <br />
                  <span className="text-dark fw-bold">
                    Joined {formatDistanceToNow(new Date(authUser.createdAt), { addSuffix: true })}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="separator my-2"></div>

          <div className="menu-item px-5">
            <a href="../../demo1/dist/account/overview.html" className="menu-link px-5">
              My Profile
            </a>
          </div>

          <div className="menu-item px-5">
            <a href="../../demo1/dist/apps/projects/list.html" className="menu-link px-5">
              <span className="menu-text">My Hostels</span>
              <span className="menu-badge">
                <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
              </span>
            </a>
          </div>

          <div className="menu-item px-5">
            <a href="../../demo1/dist/account/statements.html" className="menu-link px-5">
              My Statements
            </a>
          </div>

          <div className="separator my-2"></div>

          <div className="menu-item px-5 my-1">
            <a className="menu-link px-5 cursor">Account Settings</a>
          </div>

          <div className="menu-item px-5" onClick={handleLogout}>
            <a className="menu-link px-5 cursor">Sign Out</a>
          </div>
        </div>
      </div>
    )
  );
};

export default AvatarWidget;
