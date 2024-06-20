import React, { Fragment } from "react";

const PageToolbar = ({ title = "Admin Dashboard", short, actions = [] }) => {
  return (
    <div className="d-flex flex-stack">
      <div className="page-title d-flex flex-column align-items-start me-3 mb-5 mb-lg-0">
        <h1 className="d-flex text-dark fw-bolder fs-3 flex-column mb-0">
          {title}
          <span className="text-muted fs-7 fw-bold mt-2">{short}</span>
        </h1>
      </div>
      <div className="d-flex align-items-center gap-2 gap-lg-3">
        {actions.map((elem, idx) => {
          return <Fragment key={idx}>{elem}</Fragment>;
        })}
      </div>
    </div>
  );
};

export default PageToolbar;
