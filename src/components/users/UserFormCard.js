import { useForm } from "@/hooks/form";
import { useNotify } from "@/hooks/notify";
import { useUser } from "@/hooks/users";
import { directus } from "@/lib";
import React from "react";
import { FormLabel } from "react-bootstrap";
import { focusManager, useMutation } from "react-query";
import { Input } from "rsuite";
import ChangePasswordDrawer from "./ChangePasswordDrawer";

const UserFormCard = ({ userId, user }) => {
  const { showError, showMsg } = useNotify();
  const { form, handleSuite, handleExtra } = useForm({
    email: user?.email,
    first_name: user?.first_name,
    last_name: user?.last_name,
    role: user?.role?.name || "No Role Assigned, Contact Admin",
  });

  const mutation = useMutation({
    mutationFn: async (payload) => {
      return await directus.users.updateOne(user.id, payload);
    },
    onSuccess: (data) => {
      showMsg(`User Information Updated`);
      focusManager.setFocused(true);
    },
    onError: (e) => {
      showError(e.message);
    },
  });

  const handleSubmit = () => {
    let payload = { ...form };
    delete payload.role;
    mutation.mutate(payload);
  };
  return (
    <div className="card shadow-md border-0">
      <div className="card-header">
        <div className="card-title fw-bolder">User Information</div>
      </div>
      {user && (
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <FormLabel>First Name</FormLabel>
              <Input value={form.first_name} onChange={handleSuite("first_name")} />
            </div>
            <div className="col-md-6">
              <FormLabel>Last Name</FormLabel>
              <Input value={form.last_name} onChange={handleSuite("last_name")} />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <FormLabel>Role</FormLabel>
              <Input disabled value={form.role} />
            </div>
            <div className="col-md-6">
              <FormLabel>Email</FormLabel>
              <Input disabled value={form.email} />
            </div>
          </div>
        </div>
      )}

      {user && (
        <div className="card-footer">
          <button className="btn btn-dark btn-sm me-4" onClick={handleSubmit}>
            {mutation.isLoading ? "Loading..." : "Update"}
          </button>
          <ChangePasswordDrawer user={user} userId={user.id} btnProp={"Change Password"} />
        </div>
      )}
    </div>
  );
};

export default UserFormCard;
