import styles from "./ContentNavbar.module.css";

const ContentNavbar = ({ buttonList, selectedButton, onButtonClick }) => (
  <div className={styles.content_navbar}>
    {buttonList.map((button) => (
      <div className={styles.content} key={button.id}>
        <button
          className={`${styles.content_item} ${
            selectedButton === button.button_name ? styles.content_border : ""
          }`}
          onClick={() => onButtonClick(button)}
        >
          {button.button_name}
        </button>
      </div>
    ))}
  </div>
);

export default ContentNavbar;
