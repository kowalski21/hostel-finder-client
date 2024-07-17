import { useRoles, useUsers } from "@/hooks/users";
import { assetUrl } from "@/lib/asset";
import React, { useState } from "react";
import { SelectPicker, InputPicker } from "rsuite";

const SelectRoles = ({ defaultValue = null, onChange = null, keyName }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (item) => {
    if (onChange) {
      onChange(keyName, item);
    }
    setValue(item);
  };
  const { data, isLoading } = useRoles(["RolesList"], { fields: "id,name" });
  return (
    <InputPicker
      block
      value={value}
      onChange={handleChange}
      //   className="border-dark w-100"
      data={data?.data ? data?.data : []}
      labelKey="name"
      valueKey="id"
    />
  );
};

export default SelectRoles;
