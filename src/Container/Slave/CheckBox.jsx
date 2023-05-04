import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const checkboxKey = "myCheckbox";

const CheckBox = ({ check }) => {
    const [checked, setChecked] = React.useState(
      localStorage.getItem(`checkbox-${check}`) === "true"
    );

    const handleCheck = (event) => {
      const newChecked = event.target.checked;
      setChecked(newChecked);
      localStorage.setItem(`checkbox-${check}`, newChecked);

      // PUT request to update the completed status of the task in the API
      fetch(`https://my-json-server.typicode.com/AngeloDima/TodoList-React/task/${check}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: newChecked
        }),
      })
        .then((response) => {
          console.log("PUT response status:", response.status);
        })
        .catch((error) => console.error(error));
    };

    return (
      <div>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          checked={checked}
          onChange={handleCheck}
        />
      </div>
    );
};

export default CheckBox;


