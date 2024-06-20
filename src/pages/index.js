import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageToolbar from "@/components/reusable/PageToolbar";
import { useAuth } from "@/hooks/auth";
const HomePage = () => {
  return (
    <MainLayout>
      <PageToolbar title="Hostels" short={"Search and Find Hostels"} />

      <div className="row g-5 g-xl-10 mb-xl-10 mt-5">
        <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
          <div
            class="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-center h-md-50 mb-5 mb-xl-10"
            style={{ backgroundColor: "black" }}
          >
            <div class="card-header pt-5">
              <div class="card-title d-flex flex-column">
                <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">59</span>
                <span class="text-white opacity-50 pt-1 fw-bold fs-6">Hostels Created</span>
              </div>
            </div>

            <div class="card-body d-flex align-items-end pt-0">
              <div class="d-flex align-items-center flex-column mt-3 w-100">
                <div class="d-flex justify-content-between fw-bolder fs-6 text-white opacity-50 w-100 mt-auto mb-2">
                  <span>43 Rooms Available</span>
                  <span>72%</span>
                </div>
                <div class="h-8px mx-3 w-100 bg-light-danger rounded">
                  <div
                    class="bg-danger rounded h-8px"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card card-flush h-md-50 mb-5 mb-xl-10">
            <div class="card-header pt-5">
              <div class="card-title d-flex flex-column">
                <span class="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">35</span>

                <span class="text-gray-400 pt-1 fw-bold fs-6">Users </span>
              </div>
            </div>

            <div class="card-body d-flex flex-column justify-content-end pe-0">
              <span class="fs-6 fw-boldest text-gray-800 d-block mb-2">Recently Created Users</span>

              <div class="symbol-group symbol-hover flex-nowrap">
                <div
                  class="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Alan Warden"
                >
                  <span class="symbol-label bg-warning text-inverse-warning fw-bolder">A</span>
                </div>
                <div
                  class="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Michael Eberon"
                >
                  <img alt="Pic" src="/media/avatars/300-11.jpg" />
                </div>
                <div
                  class="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Susan Redwood"
                >
                  <span class="symbol-label bg-primary text-inverse-primary fw-bolder">S</span>
                </div>
                <div
                  class="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Melody Macy"
                >
                  <img alt="Pic" src="/media/avatars/300-2.jpg" />
                </div>
                <div
                  class="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Perry Matthew"
                >
                  <span class="symbol-label bg-danger text-inverse-danger fw-bolder">P</span>
                </div>
                <div
                  class="symbol symbol-35px symbol-circle"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Barry Walter"
                >
                  <img alt="Pic" src="/media/avatars/300-12.jpg" />
                </div>
                <a href="#" class="symbol symbol-35px symbol-circle">
                  <span class="symbol-label bg-dark text-gray-300 fs-8 fw-bolder">+42</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
          <div className="card card-xl-stretch mb-xl-8">
            <div className="card-header border-0">
              <h3 className="card-title fw-bolder text-dark">Todo</h3>
            </div>
            <div className="card-body pt-2">
              <div className="d-flex align-items-center mb-8">
                <span className="bullet bullet-vertical h-40px bg-success"></span>
                <div class="form-check form-check-custom form-check-solid mx-5">
                  <input class="form-check-input" type="checkbox" value="" />
                </div>
                <div className="flex-grow-1">
                  <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">
                    Create FireStone Logo
                  </a>
                  <span className="text-muted fw-bold d-block">Due in 2 Days</span>
                </div>
                <span className="badge badge-light-success fs-8 fw-bolder">New</span>
                {/* <button className="btn btn-sm btn-primary">Visit</button> */}
              </div>
              <div className="d-flex align-items-center mb-8">
                <span className="bullet bullet-vertical h-40px bg-success"></span>
                <div class="form-check form-check-custom form-check-solid mx-5">
                  <input class="form-check-input" type="checkbox" value="" />
                </div>
                <div className="flex-grow-1">
                  <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">
                    Create FireStone Logo
                  </a>
                  <span className="text-muted fw-bold d-block">Due in 2 Days</span>
                </div>
                <span className="badge badge-light-success fs-8 fw-bolder">New</span>
              </div>
              <div className="d-flex align-items-center mb-8">
                <span className="bullet bullet-vertical h-40px bg-danger"></span>
                <div class="form-check form-check-custom form-check-solid mx-5">
                  <input class="form-check-input" type="checkbox" value="" />
                </div>
                <div className="flex-grow-1">
                  <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">
                    Create FireStone Logo
                  </a>
                  <span className="text-muted fw-bold d-block">Due in 2 Days</span>
                </div>
                <span className="badge badge-light-success fs-8 fw-bolder">New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
