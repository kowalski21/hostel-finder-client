import Link from "next/link";
import React, { useState } from "react";
import { Form, Uploader } from "rsuite";
import RoleSelect from "../reusable/RoleSelect";
import { useNotify } from "@/hooks/notify";
import { useCreateUserMutation } from "@/actions/user";
import { useRouter } from "next/router";
const RegisterForm = () => {
  const router = useRouter();
  const mutation = useCreateUserMutation();
  const { showError, showMsg } = useNotify();
  const [formState, setFormState] = useState({
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    roleId: "",
    avatar: "",
  });

  const handleRole = (val) => {
    setFormState({ ...formState, roleId: val });
  };
  const handleUpload = (response, file) => {
    // console.log(response);
    setFormState({ ...formState, avatar: response.url });
  };
  const handleSave = (e) => {
    e.preventDefault();
    // console.log(formState);
    mutation.mutate(
      { payload: formState },
      {
        onError: (e) => {
          showError(e.message);
        },
        onSuccess: (data) => {
          showMsg("Redirecting to Login page");
          router.push(`/login`);
          // client.invalidateQueries(["UsersListTable"]);
          // toggle();
        },
      }
    );
  };
  return (
    <div>
      <form>
        <div class="d-flex align-items-center mb-3 pb-1">
          {/* <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i> */}
          <span class="h1 fw-bolder mb-0">Hostel Finder App </span>
        </div>

        <h5 class="fw-medium mb-3 pb-3">Sign up</h5>
        <Form fluid onChange={setFormState} formValue={formState}>
          <Form.Group>
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="username" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control name="password" type="password" />
          </Form.Group>

          <div className="row">
            <div className="col">
              <Form.Group>
                <Form.ControlLabel>FirstName</Form.ControlLabel>
                <Form.Control name="firstName" />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.ControlLabel>LastName</Form.ControlLabel>
                <Form.Control name="lastName" />
              </Form.Group>
            </div>
          </div>

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
              <div style={{ height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span>Click or Drag files to this area to upload</span>
              </div>
            </Uploader>
          </Form.Group>
        </Form>
        <button className="btn btn-sm btn-dark" onClick={handleSave}>
          Register
        </button>

        {/* <a class="small text-muted" href="#!">
          Forgot password?
        </a> */}
        <p class="mb-5 pb-lg-2">
          Have an Account ? <Link href={`/login`}>Login here</Link>
        </p>
        {/* <a href="#!" class="small text-muted">
          Terms of use.
        </a> */}
        {/* <a href="#!" class="small text-muted">
          Privacy policy
        </a> */}
      </form>
    </div>
  );
};

export default RegisterForm;
