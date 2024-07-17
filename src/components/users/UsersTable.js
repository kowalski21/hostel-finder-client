import { assetUrl } from "@/lib/asset";
import { Settings, Settings2, Eye, Key } from "lucide-react";
import React from "react";
import EditUserDrawer from "./EditUserDrawer";
import ChangePasswordDrawer from "./ChangePasswordDrawer";
import Link from "next/link";

const UsersTable = ({ users = [] }) => {
  return (
    <div className="table-responsive">
      <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
        <thead>
          <tr className="fw-bold text-muted">
            <th className="min-w-200px">Authors</th>
            <th className="min-w-150px">Role</th>
            {/* <th className="min-w-150px">Progress</th> */}
            <th className="min-w-100px text-end">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-45px me-5">
                      <img src={assetUrl(user?.avatar)} className="img-center" alt="" />
                    </div>
                    <div className="d-flex justify-content-start flex-column">
                      <a href="#" className="text-gray-900 fw-bold text-hover-primary fs-6">
                        {user?.first_name} {user?.last_name}
                      </a>
                      <span className="text-muted fw-semibold text-muted d-block fs-7">{user?.email}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block fs-6">
                    {user?.role?.name}
                  </a>
                  <span className="text-muted fw-semibold text-muted text-uppercase d-block fs-9">{user?.status}</span>
                </td>
                {/* <td className="text-end">
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-bold">50%</span>
                    </div>
                    <div className="progress h-6px w-100">
                      <div className="progress-bar bg-primary" role="progressbar"></div>
                    </div>
                  </div>
                </td> */}
                <td>
                  <div className="d-flex justify-content-end flex-shrink-0">
                    <EditUserDrawer user={user} userId={user.id} />
                    <Link href={`/dashboard/profile/${user.id}`} legacyBehavior>
                      <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                        <Eye size={16} />
                      </a>
                    </Link>

                    <ChangePasswordDrawer user={user} userId={user.id} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
