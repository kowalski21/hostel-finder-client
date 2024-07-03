import { useNotify } from "@/hooks/notify";
import { client } from "@/sdk";
import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Container, Divider, Form, Modal, Uploader } from "rsuite";
const AddHostel = () => {
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({
    name: "",
    lat: "",
    lng: "",
    city: "",
    town: "",
    no_rooms: 0,
    image: "",
  });
  const resetForm = () => {
    setFormState({
      name: "",
      lat: "",
      lng: "",
      city: "",
      town: "",
      no_rooms: 0,
      image: "",
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
    if (formState.lng && formState.lat && formState.city && formState.town) {
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
      payload.lat = parseFloat(payload.lat);
      payload.lng = parseFloat(payload.lng);

      const response = await client.request("post", "/hostels", { data: payload });
      return response;
    },
    onError: (e) => {
      // console.log(e);
      showError(e.message);
    },
    onSuccess: (data) => {
      console.log(data);
      showMsg("New Hostel Added");
      resetForm();
      queryClient.invalidateQueries(["HostelsList"]);
      toggle();
    },
  });

  const handleSave = () => {
    mutation.mutate(formState);
  };

  return (
    <div>
      <button className="btn btn-dark btn-sm" onClick={toggle}>
        Add Hostel
      </button>
      <Modal open={open} onClose={handleClose} size={"xs"} backdrop="static">
        <Modal.Header>
          <h3>New Hostel</h3>
        </Modal.Header>
        <Divider />
        <Modal.Body>
          <Form fluid onChange={setFormState} formValue={formState}>
            <Form.Group controlId="name">
              <Form.ControlLabel>Hostel Name</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Hostel name is required</Form.HelpText>
            </Form.Group>

            <Form.Group controlId="Images">
              <Form.ControlLabel>Hostel Image</Form.ControlLabel>
              <Uploader
                action="http://localhost:8008/api/assets"
                onSuccess={handleUpload}
                accept="image/png, image/jpeg"
                draggable
              >
                <div style={{ height: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span>Click or Drag files to this area to upload</span>
                </div>
              </Uploader>
            </Form.Group>
            <div className="row">
              <div className="col">
                <Form.Group controlId="name">
                  <Form.ControlLabel>Latitude</Form.ControlLabel>
                  <Form.Control name="lat" type="number" />
                  <Form.HelpText>Latitude is required</Form.HelpText>
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="name">
                  <Form.ControlLabel>Longtitude</Form.ControlLabel>
                  <Form.Control name="lng" type="number" />
                  <Form.HelpText>Longtitude is required</Form.HelpText>
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Form.Group controlId="name">
                  <Form.ControlLabel>City</Form.ControlLabel>
                  <Form.Control name="city" />
                  <Form.HelpText>City is required</Form.HelpText>
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="name">
                  <Form.ControlLabel>Town</Form.ControlLabel>
                  <Form.Control name="town" />
                  <Form.HelpText>Town is required</Form.HelpText>
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

export default AddHostel;
