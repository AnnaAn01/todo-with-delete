import React, { PureComponent } from 'react';
import TodoItem from './TodoItem'

class TodoList extends PureComponent {
    todoId = 1
    render() {
        const todoList = this.props.todoList.map((todo) => {
            return (< TodoItem key={todo.todoId} handleDelete={() => { this.props.handleDelete(todo.todoId) }} todo={todo} />)
        })
        return (
            <section className="TodoList_section">
                {todoList}
            </section>
        )
    }

}

export default TodoList;