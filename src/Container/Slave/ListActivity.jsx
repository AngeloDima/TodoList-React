import React from 'react'
import Checkbox from '@mui/material/Checkbox';
const ListActivity = (props) => {

  const activityList = props.activityList;

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <ul>
        {activityList.map((activity) => (
          <li key={activity.id}>
            {activity.title}

            <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListActivity
