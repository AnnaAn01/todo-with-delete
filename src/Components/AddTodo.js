import React, { useState } from "react";

function AddTodo(props) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if (text.trim()) {
      props.handleSubmitAddTodo(text);
      setText("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitAddTodo}>
        {/*With this we can use the "enter key" to submit the text input*/}
        <input
          name="text"
          placeholder="Enter a task"
          onChange={handleChange}
          value={text}
        />
        <button onClick={handleSubmitAddTodo}>Add a task</button>
        {/*We tied this button to the same handleSubmit function so now it does the same thing as the enter key, this is code reusability*/}
      </form>
    </>
  );
}

export default AddTodo;
