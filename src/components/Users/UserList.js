import React from "react";
import css from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div>
      {props.usersData.map((user) => (
        <li
          className={css.liItem}
          key={user.id}
        >{`${user.userName} (${user.userAge} years)`}</li>
      ))}
    </div>
  );
};

export default UserList;
