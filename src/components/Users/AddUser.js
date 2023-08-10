// @flow
import { React, useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import classes from "./AddUser.module.css";
import { ErrorModal } from "../UI/ErrorModal";

const defaultUserInput = {
  userName: "",
  age: "",
};
export const AddUser = (props) => {
  const [userInput, setUserInput] = useState(defaultUserInput);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    //.. level up userInput state

    if (
      userInput.userName.trim().length === 0 ||
      userInput.age.toString().trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      setIsValid(false);
      return;
    }
    if (+userInput.age < 1) {
      setError({
        title: "Invalid age value",
        message: "Please enter a valid age (greater than 1).",
      });
      setIsValid(false);
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

  const showModelHandler = () => {
    setIsValid(false);
  };
  const hideModelHandler = () => {
    setIsValid(true);
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onAccepted={hideModelHandler}
        />
      )}
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
    </div>
  );
};
