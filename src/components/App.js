import React, { useState }from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
// 

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  
  //filter to show "All" categories or the tasks from  category.
  const displayedTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )

  function handleDeleteTasks(deletedTask) {
    setTasks(tasks.filter((task) => task.text !== deletedTask))
  }

  function handleAddTasks(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* pass { categories } to CategoryFilter */}
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectedCategory={setCategory}
      />

      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTasks}/>
      {/* pass { tasks } to TaskList */}
      <TaskList tasks={displayedTasks} onDeleteTask={handleDeleteTasks}/>
    </div>
  );
}

export default App;
