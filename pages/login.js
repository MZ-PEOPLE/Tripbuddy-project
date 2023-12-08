import React from "react";
import Topbar from "@/components/topbar/TopBar";
import BackBtn from "@/components/topbar/BackButton";
import LoginBox from "@/components/login/Loginbox";
import LoginContents from "@/components/login/LoginContents";

const Login = () => {
  return (
    <>
      <Topbar leftContent={<BackBtn />} />
      <LoginContents />
      <LoginBox />
    </>
  );
};

export default Login;
