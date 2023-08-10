// @flow
import { React, useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import classes from "./AddUser.module.css";

const defaultUserInput = {
  userName: "",
  age: "",
};
export const AddUser = (props) => {
  const [userInput, setUserInput] = useState(defaultUserInput);

  const addUserHandler = (event) => {
    event.preventDefault();
    //.. level up userInput state

    if (
      userInput.userName.trim().length === 0 ||
      userInput.age.toString().trim().length === 0
    ) {
      return;
    }
    if (+userInput.age < 1) {
      return;
    }
      
      console.log(userInput);
      
    props.onAddUser(userInput);  
    setUserInput(defaultUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [input]: value,
      };
    });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input
          onChange={(event) =>
            inputChangeHandler("userName", event.target.value)
          }
          id="userName"
          type="text"
          value={userInput.userName}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          onChange={(event) => inputChangeHandler("age", event.target.value)}
          id="age"
          type="number"
          value={userInput.age}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
