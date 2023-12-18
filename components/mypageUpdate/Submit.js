import styles from "./Submit.module.css";
import { useRouter } from "next/router";

export default function Submit({ newId, newIntro }) {
  const router = useRouter();

  const handleSubmit = async () => {
    console.log("제출하는 버튼", newId, newIntro);
    const token = localStorage.getItem("token");
    console.log(token);

    const res = await fetch("/api/userUpdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: newId,
        about: newIntro,
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
