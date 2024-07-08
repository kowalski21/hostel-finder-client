import AppHeader from "@/components/layout/dashboard/AppHeader";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <AppHeader />
      <div className="container mt-5">
        <h3 className="text-gray-600">Hi, Devops</h3>

        <div className="row mt-10">
          <div class="col-xl-3">
            <a href="#" class="card bg-body hoverable card-xl-stretch mb-xl-8">
              <div class="card-body">
                <span class="svg-icon svg-icon-primary svg-icon-3x ms-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor"></rect>
                    <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor"></rect>
                    <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor"></rect>
                    <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor"></rect>
                  </svg>
                </span>

                <div class="text-gray-900 fw-bolder fs-2 mb-2 mt-5">500M$</div>
                <div class="fw-bold text-gray-400">SAP UI Progress</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
