import React from "react";
import UsersTable from "./UsersTable";
import { Loader } from "rsuite";
import { UserPlus } from "lucide-react";
import { useUsers } from "@/hooks/users";
import NewUserDrawer from "./NewUserDrawer";

const UsersListContainer = () => {
  const query = { fields: "*,role.id,role.name" };
  const { data, isLoading } = useUsers(["UsersList", query], query);
  return (
    <div className="card mb-5 mb-xl-8">
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold fs-3 mb-1">UsersList</span>
          <span class="text-muted mt-1 fw-semibold fs-7">Over 500 members</span>
        </h3>
        <div class="card-toolbar">
          <NewUserDrawer />
        </div>
      </div>
      <div className="card-body py-3">
        {isLoading && <Loader vertical center />}
        {data && data?.data && <UsersTable users={data?.data} />}
      </div>
    </div>
  );
};

export default UsersListContainer;
