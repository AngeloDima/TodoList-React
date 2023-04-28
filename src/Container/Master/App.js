import ListActivity from '../Slave/ListActivity';
import React, { useState } from 'react'

function App() {

  const [data, setData] = useState([
    {id: 1, name: "Angelo", completed: false},
    {id: 2, name: "Angelo", completed: false},
    {id: 3, name: "Angelo", completed: false}
  ]);

  const removeItem = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  }

  return (
    <div className="App">
      <ListActivity data={data} onRemove={removeItem} />
    </div>
  );
}

export default App;
