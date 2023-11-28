import React from "react";
import KakaoLogin from "react-kakao-login";

const KakaoLoginComponent = () => {
  const kakaoApiKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

  const onSuccess = (response) => {
    console.log(response);
  };

  const onFailure = (error) => {
    console.error(error);
  };

  return (
    <>
      <KakaoLogin
        token={kakaoApiKey}
        onSuccess={onSuccess}
        onFailure={onFailure}
        render={({ onClick }) => <button onClick={onClick}>카카오 계정으로 로그인</button>}
      />
    </>
  );
};

export default KakaoLoginComponent;
