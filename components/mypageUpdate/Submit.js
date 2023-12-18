import styles from "./Submit.module.css";
import { useRouter } from "next/router";

export default function Submit({ newId, newIntro, newImage }) {
  const router = useRouter();
  const token = localStorage.getItem("token");

  const uploadImage = async (image) => {
    console.log("업로드이미지");
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("/api/image-upload", {
        headers: { Authorization: `Bearer ${token}` },
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("업로드성공함", result);
      } else {
        throw new Error("업로드실패함");
      }
    } catch (error) {
      console.error("에러임", error);
    }
  };

  const updateNameIntro = async (name, about) => {
    const res = await fetch("/api/userUpdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        about,
      }),
    });

    const data = await res.json();

    if (res.status === 200) {
      router.push("/mypage");
    } else {
      // 실패했을때 처리 할 로직
      console.error("로그인 실패:", data.error);
    }
  };

  const handleSubmit = async () => {
    if (newImage) {
      // 새로운 이미지가 존재할때만 업데이트
      uploadImage(newImage);
    }
    if (newId) {
      // 빈정보 제출 불가능, 이미지는 없어도 되지만 이름은 없으면 안되므로 페이지 변경을 updateNameIntro함수에서 진행함
      updateNameIntro(newId, newIntro);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <button className={styles.submitBtn} onClick={handleSubmit}>
          제출
        </button>
      </div>
    </>
  );
}
