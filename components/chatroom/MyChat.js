import styles from "./MyChat.module.css";


export default function MyChat() {
    const userChat = [
        {
            id: 1,
            chatTime: '13:30',
            chatContext: '안녕하세요',
            unreadCount: 10,
        }
    ]

    return (
        <div>
            <div className={styles.chatList}>
                {userChat.map((userChatData) => (
                    <div key={userChatData.id} className={styles.chatFrame}>
                        <div className={styles.userChatInfo}>
                            <div className={styles.unreadCount}>{userChatData.unreadCount}</div>
                            <div className={styles.chatTime}>{userChatData.chatTime}</div>
                        </div>
                        <div className={styles.contextFrame}>
                            <div className={styles.userChatContext}>{userChatData.chatContext}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}