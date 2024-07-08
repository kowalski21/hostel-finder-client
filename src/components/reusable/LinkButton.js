import React from "react";
import Link from "next/link";
const LinkButton = ({ to = "/", children }) => {
  return (
    <Link href={`${to}`}>
      <button className="btn btn-dark btn-sm mx-2">{children}</button>
    </Link>
  );
};

export default LinkButton;
