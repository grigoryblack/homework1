import styles from "./Test.module.scss";
import React, {useState} from "react";
import {Radiobutton} from "../buttons/Radiobutton";
import {Button} from "../buttons/Button";
import {useRouter} from "next/router";
import bStyles from "../../styles/Radiobutton.module.scss";
import aStyles from "../../styles/Button.module.scss";

export function Test({ test }) {

    const router = useRouter();
    let { num } = router.query;
    num = parseInt(num);

    const example = {
        title: "Пример теста",
        timeLimit: 3600,
        questions: [
            {text: "2 + 2",
                timeLimit: 60,
                type: "radio",
                answers: [
                    {text: "6", valid: false},
                    {text: "8", valid: false},
                    {text: "4", valid: true},
                    {text: "3", valid: false},
                ]
            }
        ]
    };

    let array = [];
    for (let i = 0; i < test.questions.length; i++) {
        array.push(i + 1);
    }

    const [answer, setAnswer] = useState("-1");

    const [answerArray, pushArray] = useState([]);

    function rememberRes() {
        pushArray(
            [
                ...answerArray,
                answer
            ]
        )
        document.getElementById("radio1").checked=false
        document.getElementById("radio2").checked=false
        document.getElementById("radio3").checked=false
        document.getElementById("radio4").checked=false
        setAnswer("-1")
    }

    async function sendRes() {
        console.log(answerArray)
        const data = Object.assign({}, answerArray)
        const response = await fetch("/api/sendResult",
            {
                method: "POST",
                body: JSON.stringify(data)
            });
    }


    function checkAnswers() {
        let scores = 0
        for (let i = 0; i < answerArray.length; i++) {

            if (answerArray[i] !== "-1" && test.questions[i].answers[answerArray[i]].valid) {
                scores++;
                console.log(scores)
                console.log(i)
            }
        }
        return scores
    }

    let isCorrect = true;
    let renderTest = [];
    if (num > array[array.length - 1]) isCorrect = false;
    if (isCorrect) {
        renderTest = <div className={styles.test_questframe}>
            <div className={styles.test_questframe_text}>
                {test.questions[num - 1].text}
            </div>
            <div className={styles.test_questframe_answerframe}>
                <div className={bStyles.radiobutton}>
                    <input type={"radio"} id={"radio1"} name={"radios"} onClick={() => setAnswer("0")}/>
                    <label htmlFor={"radio1"}>
                        <div className={bStyles.radiobutton__frame}>
                            <div className={bStyles.radiobutton__frame_radio}>
                                <div className={bStyles.radiobutton__frame_radio_circle}>
                                    <div className={bStyles.radiobutton__frame_radio_circle_dot}>
                                    </div>
                                </div>
                            </div>
                            <div className={bStyles.radiobutton__frame_text}>
                                {test.questions[num - 1].answers[0].text}
                            </div>
                        </div>
                    </label>

                    <input type={"radio"} id={"radio2"} name={"radios"} onClick={() => setAnswer("1")}/>
                    <label htmlFor={"radio2"}>
                        <div className={bStyles.radiobutton__frame}>
                            <div className={bStyles.radiobutton__frame_radio}>
                                <div className={bStyles.radiobutton__frame_radio_circle}>
                                    <div className={bStyles.radiobutton__frame_radio_circle_dot}>
                                    </div>
                                </div>
                            </div>
                            <div className={bStyles.radiobutton__frame_text}>
                                {test.questions[num - 1].answers[1].text}
                            </div>
                        </div>
                    </label>

                    <input type={"radio"} id={"radio3"} name={"radios"} onClick={() => setAnswer("2")}/>
                    <label htmlFor={"radio3"}>
                        <div className={bStyles.radiobutton__frame}>
                            <div className={bStyles.radiobutton__frame_radio}>
                                <div className={bStyles.radiobutton__frame_radio_circle}>
                                    <div className={bStyles.radiobutton__frame_radio_circle_dot}>
                                    </div>
                                </div>
                            </div>
                            <div className={bStyles.radiobutton__frame_text}>
                                {test.questions[num - 1].answers[2].text}
                            </div>
                        </div>
                    </label>

                    <input type={"radio"} id={"radio4"} name={"radios"} onClick={() => setAnswer("3")}/>
                    <label htmlFor={"radio4"}>
                        <div className={bStyles.radiobutton__frame}>
                            <div className={bStyles.radiobutton__frame_radio}>
                                <div className={bStyles.radiobutton__frame_radio_circle}>
                                    <div className={bStyles.radiobutton__frame_radio_circle_dot}>
                                    </div>
                                </div>
                            </div>
                            <div className={bStyles.radiobutton__frame_text}>
                                {test.questions[num - 1].answers[3].text}
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <div className={styles.test_questframe_buttonframe}>
                <div className={styles.test_questframe_buttonframe_skipbutton}>Пропустить</div>
                <button className={aStyles.button} onClick={() => {
                    router.push(`/test/${num + 1}`); rememberRes()
                }}>ОТВЕТИТЬ</button>
            </div>
        </div>
    } else {
        sendRes();
        renderTest =
            <div className={styles.test_questframe}>
                <div className={styles.test_questframe_text}>
                    {checkAnswers()}/{test.questions.length}
                </div>
            </div>
    }

    return !num ? <></> :
        <div className={styles.test}>

        <div className={styles.test_count}>
            <div className={styles.test_count_icon}></div>
            <div className={styles.test_count_numframe}>
                    {array.map( (number, index) => <div className={styles.test_count_numframe_numbers} key={index} onClick={() => router.push(`/test/${number}`)}>{number}</div>)}
            </div>
        </div>

        <div className={styles.test_header}>
            <div className={styles.test_header_counter}>
                <div className={styles.test_header_counter_icon}></div>
                <div className={styles.test_header_counter_num}>{num}/{test.questions.length}</div>
            </div>

            <div className={styles.test_header_timer}>
                <div className={styles.test_header_timer_icon}></div>
                <div className={styles.test_header_timer_num}>60:00</div>
            </div>

            <div className={styles.test_header_name}>{test.title}</div>
        </div>

            {renderTest}
    </div>
}