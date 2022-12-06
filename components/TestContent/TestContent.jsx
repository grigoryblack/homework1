import React from "react";
import Timer from "../Header/timer/timer";
import styles from "./TestContent.module.scss";
import {Button} from "../buttons/Button";
import {Radiobutton} from "../buttons/Radiobutton";

function TestContent(){


    const router = useRouter();
    const { num } = router.query;

    const test_question = {
        title: "Тест №1",
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
            },
            {text: "10 + 5",
                timeLimit: 60,
                type: "radio",
                answers: [
                    {text: "20", valid: false},
                    {text: "25", valid: false},
                    {text: "15", valid: true},
                    {text: "17", valid: false},
                ]
            },
            {text: "3 + 7",
                timeLimit: 60,
                type: "radio",
                answers: [
                    {text: "8", valid: false},
                    {text: "6", valid: false},
                    {text: "10", valid: true},
                    {text: "12", valid: false},
                ]
            }
        ]
    }

    let array = [];
    for (let i = 0; i < test.questions.length; i++) {
        array.push(i + 1);
    }

    return !num ? <></> :(
        <>
            <div className={styles.contaner_position}>
                <div className={styles.timer_position}>
                    <Timer/>
                </div>
                <div className={styles.question_container}>
                    {test_question.questions[0].text}
                </div>
                <div className={styles.answer_container}>
                    <div className={styles.test_questframe_answerframe}>
                        <Radiobutton text={test.questions[num - 1].answers[0].text}/>
                        <Radiobutton text={test.questions[num - 1].answers[1].text}/>
                        <Radiobutton text={test.questions[num - 1].answers[2].text}/>
                        <Radiobutton text={test.questions[num - 1].answers[3].text}/>
                    </div>
                    <div className={styles.test_questframe_buttonframe}>
                        <div className={styles.test_questframe_buttonframe_button}>Пропустить</div>
                        <Button text={'ОТВЕТИТЬ'} onClick={() => router.push('/test/2')}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestContent;