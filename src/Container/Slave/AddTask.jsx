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
    <Box sx={{ width: "95%" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={10}>
          <TextField
            sx={{
              width: "100%",
              marginBottom: '20px'
            }}
            id="standard-basic"
            label="Nuova Task"
            variant="standard"
            value={newTask}
            onChange={handleTaskChange}
            error={error}
            helperText={error ? "Non puoi lasciare il campo vuoto" : ""}
          />

          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              onClick={handleAddTask}
              sx={{
                width: "100%",
                marginBottom: '5px'
              }}
            >
              Aggiungi
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}







