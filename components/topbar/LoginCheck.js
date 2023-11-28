import { useState } from "react";
import AlertBell from "./AlertBell";
import LoginBtn from "./LoginButton";

const LoginCheck = () => {
  const [login, setLogin] = useState(true);

  return login ? <AlertBell /> : <LoginBtn />;
};

export default LoginCheck;
