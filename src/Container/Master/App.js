import ListActivity from '../Slave/ListActivity';
import React, { useState, useEffect } from 'react'

function App() {

  const [activity, setActivity] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((activity) => setActivity(activity.slice(0, 5)))
      .catch((error) => console.log(error))
  }, [])

  console.log(activity)

  return (
    <div className="App">
      <ListActivity activityList={activity} />
    </div>
  );
}

export default App;
