import HostelModal from "@/components/dashboard/modals/HostelModal";
import MyHostelsListContainer from "@/components/hostels/MyHostelsListContainer";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import UserFormCard from "@/components/users/UserFormCard";
import UserProfileCard from "@/components/users/UserProfileCard";
import { useUser } from "@/hooks/users";
import { useRouter } from "next/router";
import React from "react";

const UserHostelsPage = () => {
  const router = useRouter();
  const { user: userId } = router.query;
  const query = { fields: "*,role.id,role.name" };
  const { data: user, isLoading } = useUser(userId, ["UserProfile", userId, query], query);
  return (
    <AppLayout>
      <h3>User Hostels</h3>
      {/* {JSON.stringify({ user })} */}
      <div className="row">
        {userId && (
          <div className="col-md-3">
            <UserProfileCard userId={userId} />
          </div>
        )}
        <div className="col-md-9">
          <div className="row">
            {user && (
              <div className="col-12">
                <HostelModal />
                <MyHostelsListContainer user={user} />
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserHostelsPage;
