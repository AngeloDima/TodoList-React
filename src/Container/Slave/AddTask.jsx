import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicTextFields(props) {


  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    props.onAddTask(newTask);
    setNewTask("");
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Standard" variant="standard" value={newTask} onChange={handleTaskChange} />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={handleAddTask}>Outlined</Button>
      </Stack>
    </Box>
  );
}