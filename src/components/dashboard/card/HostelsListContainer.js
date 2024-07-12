import { useHostels } from "@/hooks/hostels";
import React from "react";
import { Loader } from "rsuite";
import HostelCard from "./HostelCard";

const HostelsListContainer = () => {
  const query = { fields: "*,manager.id,manager.avatar" };
  const { data, isLoading } = useHostels(["MainHostels", query], query);
  return (
    <div className="row mt-5">
      {isLoading && (
        <div className="col-12">
          <Loader center vertical />
        </div>
      )}
      {data && data?.data && (
        <div className="col-12">
          <div className="row">
            {data?.data.map((hostel) => {
              return (
                <div className="col-md-3 mb-5" key={hostel.id}>
                  <HostelCard hostel={hostel} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HostelsListContainer;
