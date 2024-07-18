import { useHostels } from "@/hooks/hostels";
import React from "react";
import HostelCard from "../dashboard/card/HostelCard";
import { Loader } from "rsuite";

const MyHostelsListContainer = ({ user }) => {
  const query = { fields: "*,manager.id,manager.avatar", filter: { manager: user.id } };
  const { data, isLoading } = useHostels(["MyHostels", query], query);
  return (
    <div className="row mt-5">
      {isLoading && <Loader center vertical />}

      {data &&
        data?.data.map((hostel) => {
          return (
            <div className="col-md-4 mb-5" key={hostel.id}>
              <HostelCard hostel={hostel} />
            </div>
          );
        })}
    </div>
  );
};

export default MyHostelsListContainer;
