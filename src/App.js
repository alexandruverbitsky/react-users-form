import React, { useState } from 'react';
import { AddUser } from './components/Users/AddUser';
import { UsersList } from './components/Users/UsersList';


function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (user) => {
    console.log(user);
    setUserList((prev) => { 
      return [...prev, user];
    })
    
   };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
