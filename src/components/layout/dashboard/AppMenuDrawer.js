import { LayoutGrid } from "lucide-react";
import React from "react";
import { useBoolean } from "usehooks-ts";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import IconMenu from "@/components/reusable/IconMenu";
import { menuList } from "@/lib/menu";

const AppMenuDrawer = () => {
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
        <Drawer.Body>
          <Placeholder.Paragraph />
          <div className="container-fluid px-0">
            <div className="d-flex flex-wrap">
              {menuList.map((menu) => {
                return <IconMenu key={menu.title} to={menu.to} title={menu.title} icon={menu.icon}></IconMenu>;
              })}
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default AppMenuDrawer;
