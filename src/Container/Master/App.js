import React, { useState, useEffect } from "react";
import ListActivity from "../Slave/ListActivity";
import AddTask from "../Slave/AddTask";
import RemoveAll from "../Slave/RemoveAll";
import { v4 as uuidv4 } from 'uuid';



function App() {
  // ARRAY
  const [data, setData] = useState(getLocalData());

  // RIMUOVERE TASK
  const removeItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // CREARE TASK
  const addTask = (newTask) => {
    const task = { id: uuidv4(), name: newTask, completed: false };
    setData([...data, task]);
  };

  // SALVARE I DATI
  useEffect(() => {
    saveDataLocally(data);
  }, [data]);

  function saveDataLocally(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  function getLocalData() {
    const data = localStorage.getItem('data');
    return data ? JSON.parse(data) : [
      { id: uuidv4(), name: "Attività 1", completed: false },
      { id: uuidv4(), name: "Attività 2", completed: false },
      { id: uuidv4(), name: "Attività 3", completed: false }
    ];
  }

  // ELIMINARE TUTTI I DATI
  const removeAll = () => {
    setData([]);
  }

  return (
    <div>
      <ListActivity data={data} onRemove={removeItem} />
        <AddTask onAddTask={addTask} data={data} />
        <RemoveAll destroyData={removeAll} />
    </div>
  );
}

export default App;
