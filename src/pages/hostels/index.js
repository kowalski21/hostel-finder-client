import AddHostel from "@/components/hostels/AddHostel";
import HostelCard from "@/components/hostels/HostelCard";
import MainLayout from "@/components/layout/MainLayout";
import PageToolbar from "@/components/reusable/PageToolbar";
import RecentUsers from "@/components/users/RecentUsers";
import { useHostels } from "@/hooks/hostels";
import React from "react";
import { Loader } from "rsuite";

const HostelsDashboardPage = () => {
  const { data, isLoading } = useHostels({
    queryParams: {},
    queryKey: ["HostelsList"],
  });
  return (
    <MainLayout>
      <PageToolbar title="Hostels Management" actions={[<AddHostel />]} />
      {isLoading && (
        <div className="row">
          <div className="col">
            <Loader vertical center />
          </div>
        </div>
      )}

      <div className="row mt-5">
        {data &&
          data?.data.map((hostel) => {
            return (
              <div className="col-md-4 mb-4" key={hostel.id}>
                <HostelCard hostel={hostel} />
              </div>
            );
          })}
      </div>
    </MainLayout>
  );
};

export default HostelsDashboardPage;
