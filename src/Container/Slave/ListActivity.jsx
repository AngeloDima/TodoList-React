import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const ListActivity = (props) => {
  const [checkedList, setCheckedList] = React.useState(props.activityList.map(() => false));
  const [selectedList, setSelectedList] = React.useState([]);

  const handleChange = (event, index) => {
    const newCheckedList = [...checkedList];
    newCheckedList[index] = event.target.checked;
    setCheckedList(newCheckedList);

    if (event.target.checked) {
      const newSelectedList = [...selectedList, props.activityList[index]];
      setSelectedList(newSelectedList);
    } else {
      const newSelectedList = selectedList.filter((item) => item.id !== props.activityList[index].id);
      setSelectedList(newSelectedList);
    }
  };

  return (
    <div>
      <ul>
        {props.activityList.map((activity, index) => (
          <li key={activity.id}>
            {activity.title}

            <Checkbox
              checked={checkedList[index]}
              onChange={(event) => handleChange(event, index)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </li>
        ))}
      </ul>

        

      <h2>Selected activities:</h2>
      <ul>
        {selectedList.map((activity) => (
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </ul>


      
    </div>
  );
};

export default ListActivity;
