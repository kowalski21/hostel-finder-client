import { useNotify } from "@/hooks/notify";
import { directus } from "@/lib";
import React, { Fragment } from "react";
import { focusManager, useMutation } from "react-query";
import { Notification, useToaster, ButtonToolbar, SelectPicker, Button, Modal } from "rsuite";
import { useBoolean } from "usehooks-ts";

const BookingCancel = ({ id }) => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { showError, showMsg } = useNotify();

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await directus.items("room_request").updateOne(id, { status: "archived" });
      return res;
    },
    onError: (e) => {
      showError(e.message);
    },
    onSuccess: () => {
      toggle();
      showMsg("Room Requests Cancelled");
      focusManager.setFocused(true);
    },
  });
  const handleSubmit = () => {
    mutation.mutate(id);
  };
  return (
    <Fragment>
      <button className="btn btn-danger btn-sm" onClick={toggle}>
        Cancel
      </button>
      <Modal open={value} onClose={toggle}>
        <Modal.Header>
          <Modal.Title className="fw-bolder">Cancel Payment</Modal.Title>
        </Modal.Header>
        <div className="separator separator-dashed my-4"></div>
        <Modal.Body>Do you want to cancel room Request</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger btn-sm" onClick={handleSubmit}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default BookingCancel;
