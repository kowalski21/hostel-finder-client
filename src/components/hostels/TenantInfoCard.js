import React, { Fragment } from "react";
import { Divider } from "rsuite";

const TenantInfoCard = () => {
  return (
    <Fragment>
      <div className="d-flex align-items-center mb-7">
        <div class="symbol symbol-50px me-5">
          <img src="/media/avatars/300-6.jpg" class="" alt="" />
        </div>
        <div class="flex-grow-1">
          <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">
            Tenant Name
          </a>
          <span class="text-muted d-block fw-bold">Date Joined</span>
        </div>
      </div>
      <Divider />
    </Fragment>
  );
};

export default TenantInfoCard;
