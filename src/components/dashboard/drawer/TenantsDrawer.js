import React, { Fragment } from "react";
import { Popover, Whisper, Dropdown, Drawer, ButtonToolbar, Button, Placeholder, Input, Loader } from "rsuite";
import { useBoolean } from "usehooks-ts";
import { ChartNoAxesCombined, Copy, Library } from "lucide-react";
import TenantInfoItem from "@/components/reusable/TenantInfoItem";
import { useTenants } from "@/hooks/tenants";

const TenantsDrawer = ({ room, hostelId, manager }) => {
  const query = { fields: "*,occupant.*", filter: { room: room.id } };
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { isLoading, data } = useTenants(["TenantsRooms", room.id, query], query);
  return (
    <Fragment>
      <button className="btn btn-dark btn-sm fs-8" onClick={toggle}>
        Tenants
      </button>
      <Drawer size={"xs"} open={value} onClose={() => toggle()} backdrop="static">
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">Room Tenants </Drawer.Title>
        </Drawer.Header>

        <Drawer.Body className="px-5">
          <div className="container-fluid px-0">
            <div class="d-flex align-items-center bg-light-primary rounded p-5 mb-7">
              <Library className="me-5" />
              <div class="flex-grow-1 me-2">
                <a href="#" class="fw-bold text-gray-800 text-hover-primary fs-6">
                  Current Tenants
                </a>
                <span class="text-muted fw-semibold d-block">With their contact information</span>
              </div>
            </div>
            <div className="separator my-3"></div>

            {/* {} */}
            {isLoading && <Loader center vertical />}

            {data &&
              data?.data.map((item) => {
                return <TenantInfoItem key={item.id} tenant={item.occupant} meta={item} cus />;
              })}
          </div>
        </Drawer.Body>
      </Drawer>
    </Fragment>
  );
};

export default TenantsDrawer;
