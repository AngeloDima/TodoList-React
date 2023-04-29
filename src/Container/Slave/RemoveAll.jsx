import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";


const RemoveAll = ({ destroyData }) => {
  const Bye = () => {
    destroyData();
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={11} md={10}>
        <Box sx={{ width: '80%' }}>
          <Stack sx={{ width: '95%' }}>
          <Button id="abso"
              variant="contained"
              onClick={Bye}
              sx={{
                backgroundColor: 'red',
                color: 'white',
                margin: '10px 10px',
                justifyContent: 'center',
                width: '100%' // Aggiunto per avere la stessa larghezza del bottone nell'altro componente
              }}
              >
              Cancella tutto
            </Button>

          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RemoveAll;


