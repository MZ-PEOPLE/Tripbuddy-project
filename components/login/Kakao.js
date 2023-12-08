import { useRouter } from "next/router";
import { RiKakaoTalkFill } from "react-icons/ri";
import React from "react";
import KakaoLogin from "react-kakao-login";
import styles from "./Kakao.module.css";

const Kakao = () => {
  const kakaoApiKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const router = useRouter();

  const onSuccess = async (response) => {
    try {
      console.log(response.profile);
      const id = response.profile.id;
      const { nickname, profile_image } = response.profile.properties;
      const res = await fetch("/api/auth/kakao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, nickname, profile_image, age: 20 }),
      });
      const data = await res.json();
      console.log(id, nickname, profile_image, response);
      if (res.status === 200) {
        // 토큰을 로컬 스토리지에 저장
        localStorage.setItem("token", data.token);
        // 로그인 성공 후 추가 작업할 코드, 현재는 홈으로 이동
        router.push("/");
        console.log("로그인 성공:", data);
      } else {
        // 실패했을때 처리 할 로직
        console.error("로그인 실패:", data.error);
      }
    } catch (error) {
      // 에러가 발생했을 경우 처리할 로직
      console.error("로그인 에러:", error);
    }
  };

  const onFailure = (error) => {
    console.error(error);
  };

  return (
    <div className={styles.KakaoBox}>
      <KakaoLogin
        token={kakaoApiKey}
        onSuccess={onSuccess}
        onFailure={onFailure}
        render={({ onClick }) => (
          <button onClick={onClick} className={styles.KakaoBtn}>
            <RiKakaoTalkFill className={styles.Icon} />
            카카오 계정으로 로그인
          </button>
        )}
      />
    </div>
  );
};

export default Kakao;
