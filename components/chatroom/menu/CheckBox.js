import { useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { IoIosCheckboxOutline } from 'react-icons/io';
import styles from "./CheckBox.module.css";
const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.checkBox} onClick={handleCheckBoxClick}>
            {isChecked ? <IoIosCheckboxOutline /> : <MdCheckBoxOutlineBlank />}
        </div>
    );
};

export default CheckBox;
