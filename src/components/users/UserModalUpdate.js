import React, { Fragment, useState } from "react";
import { Modal, Button, ButtonToolbar, Placeholder, Divider, Form, Uploader } from "rsuite";
import RoleSelect from "../reusable/RoleSelect";
import { useUpdateUserMutation } from "@/actions/user";
import { useNotify } from "@/hooks/notify";
import { useQueryClient } from "react-query";
const UserModalUpdate = ({ user }) => {
  const client = useQueryClient();
  const { showError, showMsg } = useNotify();
  const mutation = useUpdateUserMutation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const toggle = () => {
    setOpen(!open);
  };
  const [formState, setFormState] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    roleId: user?.role?.id,
    avatar: user?.avatar,
  });
  const handleRole = (val) => {
    setFormState({ ...formState, roleId: val });
  };

  const handleSave = () => {
    // console.log(formState);
    mutation.mutate(
      { id: user.id, payload: formState },
      {
        onError: (e) => {
          showError(e.message);
        },
        onSuccess: (data) => {
          showMsg("User Info Updated");
          client.invalidateQueries(["UsersListTable"]);
          toggle();
        },
      }
    );
  };

  const handleUpload = (response, file) => {
    // console.log(response);
    setFormState({ ...formState, avatar: response.url });
  };

  return (
    <Fragment>
      <button className="btn btn-sm btn-dark" onClick={handleOpen}>
        Update
      </button>
      <Modal backdrop="static" open={open} onClose={toggle} role="alertdialog" size={"xs"}>
        <Modal.Header>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Divider />
        <Modal.Body>
          {/* {JSON.stringify(formState)} */}
          <Form fluid onChange={setFormState} formValue={formState}>
            <Form.Group>
              <Form.ControlLabel>FirstName</Form.ControlLabel>
              <Form.Control name="firstName" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>LastName</Form.ControlLabel>
              <Form.Control name="lastName" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Role</Form.ControlLabel>
              <RoleSelect defaultValue={formState.roleId} onChange={handleRole} />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Avatar</Form.ControlLabel>
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
          </Form>
          <Placeholder.Paragraph />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-sm btn-dark" onClick={handleSave}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default UserModalUpdate;
