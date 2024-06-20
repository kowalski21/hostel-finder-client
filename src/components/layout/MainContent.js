import React from "react";

const MainContent = ({ children }) => {
  return (
    <div className="page d-flex flex-row flex-column-fluid">
      <div className="content d-flex flex-column flex-column-fluid">
        <div className="post d-flex flex-column-fluid">
          <div className="container-xxl">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
