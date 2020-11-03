import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super();
    this.state = {
      text: "",
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.trim()) {
      this.props.handleSubmit(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {/*With this we can use the "enter key" to submit the text input*/}
          <input
            name="text"
            placeholder="Enter a task"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button onClick={this.handleSubmit}>Add a task</button>

          {/*We tied this button to the same handleSubmit function so now it does the same thing as the enter key, this is code reusability*/}
        </form>
      </>
    );
  }
}

export default AddTodo;
