import { useState } from "react";

const useInput = (inputValid) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = inputValid(enteredValue);
  const valueIsInvalid = !valueIsValid && isTouched;

  const inputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const formReset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    valueIsValid,
    valueIsInvalid,
    inputHandler,
    blurHandler,
    formReset,
  };
};

export default useInput;
