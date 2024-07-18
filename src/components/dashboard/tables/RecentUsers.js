import { useUsers } from "@/hooks/users";
import { assetUrl } from "@/lib/asset";
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

import { usePerms } from "@/hooks/perm";

const RecentUsers = () => {
  const { isAdmin } = usePerms();
  const { isLoading, data } = useUsers(["RecentUsers"], { fields: "*,role.id,role.name" });
  return (
    <div class="card h-xl-100">
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold fs-3 mb-1">Recent Users</span>
          <span class="text-muted mt-1 fw-semibold fs-7">Users who signed up to the platform recently</span>
        </h3>
      </div>

      <div class="card-body py-3">
        <div class="table-responsive">
          <table class="table align-middle gs-0 gy-3">
            <thead>
              <tr>
                <th class="p-0 w-50px"></th>
                <th class="p-0 min-w-150px"></th>
                <th class="p-0 min-w-140px"></th>
                <th class="p-0 min-w-120px"></th>
              </tr>
            </thead>

            <tbody>
              {data?.data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <div class="symbol symbol-50px me-2">
                        <span class="symbol-label">
                          <img
                            src={assetUrl(user?.avatar)}
                            class=" img-fluid align-self-end"
                            alt=""
                            style={{
                              height: 40,
                              width: 40,
                              objectFit: "cover",
                              borderRadius: "10px",
                              marginBottom: "5px",
                            }}
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6">
                        {user?.first_name} {user?.last_name}
                      </a>
                      <span class="text-muted fw-bolder d-block">{user?.role?.name}</span>
                    </td>
                    <td>
                      <span class="text-muted fw-semibold d-block fs-6">Email</span>
                      <span class="text-gray-900 fw-bold d-block fs-7">{user.email}</span>
                    </td>

                    {isAdmin() && (
                      <td class="text-end">
                        <Link href={`/dashboard/profile/${user.id}`} legacyBehavior>
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                            <ArrowRight size={16} />
                          </a>
                        </Link>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentUsers;
