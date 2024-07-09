import React, { useState } from "react";
import { SelectPicker } from "rsuite";
const data = [
  { label: "Archived", value: "archived" },
  { label: "Draft", value: "draft" },
  { label: "Published", value: "published" },
];

const renderValue = (value, item, selectedElement) => {
  return (
    <div className="d-flex align-items-start">
      <div class="symbol symbol-50px me-2">
        <h3 className="fs-6 text-dark">{item.label}</h3>
      </div>
    </div>
  );
};
const SelectStatus = ({ defaultValue = null, onChange = null, keyName }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (item) => {
    if (onChange) {
      onChange(keyName, item);
    }
    setValue(item);
  };
  return <SelectPicker value={value} onChange={handleChange} renderValue={renderValue} block data={data} />;
};

export default SelectStatus;
