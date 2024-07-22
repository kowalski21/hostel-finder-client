import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <button className="btn btn-dark btn-sm" onClick={handleClick}>
      <ArrowLeft size={16} /> Go Back
    </button>
  );
};

export default BackButton;
