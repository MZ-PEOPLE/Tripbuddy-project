import React from "react";
import styles from "./MapBtn.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function MapBtn() {
    return (
        <div>
            <button className={styles.mapIcon}><FaMapMarkerAlt /></button>
        </div >
    );

}