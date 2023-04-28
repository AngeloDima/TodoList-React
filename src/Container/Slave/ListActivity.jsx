import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


export default function CheckboxList({ activityList }) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {activityList.map((item) => {
        const labelId = `checkbox-list-label-${item.id}`;

        return (
          <ListItem
            key={item.id}

          >
            <ListItemButton role={undefined} onClick={handleToggle(item.id)} dense  >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(item.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
