import React from "react";
import Link from "next/link";
import { FaHome, FaEdit, FaComment, FaUser } from "react-icons/fa";
import styles from "./FooterBar.module.css"; // CSS 모듈 import

function FooterBar() {
  return (
    <footer>
      <div className={styles.containerAll}></div>
      <ul className={styles.footerNav}>
        <li>
          <Link href="/">
            <div>
              <FaHome /> 홈
            </div>
          </Link>
        </li>
        <li>
          <Link href="/write">
            <div>
              <FaEdit /> 글쓰기
            </div>
          </Link>
        </li>
        <li>
          <Link href="/chat">
            <div>
              <FaComment /> 채팅
            </div>
          </Link>
        </li>
        <li>
          <Link href="/mypage">
            <div>
              <FaUser /> 마이페이지
            </div>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default FooterBar;