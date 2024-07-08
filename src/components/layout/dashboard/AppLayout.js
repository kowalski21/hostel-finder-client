import React, { Fragment } from "react";
import AppHeader from "./AppHeader";
import { useAuth } from "@/hooks/auth";
import { Loader } from "rsuite";

const AppLayout = ({ children }) => {
  const { data, isLoading } = useAuth();
  return (
    <Fragment>
      {isLoading && <Loader center vertical />}

      {data && (
        <div>
          <AppHeader />
          <div className="container mt-5">{children}</div>
        </div>
      )}
    </Fragment>
  );
};

export default AppLayout;
