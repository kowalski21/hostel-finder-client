import { usePerms } from "@/hooks/perm";
import { useUsers } from "@/hooks/users";
import { assetUrl } from "@/lib/asset";
import React, { useState } from "react";
import { SelectPicker } from "rsuite";

const renderUser = (value, item, selectedElement) => {
  return (
    <div className="d-flex align-items-start">
      <div class="symbol symbol-50px me-2">
        <span class="symbol-label">
          <img
            src={assetUrl(item?.avatar)}
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
      <div className="mx-5">
        <span className="fs-6 fw-bolder text-dark">
          Name : {item?.first_name} {item?.last_name}
        </span>
        <br />
        <span className="fs-7 fw-bolder text-gray-600">Role : {item?.role?.name}</span>
      </div>
    </div>
  );
};

const SelectUsers = ({ defaultValue = null, onChange = null, keyName }) => {
  const { isManager } = usePerms();
  const [value, setValue] = useState(defaultValue);
  const handleChange = (item) => {
    if (onChange) {
      onChange(keyName, item);
    }
    setValue(item);
  };
  const { data, isLoading } = useUsers(["ManagerUsers"], { fields: "*,role.id,role.name" });
  return (
    <SelectPicker
      disabled={isManager() ? false : true}
      renderValue={renderUser}
      block
      value={value}
      onChange={handleChange}
      renderMenuItem={renderUser}
      className="border-dark w-100"
      data={data?.data ? data?.data : []}
      labelKey="email"
      valueKey="id"
    />
  );
};

export default SelectUsers;
