import { getImageNumber, renderImage } from "@/actions/utils";
import { useUsers } from "@/hooks/users";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Loader } from "rsuite";

const RecentUsers = () => {
  const { data, isLoading } = useUsers({
    queryParams: { pageSize: 5 },
    queryKey: ["RecentUsers", { pageSize: 5 }],
  });
  return (
    <div className="card card-xl-stretch mb-xl-8">
      <div className="card-header border-0">
        <h3 className="card-title fw-bolder text-dark">Recently Added Users</h3>
      </div>
      <div className="card-body pt-2">
        {/* {JSON.stringify(data)} */}
        {isLoading && <Loader center />}
        {data &&
          data.data.map((user) => {
            return (
              <div className="d-flex align-items-center mb-7" key={user.id}>
                <div className="symbol symbol-50px me-5">
                  {user?.avatar ? (
                    <img src={renderImage(user.avatar)} className="" alt="" />
                  ) : (
                    <img src={`/media/avatars/300-${user.id}.jpg`} className="" alt="" />
                  )}
                </div>

                <div className="flex-grow-1">
                  <a className="text-dark fw-bolder text-hover-primary fs-6">
                    {user.firstName} {user.lastName}
                  </a>
                  <span className="text-dark d-block fw-medium">{user?.role?.name}</span>
                  <span className="text-muted  fw-bolder fs-8">
                    Joined {formatDistanceToNow(new Date(user.createdAt))}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RecentUsers;
