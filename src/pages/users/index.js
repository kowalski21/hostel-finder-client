import MainLayout from "@/components/layout/MainLayout";
import PageToolbar from "@/components/reusable/PageToolbar";
import AddUserModal from "@/components/users/AddUserModal";
import RecentUsers from "@/components/users/RecentUsers";
import UsersSearchTable from "@/components/users/UsersSearchTable";
import { useUsers } from "@/hooks/users";
import React from "react";

const UsersDashboardPage = () => {
  const { data, isLoading } = useUsers();
  return (
    <MainLayout>
      <PageToolbar title="Users Dashboard" actions={[<AddUserModal />]} />
      {/* {JSON.stringify({ data })} */}

      <div className="row mt-5">
        <div className="col-xl-4">
          <RecentUsers />
        </div>
        <div className="col-xl-8">
          <UsersSearchTable />
        </div>
      </div>
    </MainLayout>
  );
};

export default UsersDashboardPage;
