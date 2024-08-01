import { LayoutGrid } from "lucide-react";
import React from "react";
import { useBoolean } from "usehooks-ts";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import IconMenu from "@/components/reusable/IconMenu";
import { menuList } from "@/lib/menu";
import { useAuthUser } from "@/store/auth";

const AppMenuDrawer = () => {
  const authUser = useAuthUser();
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  return (
    <div className="d-flex align-items-center cursor-pointer ms-2 ms-lg-4">
      <div className="btn btn-icon btn-white w-30px h-30px w-lg-40px h-lg-40px btn-color-dark" onClick={toggle}>
        <LayoutGrid strokeWidth={2.2} />
      </div>
      <Drawer size={"xs"} open={value} onClose={toggle}>
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">Menu Management</Drawer.Title>
        </Drawer.Header>
        {authUser && (
          <Drawer.Body>
            <Placeholder.Paragraph />
            <div className="container-fluid px-0">
              <div className="d-flex flex-wrap">
                {menuList
                  .filter((menu) => menu.isShow(authUser?.role ? authUser?.role?.name : "None"))
                  .map((menu) => {
                    return <IconMenu key={menu.title} to={menu.to} title={menu.title} icon={menu.icon}></IconMenu>;
                  })}
              </div>
            </div>
          </Drawer.Body>
        )}
      </Drawer>
    </div>
  );
};

export default AppMenuDrawer;
