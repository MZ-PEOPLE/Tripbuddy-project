import ChatInfo from "./ChatInfo"
import style from "./MenuDetail.module.css"

function MenuDetail({ bar, setBar }) {
    return (
        bar && (
            <div className={style.frame}>
                <div>
                    <ChatInfo className={style.exitMenu} />
                </div>
            </div>
        )
    )
}

export default MenuDetail
