import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const ListActivity = (props) => {
  const [checkedList, setCheckedList] = React.useState(props.activityList.map(() => false));

  const handleChange = (event, index) => {
    const newCheckedList = [...checkedList];
    newCheckedList[index] = event.target.checked;
    setCheckedList(newCheckedList);
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
    </div>
  );
};

export default ListActivity;
