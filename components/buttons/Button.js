import styles from "./Button.module.scss";

export function Button(props) {
    console.log(props)
    return <div className={`${props.disabled ? styles.button_disabled : styles.button}`}>
        <div className={styles.button__text}>
            {props.text}
        </div>
    </div>
}