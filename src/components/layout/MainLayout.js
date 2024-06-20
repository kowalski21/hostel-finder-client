import React, { Fragment } from "react";
import MainWrapper from "./MainWrapper";
import MainHeader from "./MainHeader";
import MainContent from "./MainContent";
import { useAuth } from "@/hooks/auth";
import { Loader } from "rsuite";

const MainLayout = ({ children }) => {
  const { data, isLoading } = useAuth();

  return (
    <MainWrapper>
      {isLoading && <Loader vertical center />}
      {data && (
        <Fragment>
          <MainHeader />
          <MainContent>{children}</MainContent>
        </Fragment>
      )}
    </MainWrapper>
  );
};

export default MainLayout;
