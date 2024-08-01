import AvatarMenu from "@/components/reusable/AvatarMenu";
import { BarChart2, Layers3, LayoutGrid } from "lucide-react";
import React from "react";
import AppMenuDrawer from "./AppMenuDrawer";
import Link from "next/link";
const AppHeader = () => {
  return (
    <div className="" style={{ minHeight: "100px", backgroundColor: "#0A0A0A" }}>
      <div className="container align-items-center pt-10 d-flex flex-grow-1 flex-stack">
        <Link href={`/`}>
          <div className="d-flex align-items-center me-5">
            <Layers3 className="text-white me-6" />
            <h3 className="text-white fw-bolder mt-2">Hostel Finder</h3>
          </div>
        </Link>

        <div className="topbar d-flex align-items-stretch flex-shrink-0">
          <AppMenuDrawer />
          <AvatarMenu />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
