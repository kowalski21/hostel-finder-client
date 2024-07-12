import HostelCard from "@/components/dashboard/card/HostelCard";
import HostelsListContainer from "@/components/dashboard/card/HostelsListContainer";
import HostelModal from "@/components/dashboard/modals/HostelModal";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import React from "react";

const HostelsDashboard = () => {
  return (
    <AppLayout>
      <div className="row">
        <div className="col">
          <h3 className="fw-bolder">Hostels Management</h3>
        </div>

        <div className="col">
          <div className="float-end">
            <HostelModal />
          </div>
        </div>
      </div>
      <HostelsListContainer />
    </AppLayout>
  );
};

export default HostelsDashboard;
