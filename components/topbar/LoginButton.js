import style from "./LoginButton.module.css";
import Link from "next/link";

const LoginBtn = () => {
  return (
    <Link href="/login" className={style.login}>
      로그인
    </Link>
  );
};

export default LoginBtn;
