import React, { useState, useEffect } from "react";
import ListActivity from "../Slave/ListActivity";
import AddTask from "../Slave/AddTask";
import RemoveAll from "../Slave/RemoveAll";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const removeItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const addTask = (newTask) => {
    const task = { id: uuidv4(), name: newTask, completed: false };
    setData([...data, task]);
  };



  fetch('https://my-json-server.typicode.com/AngeloDima/TodoList-React')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error));


  const removeAll = () => {
    setData([]);
  };

  return (
    <div>
      <ListActivity data={data} onRemove={removeItem} />
      <AddTask onAddTask={addTask} data={data} />
      <RemoveAll destroyData={removeAll} />
    </div>
  );
}

export default App;
