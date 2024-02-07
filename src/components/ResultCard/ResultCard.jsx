import Overview from "../Overview/Overview";
import ResultStats from "../ResultStats/ResultStats";
import styles from "./ResultCard.module.css";

function ResultCard() {
  return (
    <div className={styles.resultCard}>
      <h1>QUIZ COMPLETED!</h1>
      <ResultStats />

      <div className={styles.border}></div>

      <Overview />
    </div>
  );
}

export default ResultCard;
