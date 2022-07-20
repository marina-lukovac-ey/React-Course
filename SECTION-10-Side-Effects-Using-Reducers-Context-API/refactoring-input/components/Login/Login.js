import React, { useEffect, useState, useReducer, useContext } from "react";
import { emailReducer, passwordReducer } from "../../service";
import classes from "./Login.module.css";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../store/auth-context";

const Login = (props) => {
  //since formIsValid is related, might have an idea to put it together with email and password reducer, but it is not optimal
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  const ctx = useContext(AuthContext);
  // const [passwordState, dispatchPassword] = useReducer();

  //solution to to many revalidation: object destructuring,
  //giving state slice a separate name
  //this is also useful whenever we want to run useEffect only on one state property change
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    //debouncing method: checking only when user makes a pause
    const timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
      console.log("checking form validity");
    }, 500);
    return () => {
      //cleanup function, everytime a useEffect runs,
      //except for the first...
      //Runs before every time a useEffect is reecexuted, and before it is removed...
      console.log("cleanup");
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" }); //INPUT LOST FOCUS
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailIsValid}
          label="E-mail"
          id="email"
          type="email"
          value={emailState.value}
          onChangeHandler={emailChangeHandler}
          onBlurHandler={validateEmailHandler}
        />
        <Input
          isValid={passwordIsValid}
          label="Password"
          id="password"
          type="password"
          value={passwordState.value}
          onChangeHandler={passwordChangeHandler}
          onBlurHandler={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
