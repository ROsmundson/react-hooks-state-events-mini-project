import React from "react";

function Task({ text, category, onDeleteTask }) {
  function handleRemoveTask() {
    onDeleteTask(text)
  }
  return (
    <div className="task">
      {/* update component so it shows {text} & {category} */}
      <div className="label">{ category }</div>
      <div className="text">{ text }</div>
      {/* onClick remove task from list */}
      <button className="delete" onClick={handleRemoveTask}>X</button>
    </div>
  );
}

export default Task;
