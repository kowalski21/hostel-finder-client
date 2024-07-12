import { assetUrl } from "@/lib/asset";
import { Layers2 } from "lucide-react";
import React from "react";
import Link from "next/link";
const IconMenu = ({ to, title, icon }) => {
  return (
    <Link href={to ? to : "/"} legacyBehavior>
      <a
        class="bg-dark mb-5 me-5 px-1"
        style={{
          width: "120px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "30px",
        }}
      >
        <div className="text-center">
          {icon ? icon : <Layers2 className="text-white mb-5" size={20} />}

          <p className="fs-7 fw-bolder text-white">{title}</p>
        </div>
      </a>
    </Link>
  );
};

export default IconMenu;
