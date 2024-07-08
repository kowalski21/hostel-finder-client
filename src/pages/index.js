import LinkButton from "@/components/reusable/LinkButton";
import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <LinkButton to="/auth/login">Login</LinkButton>
      <LinkButton>Sign Up</LinkButton>
    </div>
  );
};

export default Home;
