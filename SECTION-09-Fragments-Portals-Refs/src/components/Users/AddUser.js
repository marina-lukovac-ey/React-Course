import { useRef, useState } from "react";
import classes from "./AddUser.module.css";
import { validateData } from "../../service/service.js";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

function AddUser({ setUsers }) {
  const nameInputRef = useRef(); //creating uncontrolled components
  const ageInputRef = useRef();
  const [error, setError] = useState({ title: "", message: "" });

  const addUserHandler = (e) => {
    e.preventDefault();
    const inputName = nameInputRef.current.value;
    const inputAge = ageInputRef.current.value;
    const validate = validateData(inputName, inputAge);
    if (validate.pass) {
      setUsers((prev) => [{ name: inputName, age: inputAge }, ...prev]);
    } else {
      setError({
        message: validate.message,
        title: validate.title,
      });
    }
    //manipulating ref values, rarely
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const modalHandler = () => {
    setError({ title: "", message: "" });
  };
  return (
    <>
      {error.title && (
        <ErrorModal showModal={error} modalHandler={modalHandler} />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label>Age (Years)</label>
          <input htmlFor="age" type="number" ref={ageInputRef} />
          <Button type="submit" id="age">
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
