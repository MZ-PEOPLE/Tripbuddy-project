import styles from "./UserProfile.module.css";

function userProfile() {
  return (
    <div>
      <div className={styles.userProfile}>
        <div className={styles.profileInfor}>
          <div className={styles.profilePic}>
            <img
              className={styles.profilePic2}
              src="https://trboard.game.onstove.com/Data/TR/20170728/19/636368659390474572.jpg"
            />
          </div>
          <div className={styles.profileInforDetail}>
            <div className={styles.profileName}>치와와와와 님</div>
            <div className={styles.profileAgeGender}>
              <div className={styles.profileAge}>20대</div>
              <div className={styles.profileGender}>중성화</div>
            </div>
          </div>
        </div>

        <div className={styles.profileDescrip}>
          왈왈왈! 왈!왈왈왈! 왈!왈왈왈! 왈!왈왈왈! 왈!왈왈왈! 왈!왈왈왈!
          왈!왈왈왈!
        </div>
      </div>

      <div className={styles.profile_modify}>
        <button type="button" className={styles.profile_button}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/747/747376.png"
            alt="아이콘 자리"
            className={styles.profile_modify_icon}
          />
          <div className={styles.profile_modify_text}>프로필 수정</div>
        </button>
      </div>

      <div>
        <div className={styles.profile_bottom_buttons}>
          <button className={styles.profile_bottom_post_button}>게시물</button>
          <button className={styles.profile_bottom_together_button}>
            동행
          </button>
          <button className={styles.profile_bottom_tripReview_button}>
            여행 후기
          </button>
        </div>

        <div className={styles.profile_bottom_post_button_contents}>
          {" "}
          플렉스는 맞지만 한줄에 두개만
          <div>
            {" "}
            부모에 포지션 릴레튀뷔~에다가 자식에게 픽스{" "}
            <button>
              <img src="" alt="괌 사진 1" />
            </button>
            <div>
              <div>아이콘</div>
              <div>텍스트</div>
              <div>괌 텍스트 박스</div>
            </div>
          </div>
          <div>
            {" "}
            <button>
              <img src="" alt="유럽 사진 1" />
            </button>
            <div>
              <div>아이콘</div>
              <div>텍스트</div>
              <div>괌 텍스트 박스</div>
            </div>
          </div>
        </div>

        <div className={styles.profile_bottom_together_button_contents}>
          <div>
            <button>
              <img src="" alt="괌 사진 1" />
            </button>
            <div>
              <div>아이콘</div>
              <div>텍스트</div>
              <div>괌 텍스트 박스</div>
            </div>
          </div>
          <div>
            <button>
              <img src="" alt="유럽 사진 1" />
            </button>
            <div>
              <div>아이콘</div>
              <div>텍스트</div>
              <div>괌 텍스트 박스</div>
            </div>
          </div>
        </div>

        <div className={styles.profile_bottom_tripReview_button_contents}>
          <div>
            <p>00님이 작성</p>
            <img src="" alt="평점" />
          </div>
          <div>
            <p>적당히 별로~</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default userProfile;
