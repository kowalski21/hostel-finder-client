import { useForm } from "@/hooks/form";
import { momoProviders } from "@/lib/momo";
import React from "react";
import { FormLabel } from "react-bootstrap";
import { Drawer, Input, InputPicker, Placeholder, MaskedInput } from "rsuite";
import { useBoolean } from "usehooks-ts";

const BookPayment = ({ bookingId }) => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { handleSuite, form, resetForm, handleExtra } = useForm({
    provider: "",
    phone_number: "",
  });

  return (
    <div>
      <button class="btn btn-sm  btn-bg-light btn-active-color-primary " onClick={toggle}>
        Make Payment
      </button>

      <Drawer open={value} onClose={toggle} size={"xs"}>
        <Drawer.Header>
          <Drawer.Title className="fs-5 fw-bolder">Make Payment</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
          <FormLabel className="required">Select Momo Provider</FormLabel>
          <InputPicker value={form.provider} data={momoProviders} block onChange={(val) => handleExtra("provider")} />
          <FormLabel className="required mt-5">Enter your Momo Number</FormLabel>
          <p className="text-muted fs-8">
            You will recieve a pop up on your phone after clicking the initiate payment button
          </p>
          <MaskedInput
            value={form.phone_number}
            onChange={handleSuite("phone_number")}
            mask={["(", /[0-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
          />

          <button className="btn btn-sm btn-dark mt-5">Initiate Payment</button>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default BookPayment;
