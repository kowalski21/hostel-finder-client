import React, { Fragment, useEffect } from "react";
import AppHeader from "./AppHeader";
import { useAuth } from "@/hooks/auth";
import { Loader } from "rsuite";
import BackButton from "@/components/reusable/BackButton";
import { useLocationActions } from "@/store/location";

const AppLayout = ({ children }) => {
  const { data, isLoading } = useAuth();
  const actions = useLocationActions();
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      actions.modLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  };
  useEffect(() => {
    getUserLocation();
  }, []);
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
