import Option from "../Option/Option";
import styles from "./Question.module.css";

function Question(props) {
  //splitting the option to keys and values
  const optionsArray = Object.entries(props.question.options).map(
    ([key, value]) => ({ key, value })
  );

  return (
    <div className={styles.question}>
      <h3 className={styles.questionTitle}>{props.question.question}</h3>
      <ul className={styles.options}>
        {optionsArray.map((option, index) => {
          return (
            <Option
              option={option}
              key={index}
              chooseAnswer={props.chooseAnswer}
              rightAnswer={props.question.rightAnswer}
              disableClicking={props.disableClicking}
              id={props.question.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
