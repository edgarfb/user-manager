import React, { useState } from "react";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button/Button";
const AddUsers = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();
    console.log(userName, userAge);
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  return (
    <form onSubmit={AddUserHandler} className={classes.input}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={userNameHandler} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="text" onChange={userAgeHandler} />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUsers;
