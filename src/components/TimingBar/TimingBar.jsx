import styles from "./TimingBar.module.css";
import { useSelector } from "react-redux";

function TimingBar() {
  const barClass = useSelector((state) => state.timingBar);

  return <div className={`${styles.bar} ${styles[barClass.class]}`}></div>;
}

export default TimingBar;
