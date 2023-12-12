import NavItem from "./NavItem";
import { FaHome, FaEdit, FaComment, FaRegUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./FooterBar.module.css";

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

function FooterBar({ profileImage }) {
  const navItems = [
    { href: "/", icon: <FaHome />, text: "홈" },
    { href: "/write", icon: <FaEdit />, text: "글쓰기" },
    { href: "/chat", icon: <FaComment />, text: "채팅" },
    {
      href: "/mypage",
      icon: profileImage ? (
        <img src={profileImage} alt="Profile" />
      ) : (
        <FaRegUserCircle />
      ),
      text: "내정보",
    },
  ];

  return (
    <footer>
      <div className={styles.containerAll}></div>
      <ul className={styles.footerNav}>
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </footer>
  );
}

export default FooterBar;
