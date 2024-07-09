import { useState } from "react";

// export const useForm =

export const useForm = (defaultObj) => {
  const [form, setForm] = useState(defaultObj);

  const handleSuite = (keyName) => (value) => {
    setForm({ ...form, [keyName]: value });
  };

  const handleChange = (keyName) => (e) => {
    setForm({ ...form, [keyName]: e.target.value });
  };

  const handleExtra = (keyName, value) => {
    setForm({ ...form, [keyName]: value });
  };

  const resetForm = () => {
    setForm(defaultObj);
  };

  return { form, handleChange, handleExtra, handleSuite, resetForm };
};
