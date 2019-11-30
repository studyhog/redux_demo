import React from 'react';
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import AddUser from "./containers/AddUser";
import VisibleTodoList from "./containers/VisibleTodoList";
import UserListView from "./components/UserList";


const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <UserListView />
      <AddUser />
    </div>
);

export default App