import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import ErrorModal from "./components/Users/ErrorModal";
import UsersList from "./components/DisplayUsers/UsersList";

function App() {
  const [users, setUsers] = useState([{ name: "Max", age: 31 }]);

  return (
    <React.Fragment>
      <AddUser setUsers={setUsers} />
      {users.length && <UsersList users={users} />}
    </React.Fragment>
  );
}

export default App;

/*
function App() {
  
  return (
    <div>

    </div>
  );
}

export default App;
*/
