import { LayoutGrid } from "lucide-react";
import React from "react";
import { useBoolean } from "usehooks-ts";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";

const AppMenuDrawer = () => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  return (
    <div className="d-flex align-items-center cursor-pointer ms-2 ms-lg-4">
      <div className="btn btn-icon btn-white w-30px h-30px w-lg-40px h-lg-40px btn-color-dark" onClick={toggle}>
        <LayoutGrid strokeWidth={2.2} />
      </div>
      <Drawer size={"xs"} open={value} onClose={toggle}>
        <Drawer.Body>
          <Placeholder.Paragraph />
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default AppMenuDrawer;
