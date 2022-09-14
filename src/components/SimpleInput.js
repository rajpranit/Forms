import { useState } from "react";
import useInput from "../components/hooks/input-hook";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    valueIsInvalid: nameIsInvalid,
    inputHandler: nameInputHandler,
    blurHandler: nameBlurHandler,
    formReset,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredInputEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  // let formIsValid = false;
  // if (enteredEmailIsValid && nameIsValid) {
  //   formIsValid = true;
  // }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    console.log(enteredEmailIsInvalid);

    if (!nameIsValid || enteredEmailIsInvalid) {
      return;
    }
    formReset();

    setEnteredEmail(" ");
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameIsInvalid ? "form-control invalid" : "form-control "}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameBlurHandler}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputHandler}
        />
        {nameIsInvalid && <p>Input field should not be empty!</p>}
      </div>
      <div
        className={
          enteredEmailIsInvalid ? "form-control invalid" : "form-control "
        }
      >
        <label htmlFor="email">Your Email</label>
        <input
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          type="text"
          id="email"
          onChange={enteredInputEmailHandler}
        />
        {enteredEmailIsInvalid && <p>Enter a valid Email Address</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
