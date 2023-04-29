import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function ValidationTextFields(props) {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(false);

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
    setError(false);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      setError(true);
    } else {
      props.onAddTask(newTask);
      setNewTask("");
      setError(false);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={11} md={10}>
      <Box
        component="form"
        sx={{
          width: '80%', // Imposta la larghezza del Box a 90% della larghezza del parent
          '& > :not(style)': { m: 1, width: '100%' }, // Imposta la larghezza dei figli a 100%
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Nuova Task"
          variant="standard"
          value={newTask}
          onChange={handleTaskChange}
          error={error}
          helperText={error ? "Non puoi lasciare il campo vuoto" : ""}
        />
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={handleAddTask}
                   sx={{
                    margin: 'auto'
                    }} 
          >
            Aggiungi
          </Button>
        </Stack>
      </Box>

      </Grid>
    </Grid>
  );
}
