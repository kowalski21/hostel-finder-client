import React from "react";
import Link from "next/link";
// import { BarChart2 } from "lucide-react";
const IconLink = ({ to = "/login", children, title = "Reports" }) => {
  return (
    <Link href={`${to}`}>
      <div class="d-flex flex-column  mb-9 me-3 cursor">
        <div class="symbol symbol-100px me-3">
          <div class="symbol-label bg-dark bg-opacity-100" style={{ borderRadius: "20px" }}>
            <div className="d-flex flex-column  justify-content-center align-items-center">
              {children}
              {/* <BellDot size={32} color="white" className="d-block" /> */}
              <span className="text-white">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IconLink;
