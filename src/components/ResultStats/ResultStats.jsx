import styles from "./ResultStats.module.css";
import { useSelector } from "react-redux";
import quizQuestions from "../store/quizQuestions";
const whole = quizQuestions.length;

function ResultStats() {
  const score = useSelector((state) => state.score);

  //stats percentage
  const skipped = ((whole - score.wrong - score.score) / whole) * 100;
  const rightAnswered = (score.score / whole) * 100;
  const wrongAnswered = (score.wrong / whole) * 100;

  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <div>{skipped}%</div>
        <div>Skipped</div>
      </div>
      <div className={styles.column}>
        <div>{rightAnswered}%</div>
        <div>Answered Correctly</div>
      </div>
      <div className={styles.column}>
        <div>{wrongAnswered}%</div>
        <div>Answered Incorrectly</div>
      </div>
    </div>
  );
}

export default ResultStats;
