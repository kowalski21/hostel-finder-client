import SelectStatus from "@/components/forms/SelectStatus";
import SelectUsers from "@/components/forms/SelectUsers";
import { useFile } from "@/hooks/file";
import { useForm } from "@/hooks/form";
import { useNewHostelMutation } from "@/hooks/hostels";
import React, { Fragment, useState } from "react";
import { FormLabel } from "react-bootstrap";
import { useMutation } from "react-query";
import { Modal, Button, ButtonToolbar, Placeholder, Grid, Col, Row, Input } from "rsuite";
import { useBoolean } from "usehooks-ts";
import { Plus } from "lucide-react";

const HostelModal = () => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { form, handleChange, handleExtra, handleSuite, resetForm } = useForm({
    name: "",
    thumbnail: null,
    town: "",
    city: "Kumasi",
    status: "draft",
  });
  const { prepFile, file, fileCheck, handleFile } = useFile();
  const mutation = useNewHostelMutation();

  const handleSubmit = () => {
    // console.log(file);
    mutation.mutate(
      { payload: form, file: prepFile() },
      {
        onError: (e) => {
          console.log(e);
        },
        onSuccess: () => {
          alert("it worked");
          resetForm();
          toggle();
        },
      }
    );
  };
  return (
    <Fragment>
      <a className="btn btn-sm btn-dark me-2" onClick={toggle}>
        <Plus size={12} /> New Hostel
      </a>

      <Modal open={value} onClose={toggle} backdrop="static">
        <Modal.Header>
          <Modal.Title className="fw-bolder">New Hostel</Modal.Title>
        </Modal.Header>
        <div className="separator my-2"></div>
        <Modal.Body>
          <div className="container-fluid mx-0 px-0">
            {/* {JSON.stringify({ form, file })} */}
            <div className="row">
              <div className="col-12">
                <FormLabel className="required fw-bolder">Name</FormLabel>
                <Input value={form.name} onChange={handleSuite("name")} className="text-dark fw-bolder" />
              </div>
              <div className="col-6 mt-3">
                <FormLabel className="required fw-bolder">Town</FormLabel>
                <Input value={form.town} onChange={handleSuite("town")} className="text-dark fw-bolder" />
              </div>
              <div className="col-6 mt-3">
                <FormLabel className="required fw-bolder">City</FormLabel>
                <Input value={form.city} onChange={handleSuite("city")} className="text-dark fw-bolder" />
              </div>
              <div className="col-12 mt-3">
                <FormLabel className="required fw-bolder">Thumbnail</FormLabel>
                {/* <Input onChange={handleFile} className="form-control" type="file" /> */}
                <input type="file" onChange={handleFile} className="form-control" />
              </div>
              <div className="col-12 mt-3">
                <FormLabel className="required fw-bolder">Manager</FormLabel>
                <SelectUsers keyName={"manager"} onChange={handleExtra} />
              </div>
              <div className="col-12 mt-3">
                <FormLabel className="required fw-bolder">Status</FormLabel>
                <SelectStatus keyName={"status"} onChange={handleExtra} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {fileCheck && (
            <Button className="btn btn-sm btn-dark me-2" onClick={handleSubmit} appearance="primary">
              Save
            </Button>
          )}
          <Button className="btn btn-sm btn-light me-2" onClick={toggle} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default HostelModal;
