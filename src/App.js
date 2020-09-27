import React, { useState } from "react";
import "./Styles/App.css";
import "./Styles/main.css";
import TodoList from "./Components/TodoList.js";
import AddTodo from "./Components/AddTodo.js";
let todoId = 1;
function App() {
  // this.state = {
  //   todoList: [],
  // };
  const [todoList, setTodoList] = useState([]);

  const handleSubmitApp = (text) => {
    const shallowCopy = [
      ...todoList,
      {
        text: text,
        todoId: todoId,
      },
    ];

    setTodoList(shallowCopy);
    console.log(todoId);
    todoId++;
  };

  const handleDelete = (id) => {
    const shallowList = todoList.filter((todo) => {
      return todo.todoId !== id;
    });
    setTodoList(shallowList);
  };

  return (
    <main className="App_wrapper">
      <header>
        <h1>ToDo List</h1>
      </header>

      <AddTodo handleSubmitAddTodo={handleSubmitApp} />
      <TodoList handleDelete={handleDelete} todoList={todoList} />
    </main>
  );
}

export default App;
