import { assetUrl } from "@/lib/asset";
import React from "react";

const TenantInfoItem = ({ tenant }) => {
  return (
    <div className="d-flex align-items-center mb-7">
      <div className="symbol symbol-50px me-5">
        <img src={assetUrl(tenant.avatar)} className="img-center" alt="" />
      </div>

      <div className="flex-grow-1">
        <a href="#" className="text-gray-900 fw-bold text-hover-primary fs-6">
          {tenant.first_name} {tenant.last_name}
        </a>
        <span className="text-muted d-block fw-bold">{tenant.email}</span>
      </div>
    </div>
  );
};

export default TenantInfoItem;
