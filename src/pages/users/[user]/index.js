import MainLayout from "@/components/layout/MainLayout";
import PageToolbar from "@/components/reusable/PageToolbar";
import UserBanner from "@/components/users/UserBanner";
import { useRouter } from "next/router";
import React from "react";

const UserProfilePage = () => {
  const router = useRouter();
  const { user } = router.query;

  return (
    <MainLayout>
      {/* {JSON.stringify(router.query)} */}
      <PageToolbar title="User Dashboard" />
      <div className="row">
        <div className="col">{user && <UserBanner userId={user} />}</div>
      </div>
    </MainLayout>
  );
};

export default UserProfilePage;
