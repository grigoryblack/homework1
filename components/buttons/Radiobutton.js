import styles from "./Radiobutton.module.scss";
import React, {useState} from "react";

export function Radiobutton(props) {
    const [style, setStyle] = useState(styles.radiobutton);

    const changeStyle = () => {
      setStyle(styles.radiobutton_active);
    }

    return <div className={`${props.disabled ? styles.radiobutton_disabled : style}`} onClick={() => {changeStyle()}}>
        <div className={styles.radiobutton__frame}>
            <div className={styles.radiobutton__frame_radio}>
                <div className={styles.radiobutton__frame_radio_circle}>
                    <div className={styles.radiobutton__frame_radio_circle_dot}>
                    </div>
                </div>
            </div>
            <div className={styles.radiobutton__frame_text}>
                {props.text}
            </div>
        </div>
    </div>
}