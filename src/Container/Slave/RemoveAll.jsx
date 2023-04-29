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
        <Box sx={{ width: '100%' }}>
          <Stack sx={{ width: '90%' }}>
            <Button
              variant="contained"
              onClick={Bye}
              sx={{ backgroundColor: 'red', color: 'white' }}
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
