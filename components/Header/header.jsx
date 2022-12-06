import React from "react";
import styles from './header.module.scss';


function Header(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.container_element_position}>
                    <div className={styles.aside_menu}>
                        <div className={styles.item_icon}></div>
                    </div>
                    <div className={styles.statistical_components}>
                        <div className={styles.timer}></div>
                        <div className={styles.number_question}></div>
                    </div>
                    <div className={styles.header_title}> Русь и золотая орда</div>
                    <a href=""><div className={styles.header_logo}></div></a>
                </div>
            </div>
        </>
    )
}

export default Header;