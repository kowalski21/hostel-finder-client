import React from "react";
import Link from "next/link";
const SignupWrapper = ({ children }) => {
  return (
    <div
      className="d-flex flex-column flex-root"
      style={{ minHeight: "100vh", backgroundColor: "#F5F5F5", color: "white" }}
    >
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <a href="/dashboard" className="d-block d-lg-none mx-auto py-20">
          <h3 className="fw-bold fs-8">Hostel Finder</h3>
        </a>

        <div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">
          <div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
            <div className="d-flex flex-stack py-2">
              <div className="me-2"></div>

              <div className="m-0">
                <span className="text-gray-500 fw-bold fs-5 me-2">Already registered?</span>
                <Link href={`/auth/login`} legacyBehavior>
                  <a className="link-primary fw-bold fs-5">Sign In</a>
                </Link>
              </div>
            </div>
            {children}

            <div className="m-0">
              <button className="btn btn-flex btn-link rotate">
                <img className="w-25px h-25px rounded-circle me-3" src="/media/flags/united-states.svg" alt="" />
                <span data-kt-element="current-lang-name" className="me-2">
                  English
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat"
          style={{ backgroundImage: "url(/media/auth/bg3-dark.jpg)" }}
        ></div>
      </div>
    </div>
  );
};

export default SignupWrapper;
