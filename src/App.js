import React, { useState } from "react";
import UsersAdd from "./components/UsersAdd/UsersAdd";
import UsersList from "./components/UsersList/UsersList";

function App() {
  // Dummy data this will be replaced by the user´s inputs
  const [users, setUsers] = useState([
    { name: "Julieta", age: 7 },
    { name: "Luciana", age: 34 },
    { name: "Edgar", age: 33 },
    { name: "Carpo", age: 56 },
  ]);

  const addNewUserHandler = () => {
    console.log("hi");
  };

  return (
    <div>
      <UsersAdd />
      <UsersList users={users} />
    </div>
  );
}

export default App;
