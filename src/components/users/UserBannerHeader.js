import { renderImage } from "@/actions/utils";
import React from "react";

const UserBannerHeader = ({ user }) => {
  return (
    <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
      <div class="me-7 mb-4">
        <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
          {/* <img src="/media/avatars/300-1.jpg" alt="image" /> */}
          {user?.avatar ? (
            <img src={renderImage(user.avatar)} className="" alt="" />
          ) : (
            <img src={`/media/avatars/300-${user.id}.jpg`} className="" alt="" />
          )}
          <div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
        </div>
      </div>

      <div class="flex-grow-1">
        <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
          <div class="d-flex flex-column">
            <div class="d-flex align-items-center mb-2">
              <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">
                {user?.firstName} {user?.lastName}
              </a>
              <a href="#">
                <span class="svg-icon svg-icon-1 svg-icon-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <path
                      d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
                      fill="#00A3FF"
                    ></path>
                    <path
                      class="permanent"
                      d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
              </a>
              <a
                href="#"
                class="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_upgrade_plan"
              >
                {user?.role?.name}
              </a>
            </div>

            <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
              <span className="text-muted">{user.username}</span>
            </div>
          </div>

          <div class="d-flex my-4">
            <a class="btn btn-sm btn-primary me-2" data-bs-toggle="modal">
              Apply for Room
            </a>
          </div>
        </div>

        <div class="d-flex flex-wrap flex-stack">
          <div class="d-flex flex-column flex-grow-1 pe-8">
            <div class="d-flex flex-wrap">
              <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                <div class="d-flex align-items-center">
                  <div class="fs-2 fw-bolder counted">None</div>
                </div>

                <div class="fw-bold fs-6 text-gray-400">Assigned Hostel</div>
              </div>

              <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                <div class="d-flex align-items-center">
                  <div class="fs-2 fw-bolder counted">None</div>
                </div>

                <div class="fw-bold fs-6 text-gray-400">Assigned Room</div>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
            <div class="d-flex justify-content-between w-100 mt-auto mb-2">
              <span class="fw-bold fs-6 text-gray-400">Profile Compleation</span>
              <span class="fw-bolder fs-6">50%</span>
            </div>
            <div class="h-5px mx-3 w-100 bg-light mb-3">
              <div
                class="bg-success rounded h-5px"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBannerHeader;
