// @flow
import { React, useState } from "react";

export const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    userName: "",
    age: 0,
  });

  const addUserHandler = (event) => {
    event.preventDefault();
    //.. level up userInput state
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
    <form onSubmit={addUserHandler}>
      <label htmlFor="userName">Username</label>
      <input
        onChange={(event) => inputChangeHandler("userName", event.target.value)}
        id="userName"
        type="text"
        value={userInput.userName}
      />

      <label htmlFor="age">Age</label>
      <input
        onChange={(event) => inputChangeHandler("age", event.target.value)}
        id="age"
        type="number"
        value={userInput.age}
      />

      <button type="submit">Add User</button>
    </form>
  );
};
