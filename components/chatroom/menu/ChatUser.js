import styles from "./ChatUser.module.css"
import Link from "next/link";
import CheckBox from "./CheckBox";


export default function ChatUser() {
    const chatDataList = [
        {
            profileId: '칼와와',
            profileImg: '/img/profile_test_wawa.png',
        },
        {

            profileImg: '/img/profile_test_dulgi.png',
            profileId: '구국',

        },
        {
            profileImg: '/img/profile_test.png',
            profileId: '치와와',

        } //unreadCount0이고 읽으면 빨간 알람 X
    ];


    return (
        <chatlist>
            <div className={styles.chatList}>
                {chatDataList.map((chatData) => (
                    <div key={chatData.id} className={styles.userFrame}>
                        <Link href="/">
                            <img className={styles.profileImg} src={chatData.profileImg} alt="Profile" />
                        </Link>
                        <div className={styles.chatContextFrame}>
                            <div className={styles.profileId}>{chatData.profileId}</div>
                        </div>
                        <div className={styles.check}> <CheckBox /></div>
                    </div>
                ))}
            </div>
        </chatlist >
    );
}

