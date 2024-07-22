import React, { Fragment } from "react";
import AppHeader from "./AppHeader";
import { useAuth } from "@/hooks/auth";
import { Loader } from "rsuite";
import BackButton from "@/components/reusable/BackButton";

const AppLayout = ({ children }) => {
  const { data, isLoading } = useAuth();
  return (
    <Fragment>
      {isLoading && <Loader center vertical />}

      {data && (
        <div>
          <AppHeader />
          <div className="container mt-5">
            <div className="row mb-5">
              <div className="col-12">
                <BackButton />
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AppLayout;
