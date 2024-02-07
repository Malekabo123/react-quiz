import styles from "./Overview.module.css";
import quizQuestions from "../store/quizQuestions";
import { questionsOrder } from "../QuestionCard/QuestionCard";
import { useSelector } from "react-redux";

function Overview() {
  //Options for answered questions (not the skipped ones)
  const answeredQuestionsOptions = useSelector((state) => state.score.options);

  //Questions in the same order as shown in the quiz
  const shownQuizQuestions = questionsOrder.map((index) =>
    quizQuestions.find((obj) => obj.id === index)
  );

  //Construct a new array to get the correctly answered wrong answered and skipped questions as well as the selected answer
  const overviewQuestions = shownQuizQuestions.map((originalQuestion) => {
    //find the id of the answered question in the original questions
    const answeredQuestion = answeredQuestionsOptions.find(
      (answeredQuestion) => answeredQuestion.id === originalQuestion.id
    );

    //if skipped => null , else => selected answer
    let answer = null;
    if (answeredQuestion) {
      answer = answeredQuestion.answer;
    }

    const selectedAnswerIsCorrect =
      originalQuestion.options[originalQuestion.rightAnswer] === answer;

    return {
      id: originalQuestion.id,
      question: originalQuestion.question,
      answer: answer,
      rightAnswer: selectedAnswerIsCorrect,
    };
  });

  let answerClass;

  return (
    <ul className={styles.overview}>
      {overviewQuestions.map((question, index) => {
        if (question.rightAnswer) {
          answerClass = styles.correct;
        } else if (!question.rightAnswer) {
          answerClass = styles.wrong;
        }
        if (!question.answer) {
          answerClass = styles.skipped;
        }

        return (
          <li className={styles.overviewItem} key={index}>
            <span>{index + 1}</span>
            <p>{question.question}</p>
            <p className={`${styles.answerOverview} ${answerClass}`}>
              {question.answer ?? "Skipped"}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default Overview;
