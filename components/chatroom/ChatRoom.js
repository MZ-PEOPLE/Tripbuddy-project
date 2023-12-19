import styles from "./ChatRoom.module.css";


const chatDataList = [
	{
		userid: 3333,
		profileId: '칼와와',
		profileImg: '/img/profile_test_wawa.png',
		chatTime: '2:00',
		chatContext: '반가워요 wawa입니다반가워요 wawa입니다반가워요 wawa입니다반가워요 wawa입니다',
		unreadCount: '',
	},
	{
		userid: 2,
		profileImg: '/img/profile_test_dulgi.png',
		profileId: '구국',
		chatTime: '13:40',
		chatContext: '구구구구구구구구구구구구구구구구',
		unreadCount: 5
	},
	{
		userid: 3,
		profileImg: '/img/profile_test.png',
		profileId: '치와와',
		chatTime: '00:00',
		chatContext: '왈.',
		unreadCount: 10,
	} //unreadCount0이고 읽으면 빨간 알람 X
];

export default function ChatListComponent() {


	return (
		<div className={styles.chatList}>
			{chatDataList.map((chatData) => (
				<div key={chatData.id} className={styles.userFrame}>
					<img className={styles.profileImg} src={chatData.profileImg} alt="Profile" />
					<div className={styles.chatContextFrame}>
						<top className={styles.topFrame}>
							<div className={styles.profileId}>{chatData.profileId}</div>
						</top>
						<bottom className={styles.bottomFrame}>
							<div className={styles.chatContext}>{chatData.chatContext}</div>
							<div className={styles.chatInfo}>
								<div className={styles.infoFrame}>
									<div className={styles.chatTime}>{chatData.chatTime}</div>
									<div className={styles.unreadCount}>{chatData.unreadCount}</div>
								</div>
							</div>
						</bottom>
					</div>
				</div>
			))}
		</div>
	);
}
