import React, { useState, useEffect } from "react";
import ListActivity from "../Slave/ListActivity";
import AddTask from "../Slave/AddTask";
import RemoveAll from "../Slave/RemoveAll";
import { v4 as uuidv4 } from "uuid";

function App() {
  // ARRAY
  const [data, setData] = useState([]);

  // RIMUOVERE TASK
const removeItem = (id) => {
  const updatedData = data.filter((item) => item.id !== id);
  setData(updatedData);

  // DELETE request to remove data from API
  fetch(`https://my-json-server.typicode.com/AngeloDima/TodoList-React/task/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      console.log("DELETE response status:", response.status);
    })
    .catch((error) => console.error(error));
};

// CREARE TASK
const addTask = (newTask) => {
  const task = { id: uuidv4(), name: newTask, completed: false };
  setData([...data, task]);

  // POST request to save data to API
  fetch("https://my-json-server.typicode.com/AngeloDima/TodoList-React/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((response) => {
      console.log("POST response status:", response.status);
    })
    .catch((error) => console.error(error));
};

// CARICARE I DATI DALLA API
useEffect(() => {
  fetch("https://my-json-server.typicode.com/AngeloDima/TodoList-React/task")
    .then((response) => {
      console.log("GET response status:", response.status);
      return response.json();
    })
    .then((data) => {
      console.log("GET response data:", data);
      setData(data);
    })
    .catch((error) => console.error(error));
}, []);

// ELIMINARE TUTTI I DATI
const removeAll = () => {
  setData([]);

  // DELETE request to remove all data from API
  fetch("https://my-json-server.typicode.com/AngeloDima/TodoList-React/task", {
    method: "DELETE",
  })
    .then((response) => {
      console.log("DELETE response status:", response.status);
    })
    .catch((error) => console.error(error));
};


useEffect(() => {
  console.log(data)
})

  return (
    <div>
      <ListActivity data={data} onRemove={removeItem} />
      <AddTask onAddTask={addTask} data={data} />
      <RemoveAll destroyData={removeAll} />
    </div>
  );
}

export default App;


