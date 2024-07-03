import React from "react";

const MainContent = ({ children }) => {
  return (
    <div className="post d-flex flex-column-fluid">
      <div className="container mt-5">{children}</div>
    </div>
  );
};

export default MainContent;
