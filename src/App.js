import React, { Component } from 'react';
import './Styles/App.css';
import './Styles/main.css';
import TodoList from './Components/TodoList.js'
import AddTodo from './Components/AddTodo.js'

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      todoList: [],
    }
  }

  todoId = 1;

  handleSubmit = (text) => {

    this.setState({
      todoList: [{
        text: text,
        todoId: this.todoId,
      }, ...this.state.todoList],
    })
    this.todoId++
  }

  handleDelete = (id) => {
    const shallowList = this.state.todoList.filter((todo) => {
      return (todo.todoId !== id)
    })
    this.setState({
      todoList: [...shallowList]
    })
  }

  render() {

    return (

      <main className='App_wrapper'>
        <header><h1>ToDo List</h1></header>

        <AddTodo handleSubmit={this.handleSubmit} />
        <TodoList handleDelete={this.handleDelete} todoList={this.state.todoList} />


      </main>
    )
  }
}

export default App;
