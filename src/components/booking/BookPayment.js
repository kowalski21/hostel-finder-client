import { useForm } from "@/hooks/form";
import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";
import { momoProviders } from "@/lib/momo";
import { useAuthUser } from "@/store/auth";
import { useRouter } from "next/router";
import React from "react";
import { FormLabel } from "react-bootstrap";
import { focusManager, useMutation } from "react-query";
import { Drawer, Input, InputPicker, Placeholder, MaskedInput, Button } from "rsuite";
import { useBoolean } from "usehooks-ts";

const BookPayment = ({ bookingId, room, hostel, item }) => {
  const router = useRouter();
  const authUser = useAuthUser();
  const { showError, showMsg } = useNotify();
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { handleSuite, form, resetForm, handleExtra } = useForm({
    provider: "",
    phone_number: "0551992502",
  });

  const paymentPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done");
      }, 8000);
    });
  };

  const mutation = useMutation({
    mutationFn: async (payload) => {
      // await paymentPromise(); // simulate a fetch request
      // console.log(payload);
      const response = await directus.transport.post(`/payments/initiate`, payload);
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      showMsg(`Payment Received..`);
      window.open(data.authorization_url, "_blank");

      // router.
      // focusManager.setFocused(true);
    },
    onError: (e) => showError(e.message),
  });
  const handlePayment = () => {
    // console.log(room);
    // console.log(item);
    let payload = {
      email: authUser.email,
      amount: Number(item.room_price) * 100,
      metadata: { room_request: item.id },
    };

    mutation.mutate(payload);

    // console.log(payload);
  };

  return (
    <div>
      <button class="btn btn-sm  btn-bg-light btn-active-color-primary " onClick={toggle}>
        Make Payment
      </button>

      <Drawer open={value} onClose={toggle} size={"xs"} backdrop="static">
        <Drawer.Header>
          <Drawer.Title className="fs-5 fw-bolder">Make Payment</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
          {/* {JSON.stringify(form)} */}
          <FormLabel className="required">Select Momo Provider</FormLabel>
          <InputPicker
            value={form.provider}
            data={momoProviders}
            block
            onChange={(val) => handleExtra("provider", val)}
          />

          <FormLabel className="required mt-5">Amount (GHS)</FormLabel>
          <Input type="number" value={item.room_price} disabled />
          <FormLabel className="required mt-5">Enter your Momo Number</FormLabel>
          <p className="text-muted fs-8">You will be redirected to a page to continue with payment</p>
          <MaskedInput
            value={form.phone_number}
            onChange={handleSuite("phone_number")}
            mask={["(", /[0-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
          />

          {form.provider && form.phone_number && (
            <Button className="btn-dark btn-sm mt-5" loading={mutation.isLoading} onClick={handlePayment}>
              Initiate Payment
            </Button>
            // <button className="btn btn-sm btn-dark mt-5" onClick={handlePayment}>
            //   {mutation.isLoading ? "Please wait.. Do not close the browser" : "Initiate Payment"}
            // </button>
          )}
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default BookPayment;
