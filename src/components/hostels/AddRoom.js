import { useNotify } from "@/hooks/notify";
import { client } from "@/sdk";
import React, { useEffect, useState } from "react";
import { focusManager, useMutation, useQueryClient } from "react-query";
import { Container, Divider, Form, Modal, Uploader } from "rsuite";

const AddRoom = ({ hostelId }) => {
  //   const queryClient = useQueryClient();
  const [formState, setFormState] = useState({
    name: "",
    numOccupants: 1,
    description: "",
    hostelId: parseInt(hostelId),
    available: true,
    unitCost: 1,
  });
  const resetForm = () => {
    setFormState({
      name: "",
      numOccupants: 1,
      description: "",
      hostelId: parseInt(hostelId),
      available: true,
      unitCost: 1,
    });
  };
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { showError, showMsg } = useNotify();

  const validateForm = () => {
    if (formState.hostelId && formState.numOccupants && formState.unitCost && formState.name) {
      return true;
    } else {
      return false;
    }
  };

  const handleUpload = (response, file) => {
    // console.log(response);
    setFormState({ ...formState, image: response.url });
  };

  const mutation = useMutation({
    mutationFn: async (payload) => {
      if (!validateForm()) {
        throw new Error("Ensure that all form fields are filled");
      }

      payload.unitCost = parseFloat(payload.unitCost);
      payload.numOccupants = parseInt(payload.numOccupants);

      const response = await client.request("post", `/rooms`, { data: payload });
      return response;
    },
    onError: (e) => {
      // console.log(e);
      showError(e.message);
    },
    onSuccess: (data) => {
      console.log(data);
      showMsg("New Room Added");
      resetForm();

      //   queryClient.invalidateQueries(["HostelDetails", String(hostelId)]);
      toggle();
      focusManager.setFocused(true);
    },
  });

  const handleSave = () => {
    mutation.mutate(formState);
  };

  return (
    <div>
      <button className="mx-2 btn btn-dark btn-sm" onClick={toggle}>
        Add Room
      </button>
      <Modal open={open} onClose={handleClose} size={"xs"} backdrop="static">
        <Modal.Header>
          <h3>New Room</h3>
        </Modal.Header>
        <Divider />
        <Modal.Body>
          <Form fluid onChange={setFormState} formValue={formState}>
            <Form.Group controlId="name">
              <Form.ControlLabel>Room Name</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Room name is required</Form.HelpText>
            </Form.Group>

            <div className="row">
              <div className="col">
                <Form.Group controlId="name">
                  <Form.ControlLabel>Room Price</Form.ControlLabel>
                  <Form.Control name="unitCost" type="number" />
                  <Form.HelpText>Room Price is required</Form.HelpText>
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="name">
                  <Form.ControlLabel>Number of Occupants</Form.ControlLabel>
                  <Form.Control name="numOccupants" type="number" />
                  <Form.HelpText>Number of Occupants is required</Form.HelpText>
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Form.Group controlId="name">
                  <Form.ControlLabel>Description</Form.ControlLabel>
                  <Form.Control name="description" />
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Divider />
        <Modal.Footer>
          <button className="btn btn-dark btn-sm" onClick={handleSave}>
            Save
          </button>

          <button className="btn btn-secondary mx-2 btn-sm" onClick={toggle}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddRoom;
