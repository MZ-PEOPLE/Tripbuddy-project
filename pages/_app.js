import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/global.css";
import { useRouter } from "next/router";

const verifyUser = async (setUser, setLoading) => {
  try {
    setLoading(true); // 로딩 시작
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/logined", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setUser(response.data);
      }
    }
  } catch (error) {
    console.error("인증 실패:", error);
    localStorage.removeItem("token");
  } finally {
    setLoading(false); // 로딩 끝
  }
};

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let lastPath = router.asPath; // 마지막 경로 저장

    const handleRouteChange = (url) => {
      if (lastPath !== url) {
        verifyUser(setUser, setLoading);
        lastPath = url; // 마지막 url경로 업데이트
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // 첫 로딩 시 검증
    verifyUser(setUser, setLoading);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  if (loading) {
    return null; // 로딩일때
  }
  return <Component {...pageProps} user={user} />;
}

export default MyApp;
