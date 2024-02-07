import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { timingBarActions } from "../store/timingBarSlice";
import { useSelector } from "react-redux";
import styles from "./QuestionCard.module.css";
import Question from "../Question/Question";
import TimingBar from "../TimingBar/TimingBar";
import randNums from "../store/shuffle";
import quizQuestions from "../store/quizQuestions";

export const questionsOrder = [...randNums];

const initialTimer = 10000;
const pendingTimer = 1000;
const checkingTimer = 2000;

function QuestionCard({ endOfQuiz }) {
  const [questionNumber, setQuestionNumber] = useState(randNums[0]);
  const [timer, setTimer] = useState(initialTimer);
  const [disableClicking, setDisableClicking] = useState(false);
  const dispatch = useDispatch();

  const barClass = useSelector((state) => state.timingBar);

  useEffect(() => {
    const timeOut = setInterval(() => {
      if (timer === initialTimer) {
        //run interval just for question time not pending and checking time
        randNums.shift();
        if (randNums.length > 0) {
          setQuestionNumber(randNums[0]);
          dispatch(
            //change bar class to reactivate the bar animation
            timingBarActions.changeClass(
              barClass.class === "progress" ? "sameProgress" : "progress"
            )
          );
        } else {
          endOfQuiz();
          clearInterval(timeOut);
        }
      } else {
        clearInterval(timeOut);
      }
    }, timer);

    return () => {
      clearInterval(timeOut);
    };
  }, [timer, barClass.class]);

  const chooseAnswer = () => {
    setDisableClicking(true);

    setTimeout(() => {
      setTimeout(() => {
        //return initial values for clicking and interval timer
        randNums.shift();
        if (randNums.length > 0) {
          setQuestionNumber(randNums[0]);
        } else {
          endOfQuiz();
        }

        setDisableClicking(false);
        setTimer(initialTimer);
      }, checkingTimer);
    }, pendingTimer);

    setTimer(pendingTimer); //stop the interval when an option is clicked
  };

  return (
    <div className={styles.questionCard}>
      <TimingBar />
      <Question
        question={quizQuestions[questionNumber]}
        chooseAnswer={chooseAnswer}
        disableClicking={disableClicking}
      />
    </div>
  );
}

export default QuestionCard;
