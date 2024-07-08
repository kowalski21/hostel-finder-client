import React from "react";
import { Uploader } from "rsuite";
const SignUpForm = () => {
  return (
    <div className="py-20">
      <form className="form w-100" novalidate="novalidate">
        <div className="card-body">
          <div className="text-start mb-10">
            <h1 className="text-gray-900 mb-3 fs-3x">Hostel Finder App</h1>

            <div className="text-gray-500 fw-semibold fs-6" data-kt-translate="general-desc">
              Book A Hostel with simplicity and ease
            </div>
            <div className="text-gray-800 mt-2 fw-bolder fs-6" data-kt-translate="general-desc">
              Sign Up to get started
            </div>
          </div>

          <div className="fv-row mb-8">
            <label class="required text-dark fw-bold fs-6 mb-2">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              autocomplete="off"
              className="form-control form-control-lg"
            />
          </div>

          <div className="fv-row mb-7">
            <label class="required text-dark fw-bold fs-6 mb-2">Password</label>
            <input
              type="text"
              placeholder="Password"
              name="password"
              autocomplete="off"
              className="form-control form-control-lg"
            />
          </div>
          <div className="row fv-row">
            <div className="col-6">
              <label class="required text-dark fw-bold fs-6 mb-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="password"
                autocomplete="off"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-6">
              <label class="required text-dark fw-bold fs-6 mb-2">First Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="password"
                autocomplete="off"
                className="form-control form-control-lg"
              />
            </div>
          </div>
          <div className="row fv-row mt-4">
            <div className="col-12">
              <label class="required text-dark fw-bold fs-6 mb-2">Upload Profie Picture</label>
              <Uploader action="http://localhost:8050/files" autoUpload={false} draggable>
                <div style={{ height: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="text-dark">Click or Drag files to this area to upload</span>
                </div>
              </Uploader>
            </div>
          </div>

          <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10">
            <div></div>

            {/* <a className="link-primary" data-kt-translate="sign-in-forgot-password">
              Forgot Password ?
            </a> */}
          </div>

          <div className="d-flex flex-stack">
            <button className="btn btn-primary text-white me-2 flex-shrink-0">
              <span className="text-white">Sign In</span>
            </button>

            {/* <div className="d-flex align-items-center">
              <div className="text-gray-500 fw-semibold fs-6 me-3 me-md-6">Or</div>

              <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light me-3">
                <img alt="Logo" src="/media/svg/brand-logos/google-icon.svg" className="p-4" />
              </a>

              <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light me-3">
                <img alt="Logo" src="/media/svg/brand-logos/facebook-3.svg" className="p-4" />
              </a>

              <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light">
                <img alt="Logo" src="/media/svg/brand-logos/apple-black.svg" className="theme-light-show p-4" />
              </a>
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
