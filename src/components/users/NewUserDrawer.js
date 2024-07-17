import { UserPlus } from "lucide-react";
import React, { Fragment, useState } from "react";
import { FormLabel } from "react-bootstrap";
import { Drawer, Input } from "rsuite";
import { useBoolean } from "usehooks-ts";
import SelectRoles from "../forms/SelectRoles";
import { useForm } from "@/hooks/form";
import { focusManager, useMutation } from "react-query";
import { directus } from "@/lib";
import { useNotify } from "@/hooks/notify";
const NewUserDrawer = () => {
  const { showMsg, showError } = useNotify();
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { form, handleSuite, handleExtra } = useForm({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "",
  });
  const [file, setFile] = useState("");
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const mutation = useMutation({
    mutationFn: async (payload) => {
      if (!file) {
        throw new Error("Photos is missing from the form");
      }
      const formData = new FormData();
      formData.append("file", file);
      const res = await directus.files.createOne(formData);
      payload.avatar = res.id;
      const userResponse = await directus.users.createOne(payload);
      return userResponse;
    },
    onSuccess: (data) => {
      showMsg(`New User created`);
      toggle();
      focusManager.setFocused(true);
      //   router.push(`/auth/login`);
    },
    onError: (e) => {
      showError(e.message);
      toggle();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <Fragment>
      <button class="btn btn-sm btn-dark btn-active-primary" onClick={toggle}>
        <UserPlus size={16} className="me-2" /> New User
      </button>
      <Drawer open={value} onClose={toggle} size={"xs"}>
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">
            New User
            <br />
            <span className="text-muted fs-9">All form fields with astericks are required</span>
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          {/* {JSON.stringify(form)} */}
          <div className="container-fluid mx-0 px-0">
            <div className="row">
              <div className="col-12">
                <FormLabel className="fw-bolder fs-6">Email</FormLabel>
                <Input value={form.email} onChange={handleSuite("email")} />
              </div>
              <div className="col-12 mt-5">
                <FormLabel className="fw-bolder fs-6">First Name</FormLabel>
                <Input value={form.first_name} onChange={handleSuite("first_name")} />
              </div>
              <div className="col-12 mt-5">
                <FormLabel className="fw-bolder fs-6">Last Name</FormLabel>
                <Input value={form.last_name} onChange={handleSuite("last_name")} size="md" />
              </div>
              <div className="col-12 mt-5">
                <FormLabel className="fw-bolder fs-6">Password</FormLabel>
                <Input value={form.password} onChange={handleSuite("password")} type="password" size="md" />
              </div>
              <div className="col-12 mt-5">
                <FormLabel className="fw-bolder fs-6">Role</FormLabel>
                <SelectRoles defaultValue={form.role} onChange={handleExtra} keyName={"role"} />
              </div>
              <div className="col-12 mt-5">
                <FormLabel className="fw-bolder fs-6 required">Image Upload</FormLabel>
                <input type="file" name="" id="" className="form-control" onChange={handleFile} />
              </div>
              {form.role && form.email && (
                <div className="col-12 mt-5">
                  <button className="btn btn-dark btn-sm w-100" onClick={handleSubmit}>
                    {mutation.isLoading ? "Submitting..." : "Save"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </Fragment>
  );
};

export default NewUserDrawer;
