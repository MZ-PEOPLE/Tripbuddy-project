import AlertBell from "./AlertBell";
import LoginBtn from "./LoginButton";

const LoginCheck = ({ isLogin }) => {
  return isLogin ? <AlertBell /> : <LoginBtn />;
};

export default LoginCheck;
