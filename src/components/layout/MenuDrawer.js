import React, { useState } from "react";
import { Drawer, Button } from "rsuite";
import { AlignJustify, Users, LayoutGrid, Archive } from "lucide-react";
import IconLink from "../widgets/IconLink";
const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-50px">
      <AlignJustify color="white" onClick={() => setOpen(true)} style={{ cursor: "pointer" }} />
      <Drawer placement="left" open={open} onClose={() => setOpen(false)} size={"xs"}>
        <Drawer.Header>
          <Drawer.Title>Menu</Drawer.Title>
          <Drawer.Actions>
            {/* <Button onClick={() => setOpen(false)}>Cancel</Button> */}
            <Button className=" btn btn-dark btn-sm" onClick={() => setOpen(false)} appearance="primary">
              Close
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          {/* <Placeholder.Paragraph /> */}
          <div className="row mt-5">
            <div className="col-6">
              <IconLink to="/users" title="Users">
                {/* <BarChart2 size={32} color="white" /> */}
                <Users size={32} color="white" />
                {/* <ScanBarcode size={32} color="white" /> */}
              </IconLink>
            </div>
            <div className="col-6">
              <IconLink to="/" title="Home">
                <LayoutGrid size={32} color="white" />
              </IconLink>
            </div>
            <div className="col-6">
              <IconLink to="/hostels" title="Hostels">
                <Archive size={32} color="white" />
              </IconLink>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
