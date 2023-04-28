import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ListActivity = (props) => {
  const handleToggle = (id) => {
    const updatedActivityList = props.activityList.map((activity) => {
      if (activity.id === id) {
        return { ...activity, completed: !activity.completed };
      }
      return activity;
    });
    props.onToggleActivity(updatedActivityList);
  };

  const handleDelete = (id) => {
    const updatedActivityList = props.activityList.filter((activity) => activity.id !== id);
    props.onDeleteActivity(updatedActivityList);
  };

  return (
    <List>
      {props.activityList.map((activity) => (
        <ListItem key={activity.id}>
          <ListItemButton onClick={() => handleToggle(activity.id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={activity.completed}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={activity.name} />
          </ListItemButton>
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(activity.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListActivity;
