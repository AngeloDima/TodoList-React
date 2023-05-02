import React, { useState, useEffect } from "react";
import ListActivity from "../Slave/ListActivity";
import AddTask from "../Slave/AddTask";
import RemoveAll from "../Slave/RemoveAll";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';

function App() {
  const [data, setData] = useState(getLocalData());

  const removeItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const addTask = (newTask) => {
    const task = { id: uuidv4(), name: newTask, completed: false };
    setData([...data, task]);
  };

  useEffect(() => {
    saveData(data);
  }, [data]);

  function saveData(data) {
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getLocalData() {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  }

  const removeAll = () => {
    setData([]);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/AngeloDima/TodoList-React')
      .then(response => response.json())
      .then(json => console.log(json))
  });

  return (
    <div>
      <ListActivity data={data} onRemove={removeItem} />
      <AddTask onAddTask={addTask} data={data} />
      <RemoveAll destroyData={removeAll} />
    </div>
  );
}

export default App;
