import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";
import Card from "./components/UI/Card";
import Container from "./components/UI/Container";

function App() {
  const [users, setUsers] = useState([]);
  const usersDataHandler = (data) => {
    setUsers([...users, data]);
  };

  return (
    <Container>
      <Card>
        <AddUsers onSubmitUsers={usersDataHandler} />
      </Card>

      <Card>
        <UserList usersData={users} />
      </Card>
    </Container>
  );
}

export default App;
