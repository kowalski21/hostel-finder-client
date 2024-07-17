import { UserPlus, Settings2, Key } from "lucide-react";
import React, { Fragment, useState } from "react";
import { FormLabel } from "react-bootstrap";
import { Drawer, Input } from "rsuite";
import { useBoolean } from "usehooks-ts";
import SelectRoles from "../forms/SelectRoles";
import { useForm } from "@/hooks/form";
import { focusManager, useMutation } from "react-query";
import { directus } from "@/lib";
import { useNotify } from "@/hooks/notify";
const ChangePasswordDrawer = ({ user, userId, btnProp = false, btnComponent }) => {
  const { showMsg, showError } = useNotify();
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { form, handleSuite, handleExtra } = useForm({
    password: "",
  });

  const mutation = useMutation({
    mutationFn: async ({ payload, id }) => {
      const userResponse = await directus.users.updateOne(id, payload);
      return userResponse;
    },
    onSuccess: (data) => {
      showMsg(`User Password updated`);
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
    mutation.mutate({ payload: form, id: userId });
  };

  return (
    <Fragment>
      <a className="btn  btn-bg-light btn-active-color-primary btn-sm me-1" onClick={toggle}>
        {btnProp} <Key size={16} />
      </a>

      <Drawer open={value} onClose={toggle} size={"xs"}>
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">
            Change Password
            <br />
            {/* <span className="text-muted fs-9">All form fields with astericks are required</span> */}
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div className="container-fluid mx-0 px-0">
            <div className="row">
              <div className="col-12 mt-5">
                <FormLabel className="fw-bolder fs-6">New Password</FormLabel>
                <Input value={form.password} onChange={handleSuite("password")} />
              </div>

              {form.password && (
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

export default ChangePasswordDrawer;
