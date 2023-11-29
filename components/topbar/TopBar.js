import styles from "./TopBar.module.css";
import SearchBar from "./SearchBar";

const Topbar = ({ leftContent, middleContent, rightContent, searchBar = false }) => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={`${styles.Header} ${searchBar ? styles.Header_searchTrue : null}`}>
          <div className={styles.Header_bar}>
            <div className={styles.left}>{leftContent}</div>
            <div className={styles.middle}>{middleContent}</div>
            <div className={styles.right}>{rightContent}</div>
          </div>
          {searchBar ? <SearchBar /> : null}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
