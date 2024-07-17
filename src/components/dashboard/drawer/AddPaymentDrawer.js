import React, { Fragment } from "react";
import { useBoolean } from "usehooks-ts";
import { Popover, Whisper, Dropdown, Drawer, ButtonToolbar, Button, Placeholder, Input, InputPicker } from "rsuite";
import { FormLabel } from "react-bootstrap";
import { useForm } from "@/hooks/form";
import { assetUrl } from "@/lib/asset";
const AddPaymentDrawer = ({ item }) => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  return (
    <Fragment>
      <button className="btn btn-dark btn-sm" onClick={() => toggle()}>
        View Payment
      </button>
      <Drawer size={"xs"} open={value} onClose={() => toggle()} backdrop="static">
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">Payment Details </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
          <div className="container px-0 mx-0">
            <h3>Customer Information</h3>
            <div className="d-flex">
              <img
                src={assetUrl(item.customer?.avatar)}
                className="img-fluid h-50px w-50px rounded"
                style={{ objectFit: "cover" }}
                alt=""
              />
              <div className="mx-5">
                <p className="text-small fw-bolder p-0 m-0">Customer Name </p>
                <p className="text-small p-0 m-0">Customer Name </p>
              </div>
            </div>
            <div className="separator my-2"></div>
            <div className="d-flex flex-column">
              <h3>Payment Information</h3>
              <FormLabel>Payment Type</FormLabel>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </Fragment>
  );
};

export default AddPaymentDrawer;
