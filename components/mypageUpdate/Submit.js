import styles from "./Submit.module.css";

export default function Submit({ newId, newIntro }) {
  const handleSubmit = async () => {
    console.log("제출하는 버튼", newId, newIntro);
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
