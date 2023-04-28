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
      setChecked(event.target.checked);
      localStorage.setItem(`checkbox-${check}`, event.target.checked);
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
  

export default CheckBox



