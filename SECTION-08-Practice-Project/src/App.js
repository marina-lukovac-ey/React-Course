import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import ErrorModal from "./components/Users/ErrorModal";
import UsersList from "./components/DisplayUsers/UsersList";

function App() {
  const [users, setUsers] = useState([{ name: "Max", age: 31 }]);
  const [showModal, setShowModal] = useState({
    show: false,
    message: "",
  });

  return (
    <div>
      {showModal.show && (
        <ErrorModal message={showModal.message} setShowModal={setShowModal} />
      )}
      <AddUser setUsers={setUsers} setShowModal={setShowModal} />
      {users.length && <UsersList users={users} />}
    </div>
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
