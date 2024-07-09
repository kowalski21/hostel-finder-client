import React from "react";
import Link from "next/link";
import { Loader } from "rsuite";
import { BriefcaseBusiness, LayoutPanelLeft, ShoppingBag, Contact } from "lucide-react";
import { useTenants } from "@/hooks/tenants";

const TenantWidget = () => {
  const { data, isLoading } = useTenants(["TotalTenants"], {
    aggregate: {
      count: "*",
    },
  });
  return (
    <Link href={`/`} legacyBehavior>
      <a className="card bg-white  card-xl-stretch mb-xl-8">
        {isLoading && <Loader vertical center />}
        {data && data?.data.length > 0 && (
          <div className="card-body">
            <span className="svg-icon svg-icon-gray-800 svg-icon-3x ms-n1">
              <Contact />
            </span>

            <div className="text-gray-800 fw-bolder fs-2 mb-2 mt-5">{data?.data[0].count}</div>
            <div className="fw-bold text-muted text-gray-800">Tenants</div>
          </div>
        )}
      </a>
    </Link>
  );
};

export default TenantWidget;
