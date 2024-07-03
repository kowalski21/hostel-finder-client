import HostelInfoCard from "@/components/hostels/HostelInfoCard";
import RoomCard from "@/components/hostels/RoomCard";
import RoomsListCard from "@/components/hostels/RoomsListCard";
import MainLayout from "@/components/layout/MainLayout";
import PageToolbar from "@/components/reusable/PageToolbar";
import { useRouter } from "next/router";
import React from "react";

const HostelViewPage = () => {
  const router = useRouter();
  const id = router.query["id"];

  return (
    <MainLayout>
      <PageToolbar title="Hostel" />
      <div className="row mt-5">
        <div className="col-md-4">{id && <HostelInfoCard hostelId={id} />}</div>
        <div className="col-md-8">{id && <RoomsListCard hostelId={id} />}</div>
      </div>
    </MainLayout>
  );
};

export default HostelViewPage;
