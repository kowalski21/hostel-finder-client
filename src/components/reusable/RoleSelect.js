import { useRoles } from "@/hooks/role";
import React, { Fragment, useState } from "react";
import { SelectPicker } from "rsuite";

const RoleSelect = ({ onChange, defaultValue = "" }) => {
  const [val, setVal] = useState(defaultValue);
  const { data } = useRoles();
  const handleChange = (val) => {
    // console.log(val);
    if (onChange) {
      onChange(val);
    }
    setVal(val);
  };
  return (
    <Fragment>
      {data && <SelectPicker value={val} block data={data} labelKey="name" onChange={handleChange} valueKey="id" />}
    </Fragment>
  );
};

export default RoleSelect;
