import React, { Component } from 'react';
import { IconDelete } from '../SVG/Icons.js';


class TodoItem extends Component {



    render() {


        return (
            <div className="TodoItem_item"> {this.props.todo.text}

                <button className="Delete_button" onClick={this.props.handleDelete}>
                    <IconDelete height='24px' width='24px' />
                </button>
            </div>
        )
    }
}

export default TodoItem;