import React, { useState, useEffect, useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import styles from"./timer.module.scss";

export default function Timer() {
    const [minute, setMinuter] = useState(5);
    const funRef = useRef(null);
    const hourSeconds = 300;
    const renderTime = (dimension, time) => {
        return (
            <div className={styles.time_wrapper}>
                <div className={styles.time}>{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };

    useEffect(() => {
        if (minute !== 0) {
            funRef.current = setTimeout(() => {
                setMinuter(minute - 1);
            }, 60000);
        } else {
            clearTimeout(funRef.current);
        }
    });

    const timerProps = {
        isPlaying: true,
        size: 120,
        strokeWidth: 4
    };

    return (
        <div className="App">
            <CountdownCircleTimer
                {...timerProps}
                isPlaying
                initialRemainingTime={hourSeconds}
                duration={hourSeconds}
                colors={[["#00EAD9"]]}
                onComplete={() => console.log("times up")}
            >
                {({ elapsedTime }) => {
                    //console.log(hourSeconds - elapsedTime / 1000);
                    return renderTime("minute", minute );
                }}
            </CountdownCircleTimer>
        </div>
    );
}