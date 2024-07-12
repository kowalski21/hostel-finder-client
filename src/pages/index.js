import LinkButton from "@/components/reusable/LinkButton";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Loader } from "rsuite";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return (
    <div className="container mt-5">
      <Loader center vertical />
      {/* <LinkButton to="/auth/login">Login</LinkButton>
      <LinkButton to="/signup">Sign Up</LinkButton>
      <LinkButton to="/dashboard">Dashboard</LinkButton> */}
    </div>
  );
};

export default Home;
