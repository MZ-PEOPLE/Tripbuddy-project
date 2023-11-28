import styles from "./NavBar.module.css";

const Topbar = ({ leftContent, middleContent, rightContent, next }) => {
  return (
    <nav>
      <div className={styles.Header}>
        <div className={styles.left}>{leftContent}</div>
        <div className={styles.middle}>{middleContent}</div>
        <div className={styles.right}>{rightContent}</div>
      </div>
      {next}
    </nav>
  );
};

export default Topbar;
