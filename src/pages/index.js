import LinkButton from "@/components/reusable/LinkButton";
import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <LinkButton to="/auth/login">Login</LinkButton>
      <LinkButton to="/signup">Sign Up</LinkButton>
      <LinkButton to="/dashboard">Dashboard</LinkButton>
    </div>
  );
};

export default Home;
