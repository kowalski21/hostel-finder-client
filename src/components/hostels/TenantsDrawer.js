import React, { Fragment, useState } from "react";
import { Drawer, ButtonToolbar, Button, Placeholder, Divider } from "rsuite";
import TenantInfoCard from "./TenantInfoCard";
const TenantsDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Fragment>
      <button className="btn btn-dark btn-sm" onClick={handleOpen}>
        View Occupants
      </button>
      <Drawer backdrop="static" size={"xs"} open={open} onClose={handleClose}>
        <Drawer.Header>
          <h3 className="fw-bolder">Room Information / Occupants</h3>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
          <TenantInfoCard />
          <TenantInfoCard />
        </Drawer.Body>
      </Drawer>
    </Fragment>
  );
};

export default TenantsDrawer;
