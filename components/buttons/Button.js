import styles from "./Button.module.scss";
import {useRouter} from "next/router";

export function Button(props) {

    const router = useRouter();
    let { num } = router.query;
    num = parseInt(num);

    return <div className={`${props.disabled ? styles.button_disabled : styles.button}`}  onClick={() => router.push(`/test/${num + 1}`)}>
        <div className={styles.button__text}>
            {props.text}
        </div>
    </div>
}