import NewHostelCard from "@/components/dashboard/modals/NewHostelCard";
import RecentUsers from "@/components/dashboard/tables/RecentUsers";
import HostelWidget from "@/components/dashboard/widgets/HostelWidget";
import RoomRequestWidget from "@/components/dashboard/widgets/RoomRequestWidget";
import TenantWidget from "@/components/dashboard/widgets/TenantWidget";
import UsersWidget from "@/components/dashboard/widgets/UsersWidget";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useAuthUser } from "@/store/auth";
import { useRouter } from "next/router";

import React, { useEffect } from "react";

const DashboardPage = () => {
  const user = useAuthUser();
  return (
    <AppLayout>
      {user && <h3 className="text-gray-600">Hi, {user.first_name}</h3>}

      <div className="row mt-10">
        <div class="col-xl-3 col-md-6">
          <HostelWidget />
        </div>
        <div className="col-xl-3 col-md-6 mb-5">
          <RoomRequestWidget />
        </div>
        <div className="col-xl-3 col-md-6">
          <TenantWidget />
        </div>
        <div className="col-xl-3 col-md-6">
          <UsersWidget />
        </div>
      </div>
      <div className="row mt-2 mb-10">
        <div className="col-md-4">
          <NewHostelCard />
        </div>
        <div className="col-md-8">
          <RecentUsers />
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
