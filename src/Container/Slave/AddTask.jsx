import React, { useState } from "react";

const AddTask = (props) => {
  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    props.onAddTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={handleTaskChange} />
      <button onClick={handleAddTask}>Aggiungi Attività</button>
    </div>
  );
};

export default AddTask;
