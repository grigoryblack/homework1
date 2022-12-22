import styles from "./Checkbutton.module.scss";
import React from "react";
import dotPic from "../img/dot.svg";
import Image from "next/image";

export function Checkbutton(props) {
    const [style, setStyle] = React.useState(styles.checkbutton);

    const changeStyle = () => {
        setStyle(styles.checkbutton_active);
    }

    return <div className={`${props.disabled ? styles.checkbutton_disabled : style}`} onClick={changeStyle}>
        <div className={styles.checkbutton__frame}>
            <div className={styles.checkbutton__frame_check}>
                <div className={styles.checkbutton__frame_check_out}>
                    <Image className={styles.checkbutton__frame_check_out_dot} src={dotPic} layout={"fill"}/>
                </div>
            </div>
            <div className={styles.checkbutton__frame_text}>
                {props.text}
            </div>
        </div>
    </div>
}