import { useHostels } from "@/hooks/hostels";
import React from "react";

const HostelsWidget = () => {
  const { data, isLoading } = useHostels({
    queryKey: ["HostelsWidgets"],
  });
  return (
    <div
      class="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-center min mb-5 mb-xl-10"
      style={{ backgroundColor: "black", minHeight: "200px" }}
    >
      {data && data?.meta && (
        <div class="card-header pt-5">
          <div class="card-title d-flex flex-column">
            <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">{data?.meta?.total}</span>
            <span class="text-white opacity-50 pt-1 fw-bold fs-6">Hostels Created</span>
          </div>
        </div>
      )}

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
  );
};

export default HostelsWidget;
