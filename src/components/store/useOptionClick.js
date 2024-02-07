import { useState } from "react";
import { useDispatch } from "react-redux";
import { timingBarActions } from "./timingBarSlice";
import { scoreActions } from "./scoreSlice";

const pendingTimer = 1000;
const checkingTimer = 2000;

const useOptionClick = (styles, option, chooseAnswer, rightAnswer, id) => {
  const [buttonBGColor, setButtonBGColor] = useState("");
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();

    setButtonBGColor(styles.pending);
    dispatch(timingBarActions.changeClass("pending"));
    //set option bg color to yellow for 1 sec

    const checking = option.key === rightAnswer;
    dispatch(
      scoreActions.computeScore({
        option: option.value,
        id: id,
        checking: checking,
      })
    );

    setTimeout(() => {
      //set option bg color to green/red for 2 sec
      checking
        ? setButtonBGColor(styles.correct)
        : setButtonBGColor(styles.wrong);
      dispatch(timingBarActions.changeClass(checking ? "correct" : "wrong"));

      setTimeout(() => {
        //reset bg to initial
        setButtonBGColor("");
        dispatch(timingBarActions.changeClass("progress"));
      }, checkingTimer);
    }, pendingTimer);

    chooseAnswer(checking);
  };

  return { buttonBGColor, handleClick };
};

export default useOptionClick;
