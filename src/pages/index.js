import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageToolbar from "@/components/reusable/PageToolbar";
import { useAuth } from "@/hooks/auth";
import HostelsWidget from "@/components/widgets/HostelsWidget";
import UsersWidget from "@/components/widgets/UsersWidget";
const HomePage = () => {
  return (
    <MainLayout>
      <PageToolbar title="Hostels" short={"Search and Find Hostels"} />

      <div className="row g-5 g-xl-10 mb-xl-10 mt-5">
        <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
          <HostelsWidget />
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
          <UsersWidget />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
