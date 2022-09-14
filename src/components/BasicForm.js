import useInput from "./hooks/input-hook";

const BasicForm = (props) => {
  const {
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    valueIsInvalid: nameIsInvalid,
    blurHandler: nameBlurHandler,
    inputHandler: nameInputHandler,
    formReset: nameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    enteredValue: enteredLName,
    valueIsValid: lnameIsValid,
    valueIsInvalid: lnameIsInvalid,
    blurHandler: lnameBlurHandler,
    inputHandler: lnameInputHandler,
    formReset: lnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    valueIsInvalid: emailIsInvalid,
    blurHandler: emailBlurHandler,
    inputHandler: emailInputHandler,
    formReset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid && !emailIsValid && !lnameIsValid) return;

    nameReset();
    resetEmail();
    lnameReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div
          className={nameIsInvalid ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="name">First Name</label>
          <input
            onChange={nameInputHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            type="text"
            id="name"
          />
        </div>
        <div
          className={lnameIsInvalid ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lnameInputHandler}
            onBlur={lnameBlurHandler}
            value={enteredLName}
          />
        </div>
      </div>
      <div className={emailIsInvalid ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
