import { useState } from "react";
import classes from "./AddUser.module.css";
import { validateData } from "../../service/service.js";
import Card from "../UI/Card";
import Button from "../UI/Button";

function AddUser({ setUsers, setShowModal }) {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    console.log(inputName, inputAge);
    const validate = validateData(inputName, inputAge);
    if (validate.pass) {
      setUsers((prev) => [{ name: inputName, age: inputAge }, ...prev]);
    } else {
      setShowModal({
        show: true,
        message: validate.message,
        title: validate.title,
      });
    }
    setInputAge("");
    setInputName("");
  };
  const onNameChangeInput = (e) => {
    setInputName(e.target.value);
    console.log(e.target.value);
  };
  const onAgeChangeInput = (e) => {
    setInputAge(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={onNameChangeInput}
          value={inputName}
        />
        <label>Age (Years)</label>
        <input
          htmlFor="age"
          type="number"
          onChange={onAgeChangeInput}
          value={inputAge}
        />
        <Button type="submit" id="age">
          Add User
        </Button>
      </form>
    </Card>
  );
}

export default AddUser;
