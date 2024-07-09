import React from "react";
import Link from "next/link";
import { Loader } from "rsuite";
import { Users } from "lucide-react";

import { useUsers } from "@/hooks/users";

const UsersWidget = () => {
  const { data, isLoading } = useUsers(["TotalUsers"], {
    aggregate: {
      count: "*",
    },
  });
  return (
    <Link href={`/`} legacyBehavior>
      <a className="card bg-white  card-xl-stretch mb-xl-8">
        {isLoading && <Loader vertical center />}
        {data && data?.data.length > 0 && (
          <div className="card-body">
            <span className="svg-icon svg-icon-gray-800 svg-icon-3x ms-n1">
              <Users />
            </span>

            <div className="text-gray-800 fw-bolder fs-2 mb-2 mt-5">{data?.data[0].count}</div>
            <div className="fw-bold text-muted text-gray-800">Users</div>
          </div>
        )}
      </a>
    </Link>
  );
};

export default UsersWidget;
