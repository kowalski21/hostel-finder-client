import React from "react";
import { SquareArrowDown, AlignJustify, LayoutGrid, BellRing, Users } from "lucide-react";
import AvatarWidget from "../widgets/AvatarWidget";
import MenuDrawer from "./MenuDrawer";
import Link from "next/link";
const MainHeader = () => {
  return (
    <div className="nav__bar">
      {/* <h3 className="text-white">Hostel Finder </h3> */}
      <MenuDrawer />
      {/* <div className="w-50px">
        <AlignJustify color="white" />
      </div> */}

      <div className="d-flex flex-row justify-content-end align-items-center w-100">
        <Link href={`/`}>
          <LayoutGrid color="white" className="mx-8 pointer" />
        </Link>
        <Link href={`/users`}>
          <Users color="white" className="mx-8 pointer" />
        </Link>

        {/* <BellRing color="white" className="mx-8" /> */}
        <AvatarWidget />
      </div>
    </div>
  );
};

export default MainHeader;
