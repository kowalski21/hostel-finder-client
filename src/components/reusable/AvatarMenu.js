import { directus } from "@/lib";
import { assetUrl } from "@/lib/asset";
import { useAuthUser } from "@/store/auth";
import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import { useBoolean } from "usehooks-ts";

const AvatarMenu = () => {
  const user = useAuthUser();
  const router = useRouter();
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const mutation = useMutation({
    mutationFn: async () => {
      await directus.auth.logout();
    },
    onSuccess: () => {
      router.push(`/auth/login`);
    },
  });
  const handleLogout = () => {
    mutation.mutate();
  };
  return (
    <div className="d-flex align-items-center ms-2 ms-lg-4" onClick={toggle}>
      <div className={`cursor-pointer symbol symbol-30px symbol-lg-40px  menu-dropdown`}>
        <img
          style={{ objectFit: "cover" }}
          className="symbol symbol-30px symbol-lg-40px "
          src={`${assetUrl(user?.avatar)}`}
          alt="user"
        />
      </div>

      <div
        className={`avatar__menu ${
          value && "show"
        }  menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px`}
      >
        <div className="menu-item px-3">
          <div className="menu-content d-flex align-items-center px-3">
            <div className="symbol symbol-50px me-5">
              <img style={{ objectFit: "cover" }} alt="Logo" src={assetUrl(user?.avatar)} />
            </div>

            <div className="d-flex flex-column">
              <div className="fw-bold d-flex align-items-center fs-5">
                {user?.first_name} {user?.last_name}
                <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">{user?.role?.name}</span>
              </div>
              <a className="fw-semibold cursor-pointer text-muted text-hover-primary fs-7">{user?.email}</a>
            </div>
          </div>
        </div>

        <div className="separator my-2"></div>

        <div className="menu-item px-5">
          <a href="account/overview.html" className="menu-link px-5">
            My Profile
          </a>
        </div>

        <div className="menu-item px-5">
          <a href="apps/projects/list.html" className="menu-link px-5">
            <span className="menu-text">My Projects</span>
            <span className="menu-badge">
              <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
            </span>
          </a>
        </div>

        <div className="menu-item px-5">
          <a href="account/statements.html" className="menu-link px-5">
            My Statements
          </a>
        </div>

        <div className="separator my-2"></div>

        <div className="menu-item px-5 my-1">
          <a href="account/settings.html" className="menu-link px-5">
            Account Settings
          </a>
        </div>

        <div className="menu-item px-5">
          <a onClick={handleLogout} className="menu-link px-5">
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvatarMenu;
