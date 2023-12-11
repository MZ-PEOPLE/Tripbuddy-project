import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/global.css";
import { useRouter } from "next/router";

const verifyUser = async (setUser) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      console.log("토큰은있음");
      const response = await axios.get("/api/logined", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setUser(response.data);
        console.log(response.data.profileImage);
      }
    }
  } catch (error) {
    console.log("실패");
    console.error("인증 실패:", error);
    localStorage.removeItem("token");
  }
};

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    verifyUser(setUser);

    const handleRouteChange = () => {
      verifyUser(setUser);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  /* 사실 페이지를 이동할때마다 유저정보를 조회하는게 아닌 로그인했을때 + 유저정보를 바꿨을때만 바꿔서 보여주긴 해야하는데 혹시 모바일로 접속해 바꾸고 컴퓨터로 계속 보고있으면 바뀌지않음 일딴은 이렇게 페이지가 바뀔때마다 조회하도록 하겠음 추후 생각 하도록 */
  return <Component {...pageProps} user={user} />;
}

export default MyApp;
