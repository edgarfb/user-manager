import React from "react";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button/Button";
const AddUsers = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={AddUserHandler} className={classes.input}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="text" />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUsers;
