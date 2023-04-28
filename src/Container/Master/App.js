import React, { useState } from "react";
import ListActivity from "../Slave/ListActivity";
import AddTask from "../Slave/AddTask";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Attività 1", completed: false },
    { id: 2, name: "Attività 2", completed: false },
    { id: 3, name: "Attività 3", completed: false }
  ]);

  const removeItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const addTask = (newTask) => {
    const task = { id: data.length + 1, name: newTask, completed: false };
    setData([...data, task]);
  };

  return (
    <div>
      <ListActivity data={data} onRemove={removeItem} />
      <AddTask onAddTask={addTask} data={data} />
    </div>
  );
}

export default App;
