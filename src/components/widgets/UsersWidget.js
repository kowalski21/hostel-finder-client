import { useUsers } from "@/hooks/users";
import React from "react";
import { Loader } from "rsuite";

const UsersWidget = () => {
  const { data, isLoading } = useUsers({ queryKey: ["TotalUsers"] });
  return (
    <div className="card card-flush min-h-50 mb-5 mb-xl-10">
      {isLoading && <Loader center />}
      {data && data?.data && (
        <div className="card-header pt-5">
          <div className="card-title d-flex flex-column">
            <span className="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">{data?.meta?.total}</span>

            <span className="text-gray-400 pt-1 fw-bold fs-6">Users </span>
          </div>
        </div>
      )}

      {data && data?.data && (
        <div className="card-body d-flex flex-column justify-content-end pe-0">
          <span className="fs-6 fw-boldest text-gray-800 d-block mb-2">Recently Created Users</span>

          <div className="symbol-group symbol-hover flex-nowrap">
            <div className="symbol symbol-35px symbol-circle">
              <span className="symbol-label bg-warning text-inverse-warning fw-bolder">A</span>
            </div>
            <div
              className="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              title=""
              data-bs-original-title="Michael Eberon"
            >
              <img alt="Pic" src="/media/avatars/300-11.jpg" />
            </div>
            <div
              className="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              title=""
              data-bs-original-title="Susan Redwood"
            >
              <span className="symbol-label bg-primary text-inverse-primary fw-bolder">S</span>
            </div>
            <div
              className="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              title=""
              data-bs-original-title="Melody Macy"
            >
              <img alt="Pic" src="/media/avatars/300-2.jpg" />
            </div>
            <div
              className="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              title=""
              data-bs-original-title="Perry Matthew"
            >
              <span className="symbol-label bg-danger text-inverse-danger fw-bolder">P</span>
            </div>
            <div
              className="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              title=""
              data-bs-original-title="Barry Walter"
            >
              <img alt="Pic" src="/media/avatars/300-12.jpg" />
            </div>
            <a href="#" className="symbol symbol-35px symbol-circle">
              <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bolder">
                +{parseInt(data?.meta?.total / 2)}
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersWidget;
