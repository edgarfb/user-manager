import React, { useState } from "react";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Name",
        content: "Need to enter a valid name.",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        content: "Need to enter a valid age (> 0).",
      });
      return;
    }
    props.onSubmitUsers({ userAge, userName, id: Math.random() });
    setUserName("");
    setUserAge("");
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onError={errorHandler}
        />
      )}
      <form onSubmit={AddUserHandler} className={classes.input}>
        <label htmlFor="username">Username</label>
        <input
          autoFocus
          id="username"
          type="text"
          onChange={userNameHandler}
          value={userName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="text" onChange={userAgeHandler} value={userAge} />
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default AddUsers;
