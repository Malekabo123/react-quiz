import styles from "./Option.module.css";
import useOptionClick from "../store/useOptionClick";

function Option({ option, chooseAnswer, rightAnswer, disableClicking, id }) {
  const { buttonBGColor, handleClick } = useOptionClick(
    styles,
    option,
    chooseAnswer,
    rightAnswer,
    id
  );

  return (
    <button
      className={`${styles.option}  ${buttonBGColor}`}
      onClick={handleClick}
      disabled={disableClicking}
    >
      {option.value}
    </button>
  );
}

export default Option;
