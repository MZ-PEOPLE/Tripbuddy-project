import { useState } from "react";

const LoginCheck = () => {
  const [login, setLogin] = useState(false);

  return login ? <div>알람창</div> : <div>로그인하셈</div>;
};

export default LoginCheck;
