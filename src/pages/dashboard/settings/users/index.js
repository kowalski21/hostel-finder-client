import AppLayout from "@/components/layout/dashboard/AppLayout";
import UsersListContainer from "@/components/users/UsersListContainer";
import React from "react";

const SettingsUsersPage = () => {
  return (
    <AppLayout>
      <div className="row">
        <h2>Users</h2>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <UsersListContainer />
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsUsersPage;
