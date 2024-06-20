import { useUsers } from "@/hooks/users";
import React, { useEffect, useState } from "react";
import { Label } from "reactstrap";
import { Input, SelectPicker } from "rsuite";
import { LinkIcon, Presentation } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { getImageNumber, getStatus, renderImage } from "@/actions/utils";
import RoleSelect from "../reusable/RoleSelect";
import UserModalUpdate from "./UserModalUpdate";
import Link from "next/link";
const UsersSearchTable = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const { data, isLoading } = useUsers({ queryKey: ["UsersListTable", query], queryParams: query });
  const [role, setRole] = useState("");
  const handleRole = (val) => {
    setRole(val);
  };
  useEffect(() => {
    let payload = [];
    if (search) {
      payload.push({
        username: {
          contains: search,
          mode: "insensitive",
        },
      });
      payload.push({
        firstName: {
          contains: search,
          mode: "insensitive",
        },
      });
      payload.push({
        lastName: {
          contains: search,
          mode: "insensitive",
        },
      });
    }
    if (role) {
      payload.push({
        roleId: parseInt(role),
      });
    }
    setQuery({ filter: { OR: payload } });
  }, [search, role]);
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Users</div>
        {/* Filters are here */}
      </div>
      <div className="card-body">
        {/* {JSON.stringify(query)} */}
        <div className="row ">
          <div className="col-6">
            <Label>Search</Label>
            <Input value={search} onChange={(value) => setSearch(value)} />
          </div>
          <div className="col-6">
            <Label>Search</Label>
            <RoleSelect onChange={handleRole} />
            {/* <SelectPicker data={[]} block /> */}
          </div>
        </div>

        <div className="table-responsive mt-3">
          <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
              <tr className="fw-bolder text-dark">
                <th className="min-w-200px">User Info</th>
                <th className="min-w-150px">Role</th>
                <th className="min-w-80px">Status</th>
                <th className="min-w-150px">Date Joined</th>
                <th className="min-w-100px text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data?.data.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-45px me-5">
                            {user?.avatar ? (
                              <img src={renderImage(user.avatar)} className="" alt="" />
                            ) : (
                              <img src={`/media/avatars/300-${user.id}.jpg`} className="" alt="" />
                            )}
                            {/* <img src={`/media/avatars/300-${user.id}.jpg`} className="" alt="" /> */}
                            {/* <img src="/media/avatars/300-14.jpg" alt="" /> */}
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">
                              {user?.firstName} {user?.lastName}
                            </a>
                            <span className="text-muted fw-bold text-muted d-block fs-7">{user?.username}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-white fw-bolder badge badge-square badge-dark text-center  p-3 fs-7">
                          {user?.role?.name || "No Role"}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-square ${getStatus(user.status)}  text-white fw-bolder px-2  fs-7`}
                        >
                          {user?.status}
                        </span>
                      </td>
                      <td>
                        <span className="text-muted fw-bolder d-block fs-7">
                          {formatDistanceToNow(new Date(user.createdAt))} ago
                        </span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end flex-shrink-0">
                          <Link href={`/users/${user.id}`} legacyBehavior>
                            <a href="" className="btn btn-sm btn-dark mx-2">
                              View
                            </a>
                          </Link>

                          <UserModalUpdate key={user.id} user={user} />
                        </div>
                      </td>
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

export default UsersSearchTable;
