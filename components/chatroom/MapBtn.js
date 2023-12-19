import React from "react";
import styles from "./MapBtn.module.css";
import { HiMiniMapPin } from "react-icons/hi2";
export default function MapBtn() {
    return (
        <div>
            <button className={styles.mapIcon}><HiMiniMapPin /></button>
        </div >
    );

}