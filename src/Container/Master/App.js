import React, { useState, useEffect } from "react";
import ListActivity from "../Slave/ListActivity";
import AddTask from "../Slave/AddTask";
import RemoveAll from "../Slave/RemoveAll";
import { v4 as uuidv4 } from "uuid";

function App() {
  // ARRAY
  const [data, setData] = useState([]);

  // Funzione per rimuovere un task
  const removeItem = (id) => {
    // Aggiorniamo l'array di task, rimuovendo l'elemento con l'id specificato
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);

    // Effettuiamo una richiesta di tipo DELETE per eliminare il task anche dalla API
    fetch(
      `https://my-json-server.typicode.com/AngeloDima/TodoList-React/task/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        console.log("DELETE response status:", response.status);
      })
      .catch((error) => console.error(error));
  };




  


  // Carichiamo i dati dalla API al caricamento dell'applicazione (utilizzando useEffect)
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

  // Funzione per eliminare tutti i task
  const removeAll = () => {
    setData([]);

    // Effettuiamo una richiesta di tipo DELETE per eliminare tutti i task anche dalla API
    fetch(
      "https://my-json-server.typicode.com/AngeloDima/TodoList-React/task",
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        console.log("DELETE response status:", response.status);
      })
      .catch((error) => console.error(error));
  };

  // Utilizziamo un useEffect per loggare l'array di task ogni volta che viene modificato
  useEffect(() => {
    console.log(data);
  });













    // Funzione per aggiungere un nuovo task
    const addTask = (newTask) => {
      // Creiamo un nuovo oggetto task con un id univoco generato tramite la libreria uuid, il nome del task passato come parametro e il flag "completed" inizialmente impostato a false
      const task = { id: uuidv4(), name: newTask, completed: false };
      setData([...data, task]);
  
      // Effettuiamo una richiesta di tipo POST per salvare il nuovo task anche nella API
      fetch(
        "https://my-json-server.typicode.com/AngeloDima/TodoList-React/task",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        }
      )
        .then((response) => {
          console.log("POST response status:", response.status);
        })
        .catch((error) => console.error(error));
    };
  return (
    <div>
      <ListActivity data={data} onRemove={removeItem} completed={false} />
      <AddTask onAddTask={addTask} data={data} />
      <RemoveAll destroyData={removeAll} />
    </div>
  );
}

export default App;


