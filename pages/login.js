import { useEffect } from "react";
import Topbar from "@/components/topbar/TopBar";
import BackBtn from "@/components/topbar/BackButton";
import LoginBox from "@/components/login/Loginbox";
import LoginContents from "@/components/login/LoginContents";
import { useRouter } from "next/router";

const Login = ({ user }) => {
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);
  return (
    <>
      <Topbar leftContent={<BackBtn />} />
      <LoginContents />
      <LoginBox />
    </>
  );
};

export default Login;
