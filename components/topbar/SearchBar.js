import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className={styles.contentBox}>
      <div className={styles.searchBox}>
        <FaSearch className={styles.icon} />
        <input type="text" placeholder="검색어를 입력하세요" className={styles.searchBar} />
      </div>
    </div>
  );
};

export default SearchBar;
