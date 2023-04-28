import React, { useState } from 'react';
import ListActivity from '../Slave/ListActivity';
function App() {
  const [activityList, setActivityList] = useState([
    { id: 1, name: 'Activity 1', completed: false },
    { id: 2, name: 'Activity 2', completed: true },
    { id: 3, name: 'Activity 3', completed: false },
  ]);

  const handleToggleActivity = (updatedActivityList) => {
    setActivityList(updatedActivityList);
  };

  const handleDeleteActivity = (updatedActivityList) => {
    setActivityList(updatedActivityList);
  };

  return (
    <div className="App">
      <ListActivity
        activityList={activityList}
        onToggleActivity={handleToggleActivity}
        onDeleteActivity={handleDeleteActivity}
      />
    </div>
  );
}

export default App;
