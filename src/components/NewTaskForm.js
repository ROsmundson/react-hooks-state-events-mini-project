import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code")
  }

  return (
    // update the <form> to be controlled so all inputs are captured in state.
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          value={text}
          onChange={(event) => setText(event.target.value)}
          />
      </label>
      <label>
        Category
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((category) => {
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      {/* when form is submitted, add new task using the text and category from the form. Use callback prop `onTaskFormSubmit` */}
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
