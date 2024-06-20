import React from "react";

const Other = () => {
  return (
    <div className="container mt-5">
      <h3 className="display-4">Welcome to Hostel Finder</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatem voluptatibus. Magni sed labore amet
        molestias, vitae soluta numquam quibusdam, omnis repudiandae minus excepturi dolore ipsam. Expedita voluptas
        iure quis.
      </p>
      <div className="row">
        <div className="col-md-4">
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
                <button className="btn btn-sm btn-primary">Visit</button>
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
        <div className="col-md-6">
          <div className="card h-md-100" style={{ background: "linear-gradient(112.14deg, #00C2FF 0%, #3A7BD5 100%)" }}>
            <div className="card-body">
              <div className="row align-items-center h-100">
                <div className="col-7 ps-xl-13">
                  <div class="text-white mb-6 pt-6">
                    <span class="fs-4 fw-bold me-2 d-block lh-1 pb-2 opacity-75">Get best offer</span>
                    <span class="fs-2qx fw-bolder">Upgrade Your Plan</span>
                  </div>
                  <span class="fw-bold text-white fs-6 mb-8 d-block opacity-75">
                    Flat cartoony and illustrations with vivid unblended purple hair lady
                  </span>
                  <div className="d-flex align-items-center flex-wrap d-grid gap-2 mb-10 mb-xl-20">
                    <div className="d-flex align-items-center me-5 me-xl-13">
                      <div className="symbol symbol-40px symbol-circle me-3">
                        <span className="symbol-label" style={{ background: "#35C7FF" }}>
                          <BarChart2 color="white" />
                        </span>
                      </div>
                      <div class="text-white">
                        <span class="fw-bold d-block fs-8 opacity-75">Projects</span>
                        <span class="fw-bolder fs-7">Up to 500</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-40px symbol-circle me-3">
                        <span className="symbol-label" style={{ background: "#35C7FF" }}>
                          {/* <BarChart2 color="white" /> */}
                          <ShieldCheck color="white" />
                        </span>
                      </div>
                      <div class="text-white">
                        <span class="fw-bold d-block fs-8 opacity-75">Authentication</span>
                        <span class="fw-bolder fs-7">Up to 500</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5 pt-10">
                  <div
                    className="bgi-no-repeat bgi-size-contain bgi-position-x-end h-225px"
                    style={{ backgroundImage: "url('/media/svg/illustrations/easy/5.svg')" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
