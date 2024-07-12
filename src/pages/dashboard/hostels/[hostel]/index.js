import HostelDetailCard from "@/components/dashboard/card/HostelDetailCard";
import RoomsListContainer from "@/components/dashboard/card/RoomsListContainer";
import AppLayout from "@/components/layout/dashboard/AppLayout";
import { useRouter } from "next/router";
import React from "react";

const HostelPage = () => {
  const router = useRouter();
  const id = router.query["hostel"];
  return (
    <AppLayout>
      <h3>Hostel</h3>

      <div className="row">
        {id && (
          <div className="col-md-3">
            <HostelDetailCard hostelId={id} />
          </div>
        )}

        {id && (
          <div className="col-md-9">
            <RoomsListContainer hosteId={id} />
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default HostelPage;
