import { flatMap } from "lodash";
import { useEffect, useState } from "react";

export const useFile = () => {
  const [file, setFile] = useState(null);
  const [check, setCheck] = useState(false);

  const handleFile = (e) => {
    // console.log("Changed");
    // setFile(e);
    // console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const prepFile = () => {
    const formData = new FormData();
    formData.append("file", file);
    return formData;
  };

  useEffect(() => {
    if (file) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [file]);

  return { prepFile, fileCheck: check, handleFile, file };
};
