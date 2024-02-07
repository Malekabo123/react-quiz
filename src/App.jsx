import { useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import ResultCard from "./components/ResultCard/ResultCard";

function App() {
  const [quizEnd, setQuizEnd] = useState(false);

  const endOfQuiz = () => {
    setQuizEnd(true);
  };

  return (
    <>
      <h1 id="title">REACT QUIZ</h1>
      {!quizEnd && <QuestionCard endOfQuiz={endOfQuiz} />}
      {quizEnd && <ResultCard />}
    </>
  );
}

export default App;
