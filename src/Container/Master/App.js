import React, { useState, useEffect } from "react";
import ListActivity from "../Slave/ListActivity";
import AddTask from "../Slave/AddTask";
import RemoveAll from "../Slave/RemoveAll";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';

function App() {
  // ARRAY
  const [data, setData] = useState([]);

  console.log(data)


  const removeItem = (id) => {
    axios
      .delete(`https://my-json-server.typicode.com/AngeloDima/TodoList-React/task/${id}`)
      .then(() => {
        setData((prevData) => {
          const updatedData = prevData.filter((item) => item.id !== id);
          return updatedData;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  

  // CREARE TASK
  const addTask = (newTask) => {
    const task = { id: uuidv4(), name: newTask, completed: false };
    axios.post('https://my-json-server.typicode.com/AngeloDima/TodoList-React/task', task)
      .then(response => {
        setData([...data, response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  // OTTENERE I DATI
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/AngeloDima/TodoList-React/task')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // ELIMINARE TUTTI I DATI
  const removeAll = () => {
    axios.delete('https://my-json-server.typicode.com/AngeloDima/TodoList-React/task')
      .then(() => {
        setData([]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <ListActivity data={data} onRemove={removeItem} />
      <AddTask onAddTask={addTask} />
      <RemoveAll destroyData={removeAll} />
    </div>
  );
}

export default App;






