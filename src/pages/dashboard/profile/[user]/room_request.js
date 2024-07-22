import MyBookingList from "@/components/booking/MyBookingList";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import BackButton from "@/components/reusable/BackButton";
import UserProfileCard from "@/components/users/UserProfileCard";
import { useUser } from "@/hooks/users";
import { useRouter } from "next/router";
import React from "react";

const MyRoomRequestPage = () => {
  const router = useRouter();
  const { user: userId } = router.query;
  const query = { fields: "*,role.id,role.name" };
  const { data: user, isLoading } = useUser(userId, ["UserProfile", userId, query], query);
  return (
    <AppLayout>
      <h3>User Profile</h3>
      {/* {JSON.stringify({ user })} */}
      <div className="row mt-5">
        {userId && (
          <div className="col-md-3">
            <UserProfileCard userId={userId} />
          </div>
        )}
        {user && (
          <div className="col-md-9">
            <div className="row">
              <div className="col-12">
                <MyBookingList user={user} />
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default MyRoomRequestPage;
